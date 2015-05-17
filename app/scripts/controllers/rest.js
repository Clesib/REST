'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('RestCtrl', function ($scope, $http,  $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
      .success(function(data) {
        $scope.users = data.data;
      });

    if($routeParams.userId) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
        .success(function (data) {
          if (data.status == "success") {
            $scope.currentUser = data.data;
          }
        });
    }

    $scope.deleteUser = deleteUser;
    function deleteUser(id) {
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + id)
        .success(function (data) {
          $scope.createResponse = data.data;
        });
      alert("L'utilisateur a été supprimé");
    }

  });
