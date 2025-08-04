'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';
import { getIsAuthenticated } from './auth-queries';

export async function switchAccount(accountId: string) {
  (await cookies()).set('selectedAccountId', accountId);
}

export async function logOut() {
  await slow();

  (await cookies()).delete('selectedAccountId');

  redirect('/');
}

export async function logIn(
  email: string,
  options?: {
    redirect: string;
  },
) {
  await slow();

  const account = await prisma.account.findFirst({
    where: {
      email: email,
    },
  });

  if (!account) {
    return {
      error: 'No account found with this email address.',
    };
  }

  (await cookies()).set('selectedAccountId', account?.id);
  if (options?.redirect) {
    redirect(options.redirect);
  }
}

export async function signUp() {
  await logIn('jane.smith@gmail.com', {
    redirect: '/',
  });
}

export async function SignUpORedirect() {
  const isAuthenticated = await getIsAuthenticated();

  if (isAuthenticated) {
    redirect('/');
  } else {
    redirect('/user/sign-up');
  }
}
