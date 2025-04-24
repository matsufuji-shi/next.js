/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // 静的エクスポート設定
  images: {
    unoptimized: true,  // 画像の最適化を無効化
  },
};

export default nextConfig;