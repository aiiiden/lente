/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '*',
      },
    ],
  },
  devIndicators: {
    appIsrStatus: false,
  },
};

export default nextConfig;
