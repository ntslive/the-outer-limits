import React from 'react';
import PropTypes from 'prop-types';
import Galaxy from "../Galaxy/Galaxy"

const STATUSES = ['coming', 'teaser', 'live', 'podcast'];

class GalaxyChapter extends React.PureComponent {
    renderPodcast() {
        return (
            <div>
                <span>LISTEN BACK</span>
            </div>
        );
    }

    renderLive() {
        return (
            <div>
                <span>LISTEN LIVE</span>
            </div>
        )
    }

    renderTeaser() {
        return (
            <div>
                <span>PLAY TEASER</span>
                <br/>
                <span>Coming Soon</span>
                <br/>
                <span>01.01.18</span>
                <br/>
                <span>Live on NTS</span>
            </div>
        );
    }

    renderComing() {
        return (
            <div>
                <span>Coming Soon</span>
                <br/>
                <span>01.01.18</span>
                <br/>
                <span>Live on NTS</span>
            </div>
        )
    }

    render() {
        console.log("GalaxyChapter :: rendering");
        if (this.props.status === STATUSES[0]) {
            return this.renderComing();
        } else if (this.props.status === STATUSES[1]) {
            return this.renderTeaser();
        } else if (this.props.status === STATUSES[2]) {
            return this.renderLive();
        } else if (this.props.status === STATUSES[3]) {
            return this.renderPodcast();
        } else {
            return null;
        }
    }
}

GalaxyChapter.propTypes = {
    status: PropTypes.string.isRequired,
};

export default GalaxyChapter;
