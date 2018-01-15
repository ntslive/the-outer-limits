import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import GalaxyChapterStatusText from '../GalaxyChapterStatusText/GalaxyChapterStatusText';
import Icon from '../icon';
import Player from '../Player/index';
import chapterStatusManager from '../utils/chapterStatusManager';

import AxisIcon from "../icon/axis-logo.icon";
import NtsIcon from "../icon/nts-logo.icon";

import './chapter-teaser.scss';

function getAudioInfo(chapter, audioType) {
    for (let i = 0; i < chapter.audio.length; i++) {
        if (chapter.audio[i].type === audioType) {
            return chapter.audio[i];
        }
    }
    return null;
}

class ChapterTeaser extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chapter: props.chapter,
        };
    }

    _renderPlayer() {
        const chapter = this.state.chapter;
        const chapterStatus = this.state.chapterStatus;

        if (chapterStatus === chapterStatusManager.STATUSES[0]
            || chapterStatus === chapterStatusManager.STATUSES[3]) {
            return;
        }

        if (chapterStatus === chapterStatusManager.STATUSES[2]) { // live
            return (
                <div id="teaser-content__player">
                    <h1>LIVE PLAYER</h1>
                </div>
            );
        }

        const audioType = chapterStatus === chapterStatusManager.STATUSES[4] ? "podcast" : "teaser";
        const teaserAudio = getAudioInfo(chapter, audioType);

        return (
            <div id="teaser-content__player">
                <Player secretToken={teaserAudio.soundcloudSecretToken} trackID={teaserAudio.soundcloudTrackID} />
            </div>
        );
    }

    _renderCredits() {
        if (!this.state.chapter.content.credits) return;

        const credits = this.state.chapter.content.credits;

        return (
            <div id="teaser-content__credits">
                <div id="teaser-content__credits__title" className="text-uppercase">CREDITS</div>

                {credits.map((credit, i) => (
                    <div className="teaser-content__credits__row" key={i}>
                        <div className="text-lowercase">{credit.title}</div>

                        {credit.names.map((name, j) => (
                            <div className="text-uppercase" key={j}>{name}</div>
                        ))}
                    </div>
                ))}
            </div>
        );
    }

    render() {
        const chapter = this.state.chapter;

        return (
            <div id="teaser-container">
                <div id="teaser-content">
                    <div id="teaser-content__title">
                        <a className="teaser-content__title__logo" href="https://www.nts.live" target="_blank" rel="noopener noreferrer"><Icon icon={NtsIcon} /></a>
                        <a className="teaser-content__title__logo teaser-content__title__logo--axis" href="https://axisrecords.com/" target="_blank" rel="noopener noreferrer"><Icon icon={AxisIcon} /></a>

                        <div id="teaser-content__title__text">
                            <h1 className="text-uppercase leading-font">{chapter.name}</h1>
                            <h5>Jeff Mills: The Outer Limits</h5>
                        </div>
                    </div>

                    <div id="teaser-content__status">
                        <GalaxyChapterStatusText chapter={chapter} chapterStatus={this.props.chapterStatus} />
                    </div>

                    {this._renderPlayer()}

                    <div id="teaser-content__description">
                        {chapter.content.description && chapter.content.description.map((paragraph, i) => (
                            <div key={i}>
                                {paragraph}
                            </div>
                        ))}
                    </div>

                    <div id="teaser-content__tracks">
                        {chapter.content.tracks && chapter.content.tracks.map((track, i) => (
                            <div key={i}>
                                {track}
                            </div>
                        ))}
                    </div>

                    {this._renderCredits()}
                </div>
            </div>
        );
    }
}

ChapterTeaser.propTypes = {
    chapter: PropTypes.object.isRequired,
    chapterStatus: PropTypes.string.isRequired,
};

export default withRouter(ChapterTeaser);
