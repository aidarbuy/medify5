(function() {
  var Doctor, Promise, createDoctor, doctorsSeed, findDoctors, mongoose;

  Promise = require('bluebird');

  mongoose = require('mongoose');

  doctorsSeed = require('./doctors-seed');

  Doctor = mongoose.model('Doctor');

  findDoctors = function(query) {
    return Promise.cast(Doctor.find(query).exec());
  };

  createDoctor = Promise.promisify(Doctor.create, Doctor);

  exports.findDoctors = findDoctors;

  exports.connectDB = Promise.promisify(mongoose.connect, mongoose);

  exports.resetDoctors = function() {
    return mongoose.connection.collections['doctors'].drop(function(err) {
      return console.log('doctors collection dropped');
    });
  };

  exports.seedDoctors = function() {
    return findDoctors({}).then(function(collection) {
      if (collection.length === 0) {
        Promise.map(doctorsSeed, function(doctor) {
          return createDoctor(doctor);
        });
        return console.log("doctors have been seeded");
      }
    });
  };

}).call(this);
