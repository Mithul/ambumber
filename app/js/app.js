'use strict';

/* App Module */

var phonecatApp = angular.module('phonecatApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'EventsCtrl',
	      title: "Events"
      }).
      when('/events', {
        templateUrl: 'partials/events.html',
        controller: 'EventsCtrl'
      }).
      when('/workshops', {
        templateUrl: 'partials/workshops.html',
        controller: 'EventsCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);
