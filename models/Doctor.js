(function() {
  var doctorSchema, mongoose, restful;

  restful = require('node-restful');

  mongoose = restful.mongoose;

  doctorSchema = mongoose.Schema({
    id: Number,
    name: String,
    description: String,
    imageURL: String,
    coords: {
      lat: Number,
      lon: Number
    }
  });

  module.exports = restful.model('Doctor', doctorSchema);

}).call(this);
