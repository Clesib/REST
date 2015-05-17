'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('DetailProjectCtrl', function ($scope, $http,  $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if($routeParams.projectId) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.projectId)
        .success(function (data) {
          if (data.status == "success") {
            $scope.currentProject = data.data;
          }

        });
    }
    $scope.modify = modify;
    function modify() {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.projectId, {"title": $scope.currentProject.title, "description": $scope.currentProject.description, "year": $scope.currentProject.year})
        .success(function (data) {
          $scope.createResponse = data.data;
        });
      alert("Le projet a été modifié");
    }

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.projectId + "/Users")
      .success(function(data) {
        $scope.users = data.data;
      });

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/'  + $routeParams.projectId + '/Roles')
      .success(function(data) {
        $scope.roles = data.data;
        $scope.projects = [];

        angular.forEach($scope.roles, function(role, key) {
          if (role.name == null)
            role.name = " ";

          $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'  + role.UserId)
            .success(function(data) {
              $scope.projects.push(data.data);
            });
        });

      });
  });
