import React from 'react';
import PropTypes from 'prop-types';

import './galaxy-info.scss';
import '../../../sass/_settings.scss';
import Icon from '../icon';
import NtsIcon from '../icon/nts-logo.icon';
import AxisIcon from '../icon/axis-logo.icon';

import ChapterTimes from '../utils/ChapterTimes';
import chapterStatusManager from "../utils/chapterStatusManager";
import romanNumerals from "../utils/romanNumerals";

const GalaxyInfo = (props) => {
    const nextChapterTimes = new ChapterTimes(props.nextChapter);
    const chapterStatus = chapterStatusManager.getChapterStatus(props.nextChapter, nextChapterTimes);

    let chapterFooter;
    if (chapterStatus === 'live') {
        const chapterRomanNumerals = romanNumerals.convertNumberToRomanNumeral(props.nextChapterId + 1);

        chapterFooter = (
            <div className="galaxy-info__footer galaxy-info__footer--live text-justify text-uppercase cursor-pointer" onClick={() => props.scrollToChapter(props.nextChapterId)}>
                <div className="galaxy-info__footer__subtitle">
                    <div className="text-uppercase leading-font" style={{fontSize: '14px'}}><span className="circle" />LIVE NOW</div>
                    <div className="text-uppercase leading-font" style={{fontSize: '28px', maxWidth: '340px'}}>{props.nextChapter.name}</div>
                    <div className="text-uppercase leading-font" style={{fontSize: '16px'}}>{`Chapter ${chapterRomanNumerals}`}</div>
                </div>
            </div>
        );
    } else {
        chapterFooter = (
            <div className="galaxy-info__footer text-justify text-uppercase">
                <div className="galaxy-info__footer__title leading-font">{nextChapterTimes.broadcastStartDateShort}</div>
                <div className="galaxy-info__footer__subtitle subtitle-line-spacing">
                    <div>Next broadcast</div>
                    <div>on NTS / {nextChapterTimes.broadcastStartTime}</div>
                </div>
            </div>
        );
    }

    return (
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

            {chapterFooter}
        </div>
    );
};

GalaxyInfo.propTypes = {
    nextChapter: PropTypes.object.isRequired,
    nextChapterId: PropTypes.number.isRequired,
    scrollToChapter: PropTypes.object.isRequired,
};

export default GalaxyInfo;
