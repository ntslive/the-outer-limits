import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withPrefix } from "gatsby-link";

import '../../sass/style.scss';

const PATH_PREFIX = '/the-outer-limits';

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
            </Helmet>
            {children()}
        </div>
    );
};

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper;
