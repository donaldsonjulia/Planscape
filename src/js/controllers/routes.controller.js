angular.module('planscape').controller('RoutesController', function RouteController($state, $http, RouteService, localStorageService){






this.allLocations = RouteService.getLocations(this);


this.allRoutes = RouteService.getRoutes(this);


this.delete = function(location) {
  RouteService.delete(location, $state);
};




this.currentRoute = RouteService.current;

this.setCurrentRoute = function(route) {
  RouteService.current = route;
  localStorageService.set('currentRoute', route);
};








});
