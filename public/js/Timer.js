class Timer{
    constructor (config) {
        this.minutes = document.getElementById("minutes");
        this.seconds = document.getElementById("seconds");
        this.stopTimer = false;
        this.updateTimerSettings(config);
        this.alarmManager = new AlarmManager();
    }

    setMinutesHTML (minutes) {
        self.minutes.innerHTML = minutes >= 10 ? String(minutes) : `0${minutes}`;
    }

    setSecondsHTML (seconds) {
        self.seconds.innerHTML = seconds >= 10 ? String(seconds) : `0${seconds}`;
    }

    updateTimerSettings(config) {
        this.shortBreak = config.shortBreak;
        this.longBreak = config.longBreak;
        this.roundsToLong = config.roundsToLong;
        this.workTime = config.workTime;
        this.autoStartBrk = config.autoStartBrk;
        this.autoStartPomo = config.autoStartPomo;
        this.timeAlert = config.timeAlert;
        this.roundsPassed = 0;
        this.minutes.innerHTML = config.workTime >= 10 ? String(config.workTime) : `0${config.workTime}`;
        this.seconds.innerHTML = "00";
        this.valMins = config.workTime;
        this.valSecs = 0;
        this.breakRunning = false;
        this.setTitlesStyle(1);
        this.interval = null;
    }

    configTimer (self, timeToSet, titleStyleToSet) {
        clearInterval(self.interval);
        self.valMins = timeToSet;
        self.breakRunning = !self.breakRunning;
        self.setMinutesHTML(timeToSet);
        self.setTitlesStyle(titleStyleToSet);
        self.alarmManager.playAlarm();
    }

    countTime(self) {
        if (self.stopTimer){
            clearInterval(self.interval);
            return;
        }
        if (self.valSecs == 0){
            if (self.valMins > 0) {
                self.valMins -= 1;
                self.setMinutesHTML(self.valMins);
                if (self.valMins == self.timeAlert) {
                    NotificationManager.notifyTimerChange(NotificationManager.types.timeAlert, self.timeAlert);
                }
                self.valSecs = 59;
                self.setSecondsHTML(59);
                return;
            }
            if (self.valMins == 0 && !self.breakRunning){
                if (self.roundsPassed == self.roundsToLong){
                    self.roundsPassed = 0;
                    self.configTimer(self, self.longBreak, 3);
                    NotificationManager.notifyTimerChange(NotificationManager.types.longBrk);
                } else {
                    self.configTimer(self, self.shortBreak, 2);
                    NotificationManager.notifyTimerChange(NotificationManager.types.shortBrk);
                }
                if (self.autoStartBrk) {
                    self.start();
                    return;
                }
                self.stop();
                return;
            }
            if (self.breakRunning) {
                self.configTimer(self, self.workTime, 1);
                NotificationManager.notifyTimerChange(NotificationManager.types.workTime);
                if (self.autoStartPomo) {
                    self.start();
                    return;
                }
                self.stop();
                return;
            }
        }
        self.valSecs -= 1;
        self.setSecondsHTML(self.valSecs);
    }

    clearTitlesStyle() {
        document.getElementById('work-time-title').style = "";
        document.getElementById('short-break-title').style = "";
        document.getElementById('long-break-title').style = "";
    }

    setTitlesStyle(indicator) {
        var styleString = "border:2px solid white;border-radius:30px;background-color:var(--details-color);color: white;"
        let element;
        this.clearTitlesStyle();
        switch(indicator) {
            case 1:
                element = document.getElementById('work-time-title');
                element.style = styleString;
                break;
            case 2:
                element = document.getElementById('short-break-title');
                element.style = styleString;
                break;
            case 3:
                element = document.getElementById('long-break-title');
                element.style = styleString;
                break;
        }
    }

    start() {
        if (this.stopTimer){
            this.stopTimer = false;
        }
        if (!this.breakRunning) {
            this.roundsPassed++;
        }
        this.interval = setInterval(this.countTime, 10, this);
    }

    stop (){
        this.stopTimer = true;
    }
}