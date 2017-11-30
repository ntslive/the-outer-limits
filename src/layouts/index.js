import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../../sass/style.scss';

const TemplateWrapper = ({ children }) => (
    <div>
        <Helmet title="Jeff Mills The Outer Limits | NTS" />
        {children()}
    </div>
);

TemplateWrapper.propTypes = {
    children: PropTypes.func,
};

export default TemplateWrapper;
