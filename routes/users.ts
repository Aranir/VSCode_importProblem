var express = require('express');
var _router = express.Router();

/* GET users listing. */
_router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export const user = _router;
