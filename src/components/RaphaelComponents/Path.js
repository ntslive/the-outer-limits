import React from 'react';
import PropTypes from 'prop-types';
import styleCreator from '../utils/styleCreator';

class Path extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.d !== this.props.d;
    }

    componentWillUnmount() {
        this._clearElements();
        console.log("Path :: Unmounting");
    }

    _clearElements() {
        !!this.path && this.path.remove();
    }

    _renderPath() {
        this._clearElements();

        const pathAttributes = {
            "stroke": "#7f7d7e",
            "stroke-width": 0.5,
        }

        this.path = this.props.paper
            .path(this.props.d)
            .attr(pathAttributes);

        const pathLength = this.path.getTotalLength();

        this.path.node.setAttribute("style", `
            stroke-dasharray: ${pathLength};
            stroke-dashoffset: ${pathLength};
            ${styleCreator.createAnimationDelayStyle('0.5s')}
        ;`);
        this.path.node.setAttribute("class", 'draw-path');

        return null;
    }

    render() {
        console.log("Path :: rendering");
        return this._renderPath();
    }
}

Path.propTypes = {
    paper: PropTypes.object.isRequired,
    d: PropTypes.string.isRequired,
};

export default Path;
