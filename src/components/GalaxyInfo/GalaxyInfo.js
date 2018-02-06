import React from 'react';
import PropTypes from 'prop-types';

import './galaxy-info.scss';
import '../../../sass/_settings.scss';
import Icon from '../icon';
import NtsIcon from '../icon/nts-logo.icon';
import AxisIcon from '../icon/axis-logo.icon';

const GalaxyInfo = props => (
    <div id="galaxy-info">
        <div className="galaxy-info__header">
            <a className="galaxy-info__header__link" href="https://www.nts.live" target="_blank" rel="noopener noreferrer"><Icon icon={NtsIcon} /></a>
            <a className="galaxy-info__header__link galaxy-info__header__link--axis" href="https://axisrecords.com/" target="_blank" rel="noopener noreferrer"><Icon icon={AxisIcon} /></a>

            <div className="galaxy-info__header__text subtitle-line-spacing">
                <span>NTS Radio and Axis Records</span>
                <br />
                <span>with direction from NASA Jet Propulsion Laboratory</span>
                <br />
                <span>presents</span>
            </div>
        </div>

        <div className="galaxy-info__content">
            <h1 className="title text-uppercase leading-font">
                <span className="title__name">Jeff Mills:</span>
                The <br className="hidden-desktop" />
                Outer <br className="hidden-desktop" />
                Limits
            </h1>
            <h3 className="subtitle">6 part radio series with original music production</h3>
        </div>

        <div className="galaxy-info__footer text-justify text-uppercase">
            <div className="galaxy-info__footer__title leading-font">{props.nextChapterTimes.broadcastStartDateShort}</div>
            <div className="galaxy-info__footer__subtitle subtitle-line-spacing">
                <div>Next broadcast</div>
                <div>on NTS / {props.nextChapterTimes.broadcastStartTime}</div>
            </div>
        </div>
    </div>
);

GalaxyInfo.propTypes = {
    nextChapterTimes: PropTypes.object.isRequired,
};

export default GalaxyInfo;
