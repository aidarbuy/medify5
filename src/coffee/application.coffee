
# Doctors Application
angular.module 'doctorsApp', 
[
	'ui.router', 'ngResource', 'doctorsApp.controllers', 'doctorsApp.services'
]

# UI Router
.config ($stateProvider, $urlRouterProvider, $locationProvider) ->
	$locationProvider.html5Mode true
	$urlRouterProvider.otherwise "/" # Redirect unmatched urls to root
	$stateProvider # Settting up the states
		.state 'main',
			url: "/"
			templateUrl: "views/main.html"
			controller: "MainCtrl"
		.state 'doctors',
			url: "/doctors"
			templateUrl: "views/doctors.html"
			controller: "DoctorsCtrl"
		.state 'doctor',
			url: "/doctors/:doctorId"
			templateUrl: "views/doctor.html"
			controller: "DoctorCtrl"

# Google Maps API
.config (uiGmapGoogleMapApiProvider) ->
    uiGmapGoogleMapApiProvider.configure
        # key: 'your api key',
        v: '3.17',
        libraries: 'weather,geometry,visualization'
