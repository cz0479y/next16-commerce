'use client';

import { useState } from 'react';
import type { ReactNode } from 'react';

export function BannerContainer({ children }: { children: ReactNode }) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="dark:bg-card-dark bg-card border-divider dark:border-divider-dark rounded-lg border p-4">
      <div className="flex items-start justify-between">
        <div className="flex-1">{children}</div>
        <button
          onClick={() => {
            return setDismissed(true);
          }}
          className="text-primary hover:text-primary-dark ml-4 text-sm transition-colors"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
