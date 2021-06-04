class AlarmManager {
    constructor () {
        this._alarmSound = new Audio("/static/audio/morning-alarm.mp3");
        this._playAlarmSound = true;
    }

    set alarmSound (soundUrl) {
        this._alarmSound = new Audio(soundUrl);
    }

    set playAlarmSound (option) {
        if (typeof(option) == Boolean) {
            this._playAlarmSound = option;
        }
    }

    playAlarm () {
        if (!this._playAlarmSound) {
            return;
        }
        this._alarmSound.play();
        setTimeout((self) => {
            self._alarmSound.pause();
            self._alarmSound.currentTime = 0;
        }, 3000, this);
    }
}