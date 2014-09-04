angular.module('adote', ['ngCookies', 'ngResource', 'ngRoute', 'mgcrea.ngStrap'])
  .config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
  	  .when('/', {
  	    templateUrl: 'views/home.html',
  	    controller: 'HomeCtrl'
  	  })
  	  .when('/login', {
  	    templateUrl: 'views/login.html',
  	    controller: 'LoginCtrl'
  	  })
      .when('/animal', {
        templateUrl: 'views/animal2.html',
        controller: 'AnimalCtrl'
      })
      .when('/cadastro', {
        templateUrl: 'views/cadastro.html',
        controller: 'CadastroCtrl'
      })
      .when('/busca', {
        templateUrl: 'views/busca.html',
        controller: 'BuscaCtrl'
      })
  	  .otherwise({
  	    redirectTo: '/'
  	  });

  })

  .controller('MenuCtrl', function($scope) {

    $scope.selectedState = "";
  $scope.states = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];


});
