import React from 'react';
import PropTypes from 'prop-types';

import './galaxy-info.scss';
import '../../../sass/_settings.scss';
import NtsLogo from '../../../static/nts-logo-white.png';

const GalaxyInfo = () => (
    <div id="galaxy-info">
        <div className="galaxy-info__header">
            <a className="galaxy-info__header__link" href="https://www.nts.live" target="_blank"><img src={NtsLogo}/></a>

            <div className="galaxy-info__header__text subtitle-line-spacing">
                <span>NTS Radio</span>
                <br/>
                <span>in collaboration with NASA</span>
                <br/>
                <span>presents</span>
            </div>
        </div>

        <div className="galaxy-info__content">
            <h1 className="title text-uppercase leading-font"><span className="title__name">Jenny Maya:</span>The Outer Limits</h1>
            <h3 className="subtitle">5 part radio series with original music production</h3>
        </div>

        <div className="galaxy-info__footer text-justify text-uppercase">
            <div className="leading-font" style={{fontSize: '28px', marginTop: '13px', letterSpacing: '4px'}}>01.01.18</div>
            <div className="subtitle-line-spacing">
                <div>Next broadcast</div>
                <div>on NTS / 13:00</div>
            </div>
        </div>
    </div>
);

export default GalaxyInfo;
