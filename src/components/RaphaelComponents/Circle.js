import React from 'react';
import PropTypes from 'prop-types';

class Circle extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.isSelected !== this.props.isSelected;
    }

    _renderCircle() {
        const lineWidth = 0.4;
        const colourRed = "#ff0000"

        if (!!this.circle) {
            this.circle.remove();
            !!this.circleRingOne && this.circleRingOne.remove();
            !!this.circleRingTwo && this.circleRingTwo.remove();
            !!this.circleRingThree && this.circleRingThree.remove();
            !!this.circleRingFour && this.circleRingFour.remove();
            !!this.glow && this.glow.remove();
        }

        let customAttrs = this.props.attr;
        customAttrs.fill = this.props.isSelected ? colourRed : "#7f7d7e";

        this.circle = this.props.paper.circle(this.props.x, this.props.y, this.props.r).attr(customAttrs);

        if (this.props.isSelected) {
            this.glow = this.circle.glow({width: 100,color: '#ff0000'})
            // this.circle.node.setAttribute("class", 'glow-circle');

            this.circleRingOne = this.props.paper.circle(this.props.x, this.props.y, this.props.r).attr(customAttrs)
                .attr({
                    "fill": "none",
                    "stroke": colourRed,
                    "stroke-width": lineWidth,
                });
            this.circleRingOne.node.setAttribute("class", 'pulse-circle');
            this.circleRingOne.node.setAttribute("style", `transform-origin: ${this.props.x + 'px'} ${this.props.y + 'px'};`); // force CSS to recognise center point of SVG.

            this.circleRingTwo = this.props.paper.circle(this.props.x, this.props.y, this.props.r).attr(customAttrs)
                .attr({
                    "fill": "none",
                    "stroke": colourRed,
                    "stroke-width": lineWidth,
                });
            this.circleRingTwo.node.setAttribute("class", 'pulse-circle');
            this.circleRingTwo.node.setAttribute("style", `
                transform-origin: ${this.props.x + 'px'} ${this.props.y + 'px'};
                animation-delay: 1s;
            ;`); // force CSS to recognise center point of SVG.

            this.circleRingThree = this.props.paper.circle(this.props.x, this.props.y, this.props.r).attr(customAttrs)
                .attr({
                    "fill": "none",
                    "stroke": colourRed,
                    "stroke-width": lineWidth,
                });
            this.circleRingThree.node.setAttribute("class", 'pulse-circle');
            this.circleRingThree.node.setAttribute("style", `
                transform-origin: ${this.props.x + 'px'} ${this.props.y + 'px'};
                animation-delay: 2s;
            ;`); // force CSS to recognise center point of SVG.

            this.circleRingFour = this.props.paper.circle(this.props.x, this.props.y, this.props.r).attr(customAttrs)
                .attr({
                    "fill": "none",
                    "stroke": colourRed,
                    "stroke-width": lineWidth,
                });
            this.circleRingFour.node.setAttribute("class", 'pulse-circle');
            this.circleRingFour.node.setAttribute("style", `
                transform-origin: ${this.props.x + 'px'} ${this.props.y + 'px'};
                animation-delay: 3s;
            ;`); // force CSS to recognise center point of SVG.
        }

        return null;
    }

    render() {
        console.log("Circle :: rendering");
        return this._renderCircle();
    }
}

Circle.propTypes = {
    paper: PropTypes.object.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    r: PropTypes.number,
    attr: PropTypes.object,
    animate: PropTypes.object,
    isSelected: PropTypes.bool.isRequired,
};

Circle.defaultProps = {
    attr: {
        stroke: "#7f7d7e",
        "stroke-width": 0.5,
        fill: "#7f7d7e",
    },
    r: 7,
};

export default Circle;
