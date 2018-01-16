import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import PlayIcon from "../icon/play.icon";
import StopIcon from "../icon/stop.icon";

import './live-player.scss';

class LivePlayer extends React.Component {
    constructor(props) {
        super(props);

        const isPlaying = props.autoplay || false;

        this.state = {
            isPlaying,
        };
    }

    componentDidMount() {
        let that = this;
        this.audioElement = document.getElementById('nts-player-audio');
        this.audioElement.addEventListener('play', function(){
            that.setState({
                isPlaying: true,
            });
        });
        if (this.props.autoplay) this._playStream();
    }

    componentWillUnmount() {
        this._stopStream(true);
    }

    _stopStream(unmounting) {
        this.audioElement.removeAttribute("src");
        this.audioElement.load();

        if (unmounting) return;

        this.setState({
            isPlaying: false,
        });
    }

    _playStream() {
        const time = new Date();
        this.audioElement.src = `https://stream-relay-geo.ntslive.net/stream?t=${time.valueOf()}`;
        this.audioElement.load();
        this.audioElement.play();
    }

    _toggleStream() {
        if (this.state.isPlaying) {
            this._stopStream();
        } else {
            this._playStream();
        }
    }

    render() {
        const buttonIcon = this.state.isPlaying ? StopIcon : PlayIcon;
        const timeLabel = `${this.props.chapterTimes.broadcastStartTime} - ${this.props.chapterTimes.broadcastEndTime}`;

        return (
            <div id="live-player">
                <Button id="live-player__button" icon={buttonIcon} onClick={() => this._toggleStream()} />

                <div id="live-player__text" className="text-uppercase">
                    <div id="live-player__text__label"><span className="circle" />Live Now</div>
                    <div id="live-player__text__time">{timeLabel}</div>
                </div>
            </div>
        );
    }
}

LivePlayer.propTypes = {
    autoplay: PropTypes.bool,
    chapterTimes: PropTypes.object,
};

export default LivePlayer;
