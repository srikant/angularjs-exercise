(function(){
	
	var CustomersController = function($scope, customerFactory){ 
			$scope.sortBy = 'name';
			$scope.reverse = false; 
			$scope.customers = [];
		
			function init(){
				$scope.customers = customerFactory.getCustomers();
			}
		
			init();

			$scope.doSort = function(propName){
				$scope.sortBy = propName;
				$scope.reverse = !scope.reverse;
			}
		};
	
	CustomersController.$inject = ['$scope','customerFactory'];
	
	angular.module("customersApp")
		.controller('CustomersController', CustomersController);
}()); 