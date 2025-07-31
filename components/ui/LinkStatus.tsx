'use client';

import { LoaderCircle } from 'lucide-react';
import { useLinkStatus } from 'next/link';
import React from 'react';
import { cn } from '@/utils/cn';

type Props = {
  className?: string;
  width?: number;
  height?: number;
};

export default function LinkStatus({ className, width = 20, height = 20 }: Props) {
  const { pending } = useLinkStatus();

  return (
    pending && (
      <>
        <div className={cn('text-gray h-fit w-fit animate-spin', className)}>
          <LoaderCircle aria-hidden="true" width={width} height={height} />
        </div>
      </>
    )
  );
}
