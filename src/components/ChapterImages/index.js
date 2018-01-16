import PropTypes from 'prop-types';
import React from 'react';
import $ from "jquery";

import Button from '../Button/index';
import PreloadedChapterImg from '../utils/PreloadedChapterImg';

import LeftArrow from "../icon/short-left-arrow.icon";
import RightArrow from "../icon/short-right-arrow.icon";

import './chapter-images.scss';

function getNextImageIndex(index, maxIndex) {
    let nextIndex = index + 1;
    if (nextIndex > maxIndex) {
        nextIndex = 0;
    }
    return nextIndex;
}

function getPrevImageIndex(index, maxIndex) {
    let prevImageIndex = index - 1;
    if (prevImageIndex < 0) {
        prevImageIndex = maxIndex;
    }
    return prevImageIndex;
}

class ChapterImages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            images: props.chapter.gallery,
            imageIndex: 0,
            direction: '',
        };
    }

    componentDidMount() {
        this.imageKeydownHandler = (e) => {
            if (e.keyCode === 38) { // up key
                this._prevImage();
                e.preventDefault();
            } else if (e.keyCode === 40) { // down key
                this._nextImage();
                e.preventDefault();
            }
        };

        $("html").keydown(this.imageKeydownHandler);
    }

    componentWillUnmount() {
        $("html").unbind("keydown", this.imageKeydownHandler);
    }

    _nextImage() {
        const nextImageIndex = getNextImageIndex(this.state.imageIndex, this.state.images.length - 1);

        this.setState({
            imageIndex: nextImageIndex,
            direction: "upwards",
        });
    }

    _prevImage() {
        const prevImageIndex = getPrevImageIndex(this.state.imageIndex, this.state.images.length - 1);

        this.setState({
            imageIndex: prevImageIndex,
            direction: "downwards",
        });
    }

    render() {
        const imageIndex = this.state.imageIndex;
        // const nextImageIndex = getNextImageIndex(this.state.imageIndex, this.state.images.length - 1);
        // const prevImageIndex = getPrevImageIndex(this.state.imageIndex, this.state.images.length - 1);
        //
        // const currentImageUrl = this.state.images[imageIndex].imageUrl;

        const hideControlsClass = this.props.hideControls ? "hidden" : '';

        return (
            <div id="chapter-images">
                <div id="chapter-images__controls" className={hideControlsClass} >
                    <Button className="button--rotate90 button__circle--left" icon={LeftArrow} alternate onClick={() => this._prevImage()} />
                    <Button className="button--rotate90 button__circle--right" icon={RightArrow} alternate onClick={() => this._nextImage()} />
                </div>

                {this.state.images.map((image, i) => {
                    return (
                        <PreloadedChapterImg
                            key={i} className={`chapter-images__bg`}
                            imageUrl={image.imageUrl} active={i === this.state.imageIndex} animationDirection={this.state.direction}
                        />
                    );
                })}
            </div>
        );
    }
}

ChapterImages.propTypes = {
    chapter: PropTypes.object.isRequired,
    hideControls: PropTypes.bool,
};

export default ChapterImages;
