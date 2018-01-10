import moment from 'moment-timezone';

const INPUT_TIMEZONE = 'Europe/London';
const INPUT_FORMAT = "DD.MM.YYYY HH:mm";

class ChapterTimes {
    constructor(chapter) {
        this.startMoment = moment.tz(`${chapter.broadcastDate} ${chapter.broadcastStartTime}`, INPUT_FORMAT, INPUT_TIMEZONE);
        this.endMoment = moment.tz(`${chapter.broadcastDate} ${chapter.broadcastEndTime}`, INPUT_FORMAT, INPUT_TIMEZONE);
        this.userTImezone = moment.tz.guess();
    }

    get broadcastStartDate() {
        return this.startMoment.tz(this.userTImezone).format("DD.MM.YYYY");
    }

    get broadcastStartTime() {
        return this.startMoment.tz(this.userTImezone).format("HH:mm");
    }
}

export default ChapterTimes;
