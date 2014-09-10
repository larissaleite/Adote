angular.module('adote', ['ngCookies', 'ngResource', 'ngRoute', 'mgcrea.ngStrap'])
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
      .when('/animal/:nome', {
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

      $locationProvider.html5Mode(true);

  })

  .controller('MenuCtrl', function($scope, $http, $location) {

    //$scope.selectedState = "";
    //$scope.states = ["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Dakota","North Carolina","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"];
    $scope.selectedAnimal = "";
    console.log("selected "+ $scope.selectedAnimal);

    /*$scope.$watch('selectedAnimal', function(value) {
        console.log('selectedAnimal: ', $scope.selectedAnimal);
    }, true);*/

    /* refactor to get only id, name and pic instead of the whole obj to increase performance */
    $http.get('/api/animals')
      .success(function(response) {
        console.log(response);
        $scope.animals = response;
      }).error(function(){
         console.log("erro "+response);
      });

    $scope.$on('$typeahead.select', function() {
      $scope.selectedValue = $scope.selectedAnimal;
      console.log('Value selected '+ $scope.selectedValue.nome);
      $scope.$digest();

      console.log($location.path());

      window.location.href = '/#/animal/'+$scope.selectedValue.nome;

    });

});