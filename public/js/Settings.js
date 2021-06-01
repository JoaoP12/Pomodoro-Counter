class Settings {
    constructor () {
        this.workTime = 25;
        this.shortBreakTime = 5;
        this.longBreakTime = 15;
        this.autoStartPomo = false;
        this.autoStartBrk = false;
        this.longInterval = 4;
    }
    get config() {
        return {
            workTime: this.workTime,
            shortBreak: this.shortBreakTime,
            longBreak: this.longBreakTime,
            roundsToLong: this.longInterval,
            autoStartPomo: this.autoStartPomo,
            autoStartBrk: this.autoStartBrk
        };
    } 

    checkForm () {
        this.workTime = document.getElementById('work-time').value || 25;
        this.shortBreakTime = document.getElementById('short-break-time').value || 5;
        this.longBreakTime = document.getElementById('long-break-time').value || 15;
        this.autoStartPomo = document.getElementById('auto-start-pomodoro').checked;
        this.autoStartBrk = document.getElementById('auto-start-break').ckecked;
        this.longInterval = document.getElementById('rounds-to-long-break') || 4;
        this.popup();
    }

    popup() {
        const displayType = document.getElementById("settings-popup").style;
        if (displayType.display == 'none'){
            displayType.display = 'flex';
            return;
        }
        displayType.display = 'none';
    }
}