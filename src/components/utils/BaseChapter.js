import React from 'react';
import ChapterRouter from "../../components/utils/ChapterRouter";

const BaseChapter = (props) => {
    const pathnameSplit = props.location.pathname.split('/');
    const chapterId = pathnameSplit[pathnameSplit.length - 2];

    return (
        <main>
            <ChapterRouter chapters={props.data.allDataJson.edges[0].node.chapters} chapterId={chapterId} />
        </main>
    );
};

export default BaseChapter;
