import React from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withPrefix } from "gatsby-link";

import Galaxy from "../Galaxy/Galaxy"
import Button from "../Button/index.js";
import PlayIcon from "../icon/play.icon";

const STATUSES = ['coming', 'teaser', 'live', 'podcastComing', 'podcast'];

function getSlug(chapterName) {
    return chapterName.toLowerCase().split(' ').join('-');
}

class GalaxyChapterStateText extends React.PureComponent {
    _goToChapter(chapterSlug) {
        this.props.history.push(withPrefix('/chapters/' + chapterSlug + '/'));
    }

    _renderButton(chapter, callForAction) {
        const slug = getSlug(this.props.chapter.name);
        return (
            <Button text={callForAction} icon={PlayIcon} onClick={() => this._goToChapter(slug)}></Button>
        );
    }

    renderPodcast() {
        return (
            <div className={this.props.className}>
                { this.props.showButton && this._renderButton(this.props.chapter, "Listen Back") }
            </div>
        );
    }

    renderPodcastComing() {
        return (
            <div className={this.props.className}>
                { this.props.showButton && this._renderButton(this.props.chapter, "Play Teaser") }

                <div className="galaxy-chapter__content__action_subtext subtitle-line-spacing">
                    <span>Available Tomorrow</span>
                </div>
            </div>
        );
    }

    renderLive() {
        return (
            <div className={this.props.className}>
                { this.props.showButton && this._renderButton(this.props.chapter, "Live Now") }
            </div>
        )
    }

    renderTeaser() {
        return (
            <div className={this.props.className}>
                { this.props.showButton && this._renderButton(this.props.chapter, "Play teaser") }

                <div className="galaxy-chapter__content__action_subtext subtitle-line-spacing">
                    <span>{this.props.chapter.broadcastDate}</span>
                    <br/>
                    <span>Broadcasting Live</span>
                    <br/>
                    <span>{this.props.chapter.broadcastStartTime + ' GMT'}</span>
                </div>
            </div>
        );
    }

    renderComing() {
        return (
            <div className={this.props.className}>
                <div className="galaxy-chapter__content__action_subtext subtitle-line-spacing">
                    <span>Coming Soon</span>
                    <br/>
                    <span>{this.props.chapter.broadcastDate}</span>
                </div>
            </div>
        )
    }

    render() {
        const status = this.props.chapter.status;
        console.log("GalaxyChapter :: rendering");

        if (status === STATUSES[0]) {
            return this.renderComing();
        } else if (status === STATUSES[1]) {
            return this.renderTeaser();
        } else if (status === STATUSES[2]) {
            return this.renderLive();
        } else if (status === STATUSES[3]) {
            return this.renderPodcastComing();
        } else if (status === STATUSES[4]) {
            return this.renderPodcast();
        } else {
            return null;
        }
    }
}

GalaxyChapterStateText.propTypes = {
    chapter: PropTypes.object.isRequired,
    showButton: PropTypes.bool,
};

export default withRouter(GalaxyChapterStateText);
