import moment from 'moment-timezone';

import ChapterTimes from './ChapterTimes';

const STATUSES = ['coming', 'teaser', 'live', 'podcastComing', 'podcast'];

function hasAudioType(chapter, type) {
    for (let i = 0; i < chapter.audio.length; i++) {
        if (chapter.audio[i].type === type) {
            return true;
        }
    }

    return false;
}

const chapterStatusManager = {
    STATUSES,

    /**
     * Returns state of given chapter
     *
     * @param chapter {} - chapter state to check
     * @return {string|string}
     */
    getChapterStatus: (chapter) => {
        if (!chapter || !chapter.broadcastDate || !chapter.broadcastStartTime || !chapter.broadcastEndTime) return STATUSES[0];

        const chapterTime = new ChapterTimes(chapter);

        const startTime = chapterTime.startMoment;
        const endTime = chapterTime.endMoment;
        const now = moment();

        if (now <= startTime) {
            return hasAudioType(chapter, 'teaser')
                ? STATUSES[1] // teaser
                : STATUSES[0]; // coming
        }

        if (now < endTime) {
            return STATUSES[2]; // live
        }

        return hasAudioType(chapter, 'podcast')
            ? STATUSES[4] // podcast
            : STATUSES[3]; // podcastIncoming
    },

    /**
     * Returns interval checker which updates the state of chapters, executing the callback when there is a change.
     *
     * @param chapter {} - chapter state to observe
     * @param cb function - callback called whenver a change in state is detected
     */
    createChapterStatusChecker: (chapter, cb) => {
        console.log("initialising chapter state");
        let startTime = '';
        let endTime = '';
        let currentState = '';

        return setInterval(() => {
            console.log("checking chapter state");
            if (currentState !== 'chapterCurrentState') {
                // if state has changed
                let newState = '';
                currentState = newState;
                cb(newState);
            }
        }, 2000);
    },
};

export default chapterStatusManager;
