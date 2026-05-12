/** @type {import('next').NextConfig} */
const disableImageOptimization =
  process.env.NEXT_DISABLE_IMAGE_OPTIMIZATION === "1" ||
  process.env.RENDER === "true";

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  images: {
    // On small hosts (e.g. Render starter), Sharp-backed `/_next/image` can spike
    // memory under concurrent requests. Set NEXT_DISABLE_IMAGE_OPTIMIZATION=1 to
    // serve imported/static images without the image optimizer worker path.
    unoptimized: disableImageOptimization,
  },
  experimental: {
    typedRoutes: true,
  },
};

export default nextConfig;

