// we assign express to the variable
const express = require('express');
const testsRouter = require('./tests');

// we create an express server
const app = express();

// encoding urls
app.use(express.urlencoded({extended: true}));
// tells express we are sending and receiving JSON objects
app.use(express.json());

/*
    - Created folder for static content, name is irrelevant
    - Set express to listen on /www for static content
*/
app.use('/www' /*route to see the static content*/
        , express.static('myStaticContent' /*folder for static content*/));

app.use('/tests', testsRouter);


const PORT = 8080;

// attempt to start a server on PORT and if starts run callback
app.listen(PORT, /*callback*/ () => { 
    console.log('Server listing on port ' + PORT);
});