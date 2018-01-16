const PropTypes = require('prop-types');
const React = require('react');

class PreloadedImg extends React.Component {
    constructor(props) {
        super(props);

        const thumbnailUrl = props.imageUrl.replace('/1600x1600/', '/200x200/');

        this.state = {
            imageSrc: thumbnailUrl,
            isActive: props.active,
            animationDirection: '',
        };
    }

    componentDidMount() {
        let newImage = new Image();
        newImage.onload = () => {
            this.setState({
                imageSrc: this.props.imageUrl,
            });
        };
        newImage.src = this.props.imageUrl;
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            isActive: newProps.active,
            animationDirection: newProps.animationDirection || '',
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.imageSrc !== nextState.imageSrc
            || this.state.isActive !== nextState.isActive;
    }

    render() {
        const isActiveClass = this.props.active ? 'active' : "inactive";

        let animationClass = '';
        if (this.props.animationDirection === "upwards") {
            animationClass = `${isActiveClass}-up`;
        } else if (this.props.animationDirection === "downwards") {
            animationClass = `${isActiveClass}-down`;
        }

        return (
            <div id={this.props.id} className={`${this.props.className} ${isActiveClass} ${animationClass}`} style={{backgroundImage: `url(${this.state.imageSrc})`}} />
        );
    }
}

PreloadedImg.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    active: PropTypes.bool,
    animationDirection: PropTypes.string, // "upwards" or "downwards"
};

module.exports = PreloadedImg;
