const { defineConfig } = require('cypress')

export default defineConfig({
  e2e: {
    supportFile: false,
    baseUrl: 'http://localhost:3000',
  },

  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})
