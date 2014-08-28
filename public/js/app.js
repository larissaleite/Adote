angular.module('adote', ['ngCookies', 'ngResource', 'ngRoute'])
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
  	  .otherwise({
  	    redirectTo: '/'
  	  });

  });
