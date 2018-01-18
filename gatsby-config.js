const pixrem = require('pixrem');
const autoprefixer = require('autoprefixer');

let prefixPath;
switch (process.env.DEPLOY_ENV) {
case 'staging':
    prefixPath = '/the-outer-limits-staging';
    break;
case 'local':
    prefixPath = '/';
    break;
default:
    prefixPath = '/projects/jeff-mills-the-outer-limits';
}

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
                trackingId: "UA-6061419-3",
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
