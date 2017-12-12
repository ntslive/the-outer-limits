import React from 'react';

import './button.scss';

const Button = props => (
    <div className={`button text-uppercase ${props.className}`}>
        <div className="button__circle">
            <span className="button__circle__icon">+</span>
        </div>

        {!!props.text && (
            <div className="button__label">
                <div className="button__label__text">
                    {props.text}
                </div>
            </div>
        )}
    </div>
);

export default Button;
