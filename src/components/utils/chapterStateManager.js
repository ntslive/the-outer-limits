
const chapterStates = [
    'announce',
    'teaser',
    'live',
    'podcast',
];

const chapterStateManager = {
    /**
     * Returns state of given chapter
     *
     * @param chapter {} - chapter state to check
     * @return {string|string}
     */
    getChapterState: (chapter) => {
        return chapterStates[2];
    },

    /**
     * Returns interval checker which updates the state of chapters, executing the callback when there is a change.
     *
     * @param chapter {} - chapter state to observe
     * @param cb function - callback called whenver a change in state is detected
     */
    createChapterStateChecker: (chapter, cb) => {

    },
};

export default chapterStateManager;
