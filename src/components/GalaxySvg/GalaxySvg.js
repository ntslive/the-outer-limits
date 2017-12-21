import React from 'react';
import PropTypes from 'prop-types';
import {Circle, Path} from '../RaphaelComponents/RaphaelComponents';

import './galaxy-svg.scss';

class GalaxySvg extends React.Component {
    constructor(props) {
        super(props);

        let paperWidth = this.props.drawing.width;
        if (!this.props.drawing.isMobile) paperWidth -= 800; // manually cut width on desktop

        this.props.drawing.addPaper(Raphael(0, 0, paperWidth, this.props.drawing.height));
        this.props.drawing.paper.canvas.setAttribute("id", "galaxy-svg");
    }

    componentWillUnmount() {
        this.props.drawing.paper.remove();
        console.log("GalaxySvg :: Unmounting");
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props.selectedChapterIndex !== nextProps.selectedChapterIndex
            || this.props.liveChapterIndex !== nextProps.liveChapterIndex;
    }

    renderCircle(circle, index) {
        const isSelected = this.props.drawing.isMobile ? true : index === this.props.selectedChapterId;
        console.log(isSelected);
        return (
            <Circle key={index} paper={this.props.drawing.paper}
                    isMobile={this.props.drawing.isMobile}
                    isSelected={isSelected}
                    x={circle.x} y={circle.y}
                    isLive={index === this.props.liveChapterIndex}/>
        )
    }

    render() {
        console.log("GalaxySvg :: rendering");

        return (
            <div>
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
    selectedChapterIndex: PropTypes.string.isRequired,
    liveChapterIndex: PropTypes.number.isRequired,
};

export default GalaxySvg;
