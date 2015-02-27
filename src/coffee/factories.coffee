
# Doctors Application Services
angular.module 'doctorsApp.services', []

# Requesting doctors api and returning Doctor object
.factory 'Doctor', ($resource, $log) ->
	$resource '/api/doctors/:id'
