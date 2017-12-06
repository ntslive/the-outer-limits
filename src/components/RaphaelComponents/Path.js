import React from 'react';
import PropTypes from 'prop-types';

class Path extends React.Component {
    constructor(props) {
        super(props);
        this.path = props.paper.path(props.d).attr(props.attr);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.d !== this.props.d
            || nextProps.attr !== this.props.attr;
    }

    render() {
        console.log("Path :: rendering");
        return null;
    }
}

Path.propTypes = {
    paper: PropTypes.object.isRequired,
    d: PropTypes.string.isRequired,
    attr: PropTypes.object,
    animate: PropTypes.object,
};

Path.defaultProps = {
    attr: {
        "stroke": "#7f7d7e",
        "stroke-width": 0.5,
    },
};

export default Path;
