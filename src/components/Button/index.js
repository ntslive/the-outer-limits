import React from 'react';

import Icon from '../icon';

import './button.scss';

const Button = props => (
    <div id={props.id} className={`button ${props.alternate ? 'button--alt' : ''} text-uppercase ${props.className} `} onClick={props.onClick}>
        <div className="button__circle">
            {props.icon ? <Icon icon={props.icon} className="button__circle__icon" fill={'white'} /> : <span className="button__circle__icon">+</span>}
        </div>

        {!!props.text && (
            <div className="button__label">
                <div className="button__label__text">
                    {props.text}
                </div>
            </div>
        )}
    </div>
)

Button.defaultProps = {
    className: "",
    id: "",
    alternate: false,
};

export default Button;
