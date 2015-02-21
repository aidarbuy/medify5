angular.module 'doctorsApp', ['ui.router', 'ngResource', 'doctorApp.controllers', 'doctorsApp.services']

.config ($stateProvider, $urlRouterProvider, $locationProvider) ->
	$urlRouterProvider.otherwise "/" # For any unmatched url, redirect to /state1
	$locationProvider.html5Mode true

	$stateProvider # Now set up the states
		.state 'main',
			url: "/"
			templateUrl: "views/main.html"
			controller: "MainCtrl"
		.state 'doctors',
			url: "/doctors"
			templateUrl: "views/doctors.html"
			controller: "DoctorsCtrl"

# .config (uiGmapGoogleMapApiProvider) ->
#     uiGmapGoogleMapApiProvider.configure
#         #    key: 'your api key',
#         v: '3.17'
#         libraries: 'weather,geometry,visualization'
