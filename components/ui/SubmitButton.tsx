'use client';

import { Loader2 } from 'lucide-react';
import React from 'react';
import { useFormStatus } from 'react-dom';
import { cn } from '@/utils/cn';

type Props = {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
};

export default function SubmitButton({
  children,
  loading,
  type = 'submit',
  className,
  disabled,
  ...otherProps
}: Props & React.HTMLProps<HTMLButtonElement>) {
  const { pending } = useFormStatus();
  const isSubmitting = loading || pending;

  return (
    <button
      disabled={isSubmitting || disabled}
      type={type}
      className={cn(
        'bg-primary hover:bg-primary/90 focus:ring-primary inline-flex items-center justify-center rounded-lg px-6 py-3 font-medium text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-400 disabled:opacity-50',
        className,
      )}
      {...otherProps}
    >
      {isSubmitting ? (
        <div className="flex items-center justify-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          {children}
        </div>
      ) : (
        children
      )}
    </button>
  );
}
