'use strict';

/**
 * @ngdoc overview
 * @name showcaseApp
 * @description
 * # showcaseApp
 *
 * Main module of the application.
 */
angular
  .module('showcaseApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/etudes', {
        templateUrl: 'views/etudes.html',
        controller: 'EtudesCtrl'
      })
      .when('/projets', {
        templateUrl: 'views/projets.html',
        controller: 'ProjetsCtrl'
      })
      .when('/createproject', {
        templateUrl: 'views/createProject.html',
        controller: 'CreateProjectCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projectsList.html',
        controller: 'ProjectsListCtrl'
      })
      .when('/createrole', {
        templateUrl: 'views/createRole.html',
        controller: 'CreateRoleCtrl'
      })
      .when('/menurest', {
        templateUrl: 'views/menuRest.html',
        controller: 'MenuRestCtrl'
      })
      .when('/createuser', {
        templateUrl: 'views/createUser.html',
        controller: 'CreateUserCtrl'
      })
      .when('/rest', {
        templateUrl: 'views/rest.html',
        controller: 'RestCtrl'
      })
      .when('/detail/:userId', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .when('/detailproject/:projectId', {
        templateUrl: 'views/detailProject.html',
        controller: 'DetailProjectCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
