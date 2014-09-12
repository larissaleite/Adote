angular.module('adote')
  .controller('CadastroCtrl', ['$scope', '$http', function($scope, $http) {
  		
  $scope.cadastrar = function() {
  	var nome = $scope.nome;
  	var situacao = $scope.situacao;
  	var descricao = $scope.descricao;
  	var localizacao = $scope.location;
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

}]).directive('googlePlaces', function(){
	    return {
	        restrict:'E',
	        replace:true,
	        // transclude:true,
	        scope: {location:'='},
	        template: '<input id="google_places_ac" name="google_places_ac" type="text" class="form-control" placeholder="Localização" />',
	        link: function($scope, elm, attrs){
	            var autocomplete = new google.maps.places.Autocomplete($("#google_places_ac")[0], {});
	            google.maps.event.addListener(autocomplete, 'place_changed', function() {
	                var place = autocomplete.getPlace();
	                $scope.location = place.geometry.location.lat() + ',' + place.geometry.location.lng();
	                $scope.$apply();
	            });
	        }
	    }
	});