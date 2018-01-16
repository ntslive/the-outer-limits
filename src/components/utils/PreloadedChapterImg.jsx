const PropTypes = require('prop-types');
const React = require('react');

class PreloadedImg extends React.Component {
    constructor(props) {
        super(props);

        const thumbnailUrl = props.imageUrl.replace('/1600x1600/', '/200x200/');

        this.state = {
            imageSrc: thumbnailUrl,
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

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.imageSrc !== nextState.imageSrc;
    }

    render() {
        return (
            <div id={this.props.id} className={this.props.className} style={{backgroundImage: `url(${this.state.imageSrc})`}} />
        );
    }
}

PreloadedImg.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
};

module.exports = PreloadedImg;
