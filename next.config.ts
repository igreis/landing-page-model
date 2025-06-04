import type { NextConfig } from "next";

const repo = 'pizzaria-model'; // Altere para o nome do seu repositório, se for diferente

const nextConfig: NextConfig = {
  basePath: '/' + repo,
  assetPrefix: '/' + repo + '/',
};

export default nextConfig;
