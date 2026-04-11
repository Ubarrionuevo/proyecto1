import { google } from 'googleapis';
import { extractUnsubscribeLinks } from './parser';

export interface Subscription {
  senderEmail: string;
  senderName: string;
  count: number;
  unsubscribeLink?: string;
  unsubscribeMailto?: string;
}

export async function fetchSubscriptions(accessToken: string): Promise<Subscription[]> {
  const auth = new google.auth.OAuth2();
  auth.setCredentials({ access_token: accessToken });

  const gmail = google.gmail({ version: 'v1', auth });

  // Fetch up to 50 message IDs
  const listResponse = await gmail.users.messages.list({
    userId: 'me',
    maxResults: 50,
  });

  const messages = listResponse.data.messages || [];
  if (messages.length === 0) return [];

  // Map to store sender info
  const senderMap = new Map<string, {
    senderEmail: string;
    senderName: string;
    count: number;
    unsubscribeLink?: string;
    unsubscribeMailto?: string;
  }>();

  for (const message of messages) {
    if (!message.id) continue;
    try {
      const msg = await gmail.users.messages.get({
        userId: 'me',
        id: message.id,
        format: 'metadata',
        metadataHeaders: ['From', 'List-Unsubscribe'],
      });

      const headers = msg.data.payload?.headers || [];
      let from = '';
      let listUnsubscribe = '';

      for (const header of headers) {
        if (header.name?.toLowerCase() === 'from') {
          from = header.value || '';
        } else if (header.name?.toLowerCase() === 'list-unsubscribe') {
          listUnsubscribe = header.value || '';
        }
      }

      if (!listUnsubscribe) continue; // Not a subscription email

      // Parse From header: "Name <email@example.com>" or just "email@example.com"
      let senderEmail = '';
      let senderName = '';
      const match = from.match(/<([^>]+)>/);
      if (match) {
        senderEmail = match[1];
        senderName = from.replace(/<[^>]+>/, '').trim().replace(/^"|"$/g, '');
      } else {
        senderEmail = from.trim();
        senderName = senderEmail.split('@')[0];
      }

      const unsubscribe = extractUnsubscribeLinks(listUnsubscribe);
      const key = senderEmail.toLowerCase();

      const existing = senderMap.get(key);
      if (existing) {
        existing.count++;
        // If we already have an unsubscribe link, keep it; otherwise set if new
        if (!existing.unsubscribeLink && unsubscribe.link) {
          existing.unsubscribeLink = unsubscribe.link;
        }
        if (!existing.unsubscribeMailto && unsubscribe.mailto) {
          existing.unsubscribeMailto = unsubscribe.mailto;
        }
      } else {
        senderMap.set(key, {
          senderEmail,
          senderName,
          count: 1,
          unsubscribeLink: unsubscribe.link,
          unsubscribeMailto: unsubscribe.mailto,
        });
      }
    } catch (error) {
      console.error(`Failed to fetch message ${message.id}:`, error);
      continue;
    }
  }

  // Convert map to array and sort by count descending
  return Array.from(senderMap.values()).sort((a, b) => b.count - a.count);
}
