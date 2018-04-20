var express = require('express');
var router = express.Router();

/* GET home page. */

var express = require('express');

var mongo = require('mongoose');



var Employee = require('../models/employee');



var hospetal=require('../models/appointment')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'apollo hospital' });
});
router.get('/admindetails', function(req, res, next) {
  res.render('admindetails', { title: 'apollo hospital' });
});
router.get('/add', function(req, res, next) {
  res.render('add', { title: 'apollo hospital' });
});
router.get('/post', function(req, res, next) {
  
  res.render('addsuccess', { title: 'successfully added' });
});

module.exports = router;
