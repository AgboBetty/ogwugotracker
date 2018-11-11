const express = require('express');
const bodyParser = require('body-parser');
const Pusher = require('pusher');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// to serve the JavaScript, CSS and index.html
app.use(express.static('./'));
const port = process.env.PORT || 5000;
app.listen(port, () => console.log('Listening at http://localhost:5000'));