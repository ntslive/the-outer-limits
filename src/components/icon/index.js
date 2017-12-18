import React from 'react';

import './icons.scss';

const Icon = props => {
    let iconClassName = "";

    switch(props.icon.id) {
        case "play":
            iconClassName = "icon-play";
            break;
        case "short-left-arrow":
            iconClassName = "icon-short-arrow";
            break;
        case "short-right-arrow":
            iconClassName = "icon-short-arrow";
            break;
        case "long-arrow":
            iconClassName = "icon-long-arrow";
            break;
        default:
            console.error("Unknown icon id", props.icon.id);
            break;
    }

    return (
        <svg className={`${iconClassName} ${props.className}`} width={props.width} height={props.height} fill={props.fill}>
            <use xlinkHref={`#${props.icon.id}`} />
        </svg>
    );
}

export default Icon;
