import React from 'react';
import PropTypes from 'prop-types';
import {Circle, Path} from '../RaphaelComponents/RaphaelComponents';

import './galaxy-svg.scss';

class GalaxySvg extends React.Component {
    constructor(props) {
        super(props);

        this.props.drawing.addPaper(Raphael(0, 0, this.props.drawing.width, this.props.drawing.height));
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.selectedChapterId !== nextProps.selectedChapterId;
    }

    renderCircle(circle, index) {
        let circleProps = {...circle};

        return (
            <Circle key={index} paper={this.props.drawing.paper} isSelected={index === this.props.selectedChapterId} {...circleProps} />
        )
    }

    render() {
        console.log("GalaxySvg :: rendering");

        return (
            <div id="galaxy-svg">
                {this.props.drawing.circles.map(this.renderCircle.bind(this))}

                {this.props.drawing.paths.map( (path, index) => (
                    <Path key={index} paper={this.props.drawing.paper} {...path} />
                ))}
            </div>
        )
    }
};

GalaxySvg.propTypes = {
    drawing: PropTypes.object.isRequired,
    selectedChapterId: PropTypes.number.isRequired,
};

export default GalaxySvg;
