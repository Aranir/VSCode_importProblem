var express = require('express');
var _router = express.Router();

/* GET home page. */
_router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export const router = _router;
