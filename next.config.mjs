/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve photographs near-lossless; every <Image> snaps to the closest allowed quality
    qualities: [95],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
