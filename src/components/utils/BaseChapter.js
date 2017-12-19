import React from 'react';
import ChapterRouter from "../../components/utils/ChapterRouter";

const BaseChapter = props => {
    const chapterId = props.location.pathname.split('/')[2];
    return (
        <main>
            <ChapterRouter chapters={props.data.allDataJson.edges[0].node.chapters} chapterId={chapterId} />
        </main>
    );
};

export default BaseChapter;
