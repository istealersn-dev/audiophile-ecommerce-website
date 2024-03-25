/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'media.graphassets.com',
          },
        ]
    },
    webpack: (config) => {
        config.module.rules.push({
          test: /\.(graphql|gql)/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader'
        })
        return config
      }
}

module.exports = nextConfig
