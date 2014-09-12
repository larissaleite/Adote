angular.module('adote')
  .controller('DetailCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

  	$scope.animal;
  	$scope.eventos = [];
  	$scope.comentarios = [];

  	$http({url: '/api/animal/:id', method: 'GET', params : { id: $routeParams.id } })
      .success(function(response) {

      	/* nao funciona com o push  ??? */
        $scope.animal = response;
        
        if (response.eventos != undefined)
        	$scope.eventos.push(response.eventos);
        
        if (response.comentarios != undefined)
        	$scope.comentarios.push(response.comentarios);

      }).error(function(response){
         console.log("erro "+response);
      });

      /* include location name above map */ 

      	var map;
    
        var mapOptions = {
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        
        map = new google.maps.Map(document.getElementById('local'), mapOptions);
            
        var geolocate = new google.maps.LatLng(-5.825141, -35.200090999999986);
        
        var marker = new google.maps.Marker({
       		position: geolocate,
        	map: map
    	});
        
        map.setCenter(geolocate);
        
        

      $scope.comentar = function() {
      	//console.log($scope.texto);
      	//console.log(new Date());
     	/* check if text is not empty */
      	var date = new Date();

      	var comentario = {
      		usuario: "Maria Joaquina",
      		data: date,
      		texto: $scope.texto
      	}

      	$scope.comentarios.push(comentario);
      	$scope.texto = "";

      	/* fazer a nível local mas só colocar em $scope.comentarios depois que voltar a atualização SEM ERRO */
      }

}]);