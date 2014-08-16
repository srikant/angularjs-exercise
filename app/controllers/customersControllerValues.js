(function(){
	
	var CustomersController = function($scope, customerFactory, appSettings){ 
			$scope.sortBy = 'name';
			$scope.reverse = false; 
			$scope.customers = [];
			$scope.appSettings = appSettings;
		
			function init(){
				$scope.customers = customerFactory.getCustomers();
			}
		
			init();

			$scope.doSort = function(propName){
				$scope.sortBy = propName;
				$scope.reverse = !scope.reverse;
			}
		};
	
	CustomersController.$inject = ['$scope','customerFactory', 'appSettings'];
	
	angular.module("customersApp")
		.controller('CustomersController', CustomersController);
}()); 