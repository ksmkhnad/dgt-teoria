/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Full static export for Cloudflare Pages hosting.
  output: "export",
  images: { unoptimized: true },
  // Emit trailing-slash directories, which pair well with static file hosting.
  trailingSlash: true,
};

module.exports = nextConfig;
