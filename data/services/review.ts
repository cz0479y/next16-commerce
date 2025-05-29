import 'server-only';

import { prisma } from '@/db';
import { Review } from '@prisma/client';

export async function getReviews(productId: number): Promise<Review[]> {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return prisma.review.findMany({
    where: { productId },
    orderBy: { createdAt: 'desc' },
  });
}
