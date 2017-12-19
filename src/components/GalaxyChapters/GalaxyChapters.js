import React from 'react';
import PropTypes from 'prop-types';
import GalaxyChapterAction from '../GalaxyChapterAction/GalaxyChapterAction';

import './galaxy-chapters.scss';

function convertNumberToRomanNumeral(number) {
    let roman =  {"M" :1000, "CM":900, "D":500, "CD":400, "C":100, "XC":90, "L":50, "XL":40, "X":10, "IX":9, "V":5, "IV":4, "I":1};
    let str = "";

    for (let i of Object.keys(roman) ) {
        let q = Math.floor(number / roman[i]);
        number -= q * roman[i];
        str += i.repeat(q);
    }

    return str;
}

class GalaxyChapters extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.selectedChapterIndex !== this.props.selectedChapterIndex
            || nextProps.chapters !== this.props.chapters;
    }

    render() {
        console.log("GalaxyChapters :: rendering");

        return (
            <div className={'galaxy-chapters'}>
                {this.props.drawing.circles.map((mapping, i) => {
                    let chapter = this.props.chapters[i];
                    if (!mapping) return;

                    const classIfSelected = this.props.selectedChapterIndex === i ? 'selected' : '';
                    const chapterIndexText = convertNumberToRomanNumeral(i+1);

                    return (
                        <div key={i} className={`galaxy-chapter-container ${classIfSelected}`}
                             style={{left: mapping.x, top: mapping.y}}>
                            <div className="galaxy-chapter-click-handler" onClick={() => this.props.scrollHandler(chapter.id)}></div>
                            <div className="galaxy-chapter">
                                <div className="galaxy-chapter__index text-uppercase leading-font">
                                    <span className="galaxy-chapter__index__label ">Chapter </span>
                                    {chapterIndexText}
                                </div>

                                <div className="galaxy-chapter__content">
                                    <div className="galaxy-chapter__content__name text-uppercase leading-font">{chapter.name}</div>

                                    <div className="galaxy-chapter__content__action">
                                        <GalaxyChapterAction chapter={chapter} className={"galaxy-chapter__content__action__button"}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

GalaxyChapters.propTypes = {
    chapters: PropTypes.array.isRequired,
    drawing: PropTypes.object.isRequired,
    selectedChapterIndex: PropTypes.number.isRequired,
    scrollHandler: PropTypes.func.isRequired,
};

export default GalaxyChapters;
