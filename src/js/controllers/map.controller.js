angular.module('planscape').controller('MapController', function CreateRouteCtrl($scope) {
    $scope.map = {
        control: {},
        zoom: 14,
        center: {
            latitude: 51.508742,
            longitude: -0.120850
        },
        scrollwheel: false
    };
    var directionsDisplay = new google.maps.DirectionsRenderer({
        draggable: true
    });
    var directionsService = new google.maps.DirectionsService();
    $scope.directions = {
        // testing with familiar locations to make sure optimized route is correct
        origin: "1250 Ephesus Church Rd, Chapel Hill, NC",
        // array of waypoints received from $scope.getDirections
        waypoints: [],
        destination: "University of North Carolina, Chapel Hill, NC",
        // showList = written, step by step driving directions
        showList: true
    };

    $scope.waypointschange = function() {
        $scope.directions.waypoints = [];
        // cb refers to checkbox
        var cb = $('#waypoints');
        if (cb && cb.length > 0) {
            var checkboxArray = cb[0];
            for (var i = 0; i < checkboxArray.length; i++) {
                if (checkboxArray.options[i].selected) {
                    $scope.directions.waypoints.push({
                        location: checkboxArray[i].value,
                        stopover: true
                    });
                }
            }
        }
    };

    $scope.getDirections = function() {
        var request = {
            origin: $scope.directions.origin,
            destination: $scope.directions.destination,
            waypoints: $scope.directions.waypoints,
            optimizeWaypoints: true,
            travelMode: google.maps.DirectionsTravelMode.DRIVING
        };
        directionsService.route(request, function(response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
                directionsDisplay.setMap($scope.map.control.getGMap());
                directionsDisplay.setPanel(document.getElementById('directionsList'));
                $scope.directions.showList = true;
            } else {
                alert('Google route unsuccesfull!');
            }
        });
    };
});
