/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "i.pravatar.cc", pathname: "/**" }],
  },
  trailingSlash: true,
};

export default nextConfig;
