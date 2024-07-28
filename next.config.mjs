import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 's3-alpha-sig.figma.com' }],
    remotePatterns: [{ hostname: 'loremflickr.com' }],
  },
};

export default nextConfig;
