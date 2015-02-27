# Dependencies
restful = require 'node-restful'
mongoose = restful.mongoose

# Schema
doctorSchema = mongoose.Schema {
	id: Number
	name: String
	description: String
	imageURL: String
	coords:
		lat: Number
		lon: Number
}

# Return model
module.exports = restful.model 'Doctor', doctorSchema
