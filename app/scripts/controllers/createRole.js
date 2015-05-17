'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('CreateRoleCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.create = create;
    function create() {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $scope.role.project + '/Users/' + $scope.role.user)
        .success(function (data) {
          $scope.createResponse = data;
          if ($scope.createResponse.status == "success")
            alert("Le role a été ajouté");
          else
            alert("Impossible d'ajouter le role" + $scope.createResponse.message);

          $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/', {"name" : $scope.role.name, "ProjectId" : $scope.role.project, "UserId" : $scope.role.user})
        });

    }
  });
