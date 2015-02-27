(function() {
  var mongoose;

  mongoose = require('mongoose');

  module.exports = mongoose.Schema({
    name: String,
    description: String
  });

}).call(this);
