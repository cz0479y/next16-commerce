import { ArrowUp, ArrowDown } from 'lucide-react';
import Link from 'next/link';
import React, { Suspense } from 'react';
import Search from '@/components/Search';
import { DiscountBanner } from '@/components/banner/Banner';
import LinkStatus from '@/components/ui/LinkStatus';
import ProductList, { ProductListSkeleton } from '@/modules/product/components/ProductList';

type Props = {
  searchParams: Promise<SearchParams>;
};

export type SearchParams = {
  page?: string;
  q: string;
  sort?: 'asc' | 'desc';
};

export default async function RootPage({ searchParams }: Props) {
  return (
    <>
      <DiscountBanner />
      <Search />
      <div className="flex h-full grow flex-col gap-4">
        <Suspense fallback={<SortButtonSkeleton />}>
          <SortButton searchParams={searchParams} />
        </Suspense>
        <Suspense fallback={<ProductListSkeleton />}>
          <ProductList searchParams={searchParams} />
        </Suspense>
      </div>
    </>
  );
}

async function SortButton({ searchParams }: { searchParams: Promise<SearchParams> }) {
  const { sort, q } = await searchParams;
  const nextSort = sort === 'asc' ? 'desc' : 'asc';

  const queryParams = {
    ...(q && { q }),
    sort: nextSort,
  };

  return (
    <Link
      href={{ pathname: '/', query: queryParams }}
      className="text-primary hover:text-primary-dark inline-flex items-center text-sm font-medium"
    >
      <LinkStatus>
        <div className="flex items-center gap-2">
          {nextSort === 'asc' ? <ArrowUp className="mr-1" /> : <ArrowDown className="mr-1" />}
          Sort {nextSort.charAt(0).toUpperCase() + nextSort.slice(1)}
        </div>
      </LinkStatus>
    </Link>
  );
}

function SortButtonSkeleton() {
  return <div className="h-10 w-24 rounded bg-gray-200 dark:bg-gray-700" />;
}
