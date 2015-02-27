
# Attaching to controllers module
angular.module 'doctorsApp.controllers'

# Single doctor instance
.controller 'DoctorCtrl', ($scope, Doctor, $stateParams) ->
	
	$scope.doctor = Doctor.get {
		id: parseInt $stateParams.doctorId, 10
	}

	$scope.markers = []
	$scope.map =
		center:
			latitude: 45
			longitude: - 73
		zoom: 8
