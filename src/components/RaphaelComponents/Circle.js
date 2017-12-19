import React from 'react';
import PropTypes from 'prop-types';

import styleCreator from '../utils/styleCreator';

class Circle extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.isSelected !== this.props.isSelected
            || nextProps.isLive !== this.props.isLive;
    }

    componentWillUnmount() {
        this._clearElements();
        console.log("Circle :: Unmounting");
    }

    _clearElements() {
        if (!!this.circle) {
            this.circle.remove();

            if (this.circleRings) {
                for (let i=0; i < this.circleRings.length; i++) {
                    this.circleRings[i].remove();
                };

                !!this.outerGlow && this.outerGlow.remove();
                !!this.innerGlow && this.innerGlow.remove();
            }
        }
    }

    _renderCircle() {
        const lineWidth = 0.2;
        const colourLive = "#ff0000";
        const colourDefault = "#FFFFFF";
        const x = this.props.x;
        const y = this.props.y;
        const radius = 6;

        this._clearElements();

        let circleColour = this.props.isLive ? colourLive : colourDefault;
        let circleAttributes = {
            fill: circleColour,
            "stroke-opacity": 0,
        };

        this.circle = this.props.paper.circle(x, y, radius).attr(circleAttributes);

        if (this.props.isSelected) {
            this.circle.node.setAttribute("class", 'swell-circle');
            this.circle.node.setAttribute("style", ` ${styleCreator.createTransformOriginStyle(`${x}px ${y}px`)}; `);

            this.innerGlow = this.circle.glow({
                width: 30,
                color: circleColour,
                opacity: 0.4
            });

            this.outerGlow = this.circle.glow({
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
                    ${styleCreator.createTransformOriginStyle(`${x}px ${y}px`)}
                    ${styleCreator.createAnimationStyle(`pulsate ${4}s infinite ease-out`)}
                    ${styleCreator.createAnimationDelayStyle(animationDelay*i + 's')}
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
