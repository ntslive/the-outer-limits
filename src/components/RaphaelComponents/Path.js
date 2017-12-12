import React from 'react';
import PropTypes from 'prop-types';

class Path extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.d !== this.props.d;
    }

    _renderPath() {
        const pathAttributes = {
            "stroke": "#7f7d7e",
            "stroke-width": 0.5,
        }

        this.path = this.props.paper
            .path(this.props.d)
            .attr(pathAttributes);

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
