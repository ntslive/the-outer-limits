import { withPrefix } from "gatsby-link";
import {withRouter} from 'react-router-dom';
import $ from 'jquery';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../Button/index';
import GalaxyChapterStatusText from '../GalaxyChapterStatusText/GalaxyChapterStatusText';
import Icon from '../icon';
import Player from '../Player/index';
import chapterStatusManager from '../utils/chapterStatusManager';

import CrossIcon from "../icon/cross.icon";
import HomeIcon from "../icon/home.icon";
import NtsLogo from '../../../static/nts-logo-white.png';

import './chapter-teaser.scss';

function getAudioInfo(chapter, audioType) {
    for (let i = 0; i < chapter.audio.length; i++) {
        if (chapter.audio[i].type === audioType) {
            return chapter.audio[i]
        }
    }
    return;
}

class ChapterTeaser extends React.Component {
    constructor(props) {
        super(props);

        this._goToGalaxy = this._goToGalaxy.bind(this);
        const chapterStatus = chapterStatusManager.getChapterStatus(props.chapter);

        this.state = {
            chapter: props.chapter,
            chapterStatus: chapterStatus,
        }
    }

    componentDidMount() {
        // create interval throwing a change in chapter status.
        this.statusInterval = chapterStatusManager.createChapterStatusChecker(this.state.chapter, (newStatus) => {
            this.setState( {
                chapterStatus: newStatus,
            });
        });
    }

    componentWillUnmount() {
        window && window.clearInterval(this.statusInterval);
    }

    _goToGalaxy() {
        this.props.history.push(withPrefix('/'));
    }

    _renderPlayer() {
        const chapter = this.state.chapter;
        const chapterStatus = this.state.chapterStatus;

        if (chapterStatus === chapterStatusManager.STATUSES[0]
         || chapterStatus === chapterStatusManager.STATUSES[3])
            return;

        if (chapterStatus === chapterStatusManager.STATUSES[2]) { // live
            return (
                <div id="teaser-footer__player">
                    <h1>LIVE PLAYER</h1>
                </div>
            );
        }

        let audioType = chapterStatus === chapterStatusManager.STATUSES[4] ? "podcast" : "teaser";
        let teaserAudio = getAudioInfo(chapter, audioType);

        return (
            <div id="teaser-footer__player">
                <Player secretToken={teaserAudio.soundcloudSecretToken} trackID={teaserAudio.soundcloudTrackID}/>
            </div>
        );
    }

    _renderCredits() {
        const credits = this.state.chapter.content.credits;
        const creditsHalfLength = Math.ceil(credits.length / 2);
        const creditsLeftColumn = credits.slice(0, creditsHalfLength);
        const creditsRightColumn = credits.slice(creditsHalfLength, credits.length);

        function renderCreditsColumn(credits) {
            return credits.map((credit, i) => (
                <div>
                    <span className="text-uppercase">{credit.name}</span> - <span className="text-lowercase">{credit.title}</span>
                </div>
            ));
        }

        return (
            <div id="teaser-content__credits">
                <div id="teaser-content__credits__title" className="text-uppercase text-center">CREDITS</div>

                <div className="teaser-content__credits__col">
                    {renderCreditsColumn(creditsLeftColumn)}
                </div>
                <div className="teaser-content__credits__col">
                    {renderCreditsColumn(creditsRightColumn)}
                </div>
            </div>
        );
    }

    render() {
        const chapter = this.state.chapter;

        return (
            <div>
                <div id="teaser-container">
                    <div id="teaser-nav">
                        <a id="teaser-nav__left" className="hidden" href="https://www.nts.live" target="_blank"><img src={NtsLogo}/></a>
                        <Button id="teaser-nav__center" icon={HomeIcon} alternate onClick={this._goToGalaxy}></Button>
                        <Button id="teaser-nav__right" icon={CrossIcon} alternate onClick={this._goToGalaxy}></Button>
                    </div>

                    <div id="teaser-content">
                        <div id="teaser-content__title">
                            <a id="teaser-content__title__logo" href="https://www.nts.live" target="_blank"><img
                                src={NtsLogo} alt="NTS Logo"/></a>

                            <div id="teaser-content__title__text">
                                <h1 className="text-uppercase leading-font">{chapter.name}</h1>
                                <h5>Jenny Maya: The Outer Limits</h5>
                            </div>
                        </div>

                        <GalaxyChapterStatusText className="hidden-desktop" chapter={chapter} chapterStatus={this.state.chapterStatus}/>

                        <div id="teaser-content__description">
                            {chapter.content.excerpt}
                        </div>

                        {this._renderCredits()}
                    </div>

                    <div id="teaser-footer">
                        <div id="teaser-footer__status" className="hidden-mobile">
                            <GalaxyChapterStatusText chapter={chapter} chapterStatus={this.state.chapterStatus}/>
                        </div>

                        {this._renderPlayer()}
                    </div>
                </div>

                <div id="teaser-background-image" style={{backgroundImage: `url(${chapter.content.image_bg})`}}/>
            </div>

        );
    }
}

ChapterTeaser.propTypes = {
    chapter: PropTypes.object.isRequired,
};

export default withRouter(ChapterTeaser);
