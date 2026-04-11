export interface UnsubscribeResult {
  link?: string;
  mailto?: string;
}

/**
 * Extracts unsubscribe links from a List-Unsubscribe header.
 * Supports both <https://...> and <mailto:...> formats.
 */
export function extractUnsubscribeLinks(headerValue: string): UnsubscribeResult {
  const result: UnsubscribeResult = {};

  // Find all angle-bracketed values
  const matches = headerValue.match(/<([^>]+)>/g);
  if (!matches) return result;

  for (const match of matches) {
    const value = match.slice(1, -1); // Remove < and >
    if (value.startsWith('http://') || value.startsWith('https://')) {
      result.link = value;
    } else if (value.startsWith('mailto:')) {
      result.mailto = value;
    }
  }

  return result;
}
