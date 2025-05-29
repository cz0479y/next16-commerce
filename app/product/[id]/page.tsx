import Product from '@/components/Product';
import Reviews from '@/components/Reviews';
import Skeleton from '@/components/ui/Skeleton';
import Link from 'next/link';
import React, { Suspense } from 'react';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const productId = Number(id);

  return (
    <>
      <Link href="/">Back to Home</Link>
      <Suspense fallback={<Skeleton />}>
        <Product productId={productId} />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <Reviews productId={productId} />
      </Suspense>
    </>
  );
}
