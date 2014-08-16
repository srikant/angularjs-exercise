(function(){
	
	var OrdersController = function($scope, $routeParams, customerFactory){ 
			
			var customerId = $routeParams.customerId;
			 $scope.customer = null;
		
			function init(){
				//Search the customers for the customerId
				 $scope.customer = customerFactory.getCustomer(customerId);
			}

			 
			init();
		};
	
	OrdersController.$inject = ['$scope', '$routeParams', 'customerFactory'];
	angular.module("customersApp")
		.controller('OrdersController', OrdersController);
}()); 