/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "standalone",

  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,

  // Ensures Windows paths (D:/...) are stripped and normalized for Linux
  distDir: ".next",

  experimental: {
    outputFileTracingRoot: "D:/VeeSave/frontend"
  },

  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": "D:/VeeSave/frontend",
    };
    return config;
  }
};

module.exports = nextConfig;
