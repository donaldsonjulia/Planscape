angular.module('planscape').controller('CreateRouteController', function($state, $http, CreateRouteService, localStorageService) {

//* BELOW AJAX TEST FOR CONNECTING TO BACKEND, NOT RELATED TO APP */
  $http({
    method: 'GET',
    url: 'https://shielded-atoll-99970.herokuapp.com/'
  }).then(function successCallback(data) {
    console.log(data);
  }, function errorCallback(data) {
    console.log(data);
    });

//* ******************START CONTROLLER HERE******************************* */



this.states = CreateRouteService.states;

this.formFieldsets = [ {route:null}, {route:null} ];

this.addFieldset = function() {
  var newFieldset = {route:null};
  var currentFieldsets = this.formFieldsets;
  if (currentFieldsets.length < 4) {
    this.formFieldsets.push(newFieldset);
  }
};




this.routes = CreateRouteService.get();

this.createRoute = function() {
  var locationsArray = this.formFieldsets;
  var routeID = Date.now();
  var newRoute = [];
  locationsArray.forEach(function(location){
    location.route = routeID;
    newRoute.push(location);
  });
  this.routes.push(newRoute);
  CreateRouteService.set(this.routes);
  $state.go('main.route');
};



});
