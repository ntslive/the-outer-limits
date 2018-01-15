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
        return this.props.selectedChapterIndex !== nextProps.selectedChapterIndex
            || this.props.liveChapterIndex !== nextProps.liveChapterIndex;
    }

    componentWillUnmount() {
        this.props.drawing.paper.remove();
        console.log("GalaxySvg :: Unmounting");
    }

    renderCircle(circle, index) {
        const isSelected = this.props.drawing.isMobile ? true : index === this.props.selectedChapterIndex;

        return (
            <Circle
                key={index} paper={this.props.drawing.paper}
                isMobile={this.props.drawing.isMobile}
                isSelected={isSelected}
                x={circle.x} y={circle.y}
                isLive={index === this.props.liveChapterIndex}
            />
        );
    }

    render() {
        console.log("GalaxySvg :: rendering");

        return (
            <div>
                {this.props.drawing.paths.map((path, index) => (
                    <Path key={index} paper={this.props.drawing.paper} d={path.d} />
                ))}

                {this.props.drawing.circles.map(this.renderCircle.bind(this))}
            </div>
        );
    }
}

GalaxySvg.propTypes = {
    drawing: PropTypes.object.isRequired,
    selectedChapterIndex: PropTypes.number.isRequired,
    liveChapterIndex: PropTypes.number.isRequired,
};

export default GalaxySvg;
