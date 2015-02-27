(function() {
  var Doctor, express, router;

  express = require('express');

  Doctor = require('./models/Doctor');

  router = express.Router();

  router.route('/doctors/:doctor_id').get(function(req, res) {
    return Doctor.findById(req.params.bear_id, function(err, doctor) {
      if (err) {
        res.send(err);
      }
      return res.json(doctor);
    });
  });

  router.route('/api/doctors').get(function(req, res) {
    return Doctor.find({}).exec(function(err, collection) {
      return res.send(collection);
    });
  });

}).call(this);
