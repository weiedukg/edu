/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // 因为所有图片都来自本地 public 文件夹，所以 images 配置可以完全移除
  // Next.js 默认支持这种情况
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
