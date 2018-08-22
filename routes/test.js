var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.json([
			{id: 1, username: "somebody123"},
			{id: 2, username: "somebody_else123"}
	]);
});

module.exports = router;
