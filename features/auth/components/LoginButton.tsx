'use client';

import { useRouter } from 'next/navigation';
import React, { use, useTransition } from 'react';
import { useAuth } from '@/features/auth/components/AuthProvider';
import { logOut } from '../auth-actions';

export default function LoginButton() {
  const [isPending, startTransition] = useTransition();
  const { loggedIn } = useAuth();
  const isAuth = use(loggedIn);
  const router = useRouter();

  return (
    <button
      aria-disabled={isPending}
      className="text-primary hover:text-primary-dark aria-disabled:text-gray cursor-pointer text-sm transition-colors aria-disabled:cursor-not-allowed aria-disabled:italic"
      onClick={() => {
        if (isAuth) {
          startTransition(async () => {
            await logOut();
          });
        } else {
          router.push('/sign-in');
        }
      }}
    >
      {isAuth ? 'Sign out' : 'Sign in'} {isPending && '...'}
    </button>
  );
}
