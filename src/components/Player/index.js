import React from 'react';

const Player = (props) => {
    const trackID = props.trackID;
    const secretToken = props.secretToken;
    console.log('prop', props);

    let iframeSrcUrl = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/" + trackID
    if (secretToken && secretToken.length > 0) {
        iframeSrcUrl = iframeSrcUrl + `%3Fsecret_token%3D${secretToken}`
    }
    iframeSrcUrl = iframeSrcUrl + "&amp;color=%23767c7c&amp;inverse=true&amp;auto_play=true&amp;show_user=true"

    return (
        <iframe width="100%" height="20" scrolling="no" frameBorder="no" src={iframeSrcUrl}></iframe>
    );
};

// Player.propTypes = {
//     trackID: PropTypes.number.isRequired,
// };

export default Player;
