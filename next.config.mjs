/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/academy',
        destination: '/training',
        permanent: true,
      },
      {
        source: '/academy/:slug*',
        destination: '/training/:slug*',
        permanent: true,
      },
      {
        source: '/insights',
        destination: '/',
        permanent: true,
      },
      {
        source: '/insights/:slug*',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
