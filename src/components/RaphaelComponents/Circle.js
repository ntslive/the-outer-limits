import React from 'react';
import PropTypes from 'prop-types';

class Circle extends React.Component {
    constructor(props) {
        super(props);
        this.circle = props.paper.circle(props.x, props.y, props.r).attr(props.attr);
    }

    componentDidUpdate() {
        this.circle.remove();
        this.circle = this.props.paper.circle(this.props.x, this.props.y, this.props.r).attr(this.props.attr);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.isSelected !== this.props.isSelected;
    }

    render() {
        console.log("Circle :: rendering");
        return null;
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
    r: 10,
};

export default Circle;
