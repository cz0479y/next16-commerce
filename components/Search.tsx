'use client';

import Form from 'next/form';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useTransition } from 'react';
import SearchStatus from './ui/SearchStatus';

export default function Search() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <Form action="">
        <input
          name="search"
          defaultValue={q}
          onChange={e => {
            startTransition(() => {
              router.push('?q=' + e.target.value);
            });
          }}
          placeholder={'Search products...'}
        />
      </Form>
      <SearchStatus searching={isPending} />
    </>
  );
}
