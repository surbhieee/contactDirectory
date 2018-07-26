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
      .when('/contacts', {
        templateUrl: '/views/list.html',
        controller: 'formController',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
