import { Bookmark } from 'lucide-react';
import { Suspense } from 'react';
import Boundary from '@/components/internal/Boundary';

import Product from '@/features/product/components/Product';
import ProductDetails, {
  preloadProductDetails,
  ProductDetailsSkeleton,
  SavedProduct,
} from '@/features/product/components/ProductDetails';

export default async function ProductPage({ params }: PageProps<'/product/[id]'>) {
  const { id } = await params;
  const productId = Number(id);
  preloadProductDetails(productId);

  return (
    <Product
      productId={productId}
      details={
        <Suspense key={productId} fallback={<ProductDetailsSkeleton />}>
          <ProductDetails productId={productId}>
            <Suspense fallback={<Bookmark aria-hidden className="text-gray size-5" />}>
              <Boundary rendering="dynamic">
                <SavedProduct productId={productId} />
              </Boundary>
            </Suspense>
          </ProductDetails>
        </Suspense>
      }
    />
  );
}
