const express = require('express');
const app = express();
const port = 3000;

const students = require('./routes/students');
const teachers = require('./routes/teachers');
const index = require('./routes/index')
app.use('/', (req, res, next) => {
	console.log(req.method, req.url);
	next();
})

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', index);
app.use('/students', students);
app.use('/teachers', teachers);

app.use('/', (req, res) => {
	res.status(404);
	res.sendFile('./error.html', {root : __dirname});
})


app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});