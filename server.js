const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const app = express();

app.use('/static', express.static(__dirname + '/public/'));

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.use('/', router);

https.createServer({
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.cert')
}, app)
.listen(3000, function () {
    console.log('It is working!');
});