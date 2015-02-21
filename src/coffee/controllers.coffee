angular.module 'doctorApp.controllers', ['uiGmapgoogle-maps', 'ngRoute']

.controller 'MainCtrl', ($scope) ->
	$scope.markers = []
	$scope.map =
		center:
			latitude: 45
			longitude: -73
		zoom: 8

.controller 'DoctorsCtrl', ($scope, Doctor) ->
	$scope.doctors = Doctor.query()

.controller 'NavCtrl', ($scope, $location) ->
	$scope.isActive = (path) ->
		path == $location.path()
