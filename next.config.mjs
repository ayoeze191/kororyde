/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,  // Ensures images are copied correctly
      }
};

export default nextConfig;
