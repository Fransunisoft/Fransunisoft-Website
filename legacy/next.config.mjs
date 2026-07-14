/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: import.meta.dirname,  // Keeps root fix for lockfiles
  },
};

export default nextConfig;