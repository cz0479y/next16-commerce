import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const PRODUCTS = [
  {
    id: 1,
    name: 'Wireless Headphones',
    description: 'High-quality noise cancelling headphones with 20 hours battery life',
    price: 199.99,
  },
  {
    id: 2,
    name: 'Smart Watch',
    description: 'Fitness tracker with heart rate monitor and sleep tracking',
    price: 149.95,
  },
  {
    id: 3,
    name: 'Portable Speaker',
    description: 'Waterproof Bluetooth speaker with 360-degree sound',
    price: 79.99,
  },
];

const REVIEWS = [
  {
    productId: 1, // Wireless Headphones
    rating: 5,
    comment: 'Best headphones I have ever owned. The noise cancellation is amazing!',
  },
  {
    productId: 1, // Wireless Headphones
    rating: 4,
    comment: 'Great sound quality but a bit uncomfortable after long use.',
  },
  {
    productId: 2, // Smart Watch
    rating: 5,
    comment: 'Perfect fitness companion, battery lasts for days!',
  },
  {
    productId: 3, // Portable Speaker
    rating: 3,
    comment: 'Good sound but not as loud as I expected.',
  },
];

async function seed() {
  await Promise.all(
    PRODUCTS.map(product => {
      return prisma.product.create({
        data: {
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
        },
      });
    }),
  )
    .then(() => {
      console.info('[SEED] Successfully created product records');
    })
    .catch(e => {
      console.error('[SEED] Failed to create product records', e);
    });

  await Promise.all(
    REVIEWS.map(review => {
      return prisma.review.create({
        data: {
          productId: review.productId,
          rating: review.rating,
          comment: review.comment,
        },
      });
    }),
  )
    .then(() => {
      console.info('[SEED] Successfully created review records');
    })
    .catch(e => {
      console.error('[SEED] Failed to create review records', e);
    });
}

seed();
