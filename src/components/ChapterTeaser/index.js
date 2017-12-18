import PropTypes from 'prop-types';
import React from 'react';
import $ from 'jquery';

import Icon from '../icon';
import Button from '../Button/index';
import NtsLogo from '../../../static/nts-logo-white.png';
import GalaxyChapterAction from '../GalaxyChapterAction/GalaxyChapterAction';
import PlayIcon from "../icon/play.icon";

import './chapter-teaser.scss';

const ChapterDescription = (props) => {
    console.log(props.chapter);
    const chapter = props.chapter;

    return (
        <div id="teaser-container" >
            <div id="teaser-nav">
                <Button id="teaser-nav__center" icon={PlayIcon} alternate></Button>
                <Button id="teaser-nav__right" icon={PlayIcon} alternate></Button>
            </div>

            <div id="teaser-content">
                <div id="teaser-content__title">
                    <a id="teaser-content__title__logo" href="https://www.nts.live" target="_blank"><img src={NtsLogo} alt="NTS Logo"/></a>

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
                    <GalaxyChapterAction chapter={chapter} />
                </div>

                <div id="teaser-footer__player">
                    play
                </div>
            </div>

            <div id="teaser-background-image" style={{backgroundImage: `url(${chapter.content.image_bg})`}} />
        </div>
    );
};

ChapterDescription.propTypes = {
    chapter: PropTypes.object.isRequired,
};

export default ChapterDescription;
