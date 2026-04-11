import { NextRequest, NextResponse } from 'next/server';
import { fetchSubscriptions } from '@/lib/gmail';

export async function GET(request: NextRequest) {
  const accessToken = request.cookies.get('access_token')?.value;

  if (!accessToken) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }

  try {
    const subscriptions = await fetchSubscriptions(accessToken);
    return NextResponse.json(subscriptions);
  } catch (error) {
    console.error('Failed to fetch subscriptions:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to fetch subscriptions', details: message },
      { status: 500 }
    );
  }
}
