(function() {
  angular.module('doctorsApp.controllers', ['uiGmapgoogle-maps']).controller('MainCtrl', function($scope) {
    return $scope.text = "Main Page";
  }).controller('NavCtrl', function($scope, $location) {
    return $scope.isActive = function(path) {
      return path === $location.path();
    };
  });

}).call(this);
