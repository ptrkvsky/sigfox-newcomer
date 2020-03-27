module.exports = {
  siteMetadata: {
    title: `Sigfox newcomers`,
    description: `A platform to sayhello.`,
    author: `@teamnoobz`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'sigfox-newcomers', // required
        defaultLang: 'en-us', // optional, but recommended
        accessToken:
          'MC5YbjRIQVJJQUFET3VxX1c3.C--_ve-_vQEX77-9Mz4BNlx1KXVm77-9Yu-_vQvvv73vv706Ee-_vU3vv71v77-9Ce-_vSDvv70', // optional
        path: '/preview', // optional, default: /preview
        previews: true, // optional, default: false
        sharpKeys: [
          /image|photo|picture/, // (default)
          'profilepic',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Ubuntu`,
          `Open Sans`, // you can also specify font weights and styles
        ],
        display: 'swap',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#230066`,
        theme_color: `#230066`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
