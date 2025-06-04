import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',   // OBRIGATÓRIO para gerar build estático
  images: {
    unoptimized: true,  // Se usar next/image, precisa disso para exportar
  },
  basePath: '/pizzaria-model', // se o repositório NÃO for a raiz do domínio
  assetPrefix: '/pizzaria-model/',

};

export default nextConfig;
