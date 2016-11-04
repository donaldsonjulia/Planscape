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




this.routes = RouteService.get();

this.createRoute = function() {
  var locationsArray = this.formFieldsets;
  var routeID = Date.now();
  var newRoute = [];
  locationsArray.forEach(function(location){
    location.route = routeID;
    newRoute.push(location);
  });
  this.routes.push(newRoute);
  RouteService.set(this.routes);
  $state.go('main.routes');
};



});
