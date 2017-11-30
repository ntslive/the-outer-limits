import React from 'react';
import {Raphael,Paper,Set,Circle,Ellipse,Image,Rect,Text,Path,Line} from 'react-raphael';

import GalaxyChapter from '../GalaxyChapter/GalaxyChapter';

import './galaxy.scss';

class Galaxy extends React.Component {
    componentDidMount() {
    }

    renderGalaxy() {
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
            },
            {
                x: 250,
                y: 50,
                r: 40,
                attr: {"stroke": "#e11032", "stroke-width": 5},
                animate: Raphael.animation({cx: 240}, 500, "<>"),
            }
        ]);

        return (
            <Paper width={canvasWidth} height={windowHeight}>
                <Set>
                    <Circle {...data[0]} ></Circle>
                    <Circle {...data[1]} ></Circle>
                    <Circle {...data[2]} ></Circle>
                    <Path {...data[3]} />
                </Set>
            </Paper>
        );
    }

    render() {
        return (
            <section id="galaxy">
                <div className="galaxy-chapters">
                    <h4 className="">CHAPTERS</h4>

                    {this.props.chapters.map((chapter, i) => {
                        return (
                            <div key={i}>
                                <p>
                                    {chapter.name}
                                </p>
                                <p>
                                    {chapter.excerpt}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {this.renderGalaxy()}
            </section>
        )
    }
};

export default Galaxy;
