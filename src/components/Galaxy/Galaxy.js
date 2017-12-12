import PropTypes from 'prop-types';
import React from 'react';
import $ from 'jquery';

import GalaxyInfo from '../GalaxyInfo/GalaxyInfo';
import GalaxyChapters from '../GalaxyChapters/GalaxyChapters';
import GalaxySvg from '../GalaxySvg/GalaxySvg';
import './galaxy.scss';

class GalaxyMapping {
    constructor(chapters) {
        if (typeof Raphael === "undefined") return;

        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight - 180;
        let canvasWidth = windowWidth * 3;
        this.height = windowHeight;
        this.width = canvasWidth;

        let circles = [
            {
                x: windowWidth / 20,
                y: windowHeight / 3,
            },
            {
                x: (windowWidth / 2) + (windowWidth / 4),
                y: (windowHeight / 2) + (windowHeight / 5),
            },
            {
                x: windowWidth + (windowWidth / 3),
                y: (windowHeight / 2) + (windowHeight / 8),
            },
            {
                x: windowWidth + (windowWidth / 1.5),
                y: (windowHeight / 2) - (windowHeight / 4),
            },
            {
                x: windowWidth + windowWidth + 100,
                y: (windowHeight / 2) - (windowHeight / 3),
            },
        ];
        this.circles = circles;

        this.paths = [{
            d: `M${circles[0].x},${circles[0].y} L${circles[1].x},${circles[1].y} L${circles[2].x},${circles[2].y} L${circles[3].x},${circles[3].y} L${circles[4].x},${circles[4].y}`,
        }];
    }

    addPaper(paper) {
        this.paper = paper;
    }
}

function disableAllScrolling() {
    function preventDefault(e) {
        e = e || window.event;
        if (e.preventDefault)
            e.preventDefault();
        e.returnValue = false;
    }

    function disableScroll() {
        if (window.addEventListener) // older FF
            window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove  = preventDefault; // mobile
    }

    disableScroll();
}

class Galaxy extends React.Component {
    constructor(props) {
        super(props);

        this._prevChapter = this._prevChapter.bind(this);
        this._nextChapter = this._nextChapter.bind(this);

        this.state = {
            selectedChapterId: 0,
            galaxyMapping: false,
        }
    }

    componentDidMount() {
        let that = this;
        // TODO: Remove these event handlers on unmount

        $("html").keydown(function(e) {
            if (e.keyCode == 37) { // left key
                that._prevChapter();
                e.preventDefault();
            } else if (e.keyCode == 39) { // right key
                that._nextChapter();
                e.preventDefault();
            }
        });

        // Throttling of scroll behaviour
        // disableAllScrolling();

        function checkIfRaphaelGlobal() {
            console.log("Galaxy :: Checking if Raphael is accessible");
            if (typeof Raphael !== 'undefined') {
                that.setState({
                    galaxyMapping: new GalaxyMapping(that.props.chapters),
                });
            } else {
                setTimeout(checkIfRaphaelGlobal, 1000);
            }
        }

        setTimeout(checkIfRaphaelGlobal, 1000);
    }

    _scrollToChapter(chapterIndex) {
        let animateProps;
        if (chapterIndex > 0) {
            let $nextChapter = $($(`.galaxy-chapter:eq(${chapterIndex})`));

            animateProps = {scrollLeft: $nextChapter.offset().left - $nextChapter.width()};
        } else {
            animateProps = {scrollLeft: 0}
        }

        $("html, body").animate(animateProps, 800);
    }

    _nextChapter() {
        let newSelectedChapterId = this.state.selectedChapterId+1;
        if (newSelectedChapterId >= this.props.chapters.length) return;

        this.setState({
            selectedChapterId: newSelectedChapterId,
        });
        this._scrollToChapter(newSelectedChapterId)
    }

    _prevChapter() {
        let newSelectedChapterId = this.state.selectedChapterId-1;
        if (newSelectedChapterId < 0) return;

        this.setState({
            selectedChapterId: newSelectedChapterId,
        });
        this._scrollToChapter(newSelectedChapterId)
    }

    renderGalaxyMap() {
        let liveChapterIndex = -1;
        for (let i=0; i<this.props.chapters.length; i++) {
            if (this.props.chapters[i].status === "live") {
                liveChapterIndex = i;
                break;
            }
        }

        return (
            <div id="galaxy">
                <GalaxyChapters chapters={this.props.chapters} drawing={this.state.galaxyMapping} selectedChapterId={this.state.selectedChapterId}/>
                <GalaxySvg drawing={this.state.galaxyMapping} selectedChapterId={this.state.selectedChapterId} liveChapterId={liveChapterIndex}/>
            </div>
        );
    }

    render() {
        return (
            <section id="galaxy-container">
                <div id="galaxy-footer-scroll" style={{fontSize: '16px'}}>
                    <span>SCROLL</span>
                    <span>--></span>
                </div>

                <div id="galaxy-footer-chapter-controls">
                    <button onClick={this._prevChapter}>left</button>
                    <button onClick={this._nextChapter}>right</button>
                </div>

                <GalaxyInfo />

                {this.state.galaxyMapping ? this.renderGalaxyMap() : ''}
            </section>
        );
    }
}

Galaxy.propTypes = {
    chapters: PropTypes.array.isRequired,
};

export default Galaxy;
