import { NextResponse } from 'next/server';

export async function GET() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  
  if (!clientId) {
    return NextResponse.json({ error: 'Missing GOOGLE_CLIENT_ID' }, { status: 500 });
  }

  // Generate random state for CSRF protection
  const state = Math.random().toString(36).substring(7);
  
  // Build the Google OAuth URL
  const redirectUri = `${baseUrl}/api/auth/callback`;
  const scope = 'https://www.googleapis.com/auth/gmail.readonly';
  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${encodeURIComponent(scope)}&access_type=offline&prompt=consent&state=${state}`;

  // Redirect to Google OAuth consent screen
  const response = NextResponse.redirect(authUrl);
  // Set state in a cookie for verification in callback
  response.cookies.set('oauth_state', state, { httpOnly: true, sameSite: 'lax', path: '/' });
  
  return response;
}
