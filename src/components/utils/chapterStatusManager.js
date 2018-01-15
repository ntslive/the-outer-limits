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
     * @param times {ChapterTimes} optional - ChapterTimes object which to use for date comparisons.
     * @return {string|string}
     */
    getChapterStatus: (chapter, times) => {
        return STATUSES[2];

        if (!chapter || !chapter.broadcastDate || !chapter.broadcastStartTime || !chapter.broadcastEndTime) return STATUSES[0];

        const chapterTime = times || new ChapterTimes(chapter);

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
     * Creates an interval, checking for a change in chapter status. When a change is detected, the callback is called.
     *
     * @param chapter {} - chapter to observe for status change
     * @param cb function - callback called whenever a change in status is detected
     */
    createChapterStatusChecker: (chapter, cb) => {
        console.log("initialising chapter status interval");
        const chapterTimes = new ChapterTimes(chapter);
        let currentStatus = chapterStatusManager.getChapterStatus(chapter, chapterTimes);

        return setInterval(() => {
            console.log("checking chapter status");
            const newStatus = chapterStatusManager.getChapterStatus(chapter, chapterTimes);

            if (currentStatus !== newStatus) {
                currentStatus = newStatus;
                cb(newStatus);
            }
        }, 5000);
    },
};

export default chapterStatusManager;
