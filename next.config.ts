import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
    ppr: true,
    reactCompiler: true,
    useCache: true,
  },
};

module.exports = nextConfig;
