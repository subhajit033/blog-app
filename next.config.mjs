import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: 's3-alpha-sig.figma.com' }],
    remotePatterns: [{ hostname: 'source.unsplash.com' }],
    remotePatterns: [{ hostname: 'res.cloudinary.com' }],
  },
};

export default nextConfig;
