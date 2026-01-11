import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      '/api/components/**/*': ['./library-source/**/*'],
      '/api/registry/**/*': ['./library-source/**/*'],
    },
  },
};

export default nextConfig;
