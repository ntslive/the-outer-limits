import React from 'react';
import PropTypes from 'prop-types';

import ChapterTimes from '../utils/ChapterTimes';
import chapterStatusManager from "../utils/chapterStatusManager";
import romanNumerals from "../utils/romanNumerals";

class GalaxyInfoFooter extends React.Component {
    constructor(props) {
        super(props);

        const chapters = props.chapters;
        const nowTime = new Date();
        let nextChapter, nextChapterId, nextChapterTimes;
        for (let i = 0; i < chapters.length; i++) {
            nextChapterId = i;
            nextChapter = chapters[nextChapterId];
            nextChapterTimes = new ChapterTimes(nextChapter);
            if (nextChapterTimes.endMoment > nowTime) break;
        }

        this.state = {
            nextChapter,
            nextChapterId,
            nextChapterTimes,
            nextChapterStatus: chapterStatusManager.getChapterStatus(nextChapter),
        };
    }

    componentDidMount() {
        this.nextShowInterval = chapterStatusManager.createChapterStatusChecker(this.state.nextChapter, (newStatus) => {
            if (newStatus === 'podcastComing' || newStatus === 'podcast') {
                const nextChapterId = this.state.nextChapterId + 1;
                const nextChapter = this.props.chapters[nextChapterId];
                const nextChapterTimes = new ChapterTimes(nextChapter);

                this.setState({
                    nextChapter,
                    nextChapterId,
                    nextChapterTimes,
                    nextChapterStatus: chapterStatusManager.getChapterStatus(nextChapter),
                });
            } else {
                this.setState({
                    nextChapterStatus: newStatus,
                });
            }
        });
    }

    componentWillUnmount() {
        typeof window !== 'undefined' && window.clearInterval(this.nextShowInterval);
    }

    render() {
        if (this.state.nextChapterStatus === 'live') {
            const chapterRomanNumerals = romanNumerals.convertNumberToRomanNumeral(this.state.nextChapterId + 1);

            return (
                <div className="galaxy-info__footer galaxy-info__footer--live text-justify text-uppercase cursor-pointer" onClick={() => this.props.scrollToChapter(this.state.nextChapterId)}>
                    <div className="galaxy-info__footer__subtitle">
                        <div className="text-uppercase leading-font" style={{fontSize: '14px'}}><span className="circle" />LIVE NOW</div>
                        <div className="text-uppercase leading-font" style={{fontSize: '28px', maxWidth: '340px'}}>{this.state.nextChapter.name}</div>
                        <div className="text-uppercase leading-font" style={{fontSize: '16px'}}>{`Chapter ${chapterRomanNumerals}`}</div>
                    </div>
                </div>
            );
        }

        const nextChapterTimes = new ChapterTimes(this.state.nextChapter);
        return (
            <div className="galaxy-info__footer text-justify text-uppercase">
                <div className="galaxy-info__footer__title leading-font">{nextChapterTimes.broadcastStartDateShort}</div>
                <div className="galaxy-info__footer__subtitle subtitle-line-spacing">
                    <div>Next broadcast</div>
                    <div>on NTS / {nextChapterTimes.broadcastStartTime}</div>
                </div>
            </div>
        );
    }
}

GalaxyInfoFooter.propTypes = {
    scrollToChapter: PropTypes.func.isRequired,
    chapters: PropTypes.array.isRequired,
};

export default GalaxyInfoFooter;
