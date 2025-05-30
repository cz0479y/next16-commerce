import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const PRODUCTS = [
  {
    description: 'High-quality noise cancelling headphones with 20 hours battery life',
    id: 1,
    name: 'Wireless Headphones',
    price: 199.99,
  },
  {
    description: 'Fitness tracker with heart rate monitor and sleep tracking',
    id: 2,
    name: 'Smart Watch',
    price: 149.95,
  },
  {
    description: 'Waterproof Bluetooth speaker with 360-degree sound',
    id: 3,
    name: 'Portable Speaker',
    price: 79.99,
  },
];

const REVIEWS = [
  {
    comment: 'Best headphones I have ever owned. The noise cancellation is amazing!',
    productId: 1,
    rating: 5,
  },
  {
    comment: 'Great sound quality but a bit uncomfortable after long use.',
    productId: 1,
    rating: 4,
  },
  {
    comment: 'Perfect fitness companion, battery lasts for days!',
    productId: 2,
    rating: 5,
  },
  {
    comment: 'Good sound but not as loud as I expected.',
    productId: 3,
    rating: 3,
  },
];

const PRODUCT_DETAILS = [
  {
    brand: 'SoundMaster',
    dimensions: '7.5 x 6.5 x 3.2 inches',
    materials: 'Memory foam, aluminum, plastic',
    origin: 'Japan',
    productId: 1,
    sku: 'WH-NC100',
    stockCount: 45,
    warrantyInfo: '2 year limited warranty',
    weight: 0.25,
  },
  {
    brand: 'TechFit',
    dimensions: '1.6 x 1.6 x 0.5 inches',
    materials: 'Silicone, aluminum, glass',
    origin: 'China',
    productId: 2,
    sku: 'SW-FIT200',
    stockCount: 32,
    warrantyInfo: '1 year limited warranty',
    weight: 0.05,
  },
  {
    brand: 'AudioPro',
    dimensions: '5.5 x 5.5 x 8.2 inches',
    materials: 'Rubber, fabric, plastic',
    origin: 'Taiwan',
    productId: 3,
    sku: 'PS-BT300',
    stockCount: 78,
    warrantyInfo: '1 year limited warranty',
    weight: 0.6,
  },
];

async function seed() {
  await Promise.all(
    PRODUCTS.map(product => {
      return prisma.product.create({
        data: {
          description: product.description,
          id: product.id,
          name: product.name,
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
          comment: review.comment,
          productId: review.productId,
          rating: review.rating,
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

  await Promise.all(
    PRODUCT_DETAILS.map(detail => {
      return prisma.productDetail.create({
        data: {
          brand: detail.brand,
          dimensions: detail.dimensions,
          materials: detail.materials,
          origin: detail.origin,
          productId: detail.productId,
          sku: detail.sku,
          stockCount: detail.stockCount,
          warrantyInfo: detail.warrantyInfo,
          weight: detail.weight,
        },
      });
    }),
  )
    .then(() => {
      console.info('[SEED] Successfully created product details records');
    })
    .catch(e => {
      console.error('[SEED] Failed to create product details records', e);
    });
}

seed();
