const pixrem = require('pixrem');
const autoprefixer = require('autoprefixer');

const prefixPath = (process.env['DEPLOY_ENV'] == 'staging') ? '/the-outer-limits-staging' : '/projects/jeff-mills-the-outer-limits';

module.exports = {
    pathPrefix: prefixPath,
    siteMetadata: {
        title: `Jeff Mills The Outer Limits | NTS`,
    },
    plugins: [
        `gatsby-plugin-react-next`,
        `gatsby-plugin-react-helmet`,
        `svgo`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-102278138-1",
                anonymize: true,
            },
        },
        {
            resolve: `gatsby-plugin-postcss-sass`,
            options: {
                postCssPlugins: [
                    pixrem(),
                    autoprefixer({
                        browsers: ['last 2 versions'],
                    }),
                ],
                precision: 8,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `data`,
                path: `${__dirname}/src/data/`,
            },
        },
        `gatsby-transformer-json`,
    ],
};
