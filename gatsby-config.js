const pixrem = require('pixrem');
const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: `Podologie De Beule`,
  },
  plugins: [
    `gatsby-plugin-react-next`,
    `gatsby-plugin-react-helmet`,
    `svgo`,
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          pixrem(),
          autoprefixer({
            browsers: ['last 2 versions']
          })
        ],
        precision: 8
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open-sans`,
        ]
      }
    },
    `gatsby-transformer-json`
  ],
}
