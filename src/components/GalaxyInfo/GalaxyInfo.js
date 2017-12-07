import React from 'react';
import PropTypes from 'prop-types';

import './galaxy-info.scss';
import '../../../sass/_settings.scss';

const GalaxyInfo = () => (
    <div id="galaxy-info">
        <div className="galaxy-info__header">
            <span>NTS Radio</span>
            <br/>
            <span>in collaboration with NASA</span>
            <br/>
            <span>presents</span>
        </div>

        <div className="galaxy-info__content">
            <h1><span>Jenny Maya:</span> The Outer Limits</h1>
            <h3>5 part radio series with original music production</h3>
        </div>

        <div className="galaxy-info__footer">
            <span>Next broadcast</span>
            <br />
            <span>on NTS</span>
            <br />
            <span>01.01.18</span>
            <br />
            <span>TIME 13:00</span>
        </div>
    </div>
);

export default GalaxyInfo;
