angular.module('planscape')
.controller('MapController', function MapCtrl($scope) {
    $scope.map = {
        control: {},
        zoom: 14,
        center: {
            latitude: 51.508742,
            longitude: -0.120850
        },
    };
    var directionsDisplay = new google.maps.DirectionsRenderer({
        draggable: true
    });
    var directionsService = new google.maps.DirectionsService();
    ///////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////
    // add function for sending object and setting value="address n stuff"
    // var firstObj = {
    //   city: "Greensboro",
    //   created_at: "2016-11-04T20:04:10.839z",
    //   id: 17,
    //   name: "P-Units",
    //   route: "A",
    //   state: "NC",
    //   street: "2301, Erwin Rd",
    //   updated_at: "2016-11-04T20:04:10.839z",
    //   zip: 22705
    // };
    // $scope.wayP = firstObj.city + ", " + firstObj.state;
    // // console.log($scope.wayP);
    // // set the value on the corresponding html tag
    // $( ".waypointVal" ).attr( "value", $scope.wayP );
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
    $scope.directions = {
        // testing with familiar locations to make sure optimized route is correct
        origin: "1250 Ephesus Church Rd, Chapel Hill, NC",
        // array of waypoints received from $scope.getDirections
        waypoints: [firstObj.city],
        destination: "University of North Carolina, Chapel Hill, NC",
        // showList = written, step by step driving directions
        showList: true,
    };
console.log($scope.directions.waypoints);
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
