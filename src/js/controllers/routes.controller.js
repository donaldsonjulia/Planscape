angular.module('planscape').controller('RoutesController', function RouteController($state, $http, RouteService, localStorageService){






this.allLocations = RouteService.getLocations(this);





});
