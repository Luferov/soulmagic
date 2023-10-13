/** @type {import('next').NextConfig} */

const config = {
  experimental: {
    serverComponentsExternalPackages: ['@whatwg-node', '@aws-sdk'],
  },
}

module.exports = config
