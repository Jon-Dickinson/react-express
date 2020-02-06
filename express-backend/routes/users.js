// http://localhost:3001/users

var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
   res.json([
     {id: 1, username: "Aron Sanders"},
     {id: 2, username: "Nate Klein"},
     {id: 3, username: "Walter Mckenzie"},
     {id: 4, username: "Rex Ray"},
     {id: 5, username: "Phil Ward"},
     {id: 6, username: "Cory Chandler"},
   ]);
});

module.exports = router;
