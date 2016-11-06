angular.module('planscape').controller('RoutesController', function RouteController($state, $http, RouteService, localStorageService){






this.allLocations = RouteService.getLocations(this);


this.allRoutes = RouteService.getRoutes(this);


this.delete = function(location) {
  RouteService.delete(location, $state);
};





/**  **********BELOW GETS ORGANIZED ROUTES************ */

// $http({
//     method: 'GET',
//     url: 'https://shielded-atoll-99970.herokuapp.com/show'
// }).then(function successCallback(response) {
//     console.log(response.data);
// }, function errorCallback(response) {
//     console.log("OH NO! ERROR: " + response);
// });















});
