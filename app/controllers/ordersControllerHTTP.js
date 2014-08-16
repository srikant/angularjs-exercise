(function(){
	
	var OrdersController = function($scope, $routeParams, customerFactory){ 
			
			var customerId = $routeParams.customerId;
			 $scope.customer = null;
		
			function init(){
				customerFactory.getCustomer(customerId)
					.success(function(customer){
						$scope.customer = customer;
					})
					.error(function(data, status, headers, config){
						// handle error
					});
			}

			 
			init();
		};
	
	OrdersController.$inject = ['$scope', '$routeParams', 'customerFactory'];
	angular.module("customersApp")
		.controller('OrdersController', OrdersController);
}()); 