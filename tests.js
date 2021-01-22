const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        phrase: 'Hello from /myroute'
    });        
});

router.get('/:myvar/:myvar2', (req, res) => {
    // anything with : is in params
    const a = req.params.myvar;
    const b = req.params.myvar2;
    // query is anything after the ?
    const c = req.query.myvar3;
    // process with variables

    res.json({
        myvar: a,
        myvar2: b,
        myvar3: c
    });
});

const fakeDB = [];

router.post('/', (req, res) => {
    const name = req.body.name; // get variable name from request body

    // insert on fakeDB
    fakeDB.push(name);

    // return the fakeDB
    res.json(fakeDB);
});

module.exports = router;