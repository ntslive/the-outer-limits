import React from 'react';
import PropTypes from 'prop-types';

const Player = (props) => {
    const trackID = props.trackID;
    const secretToken = props.secretToken;

    let iframeSrcUrl = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackID}`;
    if (secretToken && secretToken.length > 0) {
        iframeSrcUrl += `%3Fsecret_token%${secretToken}`;
    }
    iframeSrcUrl += `&amp;color=%23767c7c&amp;inverse=true&amp;auto_play=true&amp;show_user=true`;

    return (
        <iframe width="100%" height="20" scrolling="no" frameBorder="no" src={iframeSrcUrl} />
    );
};

Player.propTypes = {
    trackID: PropTypes.string,
    secretToken: PropTypes.string,
};

export default Player;
