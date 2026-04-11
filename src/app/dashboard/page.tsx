'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import SubscriptionItem from '@/components/SubscriptionItem';

interface Subscription {
  senderEmail: string;
  senderName: string;
  count: number;
  unsubscribeLink?: string;
  unsubscribeMailto?: string;
}

export default function DashboardPage() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchSubscriptions() {
      try {
        const response = await fetch('/api/subscriptions');
        if (response.status === 401) {
          setError('Not authenticated. Please login again.');
          return;
        }
        if (!response.ok) {
          throw new Error('Failed to fetch subscriptions');
        }
        const data = await response.json();
        setSubscriptions(data);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Something went wrong';
        setError(message);
      } finally {
        setLoading(false);
      }
    }
    fetchSubscriptions();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-4">Error</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <Link
            href="/"
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Newsletter Subscriptions</h1>
        {subscriptions.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <p className="text-gray-600">No newsletter subscriptions found in your recent 50 emails.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {subscriptions.map((sub) => (
              <SubscriptionItem
                key={sub.senderEmail}
                senderName={sub.senderName}
                senderEmail={sub.senderEmail}
                count={sub.count}
                unsubscribeLink={sub.unsubscribeLink}
                unsubscribeMailto={sub.unsubscribeMailto}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
