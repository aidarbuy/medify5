
# Doctors Application Controllers
angular.module 'doctorsApp.controllers', ['uiGmapgoogle-maps']

# Main Page
.controller 'MainCtrl', ($scope) ->
	$scope.text = "Main Page"

# Navigation
.controller 'NavCtrl', ($scope, $location) ->
	$scope.isActive = (path) -> path == $location.path()
