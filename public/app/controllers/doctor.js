(function() {
  angular.module('doctorsApp.controllers').controller('DoctorCtrl', function($scope, Doctor, $stateParams) {
    $scope.doctor = Doctor.get({
      id: parseInt($stateParams.doctorId, 10)
    });
    $scope.markers = [];
    return $scope.map = {
      center: {
        latitude: 45,
        longitude: -73
      },
      zoom: 8
    };
  });

}).call(this);
