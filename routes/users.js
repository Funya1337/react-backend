const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const myTestSchema = new mongoose.Schema({
    name: String,
    lastname: String,
    age: Number
});
const TestPage = mongoose.model('TestPage', myTestSchema);
// const myTest1 = new MyTest({ name: 'Boris', lastname: 'Britva', age: 14 });
// myTest1.save();

mongoose.connect('mongodb://localhost/onemore');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	router.get('/', async (req, res) => {
		console.log(req.query.name);
		const myRes = await TestPage.find();
		console.log(111, myRes);
		res.send(myRes);
	});
});

module.exports = router;