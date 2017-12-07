import React from 'react';
import PropTypes from 'prop-types';
import Galaxy from "../Galaxy/Galaxy"

import './galaxy-chapter-action.scss';

const STATUSES = ['coming', 'teaser', 'live', 'podcast'];

class GalaxyChapterAction extends React.PureComponent {
    renderPlayButton(text) {
        return (
            <div className="galaxy-chapter__action__button text-uppercase">{text}</div>
        )
    }

    renderPodcast() {
        return (
            <div>
                {this.renderPlayButton("LISTEN BACK")}
            </div>
        );
    }

    renderLive() {
        return (
            <div>
                {this.renderPlayButton("LISTEN LIVE")}
            </div>
        )
    }

    renderTeaser() {
        return (
            <div>
                {this.renderPlayButton("PLAY TEASER")}
                <span>Coming Soon</span>
                <br/>
                <span>{this.props.chapter.broadcastDate}</span>
                <br/>
                <span>Live on NTS</span>
            </div>
        );
    }

    renderComing() {
        return (
            <div >
                <span>Coming Soon</span>
                <br/>
                <span>{this.props.chapter.broadcastDate}</span>
                <br/>
                <span>Live on NTS</span>
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
