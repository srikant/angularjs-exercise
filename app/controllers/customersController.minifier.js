/*// Option 1
(function(){
	
	var CustomersController = function(s){ 
			s.sortBy = 'name';
			s.reverse = false;

			s.customers =  [
				{joined: '2014-08-17', name: 'Srikant', city: 'Hyderabad', orderTotal: 9.9956},
				{joined: '2014-08-16', name: 'Rajni', city: 'Hyderabad', orderTotal: 19.9956},
				{joined: '2014-08-15', name: 'Uday', city: 'Hyderabad', orderTotal: 10.9956},
				{joined: '2014-08-14', name: 'Geetha', city: 'Hyderabad', orderTotal: 7.9956}];

			s.doSort = function(propName){
				s.sortBy = propName;
				s.reverse = !s.reverse;
			}
		};
	
	angular.module("cusomersApp")
		.controller('CustomersController', ['$scope',CustomersController]);
}());*/

/*// Option 2
(function(){
	
	CustomersController.$inject = ['$scope'];
	
	function CustomersController(s){ 
			s.sortBy = 'name';
			s.reverse = false;

			s.customers =  [
				{joined: '2014-08-17', name: 'Srikant', city: 'Hyderabad', orderTotal: 9.9956},
				{joined: '2014-08-16', name: 'Rajni', city: 'Hyderabad', orderTotal: 19.9956},
				{joined: '2014-08-15', name: 'Uday', city: 'Hyderabad', orderTotal: 10.9956},
				{joined: '2014-08-14', name: 'Geetha', city: 'Hyderabad', orderTotal: 7.9956}];

			s.doSort = function(propName){
				s.sortBy = propName;
				s.reverse = !s.reverse;
			}
		};
	
		
	
	angular.module("cusomersApp")
		.controller('CustomersController', CustomersController);
}());*/

// Option 3
(function(){
	
	var CustomersController = function($scope){ 
			$scope.sortBy = 'name';
			$scope.reverse = false;

			$scope.customers =  [
				{joined: '2014-08-17', name: 'Srikant', city: 'Hyderabad', orderTotal: 9.9956},
				{joined: '2014-08-16', name: 'Rajni', city: 'Hyderabad', orderTotal: 19.9956},
				{joined: '2014-08-15', name: 'Uday', city: 'Hyderabad', orderTotal: 10.9956},
				{joined: '2014-08-14', name: 'Geetha', city: 'Hyderabad', orderTotal: 7.9956}];

			$scope.doSort = function(propName){
				$scope.sortBy = propName;
				$scope.reverse = !$scope.reverse;
			}
		};
	
	CustomersController.$inject = ['$scope'];
	
	angular.module("cusomersApp")
		.controller('CustomersController', CustomersController);
}());