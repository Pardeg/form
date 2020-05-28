const express = require('express');
const bodyparser = require('body-parser');
const array = require('lodash/array');
const app = express();
const db = [];

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();


    app.options('*', (req, res) => {
        // allowed XHR methods
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});
app.use(bodyparser.json('application/json'));

app.get('/', (req, res) => res.send('wo'));
app.post('/', (req, res) => {
    const email = req.body.email;
    const emailIndex = array.findIndex(db, (el) => (el.email==email));
    console.log(emailIndex);
    if (emailIndex >= 0) {
        res.send("err");
    } else {
        db.push(req.body);
         console.log(db);
        res.send('ok');
    }
});

app.listen(3000, () => console.log('listen 3000 port'));
