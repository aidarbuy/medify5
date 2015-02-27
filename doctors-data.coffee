Promise = require 'bluebird'
mongoose = require 'mongoose'
doctorsSeed = require './doctors-seed'
Doctor = mongoose.model('Doctor')

findDoctors = (query) ->
	Promise.cast Doctor.find(query).exec()

createDoctor = Promise.promisify Doctor.create, Doctor

# Exports

exports.findDoctors = findDoctors

exports.connectDB = Promise.promisify(mongoose.connect, mongoose)

exports.resetDoctors = () ->
	mongoose.connection.collections['doctors'].drop (err) ->
		console.log 'doctors collection dropped'

exports.seedDoctors = () ->
	findDoctors({} ).then (collection) ->
		if collection.length == 0
			Promise.map doctorsSeed, (doctor) ->
				createDoctor doctor
			console.log "doctors have been seeded"
