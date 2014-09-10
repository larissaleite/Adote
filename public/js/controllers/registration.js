angular.module('adote')
  .controller('CadastroCtrl', ['$scope', '$http', function($scope, $http) {
  		
  $scope.cadastrar = function() {
  	var nome = $scope.nome;
  	var situacao = $scope.situacao;
  	var descricao = $scope.descricao;
  	var localizacao = $scope.localizacao;
  	var tipo = $scope.tipo;
  	var date = new Date();

  	var animal = {
  		nome: nome,
  		situacao: situacao,
  		descricao: descricao,
  		localizacao: localizacao,
  		tipo: tipo,
  		date: date
  	}

  	$http.post('/api/animal', animal)
		.success(function(response) {
			console.log(response.data);
			window.location = '/';
		});

  }

  $scope.getAll = function () {

  	$http.get('/api/animals')
	    .success(function(response) {
	      console.log(response);
	      //$scope.animals = data;
	    }).error(function(){
	       console.log("erro "+response);
	    });
  
  }

}]);