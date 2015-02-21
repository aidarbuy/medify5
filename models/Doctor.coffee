mongoose = require 'mongoose'

doctorSchema = mongoose.Schema {

    # rbeckwith
    username: String,

    // rbeckwi1@gmail.com
    email: String,

	name: { 
		// doctor.name.first: "Roshelle"
		first: String, 
		// doctor.name.last: "Beckwith"
		last: String, 
		// doctor.name.company: "Amygdala"
		company: String,
		// doctor.name.showCompany: true
		showCompany: Boolean
	},

	// doctor1.specialty: "Emergency Medicine"
	// doctor2.specialty: "Family Medicine"
	specialty: String,

	// doctor.description: "Text description"
	description: String,

	// doctor.services: [
	// 	'Medical Care',
	// 	'Urgent Care',
	// 	'Primary Care',
	// 	'Surgical',
	// 	'Consultation',
	// 	'Periodontics',
	// 	'Dental Care',
	// 	'Orthodontics',
	// 	'Immunizations',
	// 	'Optometry',
	// ]
	services: Array,

	// xRayOnSite: true || false
	xRayOnSite: Boolean,
	labsOnSite: Boolean,
	ultrasoundOnSite: Boolean,
	radiologyBackupReading: Boolean,

	// doctor.insurance: ['Medicare', 'Obamacare', 'Dentacare']
	insurance: Array,

	// The Space
	facilities: [{
		// clinic, hospital, private, etc...
		propertyType: String,
		// workingTime
		workingTime: { open: Date, close: Date }
	}],

	comments: [{ body: String, date: Date }],
	dateRegistered: { type: Date, default: Date.now },

	location: {
		zip: Number,
		latitude: Number,
		longitude: Number
	},
	
	price: Number,

	meta: {
		votes: Number,
		favs:  Number
	},
});

var Doctor = mongoose.model('Doctor', doctorSchema);