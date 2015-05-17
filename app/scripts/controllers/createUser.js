'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('CreateUserCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.create = create;
    function create() {
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users', {"name": $scope.user.name, "surname": $scope.user.surname, "email": $scope.user.email, "website": $scope.user.website})
        .success(function (data) {
          $scope.createResponse = data.data;
        });
      alert("L'utilisateur a été ajouté");
    }
  });
