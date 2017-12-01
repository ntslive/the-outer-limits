import React from 'react';
import PropTypes from 'prop-types';
import {Raphael,Paper,Set,Circle,Ellipse,Image,Rect,Text,Path,Line} from 'react-raphael';

import './galaxy-chapters.scss';

class GalaxyChapters extends React.Component {
    render() {
        console.log(this.props.chapters.length);
        return (
            <div className={'galaxy-chapters'}>
                {this.props.chapters.map((chapter, i) => {
                    let mapping = this.props.drawing.items[i];
                    if (!mapping) return;

                    return (
                        <div key={i} className={'galaxy-chapter'}
                             style={{left: mapping.x, top: mapping.y}}>
                            <p>
                                {chapter.name}
                            </p>
                            <p>
                                {chapter.excerpt}
                            </p>
                        </div>
                    )
                })}
            </div>
        );
    }
}

GalaxyChapters.propTypes = {
    chapters: PropTypes.array.isRequired,
    drawing: PropTypes.object.isRequired,
};

export default GalaxyChapters;
