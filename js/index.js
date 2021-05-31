window.onload = function () {
    document.getElementById('settings-popup').style.display = 'none';
    const settings = new Settings();
    const timer = new Timer(settings.config);

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

}
