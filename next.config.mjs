/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist", // 👈 change folder name here
  images: {
    unoptimized: true, // 👈 VERY IMPORTANT
  },
}

export default nextConfig
