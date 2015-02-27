(function() {
  angular.module('doctorsApp.services', []).factory('Doctor', function($resource, $log) {
    return $resource('/api/doctors/:id');
  });

}).call(this);
