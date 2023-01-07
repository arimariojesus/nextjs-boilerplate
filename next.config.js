/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development'
});

const nextConfig = withPWA({
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
});

module.exports = nextConfig;
