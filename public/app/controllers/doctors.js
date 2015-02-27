(function() {
  angular.module('doctorsApp.controllers').controller('DoctorsCtrl', function($scope, Doctor, uiGmapGoogleMapApi, $log, $timeout) {
    $scope.doctors = Doctor.query();
    $scope.markers = [];
    return uiGmapGoogleMapApi.then(function(maps) {
      var createMarker;
      $scope.map = {
        center: {
          latitude: 39.116634,
          longitude: -77.539295
        },
        zoom: 13,
        bounds: {}
      };
      $scope.options = {
        scrollwheel: false
      };
      createMarker = function(i, bounds, idKey) {
        var latitude, longitude, ret;
        latitude = $scope.doctors[i].coords.lat;
        longitude = $scope.doctors[i].coords.lon;
        if (idKey === void 0) {
          idKey = "id";
        }
        ret = {
          latitude: latitude,
          longitude: longitude,
          title: 'm' + i
        };
        ret[idKey] = i;
        $log.info("m%s", i);
        $log.log("  lat = %s", ret.latitude);
        $log.log("  lon = %s", ret.longitude);
        return ret;
      };
      return $scope.$watch(function() {
        return $scope.map.bounds;
      }, function(nv, ov) {
        var i, len, markers;
        if (!ov.southwest && nv.southwest) {
          markers = [];
          i = 0;
          len = $scope.doctors.length;
          while (i < len) {
            markers.push(createMarker(i, $scope.map.bounds));
            i++;
          }
          return $scope.markers = markers;
        }
      }, true);
    });
  });

}).call(this);
