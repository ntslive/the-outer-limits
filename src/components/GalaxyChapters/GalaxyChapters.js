import React from 'react';
import PropTypes from 'prop-types';

import './galaxy-chapters.scss';

const STATUSES = ['coming', 'teaser', 'live', 'podcast'];

class GalaxyChapters extends React.Component {
    constructor(props) {
        super(props);
    }

    renderStatusBasedContent(chapter) {
        let status = STATUSES.includes(chapter.status) && chapter.status;

        let content;
        if (status === STATUSES[0]) {
            // coming
            content = (
                <div>
                    <span>Coming Soon</span>
                    <br />
                    <span>01.01.18</span>
                    <br />
                    <span>Live on NTS</span>
                </div>
            )
        } else if (status === STATUSES[1]) {
            // teaser
            content = (
                <div>
                    <span>PLAY TEASER</span>
                    <br />
                    <span>Coming Soon</span>
                    <br />
                    <span>01.01.18</span>
                    <br />
                    <span>Live on NTS</span>
                </div>
            );
        } else if (status === STATUSES[2]) {
            // live
            content = (
                <div>
                    <span>LISTEN LIVE</span>
                </div>
            );
        } else if (status === STATUSES[3]) {
            // podcast
            content = (
                <div>
                    <span>LISTEN BACK</span>
                </div>
            );
        }

        return content;
    }

    render() {

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

                            {this.renderStatusBasedContent(chapter)}
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
