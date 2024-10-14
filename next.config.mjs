/** @type {import('next').NextConfig} */

const nextConfig = {
  // async redirects() {
  //   return [
  //     {
  //       source: '/((?!coming-soon).*)', // Match all paths except /coming-soon
  //       destination: '/coming-soon',
  //       permanent: false, // Use false for temporary redirects (307)
  //     },
  //   ];
  // },

  eslint: {
    ignoreDuringBuilds: true,
  },

  async headers() {
    return [
      {
        source: "/(.*)", // Apply to all routes
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY", // Prevents any domain from framing the site
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'none';", // Disallows framing from any source
          },
        ],
      },
    ];
  },
};

export default nextConfig;
