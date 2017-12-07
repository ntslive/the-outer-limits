import React from 'react';
import PropTypes from 'prop-types';
import GalaxyChapter from '../GalaxyChapter/GalaxyChapter';

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
                    const chapterIndexText = `Chapter ${i+1}`;

                    return (
                        <div key={i} className={`galaxy-chapter ${classIfSelected}`}
                             style={{left: mapping.x, top: mapping.y}}>
                            <span>{chapterIndexText}</span>
                            <br />
                            <p>
                                {chapter.name}
                            </p>
                            <p>
                                {chapter.excerpt}
                            </p>

                            <GalaxyChapter status={chapter.status}/>
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
