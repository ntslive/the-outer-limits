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

            if (this.circleRings) {
                for (let i=0; i < this.circleRings.length; i++) {
                    this.circleRings[i].remove();
                };

                !!this.glow && this.glow.remove();
            }
        }

        let circleColour = this.props.isLive ? colourLive : colourDefault;
        let circleAttributes = {
            fill: circleColour,
        };

        this.circle = this.props.paper.circle(x, y, radius).attr(circleAttributes);

        if (this.props.isSelected) {
            this.circle.node.setAttribute("class", 'swell-circle');
            this.circle.node.setAttribute("style", `transform-origin: ${x}px ${y}px;`);

            this.glow = this.circle.glow({
                width: 100,
                color: circleColour,
            });

            this.circleRings = [];
            let numberOfRings = this.props.isLive ? 7 : 3;
            // Draw animated circles around dot.
            for(let i=0; i<numberOfRings; i++) {
                let circleRing = this.props.paper.circle(x, y, radius)
                    .attr(circleAttributes)
                    .attr({
                        "fill": "none",
                        "stroke": circleColour,
                        "stroke-width": lineWidth,
                        'fill-opacity': 0.9,
                        'stroke-opacity': 0.9,
                    });
                circleRing.node.setAttribute("class", 'pulse-circle');

                const animationDelay = 4 / numberOfRings;
                circleRing.node.setAttribute("style", `
                    transform-origin: ${x}px ${y}px;
                    animation: pulsate ${4}s infinite ease-out;
                    animation-delay: ${animationDelay*i}s;
                ;`);

                this.circleRings.push(circleRing);
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
