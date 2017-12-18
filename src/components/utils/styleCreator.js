
function createTransformOriginStyle(propertyValue) {
    return `
        -moz-transform-origin: ${propertyValue};
        -o-transform-origin: ${propertyValue};
        -ms-transform-origin: ${propertyValue};
        -webkit-transform-origin: ${propertyValue};
        transform-origin: ${propertyValue};
    `;
}

function createAnimationDelayStyle(propertyValue) {
    return `
        -webkit-animation-delay: ${propertyValue};
        -moz-animation-delay: ${propertyValue};
        -ms-animation-delay: ${propertyValue};
        -o-animation-delay: ${propertyValue};
        animation-delay: ${propertyValue};
    `;
}

function createAnimationStyle(propertyValue) {
    return `
        -webkit-animation: ${propertyValue};
        -moz-animation: ${propertyValue};
        -ms-animation: ${propertyValue};
        -o-animation: ${propertyValue};
        animation: ${propertyValue};
    `;
}

export default {
    createTransformOriginStyle,
    createAnimationDelayStyle,
    createAnimationStyle,
};
