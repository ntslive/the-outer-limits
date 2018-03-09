import React from 'react';
import PropTypes from 'prop-types';

import './galaxy-info.scss';
import '../../../sass/_settings.scss';
import Icon from '../icon';
import NtsIcon from '../icon/nts-logo.icon';
import AxisIcon from '../icon/axis-logo.icon';
import chapterStatusManager from "../utils/chapterStatusManager";
import romanNumerals from "../utils/romanNumerals";

import ChapterTimes from '../utils/ChapterTimes';
import GalaxyInfoFooter from './GalaxyInfoFooter';

const GalaxyInfo = (props) => (
    <div id="galaxy-info">
        <div className="galaxy-info__header">
            <a className="galaxy-info__header__link" href="https://www.nts.live" target="_blank"
               rel="noopener noreferrer"><Icon icon={NtsIcon}/></a>
            <a className="galaxy-info__header__link galaxy-info__header__link--axis" href="https://axisrecords.com/"
               target="_blank" rel="noopener noreferrer"><Icon icon={AxisIcon}/></a>

            <div className="galaxy-info__header__text subtitle-line-spacing">
                <span>NTS Radio and Axis Records</span>
                <br/>
                <span>presents</span>
            </div>
        </div>

        <div className="galaxy-info__content">
            <h1 className="title text-uppercase leading-font">
                <span className="title__name">Jeff Mills:</span>
                The <br className="hidden-desktop"/>
                Outer <br className="hidden-desktop"/>
                Limits
            </h1>
            <h3 className="subtitle">6 part radio series with original music production</h3>
        </div>

        <GalaxyInfoFooter chapters={props.chapters} scrollToChapter={props.scrollToChapter}/>
    </div>
);

GalaxyInfo.propTypes = {
    scrollToChapter: PropTypes.func.isRequired,
    chapters: PropTypes.array.isRequired,
};

export default GalaxyInfo;
