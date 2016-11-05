angular.module('planscape').controller('CreateRouteController', function CreateRouteCntrl($state, $http, RouteService, localStorageService){





this.states = RouteService.states;

this.formFieldsets = [ {route:null}, {route:null} ];

this.addFieldset = function() {
  var newFieldset = {route:null};
  var currentFieldsets = this.formFieldsets;
  if (currentFieldsets.length < 4) {
    this.formFieldsets.push(newFieldset);
  }
};


this.crew = '';


this.createRoute = function() {
  var locationsArray = this.formFieldsets;
  var routeID = Date.now();
  var crew = this.crew;
  var newRoute = [];
  locationsArray.forEach(function(location){
    location.route = routeID;
    location.crew = crew;
    newRoute.push(location);
  });
  newRoute.forEach(function(location) {
    RouteService.addLocation(location);
    console.log(location);
  });

  $state.go('main.routes');
};



});
