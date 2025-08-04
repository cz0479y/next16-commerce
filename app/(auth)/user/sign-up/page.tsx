import React from 'react';

import Card from '@/components/ui/Card';
import SubmitButton from '@/components/ui/SubmitButton';
import { signUp } from '@/modules/auth/auth-actions';
import { getIsAuthenticated } from '@/modules/auth/auth-queries';
import LoginButton from '@/modules/auth/components/LoginButton';

export default async function SignUpPage() {
  const isAuthenticated = await getIsAuthenticated();

  if (isAuthenticated) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold text-black dark:text-white">You are already signed in</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Please log out to create a new account.</p>
        <LoginButton redirect="/" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-black dark:text-white">Join Our Store</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Create your account to start shopping</p>
      </div>

      <Card>
        <form action={signUp} className="space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              defaultValue="Jane Smith"
              name="name"
              required
              className="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:ring-1 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              defaultValue="jane.smith@gmail.com"
              name="email"
              required
              className="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:ring-1 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              placeholder="Enter your email address"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              defaultValue={Math.random().toString(36).slice(-12)}
              name="password"
              required
              className="focus:border-primary focus:ring-primary w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:ring-1 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
              placeholder="Create a password"
            />
          </div>

          <SubmitButton className="w-full">Create Account</SubmitButton>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already have an account? <LoginButton redirect="/" />
          </p>
        </div>
      </Card>
    </div>
  );
}
