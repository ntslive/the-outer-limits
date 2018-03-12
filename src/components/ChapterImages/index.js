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

function reportKeyPress() {
    if (typeof ga !== "undefined") {
        ga('send', 'event', 'TheOuterLimits', 'Chapter', 'Image Scroll Keypress');
    }
}

class ChapterImages extends React.Component {
    constructor(props) {
        super(props);

        this._prevImage = this._prevImage.bind(this);
        this._nextImage = this._nextImage.bind(this);

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
                reportKeyPress();
                e.preventDefault();
            } else if (e.keyCode === 40) { // down key
                this._nextImage();
                reportKeyPress();
                e.preventDefault();
            }
        };

        $("html").keydown(this.imageKeydownHandler);
    }

    componentWillUnmount() {
        $("html").unbind("keydown", this.imageKeydownHandler);
    }

    _nextImage() {
        if (this.props.disableNav) return;
        const nextImageIndex = getNextImageIndex(this.state.imageIndex, this.state.images.length - 1);

        if (typeof ga !== "undefined") {
            ga('send', 'event', 'TheOuterLimits', 'Chapter', 'NextImage');
        }

        this.setState({
            imageIndex: nextImageIndex,
            direction: "upwards",
        });
    }

    _prevImage() {
        if (this.props.disableNav) return;
        const prevImageIndex = getPrevImageIndex(this.state.imageIndex, this.state.images.length - 1);

        if (typeof ga !== "undefined") {
            ga('send', 'event', 'TheOuterLimits', 'Chapter', 'PreviousImage');
        }

        this.setState({
            imageIndex: prevImageIndex,
            direction: "downwards",
        });
    }

    _renderImageCaption(hideAllCaptions, i) {
        const selectedImageIndex = this.state.imageIndex;

        if (hideAllCaptions || selectedImageIndex !== i) return;

        const selectedImage = this.state.images[selectedImageIndex];

        return (
            <div className={`chapter-images__caption`}>
                <h2 className="chapter-images__caption__title text-uppercase leading-font">{selectedImage.title}</h2>
                <div className="chapter-images__caption__description">
                    {selectedImage.description}
                </div>
                <div className="chapter-images__caption__credits">
                    Credits: <span className="text-uppercase">{selectedImage.credits}</span>
                </div>
            </div>
        );
    }

    render() {
        const imageIndex = this.state.imageIndex;
        const nextImageIndex = getNextImageIndex(this.state.imageIndex, this.state.images.length - 1);
        const prevImageIndex = getPrevImageIndex(this.state.imageIndex, this.state.images.length - 1);

        const hideControlsClass = this.props.hideControls ? "hidden" : '';

        return (
            <div id="chapter-images">
                <div id="chapter-images__controls" className={hideControlsClass} >
                    <div id="chapter-images__controls__label" className="text-uppercase">Discover</div>

                    <Button className="button--rotate90 button__circle--left" icon={LeftArrow} alternate onClick={() => this._prevImage()} />
                    <Button className="button--rotate90 button__circle--right" icon={RightArrow} alternate onClick={() => this._nextImage()} />
                </div>

                <div id="chapter-click-handler-top" className="" onClick={this._prevImage} />
                <div id="chapter-click-handler-bottom" className="" onClick={this._nextImage} />

                {this.state.images.map((image, i) => {
                    let preventLoad = true;
                    if (i === imageIndex || i === nextImageIndex || i === prevImageIndex) {
                        preventLoad = false;
                    }

                    return (
                        <div key={`chapterImage${i}`}>
                            {this._renderImageCaption(hideControlsClass, i)}

                            <PreloadedChapterImg
                                className={`chapter-images__bg`}
                                imageUrl={image.imageUrl} active={i === this.state.imageIndex} animationDirection={this.state.direction} preventLoad={preventLoad}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
}

ChapterImages.propTypes = {
    chapter: PropTypes.object.isRequired,
    hideControls: PropTypes.bool,
    disableNav: PropTypes.bool,
};

export default ChapterImages;
