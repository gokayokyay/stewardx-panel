const { when, whenDev, whenProd, whenTest, ESLINT_MODES, POSTCSS_MODES } = require("@craco/craco");
module.exports = {
  webpack: {
    alias: {},
    plugins: {
        add: [], /* An array of plugins */ 
        remove: [],  /* An array of plugin constructor's names (i.e. "StyleLintPlugin", "ESLintWebpackPlugin" ) */ 
    },
    configure: { /* Any webpack configuration options: https://webpack.js.org/configuration */ },
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}