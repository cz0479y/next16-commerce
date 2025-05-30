import React from 'react';

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-divider dark:border-divider-dark dark:bg-card-dark rounded-lg border bg-white p-6 shadow-sm">
      {children}
    </div>
  );
}
