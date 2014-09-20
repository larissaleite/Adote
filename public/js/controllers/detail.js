angular.module('adote')
  .controller('DetailCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

  	$scope.animal;
  	$scope.eventos;
  	$scope.comentarios;
    $scope.localizacao;

  	$http({url: '/api/animal/:id', method: 'GET', params : { id: $routeParams.id } })
      .success(function(response) {

      	/* nao funciona com o push  ??? */
        $scope.animal = response;
        
        if (response.eventos != undefined)
        	$scope.eventos = response.eventos;
        
        if (response.comentarios != undefined)
        	$scope.comentarios = response.comentarios;

        if (response.localizacoes != undefined) {
          $scope.localizacao = response.localizacoes[response.localizacoes.length-1];

            var map;
        
            var mapOptions = {
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            
            map = new google.maps.Map(document.getElementById('local'), mapOptions);
                
            var geolocate = new google.maps.LatLng($scope.localizacao.latitude, $scope.localizacao.longitude);
            
            var marker = new google.maps.Marker({
              position: geolocate,
              map: map
            });
              
            map.setCenter(geolocate);
    
        }

      }).error(function(response){
         console.log("erro "+response);
      });
        

      $scope.comentar = function() {
        var str = $scope.texto;
        var trim = str.replace(/^\s+|\s+$/g, '');
        console.log(trim);

        if(str != null && str) {
        	var date = new Date();

        	var comentario = {
        		usuario: "Maria Joaquina",
        		data: date,
        		texto: $scope.texto
        	}

        	$scope.comentarios.push(comentario);
        }
        
      	$scope.texto = "";

      	/* fazer a nível local mas só colocar em $scope.comentarios depois que voltar a atualização SEM ERRO */
      }

}]);