import React from 'react';
import { CategoryFiltersSkeleton } from '@/features/category/components/CategoryFilters';
import { ProductListSkeleton } from '@/features/product/components/ProductList';

export default function loading() {
  return (
    <>
      {/* WelcomeBanner skeleton */}
      <div className="mb-6 h-16 w-full rounded bg-gray-200 dark:bg-gray-700" />

      {/* Search skeleton */}
      <div className="mb-6 h-12 w-full rounded bg-gray-200 dark:bg-gray-700" />

      {/* Main content wrapper */}
      <div className="flex h-full grow gap-12">
        {/* Desktop sidebar */}
        <div className="hidden w-64 flex-shrink-0 md:block">
          <div className="sticky top-4">
            <h3 className="mb-4 text-lg font-bold tracking-tight uppercase">Categories</h3>
            <CategoryFiltersSkeleton />
          </div>
        </div>

        {/* Main content area */}
        <div className="flex flex-1 flex-col gap-6">
          {/* Mobile categories and sort */}
          <div className="flex flex-col gap-4 md:hidden">
            <CategoryFiltersSkeleton />
            <div className="flex justify-end">
              <div className="h-6 w-20 rounded bg-gray-200 dark:bg-gray-700" />
            </div>
          </div>

          {/* Desktop sort */}
          <div className="hidden justify-end md:flex">
            <div className="h-6 w-20 rounded bg-gray-200 dark:bg-gray-700" />
          </div>

          {/* Product list */}
          <ProductListSkeleton />
        </div>
      </div>
    </>
  );
}
