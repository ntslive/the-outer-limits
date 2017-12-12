import React from 'react';
import PropTypes from 'prop-types';
import Galaxy from "../Galaxy/Galaxy"
import Button from "../Button/index.js";
import PlayIcon from "../icon/play.icon";

import './galaxy-chapter-action.scss';

const STATUSES = ['coming', 'teaser', 'live', 'podcastComing', 'podcast'];

class GalaxyChapterAction extends React.PureComponent {
    renderPodcast() {
        return (
            <div className={this.props.className}>
                <Button text={"listen back"} icon={PlayIcon}></Button>
            </div>
        );
    }

    renderPodcastComing() {
        return (
            <div className={this.props.className}>
                <Button text={"Play Teaser"} icon={PlayIcon}></Button>

                <div className="galaxy-chapter__content__action_subtext">
                    <span>Available Tomorrow</span>
                </div>
            </div>
        );
    }

    renderLive() {
        return (
            <div className={this.props.className}>
                <Button text={"live now"} icon={PlayIcon}></Button>
            </div>
        )
    }

    renderTeaser() {
        return (
            <div className={this.props.className}>
                <Button text={"Play Teaser"} icon={PlayIcon}></Button>

                <div className="galaxy-chapter__content__action_subtext">
                    <span>{this.props.chapter.broadcastDate}</span>
                    <br/>
                    <span>Broadcasting Live</span>
                    <br/>
                    <span>{this.props.chapter.broadcastTime + ' GMT'}</span>
                </div>
            </div>
        );
    }

    renderComing() {
        return (
            <div className={this.props.className}>
                <Button text={"Play Teaser"} icon={PlayIcon}></Button>

                <div className="galaxy-chapter__content__action_subtext">
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

GalaxyChapterAction.propTypes = {
    chapter: PropTypes.object.isRequired,
};

export default GalaxyChapterAction;
