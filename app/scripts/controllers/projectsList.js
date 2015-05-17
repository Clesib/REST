'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('ProjectsListCtrl', function ($scope, $http,  $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
      .success(function(data) {
        $scope.projects = data.data;
      });

    if($routeParams.projectId) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.projectId)
        .success(function (data) {
          if (data.status == "success") {
            $scope.currentProject = data.data;
          }
        });
    }

    $scope.deleteProject = deleteProject;
    function deleteProject(id) {
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + id)
        .success(function (data) {
          $scope.createResponse = data.data;
        });
      alert("Le projet a été supprimé");
    }

  });
