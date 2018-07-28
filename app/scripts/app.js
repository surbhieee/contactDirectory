'use strict';

/**
 * @ngdoc overview
 * @name contactDirectoryApp
 * @description
 * # contactDirectoryApp
 *
 * Main module of the application.
 */
angular
  .module('contactDirectoryApp', [
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
        templateUrl: '/views/home.html',
        controller: 'formController',
      })
      .when('/add', {
        templateUrl: '/views/add.html',
        controller: 'formController',
      })
      .when('/edit_remove', {
        templateUrl: '/views/editRemove.html',
        controller: 'formController',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
