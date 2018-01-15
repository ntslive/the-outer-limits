import PropTypes from 'prop-types';
import React from 'react';

import Icon from '../icon';
import AxisIcon from "../icon/axis-logo.icon";
import NtsIcon from "../icon/nts-logo.icon";

import './header-mini.scss';

const HeaderMini = props => (
    <div id="header-mini">
        <a className="header-mini__logo" href="https://www.nts.live" target="_blank" rel="noopener noreferrer"><Icon icon={NtsIcon} /></a>
        <a className="header-mini__logo header-mini__logo--axis" href="https://axisrecords.com/" target="_blank" rel="noopener noreferrer"><Icon icon={AxisIcon} /></a>

        <div id="header-mini__text">
            <h1 className="text-uppercase leading-font">{props.chapter.name}</h1>
            <h5>Jeff Mills: The Outer Limits</h5>
        </div>
    </div>
);

HeaderMini.propTypes = {
    chapter: PropTypes.object.isRequired,
};

export default HeaderMini;
