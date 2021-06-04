window.onload = function () {
    Notification.requestPermission();
    document.getElementById('settings-popup').style.display = 'none';
    const settings = new Settings();
    const alarmManager = new AlarmManager();
    const timer = new Timer(settings.config, alarmManager);

    document.getElementById('btn-start').addEventListener('click', ()=> {
        timer.start();
    });
    
    document.getElementById('btn-stop').addEventListener('click', ()=> {
        timer.stop();
    });

    document.getElementById('btn-settings').addEventListener('click', ()=> {
        timer.stop();
        settings.popup();
    });

    document.getElementById('save-settings').addEventListener('click', ()=> {
        settings.checkForm();
        timer.updateTimerSettings(settings.config);
    });

    document.getElementById("play-alarm-dropdown").addEventListener("change", () => {
        const playAlarmDrop = document.getElementById("play-alarm-dropdown");
        const selectedOption = playAlarmDrop.options[playAlarmDrop.selectedIndex].value;
        const alarmElements = document.getElementsByClassName("optional-alarm-drop");
        let display = "block";
        if (selectedOption === "0") {
            alarmManager.playAlarmSound = false;
            display = "none"
        }

        if (selectedOption === "1") {
            alarmManager.playAlarmSound = true;
        }
        for (let el of alarmElements) {
            el.style.display = display;
        }
    });

    document.getElementById("alarm-sound-dropdown").addEventListener("change", () => {
        const alarmsDropdown = document.getElementById("alarm-sound-dropdown");
        const selectedOptionUrl = AlarmManager.alarmOptions[alarmsDropdown.options[alarmsDropdown.selectedIndex].value];
        alarmManager.alarmSound = selectedOptionUrl;
    });

}
