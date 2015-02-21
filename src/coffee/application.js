(function() {
  angular.module('doctorsApp', ['ui.router', 'ngResource', 'doctorApp.controllers', 'doctorsApp.services']).config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");
    $locationProvider.html5Mode(true);
    return $stateProvider.state('main', {
      url: "/",
      templateUrl: "views/main.html",
      controller: "MainCtrl"
    }).state('doctors', {
      url: "/doctors",
      templateUrl: "views/doctors.html",
      controller: "DoctorsCtrl"
    });
  });

}).call(this);
