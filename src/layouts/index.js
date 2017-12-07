import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withPrefix } from "gatsby-link";

import '../../sass/style.scss';

const PATH_PREFIX = '/the-outer-limits';

const TemplateWrapper = ({ children, location }) => {
    let pathPrefix = '';
    // TODO: Following needs fixed for when we add more routes.
    if (location.pathname !== withPrefix("/")) {
        pathPrefix = '/the-outer-limits';
    }

    const raphaelPath = `${pathPrefix}/raphael.min.js`;

    return (
        <div>
            <Helmet title="Jenny Maya The Outer Limits | NTS" >
                <script type="text/javascript" src={raphaelPath} />
            </Helmet>
            {children()}
        </div>
    );
};

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper;
