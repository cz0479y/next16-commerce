import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: {
    inlineCss: true,
    staleTimes: {
      dynamic: 30,
    },
  },
  output: 'standalone',
  reactCompiler: true,
  typedRoutes: true,
};

module.exports = nextConfig;
