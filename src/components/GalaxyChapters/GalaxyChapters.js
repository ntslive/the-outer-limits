import React from 'react';
import PropTypes from 'prop-types';
import GalaxyChapterAction from '../GalaxyChapterAction/GalaxyChapterAction';

import './galaxy-chapters.scss';

class GalaxyChapters extends React.Component {
    constructor(props) {
        super(props);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.selectedChapterId !== this.props.selectedChapterId
            || nextProps.chapters !== this.props.chapters;
    }

    render() {
        console.log("GalaxyChapters :: rendering");

        return (
            <div className={'galaxy-chapters'}>
                {this.props.drawing.circles.map((mapping, i) => {
                    let chapter = this.props.chapters[i];
                    if (!mapping) return;

                    const classIfSelected = this.props.selectedChapterId === chapter.id ? 'selected' : '';
                    const chapterIndexText = Array(i+2).join('I');

                    return (
                        <div key={i} className={`galaxy-chapter-container ${classIfSelected}`}
                             style={{left: mapping.x, top: mapping.y}}>
                            <div className="galaxy-chapter">
                                <div className="galaxy-chapter__index text-uppercase leading-font">
                                    <span className="galaxy-chapter__index__label ">Chapter </span>
                                    {chapterIndexText}
                                </div>

                                <div className="galaxy-chapter__content">
                                    <div className="galaxy-chapter__content__name text-uppercase leading-font">{chapter.name}</div>

                                    <div className="galaxy-chapter__content__action">
                                        <GalaxyChapterAction chapter={chapter}/>
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
    selectedChapterId: PropTypes.number.isRequired,
};

export default GalaxyChapters;
