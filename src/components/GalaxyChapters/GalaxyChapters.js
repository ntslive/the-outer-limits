import React from 'react';
import PropTypes from 'prop-types';

import './galaxy-chapters.scss';
import GalaxyChapterStatusText from '../GalaxyChapterStatusText/GalaxyChapterStatusText';
import chapterStatusManager from "../utils/chapterStatusManager";

if (!String.prototype.repeat) { // polyfill for repeat function in IE
    String.prototype.repeat = function (count) {
        if (this == null) {
            throw new TypeError(`can't convert ${this} to object`);
        }
        const str = `${this}`;
        count = +count;
        if (count != count) {
            count = 0;
        }
        if (count < 0) {
            throw new RangeError('repeat count must be non-negative');
        }
        if (count == Infinity) {
            throw new RangeError('repeat count must be less than infinity');
        }
        count = Math.floor(count);
        if (str.length == 0 || count == 0) {
            return '';
        }
        // Ensuring count is a 31-bit integer allows us to heavily optimize the
        // main part. But anyway, most current (August 2014) browsers can't handle
        // strings 1 << 28 chars or longer, so:
        if (str.length * count >= 1 << 28) {
            throw new RangeError('repeat count must not overflow maximum string size');
        }
        let rpt = '';
        for (let i = 0; i < count; i++) {
            rpt += str;
        }
        return rpt;
    };
}

function convertNumberToRomanNumeral(number) {
    const roman = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    let str = "";

    for (const i of Object.keys(roman)) {
        const q = Math.floor(number / roman[i]);
        number -= q * roman[i];
        str += i.repeat(q);
    }

    return str;
}

class GalaxyChapters extends React.Component {
    shouldComponentUpdate(nextProps) {
        return nextProps.selectedChapterIndex !== this.props.selectedChapterIndex
            || nextProps.chapters !== this.props.chapters;
    }

    render() {
        const isMobile = this.props.drawing.isMobile;

        return (
            <div className={'galaxy-chapters'}>
                {this.props.drawing.circles.map((mapping, i) => {
                    if (!mapping) return null;

                    const chapter = this.props.chapters[i];
                    const chapterStatus = chapterStatusManager.getChapterStatus(chapter);

                    const x = isMobile ? 24 : mapping.x;
                    const classIfSelected = (this.props.selectedChapterIndex === i) || isMobile ? 'selected' : '';
                    const chapterIndexText = convertNumberToRomanNumeral(i + 1);

                    return (
                        <div key={i} className={`galaxy-chapter-container ${classIfSelected}`} style={{left: x, top: mapping.y}}>
                            <div className="galaxy-chapter-click-handler" onClick={() => this.props.scrollHandler(i)} />
                            <div className="galaxy-chapter">
                                <div className="galaxy-chapter__index text-uppercase leading-font">
                                    <span className="galaxy-chapter__index__label ">Chapter </span>
                                    {chapterIndexText}
                                </div>

                                <div className="galaxy-chapter__content">
                                    <div className="galaxy-chapter__content__name text-uppercase leading-font">{chapter.name}</div>

                                    <div className="galaxy-chapter__content__action">
                                        <GalaxyChapterStatusText chapter={chapter} className={"galaxy-chapter__content__action__button"} chapterStatus={chapterStatus} showButton />
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
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
