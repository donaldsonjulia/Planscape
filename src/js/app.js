angular.module('planscape', ['ui.router', 'LocalStorageModule']).config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('create');

  $stateProvider.state('main', {
    url: '/',
    abstract: true,
    template: '<ui-view></ui-view>'
  }).state('main.login', {
    url: 'login',
    templateUrl: './src/templates/login.html',
    controller: 'LoginController as login'
  }).state('main.create', {
    url: 'create',
    templateUrl: './src/templates/create.html',
    controller: 'CreateRouteController as create'
  }).state('main.route', {
    url: 'route',
    templateUrl: './src/templates/route.html',
    controller: 'CreateRouteController as create'
  }).state('main.map', {
    url: 'map',
    templateUrl: './src/templates/map.html',
    controller: 'MapController as map'
  });

});
