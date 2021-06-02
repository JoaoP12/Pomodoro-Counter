# Pomodoro Counter

## About
The aim of the project is just to practice JavaScript, time handling, desktop notifications and to create my own Pomodoro Counter with features that fit my needs, and of course that can be easily modified to fit other people's needs too.

## Getting Started

This project runs using Desktop Notifications, from the Notifications API. However, to use such API, an HTTPS server is needed.
```
git clone https://github.com/JoaoP12/Pomodoro-Counter.git
```
After cloning and extracting the project:
```
cd Pomodoro-Counter/
npm install
```
It will install the dependencies used in the project (Express and Https).
Now, you need to generate a self-signed certificate to create the https server.
You can learn how to generate one [here](https://devcenter.heroku.com/articles/ssl-certificate-self).

At last, it is needed to run the server:
```
node ./server.js
```
Then open your browser and go to ```https://localhost:3000```.

If everything is working, you should see a page like this:

![image](https://github.com/JoaoP12/Pomodoro-Counter/blob/master/page_image.PNG)

## Usage

After opening the page on your browser, the default focus, short and long break time will be loaded, but you can change it clicking on the Settings button and changing the values as you wish.

To start the timer, you can just hit the "Start" button.

## To do
- [x] Implement the desktop notifications.
- [x] Implement more settings.
    - [x] Implement setting to notificate user in the last x minutes. (User can choose how many minutes before).
    - [ ] Implement alarm sound.
- [ ] Make the page responsive.
- [ ] Change colors when alternating between focus time and breaks.