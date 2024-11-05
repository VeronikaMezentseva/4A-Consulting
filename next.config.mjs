/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: 'https://veronikamezentseva.github.io/4A-Consulting/',
  basePath: '/4A-Consulting',
  output: 'export'
};

export default nextConfig;