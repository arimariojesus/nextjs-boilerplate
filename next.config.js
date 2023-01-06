/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa')({
  dest: 'public'
});

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = withPWA({
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  pwa: {
    disable: !isProd
  }
});

module.exports = nextConfig;
