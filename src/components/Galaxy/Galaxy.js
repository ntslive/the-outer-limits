import React from 'react';
import PropTypes from 'prop-types';
import {Raphael} from 'react-raphael';

import GalaxyInfo from '../GalaxyInfo/GalaxyInfo';
import GalaxyChapters from '../GalaxyChapters/GalaxyChapters';
import GalaxySvg from '../GalaxySvg/GalaxySvg';
import './galaxy.scss';

class GalaxyMapping {
    constructor(chapters) {
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight - 180;
        let canvasWidth = windowWidth * 3;
        this.height = windowHeight;
        this.width = canvasWidth;

        let circles = [
            {
                x: windowWidth / 20,
                y: windowHeight / 3,
                attr: {"fill":"#7f7d7e"},
                animate: Raphael.animation({r: 7}, 2305),
            },
            {
                x: (windowWidth / 2) + (windowWidth / 4),
                y: (windowHeight / 2) + (windowHeight / 5),
                attr: {"fill":"#7f7d7e"},
                animate: Raphael.animation({r: 7}, 2305),
            },
            {
                x: windowWidth + (windowWidth / 3),
                y: (windowHeight / 2) + (windowHeight / 8),
                attr: {"fill":"#7f7d7e"},
                animate: Raphael.animation({r: 7}, 2305),
            },
            {
                x: windowWidth + (windowWidth / 1.2),
                y: (windowHeight / 2) - (windowHeight / 4),
                attr: {"fill":"#7f7d7e"},
                animate: Raphael.animation({r: 7}, 2305),
            },

        ];
        this.circles = circles;

        this.paths = [{
            d: `M${circles[0].x},${circles[0].y} L${circles[1].x},${circles[1].y} L${circles[2].x},${circles[2].y} L${circles[3].x},${circles[3].y}`,
            attr: {"stroke": "#7f7d7e", "stroke-width": 0.5},
        }]
    }
}

class Galaxy extends React.Component {
    constructor(props) {
        super(props);

        this.galaxyMapping = new GalaxyMapping(this.props.chapters);

        this.state = {
            selectedChapterId: 0,
        }
    }

    render() {
        return (
            <section id="galaxy-container">
                <GalaxyInfo />
                <div id="galaxy">
                    <GalaxyChapters chapters={this.props.chapters} drawing={this.galaxyMapping} selectedChapterId={this.state.selectedChapterId}/>
                    <GalaxySvg drawing={this.galaxyMapping} selectedChapterId={this.state.selectedChapterId}/>
                </div>
            </section>
        );
    }
}

Galaxy.propTypes = {
    chapters: PropTypes.array.isRequired,
};

export default Galaxy;
