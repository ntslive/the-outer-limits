import React from 'react';
import PropTypes from 'prop-types';

class Circle extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.isSelected !== this.props.isSelected
            || nextProps.isLive !== this.props.isLive;
    }

    _renderCircle() {
        const lineWidth = 0.4;
        const colourLive = "#ff0000";
        const colourDefault = "#FFFFFF";
        const x = this.props.x;
        const y = this.props.y;
        const radius = 7;

        if (!!this.circle) {
            this.circle.remove();
            !!this.circleRing1 && this.circleRing1.remove();
            !!this.circleRing2 && this.circleRing2.remove();
            !!this.circleRing3 && this.circleRing3.remove();
            !!this.circleRing4 && this.circleRing4.remove();
            !!this.glow && this.glow.remove();
        }

        let circleColour = colourDefault;
        if (this.props.isLive) {
            circleColour = colourLive;
        }

        let circleAttributes = {
            fill: circleColour,
        };

        this.circle = this.props.paper.circle(x, y, radius).attr(circleAttributes);

        if (this.props.isSelected) {
            this.glow = this.circle.glow({
                width: 100,
                color: circleColour,
            });

            // Draw animated circles around dot.
            for(let i=0; i<4; i++) {
                let circlePropName = `circleRing${i + 1}`;
                this[circlePropName] = this.props.paper.circle(x, y, radius)
                    .attr(circleAttributes)
                    .attr({
                        "fill": "none",
                        "stroke": circleColour,
                        "stroke-width": lineWidth,
                        'fill-opacity': 0.9,
                        'stroke-opacity': 0.9,
                    });
                this[circlePropName].node.setAttribute("class", 'pulse-circle');
                this[circlePropName].node.setAttribute("style", `
                    transform-origin: ${x}px ${y}px;
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
    isSelected: PropTypes.bool.isRequired,
    isLive: PropTypes.bool.isRequired,
};

export default Circle;
