angular.module('planscape').controller('CreateRouteController', function($state, $http, CreateRouteService) {

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

this.routes = [];

this.formFieldsets = [{location: {}},{location:{}}];

this.addFieldset = function() {
  var newFieldset = {location: {}};
  var currentFieldsets = this.fieldsets;
  if (currentFieldsets.length < 4) {
    this.formFieldsets.push(newFieldset);
  }
};

this.generate = function() {
  console.log(this.formFieldsets);
  $state.go('main.route');
};






});
