
# Attaching to controllers module
angular.module 'doctorsApp.controllers'

# Doctors Controller. Provides doctors list and google maps markers
.controller 'DoctorsCtrl', ($scope, Doctor, uiGmapGoogleMapApi, $log, $timeout) ->
	$scope.doctors = Doctor.query()
	$scope.markers = []

	# uiGmapGoogleMapApi is a promise.
	# The "then" callback function provides the google.maps object.
	uiGmapGoogleMapApi.then (maps) ->
		$scope.map =
			center: latitude: 39.116634, longitude: -77.539295
			zoom: 13,
			bounds: {}
		$scope.options =
			scrollwheel: false

		createMarker = (i, bounds, idKey) ->
			# lat_min = bounds.southwest.latitude
			# lat_range = bounds.northeast.latitude - lat_min
			# lng_min = bounds.southwest.longitude
			# lng_range = bounds.northeast.longitude - lng_min
			# latitude = lat_min + (Math.random() * lat_range)
			# longitude = lng_min + (Math.random() * lng_range)
			latitude = $scope.doctors[i].coords.lat
			longitude = $scope.doctors[i].coords.lon
			idKey = "id" if idKey == undefined
			ret =
				latitude: latitude
				longitude: longitude
				title: 'm' + i
			ret[idKey] = i
			$log.info "m%s", i
			$log.log "  lat = %s", ret.latitude
			$log.log "  lon = %s", ret.longitude
			return ret

		# Get the bounds from the map once it's loaded
		$scope.$watch \
			() ->
				$scope.map.bounds
			, (nv, ov) ->
				# Only need to regenerate once
				if !ov.southwest and nv.southwest
					markers = []
					i = 0
					len = $scope.doctors.length
					while i < len
						markers.push createMarker i, $scope.map.bounds
						i++
					$scope.markers = markers
			, true
