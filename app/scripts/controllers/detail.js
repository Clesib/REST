'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('DetailCtrl', function ($scope, $http,  $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    if($routeParams.userId) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
        .success(function (data) {
          if (data.status == "success") {
            $scope.currentUser = data.data;
          }

        });
    }
    $scope.modify = modify;
    function modify() {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId, {"name": $scope.currentUser.name, "surname": $scope.currentUser.surname, "email": $scope.currentUser.email, "website": $scope.currentUser.website})
        .success(function (data) {
          $scope.createResponse = data.data;
        });
      alert("L'utilisateur a été modifié");
    }

   /* $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'  + $routeParams.userId + '/Projects')
      .success(function(data) {
        $scope.users = data.data;
      });*/

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/'  + $routeParams.userId + '/Roles')
      .success(function(data) {
        $scope.roles = data.data;
        $scope.projects = [];

        angular.forEach($scope.roles, function(role, key) {
          if (role.name == null)
            role.name = " ";

          $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/'  + role.ProjectId)
            .success(function(data) {
              $scope.projects.push(data.data);
            });
        });

      });


  });
