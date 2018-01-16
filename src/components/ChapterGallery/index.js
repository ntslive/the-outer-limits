import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

import './chapter-gallery.scss';

class ChapterGallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chapter: props.chapter,
        };
    }

    render() {
        return (
            <div id="gallery">
                <h2>gallery</h2>
            </div>
        );
    }
}

ChapterGallery.propTypes = {
    chapter: PropTypes.object.isRequired,
};

export default withRouter(ChapterGallery);
