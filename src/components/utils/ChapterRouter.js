/* global graphql */

import PropTypes from 'prop-types';
import React from 'react';

import Chapter from '../Chapter';

const ChapterRouter = (props) => {
    const pageChapterId = props.chapterId;
    const chapters = props.chapters;

    let chapter;
    for (let i = 0; i < chapters.length; i++) {
        if (chapters[i].id === pageChapterId) {
            chapter = chapters[i];
            break;
        }
    }

    return (
        <main id="chapter-page">
            { chapter
                ? (<Chapter chapter={chapter} />)
                : (<h1>Unknown Chapter Id {pageChapterId}</h1>)
            }
        </main>
    );
};

ChapterRouter.propTypes = {
    chapterId: PropTypes.string.isRequired,
    chapters: PropTypes.array.isRequired,
};

export default ChapterRouter;
