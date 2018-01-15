'use strict';

const express = require('express');

const app = express();

app.use(express.static('deploy'));

app.get('/', (req,res) => {
	return res.redirect('/index.html');
});

app.listen(3333, () => {
	console.log('Listening on 3333');
});