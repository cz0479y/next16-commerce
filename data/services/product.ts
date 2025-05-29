import 'server-only';

import { prisma } from '@/db';
import { cacheLife } from 'next/dist/server/use-cache/cache-life';
import { notFound } from 'next/navigation';

export async function getProduct(productId: number) {
  'use cache';
  cacheLife('hours');

  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Fetching product from database:', productId);

  const product = await prisma.product.findUnique({
    where: { id: productId },
  });
  if (!product) {
    notFound();
  }
  return product;
}

export async function getProducts(searchQuery?: string) {
  'use cache';
  cacheLife('hours');

  await new Promise(resolve => setTimeout(resolve, 1000));

  return prisma.product.findMany({
    where: {
      name: {
        contains: searchQuery,
        // mode: 'insensitive', // Add for postgres
      },
    },
    orderBy: {
      name: 'asc',
    },
  });
}
