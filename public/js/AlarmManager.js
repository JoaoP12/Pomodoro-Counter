class AlarmManager {
    constructor () {
        this._alarmSound = new Audio("/static/audio/morning-alarm.mp3");
        this._playAlarmSound = true;
    }

    static alarmOptions = Object.freeze({
        "1": "morning-alarm",
        "2": "slot-machine",
        "3": "vintage-alarm"
    });

    set alarmSound (alarmOption) {
        this._alarmSound = new Audio(`/static/audio/${alarmOption}.mp3`);
    }

    set playAlarmSound (option) {
        this._playAlarmSound = option;
    }

    playAlarm () {
        if (!this._playAlarmSound) {
            return;
        }
        this._alarmSound.play();
        setTimeout((self) => {
            self._alarmSound.pause();
            self._alarmSound.currentTime = 0;
        }, 2750, this);
    }
}