(function() {
  var Doctor, express, router;

  express = require('express');

  router = express.Router();

  Doctor = require('../models/doctor');

  Doctor.methods(['get', 'put', 'post', 'delete']);

  Doctor.register(router, '/doctors').get('/api/doctors/:id', function(req, res, next) {
    return Doctor.findOne({
      id: req.params.id
    }, function(err, doctor) {
      console.log("doctor: " + doctor);
      if (err) {
        res.send(err);
      }
      return res.json(doctor);
    });
  });

  module.exports = router;

}).call(this);
