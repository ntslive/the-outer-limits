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
        this.audioElement = typeof document !== "undefined" && document.getElementById('nts-player-audio');
        console.log( this.audioElement);
    }

    _stopStream() {
        this.audioElement.removeAttribute("src"); // src value should already be set to default via RadioPlayerReducer
        this.audioElement.load();

        this.setState({
            isPlaying: false,
        });
    }

    _playStream() {
        let time = new Date();
        this.audioElement.src = `http://stream-relay-geo.ntslive.net/stream?t=${time.valueOf()}`;
        this.audioElement.play();

        this.setState({
            isPlaying: true,
        });
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

        return (
            <div id="live-player">
                <Button id="live-player__button" icon={buttonIcon} onClick={() => this._toggleStream()} />

                <div id="live-player__text" className="text-uppercase">
                    <div id="live-player__text__label"><span className="circle" />Live Now</div>
                    <div id="live-player__text__time">14:00 - 15:00</div>
                </div>
            </div>
        );
    }
}

LivePlayer.propTypes = {
    autoplay: PropTypes.bool,
    // audioElement: PropTypes.object.isRequired,
};

export default LivePlayer;
