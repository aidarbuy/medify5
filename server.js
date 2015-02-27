(function() {
  var Doctor, Promise, bodyParser, doctorsData, eapp, express, mongoose, server;

  express = require('express');

  mongoose = require('mongoose');

  bodyParser = require('body-parser');

  Doctor = require('./models/doctor');

  Promise = require('bluebird');

  doctorsData = require('./doctors-data');

  server = 'mongodb://dbuser:dbpassword@ds045001.mongolab.com:45001/medify4';

  doctorsData.connectDB(server).then(function() {
    return console.log("connected to remote mongoDB");
  }).then(doctorsData.resetDoctors).then(doctorsData.seedDoctors);

  eapp = express();

  eapp.use(express["static"](__dirname + '/public')).use(bodyParser.json()).set('views', __dirname).set('view engine', 'jade');

  eapp.get('/api/doctors', function(req, res) {
    return Doctor.find({}, function(err, data) {
      if (err) {
        res.send(err);
      }
      return res.json(data);
    });
  }).get('/api/doctors/:id', function(req, res) {
    return Doctor.findOne({
      id: parseInt(req.params.id, 10)
    }, function(err, data) {
      if (err) {
        res.send(err);
      }
      console.log(JSON.stringify(req.params));
      return res.json(data);
    });
  }).get('*', function(req, res) {
    return res.render('index');
  });

  server = eapp.listen(process.env.PORT || 9000, process.env.IP || '127.0.0.1', function() {
    var host, port, protocol;
    host = server.address().address;
    port = server.address().port;
    protocol = server.address().family;
    return console.log("server listening at http://%s:%s (protocol %s)", host, port, protocol);
  });

}).call(this);
