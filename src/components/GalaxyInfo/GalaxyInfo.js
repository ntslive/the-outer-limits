import React from 'react';
import PropTypes from 'prop-types';

import './galaxy-info.scss';
import '../../../sass/_settings.scss';

const GalaxyInfo = () => (
    <div id="galaxy-info">
        <div className="galaxy-info__header">
            <a className="galaxy-info__header__link" href="https://www.nts.live" target="_blank"><img src="/nts-logo-white.png"/></a>

            <div className="galaxy-info__header__text">
                <span>NTS Radio</span>
                <br/>
                <span>in collaboration with NASA</span>
                <br/>
                <span>presents</span>
            </div>
        </div>

        <div className="galaxy-info__content">
            <h1 className="title text-uppercase"><span className="title__name">Jenny Maya:</span>The Outer Limits</h1>
            <h3 className="subtitle">5 part radio series with original music production</h3>
        </div>

        <div className="galaxy-info__footer">
            <div>Next broadcast</div>
            <div>on NTS</div>
            <div style={{fontSize: '28px', marginTop: '13px'}}>01.01.18</div>
            <div style={{fontSize: '12px'}}>TIME 13:00</div>
        </div>
    </div>
);

export default GalaxyInfo;
