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
                <span>in collaboration <span className="hidden-mobile">with NASA</span></span>
                <br/>
                <span><span className="hidden-desktop">with NASA</span> presents</span>
            </div>
        </div>

        <div className="galaxy-info__content">
            <h1 className="title text-uppercase leading-font">
                <span className="title__name">Jenny Maya:</span>
                The <br className="hidden-desktop" />
                Outer <br className="hidden-desktop" />
                Limits
            </h1>
            <h3 className="subtitle">5 part radio series with original music production</h3>
        </div>

        <div className="galaxy-info__footer text-justify text-uppercase">
            <div className="galaxy-info__footer__title leading-font">01.01.18</div>
            <div className="galaxy-info__footer__subtitle subtitle-line-spacing">
                <div>Next broadcast</div>
                <div>on NTS / 13:00</div>
            </div>
        </div>
    </div>
);

export default GalaxyInfo;
