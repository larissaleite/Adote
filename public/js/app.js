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
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegistrationCtrl'
      })
  	  .otherwise({
  	    redirectTo: '/'
  	  });

  });
