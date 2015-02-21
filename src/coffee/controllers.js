(function() {
  angular.module('doctorApp.controllers', ['uiGmapgoogle-maps', 'ngRoute']).controller('MainCtrl', function($scope) {
    $scope.markers = [];
    return $scope.map = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 8
    };
  }).controller('DoctorsCtrl', function($scope, Doctor) {
    return $scope.doctors = Doctor.query();
  }).controller('NavCtrl', function($scope, $location) {
    return $scope.isActive = function(path) {
      return path === $location.path();
    };
  });

}).call(this);
