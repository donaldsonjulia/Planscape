angular.module('planscape')
    .controller('MapController', function MapCtrl($scope, RouteService, localStorageService) {
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


        $scope.locationsArray = RouteService.current;

        var startPointObj = $scope.locationsArray.shift(); // get first object
        var endPointObj = startPointObj; // give endpoint same object used in start point
        var beginAndEndValue = startPointObj.street + ", " + startPointObj.city + ", " + startPointObj.state; // concatenate key values to look like a readable address
        $scope.startPoint = beginAndEndValue; // prepare startpoint address to be handed to html and attribute value
        $scope.endPoint = beginAndEndValue; //prepare endpoint address to be handed to html and attribute value
        $(".startPointValue").attr("value", $scope.startPoint); //give address to html & attribute value
        $(".endPointValue").attr("value", $scope.startPoint); //give address to html & attribute value

        var wayPointObj = $scope.locationsArray;


        $scope.directions = {
            //get address, city, state, zip from locatArray for start/endpoint, all others considered waypoints
            // disburse the key values to he html value attribute
            origin: $scope.startPoint,
            // array of waypoints received from $scope.getDirections
            waypoints: $scope.waypoints, //firstObj.city would go in waypoints array
            destination: $scope.endPoint,
            // showList = written, step by step driving directions
            showList: true
        };
        // $(".checkAll").change(function() {
        //     $("option.checkbox").prop('selected', $(this).prop("selected"));
        // });

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
