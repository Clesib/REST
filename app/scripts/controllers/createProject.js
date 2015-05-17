'use strict';

/**
 * @ngdoc function
 * @name showcaseApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the showcaseApp
 */
angular.module('showcaseApp')
  .controller('CreateProjectCtrl', function ($scope, $http) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.create = create;
    function create() {
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Projects', {"title": $scope.project.title, "description": $scope.project.description, "year": $scope.project.year})
        .success(function (data) {
          $scope.createResponse = data;
          if ($scope.createResponse.status == "success")
            alert("Le projet a été ajouté");
          else
            alert("Impossible d'ajouter le projet");
        });

    }
  });
