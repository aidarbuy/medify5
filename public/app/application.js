(function() {
  angular.module('doctorsApp', ['ui.router', 'ngResource', 'doctorsApp.controllers', 'doctorsApp.services']).config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");
    return $stateProvider.state('main', {
      url: "/",
      templateUrl: "views/main.html",
      controller: "MainCtrl"
    }).state('doctors', {
      url: "/doctors",
      templateUrl: "views/doctors.html",
      controller: "DoctorsCtrl"
    }).state('doctor', {
      url: "/doctors/:doctorId",
      templateUrl: "views/doctor.html",
      controller: "DoctorCtrl"
    });
  }).config(function(uiGmapGoogleMapApiProvider) {
    return uiGmapGoogleMapApiProvider.configure({
      v: '3.17',
      libraries: 'weather,geometry,visualization'
    });
  });

}).call(this);
