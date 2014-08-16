(function(){
	
	var CustomersController = function($scope, $log, customerFactory, appSettings){ 
			$scope.sortBy = 'name';
			$scope.reverse = false; 
			$scope.customers = [];
			$scope.appSettings = appSettings;
		
			function init(){
				customerFactory.getCustomers()
					.success(function(customers){
						$scope.customers = customers;
					})
				.error(function(data, status, headers, config){
					// handle error
					$log.log(data.error + ' ' + status);
				});
			}
		
			init();

			$scope.doSort = function(propName){
				$scope.sortBy = propName;
				$scope.reverse = !scope.reverse;
			}
		};
	
	CustomersController.$inject = ['$scope', '$log', 'customerFactory', 'appSettings'];
	
	angular.module("customersApp")
		.controller('CustomersController', CustomersController);
}()); 