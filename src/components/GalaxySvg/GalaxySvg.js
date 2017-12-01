import React from 'react';
import PropTypes from 'prop-types';
import {Raphael,Paper,Set,Circle,Ellipse,Image,Rect,Text,Path,Line} from 'react-raphael';

import './galaxy-svg.scss';

class GalaxySvg extends React.Component {
    renderCircle(circle, index) {
        let circleProps = circle;

        if (index === this.props.selectedChapterId) {
            circleProps.attr.fill = "#ff0000";
        }

        return (
            <Circle key={index} {...circle} />
        )
    }

    render() {
        return (
            <Paper id="galaxy-svg" width={this.props.drawing.width} height={this.props.drawing.height}>
                <Set>
                    {this.props.drawing.circles.map(this.renderCircle.bind(this))}

                    {this.props.drawing.paths.map( (path, index) => (
                        <Path {...path} key={index}/>
                    ))}
                </Set>
            </Paper>
        )
    }
};

GalaxySvg.propTypes = {
    drawing: PropTypes.object.isRequired,
    selectedChapterId: PropTypes.number.isRequired,
};

export default GalaxySvg;
