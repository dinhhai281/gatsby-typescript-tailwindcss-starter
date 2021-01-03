const postCssConfigs = require('./postcss.config');

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: postCssConfigs.plugins,
      },
    },
  ],
};
