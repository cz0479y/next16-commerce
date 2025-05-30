'use client';

import Form from 'next/form';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import SearchStatus from './ui/SearchStatus';

export default function Search() {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';
  const router = useRouter();

  return (
    <>
      <Form className="relative" action="">
        <input
          className="border-gray focus:outline-primary relative w-full rounded border px-4 py-2 pl-9 outline-offset-2 focus:outline-2"
          name="q"
          onChange={e => {
            if (e.target.value === '') {
              router.push('?q=');
            }
          }}
          defaultValue={q}
          type="search"
          placeholder={'Search products...'}
        />
        <div className="absolute top-3 left-3">
          <SearchStatus />
        </div>
      </Form>
    </>
  );
}
