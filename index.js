'use strict';

const express = require('express');

const app = express();

app.use(express.static('deploy'));

app.get('/', (req,res) => {
	return res.redirect('/index.html');
});

app.listen(5555, () => {
	console.log('Listening on 5555');
});
