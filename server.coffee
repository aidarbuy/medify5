express = require 'express'
mongoose = require 'mongoose'
Doctor = require('./models/Doctor')

mongoose.connect 'mongodb://dbuser:dbpassword@ds045001.mongolab.com:45001/medify4'
con = mongoose.connection
con.once 'open', (err, data) ->
	console.log "Connected to remote mongoDB"

eapp = express()
eapp.use express.static __dirname + '/public'
	.set 'views', __dirname
	.set 'view engine', 'jade'
	.get '/api/doctors', (req, res) ->
		mongoose.model 'Doctor'
		.find {}
		.exec (err, collection) ->
			console.log collection
			res.send collection
	.get '*', (req, res) -> res.render 'index'

server = eapp.listen process.env.PORT || 9000, process.env.IP || '127.0.0.1', () ->
	host = server.address().address
	port = server.address().port
	protocol = server.address().family
	console.log "Server listening at http://%s:%s (protocol %s)", host, port, protocol