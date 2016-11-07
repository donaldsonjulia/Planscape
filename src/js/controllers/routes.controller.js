angular.module('planscape').controller('RoutesController', function RouteController($state, $http, RouteService, localStorageService){






this.allLocations = RouteService.getLocations(this);


this.allRoutes = RouteService.getRoutes(this);


this.delete = function(location) {
  RouteService.delete(location, $state);
};




this.currentRoute = RouteService.currentRoute;

this.setCurrentRoute = function(route) {

  RouteService.currentRoute = route;
  console.log(route);
};









});
