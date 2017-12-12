import React from 'react';

import './icons.scss';

const Icon = props => (
    <svg className={props.className} width={props.width} height={props.height} fill={props.fill}>
        <use xlinkHref={`#${props.icon.id}`} />
    </svg>
);

export default Icon;
