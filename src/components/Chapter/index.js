import { withPrefix } from "gatsby-link";
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import Helmet from 'react-helmet';

import Button from '../Button/index';
import Player from '../Player/index';
import ChapterTeaser from '../ChapterTeaser';
import HeaderMini from '../HeaderMini';
import LivePlayer from '../LivePlayer';
import chapterStatusManager from '../utils/chapterStatusManager';
import ChapterTimes from '../utils/ChapterTimes';

import CrossIcon from "../icon/cross.icon";
import HomeIcon from "../icon/home.icon";

import './chapter.scss';

function getAudioInfo(chapter, audioType) {
    for (let i = 0; i < chapter.audio.length; i++) {
        if (chapter.audio[i].type === audioType) {
            return chapter.audio[i];
        }
    }
    return null;
}

class Chapter extends React.Component {
    constructor(props) {
        super(props);

        this._goToGalaxy = this._goToGalaxy.bind(this);
        const chapterStatus = chapterStatusManager.getChapterStatus(props.chapter);

        let displayTeaser = this.props.displayTeaser || false;
        if (chapterStatus === chapterStatusManager.STATUSES[1] || chapterStatus === chapterStatusManager.STATUSES[3]) {
            displayTeaser = true;
        }

        this.state = {
            chapter: props.chapter,
            chapterStatus,
            displayTeaser,
        };
    }

    componentDidMount() {
        // create interval throwing a change in chapter status.
        this.statusInterval = chapterStatusManager.createChapterStatusChecker(this.state.chapter, (newStatus) => {
            let displayTeaser = this.state.displayTeaser;
            if (newStatus === chapterStatusManager.STATUSES[3]) {
                displayTeaser = true;
            }

            this.setState({
                chapterStatus: newStatus,
                displayTeaser,
            });
        });
    }

    componentWillUnmount() {
        typeof window !== 'undefined' && window.clearInterval(this.statusInterval);
    }

    _goToGalaxy() {
        this.props.history.push(withPrefix('/'));
    }

    _toggleTeaser() {
        this.setState({
            displayTeaser: !this.state.displayTeaser,
        });
    }

    _renderPlayer() {
        const chapter = this.state.chapter;
        const chapterStatus = this.state.chapterStatus;

        if (chapterStatus === chapterStatusManager.STATUSES[0]
         || chapterStatus === chapterStatusManager.STATUSES[1]
         || chapterStatus === chapterStatusManager.STATUSES[3]) {
            return;
        }

        const hidePlayerClass = !!this.state.displayTeaser ? 'hidden' : '';

        // live
        if (chapterStatus === chapterStatusManager.STATUSES[2]) {
            const chapterTimes = new ChapterTimes(chapter);

            const urlParams = typeof window !== "undefined" && typeof URLSearchParams !== "undefined" && new URLSearchParams(window.location.search);
            const autoplay = urlParams && urlParams.has('autoplay');

            return (
                <div id="chapter__player" className={hidePlayerClass}>
                    <LivePlayer chapterTimes={chapterTimes} autoplay={autoplay} />
                </div>
            );
        }

        // podcast
        const teaserAudio = getAudioInfo(chapter, "podcast");
        return (
            <div id="chapter__player" className={hidePlayerClass}>
                <div id="chapter__player-mask">
                    <Player secretToken={teaserAudio.soundcloudSecretToken} trackID={teaserAudio.soundcloudTrackID} />
                </div>
            </div>
        );
    }

    _renderNavigation() {
        const galleryIsViewable = this.state.chapterStatus === chapterStatusManager.STATUSES[2] || this.state.chapterStatus === chapterStatusManager.STATUSES[4];

        const closeTeaserButton = galleryIsViewable && <Button id="chapter-nav__right" icon={CrossIcon} alternate onClick={() => this._toggleTeaser()} />;

        const leftLink = !this.state.displayTeaser && <HeaderMini chapter={this.state.chapter} />;
        const rightLink = this.state.displayTeaser
            ? closeTeaserButton
            : <span id="chapter-nav__right" className="text-uppercase cursor-pointer" onClick={() => this._toggleTeaser()}>info</span>;

        return (
            <div id="chapter-nav">
                {leftLink}

                <Button id="chapter-nav__center" icon={HomeIcon} alternate onClick={this._goToGalaxy} />

                {rightLink}
            </div>
        );
    }

    render() {
        const chapter = this.state.chapter;

        const pageTitle = `${chapter.name} - Jeff Mills The Outer Limits`;
        const pageUrl = `https://www.nts.live/projects/jeff-mills-the-outer-limits/chapters/${this.state.chapter.id}/`;

        return (
            <div>
                <Helmet title={`${pageTitle} | NTS`} >
                    <meta property="og:title" content={pageTitle} />
                    <meta property="og:url" content={pageUrl} />
                </Helmet>

                <div id="chapter-container">
                    {this._renderNavigation()}

                    {this.state.displayTeaser && (
                        <ChapterTeaser chapter={this.state.chapter} chapterStatus={this.state.chapterStatus} />
                    )}

                    {this._renderPlayer()}

                </div>

                <div id="chapter-background-image" style={{backgroundImage: `url(${chapter.content.image_bg})`}} />
            </div>
        );
    }
}

Chapter.propTypes = {
    chapter: PropTypes.object.isRequired,
    displayTeaser: PropTypes.bool,
};

export default withRouter(Chapter);
