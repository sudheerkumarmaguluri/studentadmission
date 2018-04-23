var express = require('express');
var multer = require('multer');
var wiston=require('winston')
var upload = multer({ dest: 'uploads/' })
var router = express.Router();
var express = require('cookie-parser');

/* GET home page. */

var express = require('express');

var mongo = require('mongoose');
;
var fs=require('fs')
var json = require('comment-json');
var fs = require('fs');

//winston.add(winston.transports.File, { filename: 'loggers.log' });
var MongoClient = require('mongoose').MongoClient;

var Employee = require('../models/employee');
winston.add(
  winston.transports.File, {
    filename: 'loggers.log',
    level: 'info',
    json: true,
    eol: 'rn',
    timestamp: true
  }
)
wiston.log('info',"check your data..")


var url = "mongodb://sudheermaguluri:M.s9640616462@ds125469.mlab.com:25469/mydb";

var hospetal=require('../models/appointment')
/* GET home page. */
router.get('/', function(req, res, next) {
  wiston.log('info',"this is starting page");
  res.render('index', { title: 'apollo hospital' });
});
router.get('/admindetails', function(req, res, next) {
  wiston.log('info',"this is admission details page");

  res.render('admindetails', { title: 'apollo hospital' });
});
router.get('/add', function(req, res, next) {
  res.render('addstudent', { title: 'student detials' });
});

router.get('/delete', function(req, res, next) {
  wiston.log('info',"student details deleted successfully");

  res.render('delete', { title: 'student detials' });
});
router.get('/updatename', function(req, res, next) {
  res.render('update', { title: 'student detials' });
});
// store employee details
router.post('/postdetail', upload.single('profilepic'),function(req, res, next) {
  wiston.log('info',"enter student details")
  var employe = new Employee({
    img:{
      data:req.body.profilepic, // see below
  contentType : "image/png"},
    name:req.body.studentname,//student name
    fathername:req.body.fathername,
    phonenumber:req.body.phonenumber,
    email:req.body.email
  });
  employe.save()
    .then(item => {
      res.status(201).send("item created to database");
      wiston.info("student details added successfully");

      wiston.log('info',"student details added successfully");

    })
    .catch(err => {
      wiston.log('warn',"some thing went wrong.....");
      res.status(400).send("unable to save to database");
    });



  res.render('addsuccess', { title: 'student detials' });
});


/*
router.post('/postdetail', function(req, res,body, next) {
/*
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = {

      name: req.body.studentname,
      fathername: req.body.fathername,
      phonenumber: req.body.phonenumber,
      email: req.body.email
    };
    Employee.save(function(err) {
      if (err) throw err;
      else
        console.log("saved")

    })
  })
    res.render('addsuccess',{title:"student details"})

})*/
router.get('/read', function(req, res, next) {
  wiston.log('info',"check your data..")
  Employee.find({}, function(err, users) {
    if (err) throw err;
    wiston.log('error',"something went wrong.....")

      res.send(users);

  });
});
router.get('/deletedocument', function(req, res, next) {
  Employee.remove({_id: req.body.id},
    function(err, docs) {
      if (err) {
        res.json(err);
      console.log("no error")
      }
      else
      {
        res.status(204).send("deleted successfully....");
      }
    })
});
module.exports = router;
