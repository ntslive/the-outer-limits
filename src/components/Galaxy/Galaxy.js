import React from 'react';
import PropTypes from 'prop-types';
import {Raphael,Paper,Set,Circle,Ellipse,Image,Rect,Text,Path,Line} from 'react-raphael';

import GalaxyChapters from '../GalaxyChapters/GalaxyChapters';
import GalaxySvg from '../GalaxySvg/GalaxySvg';
import './galaxy.scss';

class GalaxyMapping {
    constructor(chapters) {
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight - 180;
        let canvasWidth = windowWidth * 3;

        let data = [
            {
                x: windowWidth / 3.9,
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
        ];

        data = data.concat( [
            {
                d: `M${data[0].x},${data[0].y} L${data[1].x},${data[1].y} L${data[2].x},${data[2].y}`,
                attr: {"stroke": "#7f7d7e", "stroke-width": 0.5},
            }
        ]);

        this.height = windowHeight;
        this.width = canvasWidth;
        this.items = data;
    }
}

class Galaxy extends React.Component {
    constructor(props) {
        super(props);

        this.galaxyMapping = new GalaxyMapping(this.props.chapters);
    }

    render() {
        return (
            <section id="galaxy">
                <GalaxyChapters chapters={this.props.chapters} drawing={this.galaxyMapping} />
                <GalaxySvg drawing={this.galaxyMapping} />
            </section>
        );
    }
}

Galaxy.propTypes = {
    chapters: PropTypes.array.isRequired,
};

export default Galaxy;
