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
  }).state('main.view', {
    url: 'view',
    templateUrl: './src/templates/view.html',
    controller: 'ViewRouteController as view'
  });



});
