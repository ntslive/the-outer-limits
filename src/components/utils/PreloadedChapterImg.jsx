const PropTypes = require('prop-types');
const React = require('react');

function preloadImage(imageUrlToPreload, cb) {
    let newImage = new Image();
    newImage.onload = cb;
    newImage.src = imageUrlToPreload;
}

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
        if (this.props.preventLoad) return;

        preloadImage(this.props.imageUrl, () => {
            this.setState({
                imageSrc: this.props.imageUrl,
            });
        });
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            isActive: newProps.active,
            animationDirection: newProps.animationDirection || '',
            preventLoad: newProps.preventLoad,
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.imageSrc !== nextState.imageSrc
            || this.state.isActive !== nextState.isActive
            || this.props.preventLoad !== nextProps.preventLoad;
    }

    componentDidUpdate() {
        if (this.props.preventLoad) return;

        preloadImage(this.props.imageUrl, () => {
            this.setState({
                imageSrc: this.props.imageUrl,
            });
        });
    }

    render() {
        const isActiveClass = this.props.active ? 'active' : "inactive";

        let animationClass = '';
        if (this.props.animationDirection === "upwards") {
            animationClass = `${isActiveClass}-up`;
        } else if (this.props.animationDirection === "downwards") {
            animationClass = `${isActiveClass}-down`;
        }

        if (this.props.preventLoad) return null;

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
    preventLoad: PropTypes.bool,
};

module.exports = PreloadedImg;
