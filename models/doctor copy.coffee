mongoose = require 'mongoose'

doctorSchema = mongoose.Schema {

	# rbeckwith
	username: String

	# rbeckwi1@gmail.com
	email: String

	name:
		# Roshelle
		first: String
		# Beckwith
		last: String
		# doctor.name.company: "Amygdala"
		company: String,
		# true or false
		showCompany: Boolean

	# "Emergency Medicine", "Family Medicine"
	specialty: String

	# "Our clinic provider wide range of services. We care about each patient."
	description: String

	# 'Medical Care'	'Urgent Care'	'Dental Care'	'Orthodontics'
	# 'Primary Care'	'Surgical'		'Consultation'	'Periodontics'
	# 'Immunizations'	'Optometry'
	services: Array

	# true or false
	xRayOnSite: Boolean
	labsOnSite: Boolean
	ultrasoundOnSite: Boolean
	radiologyBackupReading: Boolean

	# ['Medicare', 'Obamacare', 'Dentacare']
	insurance: Array

	# The Space
	facilities: [{
		# clinic, hospital, private, etc...
		propertyType: String
		# workingTime
		workingTime: { open: Date, close: Date }
	} ]

	comments: [{ body: String, date: Date } ]
	dateRegistered: { type: Date, default: Date.now }

	location:
		zip: Number
		latitude: Number
		longitude: Number

	price: Number

	meta:
		votes: Number
		favs: Number
}

var Doctor = mongoose.model 'Doctor', doctorSchema