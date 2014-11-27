'use strict';

angular.module('newbeeCmsApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/task', {
        templateUrl: 'app/task/task.html',
        controller: 'TaskCtrl'
      });
  });