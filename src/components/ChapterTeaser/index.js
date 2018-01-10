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

        this.state = {
            chapter: props.chapter,
        }
    }

    componentDidMount() {
        // create interval monitoring time and state of chapter.
        // updated state when time changes, triggering re-render and display correct player.
    }

    _goToGalaxy() {
        this.props.history.push(withPrefix('/'));
    }

    _renderPlayer() {
        const chapter = this.state.chapter;
        const chapterStatus = chapterStatusManager.getChapterStatus(chapter);

        if (chapterStatus === chapterStatusManager.STATUSES[0]
         || chapterStatus === chapterStatusManager.STATUSES[3])
            return;

        if (chapterStatus === chapterStatusManager.STATUSES[1]) { // teaser
            // use teaser soundcloud details
            let teaserAudio = getAudioInfo(chapter, 'teaser');

            return (
                <div id="teaser-footer__player">
                    <Player secretToken={teaserAudio.soundcloudSecretToken} trackID={teaserAudio.soundcloudTrackID}/>
                </div>
            );
        }

        if (chapterStatus === chapterStatusManager.STATUSES[2]) { // live
            // use live player
            return (
                <div id="teaser-footer__player">
                    <Player secretToken={chapter.content.teaserSoundcloudSecretToken} trackID={chapter.content.teaserSoundcloudTrackID}/>
                </div>
            );
        }

        if (chapterStatus === chapterStatusManager.STATUSES[4]) { // podcast
            // use podcast soundcloud details
            let podcastAudio = getAudioInfo(chapter, 'podcast');

            return (
                <div id="teaser-footer__player">
                    <Player secretToken={podcastAudio.soundcloudSecretToken} trackID={podcastAudio.soundcloudTrackID}/>
                </div>
            );
        }
    }

    render() {
        const chapter = this.state.chapter;

        return (
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

                    <GalaxyChapterStatusText className="hidden-desktop" chapter={chapter}/>

                    <div id="teaser-content__description">
                        {chapter.content.excerpt}
                    </div>

                    <div id="teaser-content__credits">
                        <div id="teaser-content__credits__title" className="text-uppercase text-center">CREDITS</div>

                        <div className="teaser-content__credits__col">
                            {chapter.content.credits[0].title} - {chapter.content.credits[0].name}
                        </div>
                        <div className="teaser-content__credits__col">
                            {chapter.content.credits[1].title} - {chapter.content.credits[1].name}
                        </div>
                    </div>
                </div>

                <div id="teaser-footer">
                    <div id="teaser-footer__status" className="hidden-mobile">
                        <GalaxyChapterStatusText chapter={chapter}/>
                    </div>

                    {this._renderPlayer()}
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
