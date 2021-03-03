module.exports = {
  siteMetadata: {
    title: `B4B Yüce Yazılım`,
    description: `B4B Yüce Yazılım`,
    siteUrl: `https://b4b2.yuceyazilim.com/`,
  },
/*   flags: {
    PRESERVE_FILE_DOWNLOAD_CACHE: true,
    PRESERVE_WEBPACK_CACHE: true,
    LAZY_IMAGES: true,
    FAST_REFRESH: true,
    FAST_DEV: true,
    PARALLEL_SOURCING: true,
    THE_FLAG: false
  }, */
  plugins: [
    `gatsby-transformer-json`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-cname',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto\:100,300,400`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data/`,
        name: `data`,
        typeName: ({ node, object, isArray }) => object.level,
      },
    },
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgoConfig: {
          pretty: true,
          multipass: true,
          plugins: [
            { removeViewBox: false },
            { removeAttrs: { attrs: '(width|height)' } },
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/slider/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images_background`,
        path: `${__dirname}/src/statics/background/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Vista Oto`,
        short_name: `Vista OTO`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#02aab0`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-offline',
  ],
};
