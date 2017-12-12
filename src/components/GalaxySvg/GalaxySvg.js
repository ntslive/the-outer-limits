import React from 'react';
import PropTypes from 'prop-types';
import {Circle, Path} from '../RaphaelComponents/RaphaelComponents';

import './galaxy-svg.scss';

class GalaxySvg extends React.Component {
    constructor(props) {
        super(props);

        this.props.drawing.addPaper(Raphael(0, 0, this.props.drawing.width, this.props.drawing.height));
        this.props.drawing.paper.canvas.setAttribute("id", "galaxy-svg");
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.selectedChapterId !== nextProps.selectedChapterId
            || this.props.liveChapterId !== nextProps.liveChapterId;
    }

    renderCircle(circle, index) {
        return (
            <Circle key={index} paper={this.props.drawing.paper}
                    x={circle.x} y={circle.y}
                    isSelected={index === this.props.selectedChapterId}
                    isLive={index === this.props.liveChapterId} />
        )
    }

    render() {
        console.log("GalaxySvg :: rendering");

        return (
            <div id="galaxy-svg">
                {this.props.drawing.paths.map( (path, index) => (
                    <Path key={index} paper={this.props.drawing.paper} d={path.d} />
                ))}

                {this.props.drawing.circles.map(this.renderCircle.bind(this))}
            </div>
        )
    }
};

GalaxySvg.propTypes = {
    drawing: PropTypes.object.isRequired,
    selectedChapterId: PropTypes.number.isRequired,
    liveChapterId: PropTypes.number.isRequired,
};

export default GalaxySvg;
