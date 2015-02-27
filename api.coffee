express = require 'express'
Doctor = require './models/Doctor'
router = express.Router()

router.route '/doctors/:doctor_id'
	.get (req, res) ->
		Doctor.findById req.params.bear_id, (err, doctor) ->
			res.send err if err
			res.json doctor

router.route '/api/doctors'
	.get (req, res) ->
		Doctor.find {}
		.exec (err, collection) -> res.send collection
