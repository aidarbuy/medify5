angular.module('doctorsApp.services', [])
.factory 'Doctor', ($resource) ->
	console.log "Returning /api/doctors resource"
	$resource '/api/doctors'
