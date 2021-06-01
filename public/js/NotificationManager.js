class NotificationManager {
    static _currentNotification = null;
    static types = Object.freeze({
        workTime: 'work-alert',
        shortBrk: 'short-break-alert',
        longBrk: 'long-break-alert',
        timeAlert: 'time-alert'
    });
    static notifyTimerChange(type, timeRemain=null) {
        if (!Notification.permission === 'granted') {
            return;
        }
        switch (type) {
            case 'short-break-alert':
                this.emitNewNotification("Time to take a short break!");
                break;
            case 'long-break-alert':
                this.emitNewNotification("Time to take a long break!");
                break;
            case 'time-alert':
                this.emitNewNotification(`${timeRemain} minute(s) remaining!`);
                break;
            case 'work-alert':
                this.emitNewNotification("Time to work!");
                break;
        }
    }

    static emitNewNotification (message) {
        const options = { body: message, silent: true };
        NotificationManager._currentNotification = new Notification("Pomodoro", options);
    }
}
