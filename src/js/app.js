angular.module('planscape', ['ui.router', 'LocalStorageModule', 'google-maps']).config(function($stateProvider, $urlRouterProvider) {


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
  }).state('main.routes', {
    url: 'routes',
    templateUrl: './src/templates/routes.html',
    controller: 'RoutesController as routes'
  }).state('main.detail', {
    url: 'routes/detail/{route}',
    templateUrl: './src/templates/detail.html',
    controller: 'RoutesController as routes'
  }).state('main.map', {
    url: 'map',
    templateUrl: './src/templates/map.html',
    controller: 'MapController as mapCntrl'
  });

});
