/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm familiedeger repository',
    description: 'A store for kasm custom workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://markusdeger.github.io/kasm-registry/',
    contactUrl: 'https://github.com/markusdeger/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
