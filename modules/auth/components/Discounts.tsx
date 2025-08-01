import { Percent } from 'lucide-react';

const MOCK_DISCOUNTS = [
  {
    code: 'WELCOME20',
    description: '20% off your first order',
    expiry: '2025-12-31',
    id: 1,
  },
  {
    code: 'LOYAL15',
    description: '15% off for loyal customers',
    expiry: '2025-09-30',
    id: 2,
  },
  {
    code: 'TECH10',
    description: '10% off electronics',
    expiry: '2025-08-15',
    id: 3,
  },
];

export default function Discounts() {
  return (
    <div className="space-y-4">
      {MOCK_DISCOUNTS.map(discount => {
        return (
          <div
            key={discount.id}
            className="border-divider dark:border-divider-dark flex items-center justify-between rounded-lg border p-4"
          >
            <div className="flex items-center gap-3">
              <Percent className="text-primary h-5 w-5" />
              <div>
                <p className="font-medium text-black dark:text-white">{discount.code}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{discount.description}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Expires: {new Date(discount.expiry).toLocaleDateString()}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function DiscountsSkeleton() {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, index) => {
        return (
          <div
            key={index}
            className="border-divider dark:border-divider-dark flex items-center justify-between rounded-lg border p-4"
          >
            <div className="flex items-center gap-3">
              <div className="h-5 w-5 rounded bg-gray-200 dark:bg-neutral-800" />
              <div>
                <div className="h-5 w-20 rounded bg-gray-200 dark:bg-neutral-800" />
                <div className="mt-1 h-4 w-32 rounded bg-gray-200 dark:bg-neutral-800" />
              </div>
            </div>
            <div className="h-3 w-16 rounded bg-gray-200 dark:bg-neutral-800" />
          </div>
        );
      })}
    </div>
  );
}
