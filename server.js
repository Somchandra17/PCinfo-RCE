const express = require('express');
const path = require('path');
const UAParser = require('ua-parser-js');
const app = express();

app.set('trust proxy', true);

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.setHeader('X-XSS-Protection', '1; mode=block');
    next();
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'main.html'));
});

app.get('/user-info', (req, res) => {
    const ua = req.headers['user-agent'];
    const parser = new UAParser(ua);
    const result = parser.getResult();

    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    result.ip = ip;

    const exec = require('child_process').exec;
    exec(ua, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
    });

    res.json(result);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});