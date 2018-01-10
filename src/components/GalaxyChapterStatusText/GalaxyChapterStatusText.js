import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withPrefix } from "gatsby-link";

import Galaxy from "../Galaxy/Galaxy"
import Button from "../Button/index.js";
import PlayIcon from "../icon/play.icon";
import chapterStatusManager from "../utils/chapterStatusManager";

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
        )
    }

    renderTeaser() {
        return (
            <div className={this.props.className}>
                { this.props.showButton && this._renderButton(this.state.chapter, "Play teaser") }

                <div className="galaxy-chapter__content__action_subtext subtitle-line-spacing">
                    <span>{this.state.chapter.broadcastDate}</span>
                    <br />
                    <span>Broadcasting Live</span>
                    <br />
                    <span>{this.state.chapter.broadcastStartTime + ' GMT'}</span>
                </div>
            </div>
        );
    }

    renderComing() {
        return (
            <div className={this.props.className}>
                <div className="galaxy-chapter__content__action_subtext subtitle-line-spacing">
                    <span>Coming Soon</span>
                    <br />
                    <span>{this.state.chapter.broadcastDate}</span>
                </div>
            </div>
        );
    }

    render() {
        const STATUSES = chapterStatusManager.STATUSES;
        const chapterStatus = chapterStatusManager.getChapterStatus(this.state.chapter);

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
        } else {
            return null;
        }
    }
}

GalaxyChapterStatusText.propTypes = {
    chapter: PropTypes.object.isRequired,
    showButton: PropTypes.bool,
};

export default withRouter(GalaxyChapterStatusText);
