import moment from 'moment-timezone';
import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withPrefix } from "gatsby-link";

import Galaxy from "../Galaxy/Galaxy";
import Button from "../Button/";
import PlayIcon from "../icon/play.icon";
import chapterStatusManager from "../utils/chapterStatusManager";
import ChapterTimes from '../utils/ChapterTimes';

const STATUSES = chapterStatusManager.STATUSES;

function getSlug(chapterName) {
    return chapterName.toLowerCase().split(' ').join('-');
}

class GalaxyChapterStatusText extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            chapter: props.chapter,
        };
    }

    componentDidMount() {
        // set up interval to monitor state
        // update state when changed
        // this.chapterInterval = chapterStatusManager.createChapterStateChecker(this.state.chapter, (updatedChapter) => {
        //     this.setState({
        //         chapter: updatedChapter,
        //     });
        // });
    }

    componentWillUnmount() {
        delete this.chapterInterval; // unbind listener for chapter
    }

    _goToChapter(chapterSlug) {
        this.props.history.push(withPrefix(`/chapters/${chapterSlug}/`));
    }

    _renderButton(chapter, callForAction) {
        const slug = getSlug(this.state.chapter.name);
        return (
            <Button text={callForAction} icon={PlayIcon} onClick={() => this._goToChapter(slug)} />
        );
    }

    renderPodcast() {
        return (
            <div className={this.props.className}>
                { this.props.showButton && this._renderButton(this.state.chapter, "Listen Back") }
            </div>
        );
    }

    renderPodcastComing() {
        return (
            <div className={this.props.className}>
                { this.props.showButton && this._renderButton(this.state.chapter, "Play Teaser") }

                <div className="galaxy-chapter__content__action_subtext subtitle-line-spacing">
                    <span>Available Tomorrow</span>
                </div>
            </div>
        );
    }

    renderLive() {
        return (
            <div className={this.props.className}>
                { this.props.showButton && this._renderButton(this.state.chapter, "Live Now") }
            </div>
        );
    }

    renderTeaser() {
        const chapterTime = new ChapterTimes(this.state.chapter);

        return (
            <div className={this.props.className}>
                { this.props.showButton && this._renderButton(this.state.chapter, "Play teaser") }

                <div className="galaxy-chapter__content__action_subtext subtitle-line-spacing">
                    <span>{chapterTime.broadcastStartDate}</span>
                    <br />
                    <span>Broadcasting Live</span>
                    <br />
                    <span>{chapterTime.broadcastStartTime}</span>
                </div>
            </div>
        );
    }

    renderComing() {
        const chapterTime = new ChapterTimes(this.state.chapter);

        return (
            <div className={this.props.className}>
                <div className="galaxy-chapter__content__action_subtext subtitle-line-spacing">
                    <span>Coming Soon</span>
                    <br />
                    <span>{chapterTime.broadcastStartDate}</span>
                </div>
            </div>
        );
    }

    render() {
        const chapterStatus = this.props.chapterStatus;

        console.log("GalaxyChapter :: rendering");

        if (chapterStatus === STATUSES[0]) {
            return this.renderComing();
        } else if (chapterStatus === STATUSES[1]) {
            return this.renderTeaser();
        } else if (chapterStatus === STATUSES[2]) {
            return this.renderLive();
        } else if (chapterStatus === STATUSES[3]) {
            return this.renderPodcastComing();
        } else if (chapterStatus === STATUSES[4]) {
            return this.renderPodcast();
        }

        return null;
    }
}

GalaxyChapterStatusText.propTypes = {
    chapter: PropTypes.object.isRequired,
    showButton: PropTypes.bool,
    chapterStatus: PropTypes.string.isRequired,
};

export default withRouter(GalaxyChapterStatusText);
