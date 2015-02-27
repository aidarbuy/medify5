# Dependencies
express = require 'express'
router = express.Router()

# Models
Doctor = require '../models/doctor'

# Routes
Doctor.methods ['get', 'put', 'post', 'delete']
Doctor.register router, '/doctors'
.get '/api/doctors/:id', (req, res, next) ->
		Doctor.findOne { id: req.params.id } , (err, doctor) ->
			console.log "doctor: " + doctor
			res.send err if err
			res.json doctor

# Return router
module.exports = router