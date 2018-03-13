import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import GalaxyChapterStatusText from '../GalaxyChapterStatusText/GalaxyChapterStatusText';
import Icon from '../icon';
import Player from '../Player/index';
import HeaderMini from '../HeaderMini';
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
        const chapterStatus = this.props.chapterStatus;

        // only render player if a teaser or podcastComing
        if (chapterStatus !== chapterStatusManager.STATUSES[1] && chapterStatus !== chapterStatusManager.STATUSES[3]) return;

        const teaserAudio = getAudioInfo(chapter, "teaser");
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
                <div id="teaser-content__credits__title" className="text-uppercase leading-font">CREDITS</div>

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

    _renderQA() {
        if (!this.state.chapter.content.qa) return;

        const qa = this.state.chapter.content.qa;

        return (
            <div id="teaser-content__qa">
                <div id="teaser-content__qa__title" className="text-uppercase leading-font">{qa.title}</div>

                {qa.paragraphs.map((paragraph, i) => (
                    <div className="teaser-content__qa__row" key={i}>
                        <div>{paragraph}</div>
                    </div>
                ))}
            </div>
        );
    }

    _renderScriptQuotes() {
        if (!this.state.chapter.content.script_quotes) return;

        const sq = this.state.chapter.content.script_quotes;

        return (
            <div id="teaser-content__script_quotes">
                {sq.map((quoteItem, i) => (
                    <div className="teaser-content__script_quotes__row" key={i}>
                        <div>{quoteItem.quote}</div>
                        <div>― {quoteItem.author}</div>
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
                    <HeaderMini chapter={chapter} className="hidden-mobile" />

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

                    {this._renderScriptQuotes()}

                    <div id="teaser-content__tracks">
                        {chapter.content.tracks && chapter.content.tracks.map((track, i) => (
                            <div key={i}>
                                {track}
                            </div>
                        ))}
                    </div>

                    {this._renderCredits()}

                    {this._renderQA()}
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
