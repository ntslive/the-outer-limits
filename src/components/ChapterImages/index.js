import PropTypes from 'prop-types';
import React from 'react';
import $ from "jquery";

import Button from '../Button/index';
import PreloadedChapterImg from '../utils/PreloadedChapterImg';

import LeftArrow from "../icon/short-left-arrow.icon";
import RightArrow from "../icon/short-right-arrow.icon";

import './chapter-images.scss';

class ChapterImages extends React.Component {
    constructor(props) {
        super(props);

        const images = props.chapter.gallery;
        console.log(images);

        this.state = {
            images,
            imageIndex: 0,
            previousImageUrl: "",
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
        console.log("next image");

        this.setState({
            imageIndex: this.state.imageIndex + 1,
        });
    }

    _prevImage() {
        console.log("prev image");

        this.setState({
            imageIndex: this.state.imageIndex - 1,
        });
    }

    render() {
        const imageIndex = this.state.imageIndex;
        const currentImageUrl = this.state.images[imageIndex].imageUrl;
        const nextImageUrl = this.state.images[imageIndex + 1].imageUrl;
        // const prevImageUrl = this.state.images[imageIndex - 1].imageUrl;

        const hideControlsClass = this.props.hideControls ? "hidden" : '';

        // Preloads next image. Requires Image defintion check for gatbsy build.
        if (typeof Image !== "undefined") {
            let newImage = new Image();
            newImage.src = nextImageUrl;
        }

        return (
            <div id="chapter-images">
                <div id="chapter-images__controls" className={hideControlsClass} >
                    <Button className="button--rotate90 button__circle--left" icon={LeftArrow} alternate onClick={() => this._prevImage()} />
                    <Button className="button--rotate90 button__circle--right" icon={RightArrow} alternate onClick={() => this._nextImage()} />
                </div>

                <PreloadedChapterImg key={currentImageUrl} className="chapter-images__bg" imageUrl={currentImageUrl} />
            </div>
        );
    }
}

ChapterImages.propTypes = {
    chapter: PropTypes.object.isRequired,
    hideControls: PropTypes.bool,
};

export default ChapterImages;
