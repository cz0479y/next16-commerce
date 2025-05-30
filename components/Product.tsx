import React from 'react';
import { getProduct } from '@/data/services/product';

type Props = {
  productId: number;
};

export default async function Product({ productId }: Props) {
  const product = await getProduct(productId);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
}
