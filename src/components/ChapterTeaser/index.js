import { withPrefix } from "gatsby-link";
import {withRouter} from 'react-router-dom';
import $ from 'jquery';
import PropTypes from 'prop-types';
import React from 'react';

import Button from '../Button/index';
import GalaxyChapterAction from '../GalaxyChapterAction/GalaxyChapterAction';
import Icon from '../icon';
import Player from '../Player/index';

import CrossIcon from "../icon/cross.icon";
import HomeIcon from "../icon/home.icon";
import NtsLogo from '../../../static/nts-logo-white.png';

import './chapter-teaser.scss';

class ChapterTeaser extends React.Component {
    constructor(props) {
        super(props);

        this._goToGalaxy = this._goToGalaxy.bind(this);
    }

    _goToGalaxy() {
        this.props.history.push(withPrefix('/'));
    }

    render() {
        console.log(this.props.chapter);
        const chapter = this.props.chapter;

        return (
            <div id="teaser-container">
                <div id="teaser-nav">
                    <Button id="teaser-nav__center" icon={HomeIcon} alternate onClick={this._goToGalaxy}></Button>
                    <Button id="teaser-nav__right" icon={CrossIcon} alternate onClick={this._goToGalaxy}></Button>
                </div>

                <div id="teaser-content">
                    <div id="teaser-content__title">
                        <a id="teaser-content__title__logo" href="https://www.nts.live" target="_blank"><img
                            src={NtsLogo} alt="NTS Logo"/></a>

                        <div id="teaser-content__title__text">
                            <h1 className="text-uppercase leading-font">{chapter.name}</h1>
                            <h5>Jenny Maya: The Outer Limits</h5>
                        </div>
                    </div>

                    <div id="teaser-content__description">
                        {chapter.content.excerpt}
                    </div>

                    <div id="teaser-content__credits">
                        <div className="text-uppercase text-center">CREDITS</div>

                        <div className="teaser-content__credits__col">
                            {chapter.content.credits[0].title} - {chapter.content.credits[0].name}
                        </div>
                        <div className="teaser-content__credits__col">
                            {chapter.content.credits[1].title} - {chapter.content.credits[1].name}
                        </div>
                    </div>
                </div>

                <div id="teaser-footer">
                    <div id="teaser-footer_status">
                        <GalaxyChapterAction chapter={chapter} hideButton={true} />
                    </div>

                    <div id="teaser-footer__player">
                        <Player secretToken={chapter.content.teaserSoundcloudSecretToken} trackID={chapter.content.teaserSoundcloudTrackID}/>
                    </div>
                </div>

                <div id="teaser-background-image" style={{backgroundImage: `url(${chapter.content.image_bg})`}}/>
            </div>
        );
    }
}

ChapterTeaser.propTypes = {
    chapter: PropTypes.object.isRequired,
};

export default withRouter(ChapterTeaser);
