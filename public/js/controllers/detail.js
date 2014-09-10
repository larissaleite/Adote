angular.module('adote')
  .controller('DetailCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  	
  	$scope.nome = $routeParams.nome;
  	console.log("testeee");
}]);