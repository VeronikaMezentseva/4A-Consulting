/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/your-repository-name/' : '',
  basePath: isProd ? '/your-repository-name' : '',
  output: 'export'
};

export default nextConfig;
