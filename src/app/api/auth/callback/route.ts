import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const error = searchParams.get('error');

  if (error) {
    return NextResponse.json({ error }, { status: 400 });
  }

  if (!code || !state) {
    return NextResponse.json({ error: 'Missing code or state' }, { status: 400 });
  }

  // Verify state matches cookie
  const cookieState = request.cookies.get('oauth_state')?.value;
  if (!cookieState || cookieState !== state) {
    return NextResponse.json({ error: 'Invalid state' }, { status: 400 });
  }

  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const redirectUri = `${baseUrl}/api/auth/callback`;

  if (!clientId || !clientSecret) {
    return NextResponse.json({ error: 'Missing OAuth credentials' }, { status: 500 });
  }

  // Exchange code for tokens
  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      code,
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirectUri,
      grant_type: 'authorization_code',
    }),
  });

  const tokens = await tokenResponse.json();

  if (!tokenResponse.ok) {
    return NextResponse.json({ error: 'Failed to exchange code', details: tokens }, { status: 500 });
  }

  // Store access token in a cookie (httpOnly for security)
  const response = NextResponse.redirect(`${baseUrl}/dashboard`);
  response.cookies.set('access_token', tokens.access_token, {
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
    maxAge: 3600, // 1 hour
  });

  // Clear the state cookie
  response.cookies.set('oauth_state', '', { expires: new Date(0), path: '/' });

  return response;
}
