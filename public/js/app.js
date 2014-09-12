angular.module('adote', ['ngCookies', 'ngResource', 'ngRoute', 'mgcrea.ngStrap', 'flow'])
  .config(function($locationProvider, $routeProvider) {

    $routeProvider
  	  .when('/', {
  	    templateUrl: '/views/home.html',
  	    controller: 'HomeCtrl'
  	  })
  	  .when('/login', {
  	    templateUrl: '/views/login.html',
  	    controller: 'LoginCtrl'
  	  })
      .when('/animal/', {
        templateUrl: '/views/animal2.html',
        controller: 'AnimalCtrl'
      })
      .when('/animal/:id', {
        templateUrl: '/views/detail.html',
        controller: 'DetailCtrl'
      })
      .when('/cadastro', {
        templateUrl: '/views/cadastro.html',
        controller: 'CadastroCtrl'
      })
      .when('/busca', {
        templateUrl: '/views/busca.html',
        controller: 'BuscaCtrl'
      })
  	  .otherwise({
  	    redirectTo: '/'
  	  });

      //$locationProvider.html5Mode(true);

  })

  .controller('MenuCtrl', function($scope, $http, $location) {

    $scope.selectedAnimal = "";

    /* refactor to get only id, name and pic instead of the whole obj to increase performance */
    $http.get('/api/animals')
      .success(function(response) {
        $scope.animals = response;
      }).error(function(response){
         console.log("erro "+response);
      });

    $scope.$on('$typeahead.select', function() {
      $scope.selectedValue = $scope.selectedAnimal;
      $scope.selectedAnimal = "";
      window.location.href = '/#/animal/'+$scope.selectedValue._id;

    });

});