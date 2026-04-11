import React from 'react';

interface SubscriptionItemProps {
  senderName: string;
  senderEmail: string;
  count: number;
  unsubscribeLink?: string;
  unsubscribeMailto?: string;
}

export default function SubscriptionItem({
  senderName,
  senderEmail,
  count,
  unsubscribeLink,
  unsubscribeMailto,
}: SubscriptionItemProps) {
  const handleClick = () => {
    if (unsubscribeLink) {
      window.open(unsubscribeLink, '_blank');
    } else if (unsubscribeMailto) {
      window.location.href = unsubscribeMailto;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex items-center justify-between">
      <div>
        <div className="font-medium text-gray-900">{senderName}</div>
        <div className="text-sm text-gray-500">{senderEmail}</div>
        <div className="text-xs text-gray-400 mt-1">{count} email{count !== 1 ? 's' : ''}</div>
      </div>
      <button
        onClick={handleClick}
        disabled={!unsubscribeLink && !unsubscribeMailto}
        className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Unsubscribe
      </button>
    </div>
  );
}
