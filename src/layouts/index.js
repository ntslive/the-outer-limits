import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withPrefix } from "gatsby-link";

import '../../sass/style.scss';

// const PATH_PREFIX = '/the-outer-limits';

const TemplateWrapper = ({ children, location }) => {
    // Potentially useful for future code, leaving here for now, despite being currently unused.
    // let pathPrefix = '';
    // if (location.pathname !== withPrefix("/")) {
    //     pathPrefix = '/the-outer-limits';
    // }

    return (
        <div>
            <Helmet title="Jenny Maya The Outer Limits | NTS" >
                <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/raphael/2.2.7/raphael.min.js" />
                <meta name="viewport" content="width=device-width,height=device-height initial-scale=1" />
                <link rel="apple-touch-icon" sizes="180x180" href="https://www.nts.live/apple-touch-icon.png?v=47rE43RRzB" />
                <link rel="icon" type="image/png" href="https://www.nts.live/favicon-32x32.png?v=47rE43RRzB" sizes="32x32" />
                <link rel="icon" type="image/png" href="https://www.nts.live/favicon-16x16.png?v=47rE43RRzB" sizes="16x16" />
                <link rel="manifest" href="https://www.nts.live/manifest.json?v=47rE43RRzB" />
                <link rel="mask-icon" href="https://www.nts.live/safari-pinned-tab.svg?v=47rE43RRzB" color="#000000" />
                <link rel="shortcut icon" href="https://www.nts.live/favicon.ico?v=47rE43RRzB" />
                <meta name="theme-color" content="#000000" />
            </Helmet>
            {children()}
        </div>
    );
};

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper;
