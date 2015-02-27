# Dependencies
express 	 = require 'express'
mongoose 	 = require 'mongoose'
bodyParser 	 = require 'body-parser'
Doctor 		 = require './models/doctor'
Promise 	 = require 'bluebird'
doctorsData  = require './doctors-data'

# MongoDB
server = 'mongodb://dbuser:dbpassword@ds045001.mongolab.com:45001/medify4'
doctorsData.connectDB server
	.then () -> console.log "connected to remote mongoDB"
	.then doctorsData.resetDoctors
	.then doctorsData.seedDoctors

# Express
eapp = express()
eapp.use express.static __dirname + '/public'
	.use bodyParser.json()
	.set 'views', __dirname
	.set 'view engine', 'jade'

# Routes
eapp.get '/api/doctors', (req, res) ->
		Doctor.find {} , (err, data) ->
			res.send err if err
			res.json data
	.get '/api/doctors/:id', (req, res) ->
		Doctor.findOne { id: parseInt req.params.id, 10 } , (err, data) ->
			res.send err if err
			console.log JSON.stringify req.params
			res.json data
	# .use '/api', require './routes/api'
	.get '*', (req, res) -> res.render 'index'

# Start Web Server
server = eapp.listen process.env.PORT || 9000, process.env.IP || '127.0.0.1', () ->
	host = server.address().address
	port = server.address().port
	protocol = server.address().family
	console.log "server listening at http://%s:%s (protocol %s)", host, port, protocol
