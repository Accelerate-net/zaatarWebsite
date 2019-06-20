angular.module('kopperKadaiApp', [])

	.config(['$qProvider', function ($qProvider) {
	    $qProvider.errorOnUnhandledRejections(false);
	}])

  .controller('menuController', function($scope, $http) {
  
  				var mydata = {};
  				mydata.outlet = 'BANGALORE';

				$http({
					method  : 'POST',
					url     : 'https://www.kopperkadai.com/services/fetchmenuweb.php',
					data    : mydata,
					headers : {'Content-Type': 'application/x-www-form-urlencoded'}
				 })
				.then(function(response) {
					$scope.kkmenu = response.data;	
					console.log($scope.kkmenu)	
				});

	$scope.getFirstPortion = function(value){
		return Math.ceil(value/3);
	}
	
	$scope.getSecondPortion = function(value){
		return Math.ceil(value*2/3);
	}
  })
;
