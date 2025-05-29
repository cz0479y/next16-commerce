import Modal from '@/components/Modal';
import Product from '@/components/Product';
import Skeleton from '@/components/ui/Skeleton';
import React, { Suspense } from 'react';

type Props = {
  params: Promise<{
    id: number;
  }>;
};

export default async function ProductModal({ params }: Props) {
  const { id } = await params;
  const productId = Number(id);

  return (
    <Modal goBackOnClose openModal={true}>
      <Suspense fallback={<Skeleton />}>
        <Product productId={productId} />
      </Suspense>
    </Modal>
  );
}
