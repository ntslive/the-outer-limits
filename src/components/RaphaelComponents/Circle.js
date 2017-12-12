import React from 'react';
import PropTypes from 'prop-types';

class Circle extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.isSelected !== this.props.isSelected;
    }

    _renderCircle() {
        const lineWidth = 0.4;
        const colourRed = "#ff0000";
        const colourGrey = "#7f7d7e";
        const x = this.props.x;
        const y = this.props.y;
        const radius = this.props.r;
        let customAttributes = {
            ...this.props.attr,
            fill: this.props.isSelected ? colourRed : colourGrey,
        };

        if (!!this.circle) {
            this.circle.remove();
            !!this.circleRing1 && this.circleRing1.remove();
            !!this.circleRing2 && this.circleRing2.remove();
            !!this.circleRing3 && this.circleRing3.remove();
            !!this.circleRing4 && this.circleRing4.remove();
            !!this.glow && this.glow.remove();
        }

        this.circle = this.props.paper.circle(x, y, radius).attr(customAttributes);

        if (this.props.isSelected) {
            this.glow = this.circle.glow({
                width: 100,
                color: colourRed,
            });

            // Draw animated circles around dot.
            for(let i=0; i<4; i++) {
                let circlePropName = `circleRing${i + 1}`;
                this[circlePropName] = this.props.paper.circle(this.props.x, this.props.y, this.props.r)
                    .attr(customAttributes)
                    .attr({
                        "fill": "none",
                        "stroke": colourRed,
                        "stroke-width": lineWidth,
                    });
                this[circlePropName].node.setAttribute("class", 'pulse-circle');
                this[circlePropName].node.setAttribute("style", `
                    transform-origin: ${this.props.x + 'px'} ${this.props.y + 'px'};
                    animation-delay: ${i}s;
                ;`);
            }
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
        "stroke": "#7f7d7e",
        "stroke-width": 0.5,
        "fill": "#7f7d7e",
    },
    r: 7,
};

export default Circle;
