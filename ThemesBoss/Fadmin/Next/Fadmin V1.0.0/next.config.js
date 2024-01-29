/** @type {import('next').NextConfig} */
const path = require('path')


const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'scss')],
  },
  eslint:{
    ignoreDuringBuilds: true,
  }
  
}

module.exports = nextConfig