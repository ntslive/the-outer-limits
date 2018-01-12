import PropTypes from 'prop-types';
import React from 'react';
import $ from 'jquery';

import Icon from '../icon';
import LongArrow from '../icon/long-arrow.icon';
import ShortLeftArrow from '../icon/short-left-arrow.icon';
import ShortRightArrow from '../icon/short-right-arrow.icon';

import PlanetImg from './images/Planet.png';
import EarthImg from './images/Earth.png';
import GalaxyImg from './images/Galaxy.png';

import Button from '../Button/index';
import GalaxyInfo from '../GalaxyInfo/GalaxyInfo';
import GalaxyChapters from '../GalaxyChapters/GalaxyChapters';
import GalaxySvg from '../GalaxySvg/GalaxySvg';
import chapterStatusManager from '../utils/chapterStatusManager';
import ChapterTimes from '../utils/ChapterTimes';

import './galaxy.scss';

const mobileThreshold = 770;

class GalaxyMapping {
    constructor(chapters) {
        if (typeof Raphael === "undefined") return;

        let windowWidth = $(window).width();
        let windowHeight = $(window).height();

        this.isMobile = windowWidth < mobileThreshold;

        let circles;
        if (this.isMobile) {
            this.height = windowHeight * 5.2;
            this.width = windowWidth;

            const minDistanceBetweenChapters = windowHeight * 0.95;

            circles = [
                {
                    x: windowWidth * 0.56,
                    y: 60,
                },
                {
                    x: windowWidth * 0.35,
                    y: (minDistanceBetweenChapters + 120),
                },
                {
                    x: windowWidth * 0.61,
                    y: (minDistanceBetweenChapters * 2) + (minDistanceBetweenChapters * 0.03),
                },
                {
                    x: windowWidth * 0.29,
                    y: (minDistanceBetweenChapters * 3) + (minDistanceBetweenChapters * 0.015),
                },
                {
                    x: windowWidth * 0.77,
                    y: (minDistanceBetweenChapters * 4) + (minDistanceBetweenChapters * 0.04),
                },
                {
                    x: windowWidth * 0.5,
                    y: (minDistanceBetweenChapters * 5) + (minDistanceBetweenChapters * 0.025),
                },
            ];
        } else {
            this.height = windowHeight;
            this.width = windowWidth * 3;

            const minDistanceBetweenChapters = windowWidth / 1.9;

            circles = [
                {
                    x: 60,
                    y: windowHeight * 0.37,
                },
                {
                    x: minDistanceBetweenChapters + 240,
                    y: windowHeight * 0.56,
                },
                {
                    x: (minDistanceBetweenChapters * 2) + 30,
                    y: windowHeight * 0.3,
                },
                {
                    x: (minDistanceBetweenChapters * 3) + 150,
                    y: windowHeight * 0.59,
                },
                {
                    x: (minDistanceBetweenChapters * 4) + 50,
                    y: windowHeight * 0.48,
                },
                {
                    x: (minDistanceBetweenChapters * 5) + 42,
                    y: windowWidth * 0.3,
                },
            ];
        }

        this.circles = circles;

        this.paths = [{
            d: `M${circles[0].x},${circles[0].y} L${circles[1].x},${circles[1].y} L${circles[2].x},${circles[2].y} L${circles[3].x},${circles[3].y} L${circles[4].x},${circles[4].y} L${circles[5].x},${circles[5].y}`,
        }];
    }

    addPaper(paper) {
        this.paper = paper;
    }

    get objectMapping() {
        // TODO: Load mobile images for mobile.

        if (this.isMobile) {
            return [
                {
                    src: PlanetImg,
                    x: this.width * 0.23,
                    y: 150,
                    style: {'opacity': '0.8', 'maxHeight': '85vh'}
                },
                {
                    src: EarthImg,
                    x: this.width - 400,
                    y: this.circles[3].y - ((this.circles[3].y - this.circles[2].y) / 2),
                    style: {
                        transform: 'rotate(-90deg) scaleX(-1)',
                        width: '700px',
                    }
                },
                {
                    src: GalaxyImg,
                    x: 2,
                    y: this.circles[4].y,
                    style: {
                        'opacity': '0.8',
                        'transform': 'rotate(180deg)',
                    }
                },
            ];
        } else {
            return [
                {
                    src: PlanetImg,
                    x: 350,
                    y: this.height - (this.height / 1.5),
                },
                {
                    src: EarthImg,
                    x: this.circles[2].x - (this.width / 20),
                    y: this.height * 0.68,
                },
                {
                    src: GalaxyImg,
                    x: this.circles[4].x - ((this.circles[4].x - this.circles[3].x) * 0.3),
                    y: -30,
                    style: {'opacity': '0.8'}
                },
            ];
        }

    }
}

const GalaxyObjects = props => {
    return (
        <div id="galaxy-objects">
            {props.objects.map((object, i) => {
                return (
                    <div key={i} className="galaxy-objects__objects" style={{left: object.x, top: object.y}}>
                        <img src={object.src} style={object.style}/>
                    </div>
                )
            })}
        </div>
    )
}

class Galaxy extends React.Component {
    constructor(props) {
        super(props);
        const that = this;

        this._prevChapter = this._prevChapter.bind(this);
        this._nextChapter = this._nextChapter.bind(this);
        this.scrollToChapter = this.scrollToChapter.bind(this);

        const chapters = this.props.chapters;
        const nowTime = new Date();
        let nextChapterTimes;
        for (let i = 0; i < chapters.length; i++) {
            nextChapterTimes = new ChapterTimes(chapters[i]);
            if (nextChapterTimes.endMoment > nowTime) break;
        }

        this.state = {
            selectedChapterIndex: 0,
            galaxyMapping: false,
            nextChapterTimes,
        };
    }

    componentDidMount() {
        let that = this;
        this.handlers = {};
        this.handlers.createGalaxyMapping = function() {
            console.log("Galaxy :: Checking if Raphael is accessible");

            if (typeof Raphael !== 'undefined') {
                that.setState({
                    galaxyMapping: new GalaxyMapping(that.props.chapters),
                });
            } else {
                setTimeout(this.handlers.createGalaxyMapping, 1000);
            }
        }
        this.handlers.keydownHandler = function(e) {
            if (!that.state.galaxyMapping) return;

            if (e.keyCode == 37) { // left key
                that._prevChapter();
                e.preventDefault();
            } else if (e.keyCode == 39) { // right key
                that._nextChapter();
                e.preventDefault();
            }
        }

        $("html").keydown(this.handlers.keydownHandler);

        setTimeout(this.handlers.createGalaxyMapping, 1000);
    }

    componentWillUnmount() {
        $("html").unbind("keydown", this.handlers.keydownHandler);

        console.log("Galaxy :: Unmounting");
    }

    scrollToChapter(chapterIndex) {
        this.setState({
            selectedChapterIndex: chapterIndex,
        });

        let animateProps;
        if (chapterIndex > 0) {
            let $nextChapter = $($(`.galaxy-chapter:eq(${chapterIndex})`));

            animateProps = {scrollLeft: $nextChapter.offset().left - $nextChapter.width()};
        } else {
            animateProps = {scrollLeft: 0}
        }

        $("html, body").animate(animateProps, 1000);
    }

    _nextChapter() {
        let newselectedChapterIndex = this.state.selectedChapterIndex+1;
        if (newselectedChapterIndex >= this.props.chapters.length) return;

        this.scrollToChapter(newselectedChapterIndex);
    }

    _prevChapter() {
        let newselectedChapterIndex = this.state.selectedChapterIndex-1;
        if (newselectedChapterIndex < 0) return;

        this.scrollToChapter(newselectedChapterIndex);
    }

    renderGalaxyMap() {
        let liveChapterIndex = -1;
        for (let i=0; i<this.props.chapters.length; i++) {
            if (chapterStatusManager.getChapterStatus(this.props.chapters[i]) === "live") {
                liveChapterIndex = i;
                break;
            }
        }

        return (
            <div id="galaxy">
                <GalaxyChapters chapters={this.props.chapters} drawing={this.state.galaxyMapping} selectedChapterIndex={this.state.selectedChapterIndex} scrollHandler={this.scrollToChapter}/>
                <GalaxySvg drawing={this.state.galaxyMapping} selectedChapterIndex={this.state.selectedChapterIndex} liveChapterIndex={liveChapterIndex}/>
                <GalaxyObjects objects={this.state.galaxyMapping.objectMapping} />
            </div>
        );
    }

    render() {
        console.log("Galaxy :: Rendering");
        return (
            <section id="galaxy-container">
                <div id="galaxy-footer-scroll" style={{fontSize: '16px'}} onClick={this._nextChapter}>
                    <div className="hidden-mobile">
                        <span style={{marginRight: '31px'}}>SCROLL</span>
                        <Icon icon={LongArrow} className="icon-long-arrow " fill={'white'} />
                    </div>
                    <div className="hidden-desktop">
                        <span style={{marginRight: '15px'}}>SCROLL</span>
                        <Icon icon={LongArrow} className="icon-long-arrow " fill={'white'} />
                    </div>
                </div>

                <div id="galaxy-footer-chapter-controls" className="hidden-mobile">
                    <Button className="chapter-control-button button__circle--left" icon={ShortLeftArrow} onClick={this._prevChapter} alternate/>
                    <Button className="chapter-control-button button__circle--right" icon={ShortRightArrow} onClick={this._nextChapter} alternate/>
                </div>

                <GalaxyInfo nextChapterTimes={this.state.nextChapterTimes} />

                {this.state.galaxyMapping ? this.renderGalaxyMap() : ''}
            </section>
        );
    }
}

Galaxy.propTypes = {
    chapters: PropTypes.array.isRequired,
};

export default Galaxy;
