angular.module('adote')
  .controller('DetailCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
  	
  	//$scope.nome = $routeParams.nome;
  	console.log($routeParams.id);

  	$scope.animal = [];
  	$scope.eventos = [];
  	$scope.comentarios = [];

  	$http({url: '/api/animal/:id', method: 'GET', params : { id: $routeParams.id } })
      .success(function(response) {
        
        $scope.animal.push(response);
        $scope.eventos.push(response.eventos);
        $scope.comentarios.push(response.comentarios);

      }).error(function(response){
         console.log("erro "+response);
      });

}]);