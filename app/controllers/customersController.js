/*// Option 1

app.controller('CustomersController', function ($scope){

	$scope.sortBy = 'name';
	$scope.reverse = false;

	$scope.customers =  [
		{joined: '2014-08-17', name: 'Srikant', city: 'Hyderabad', orderTotal: 9.9956},
		{joined: '2014-08-16', name: 'Rajni', city: 'Hyderabad', orderTotal: 19.9956},
		{joined: '2014-08-15', name: 'Uday', city: 'Hyderabad', orderTotal: 10.9956},
		{joined: '2014-08-14', name: 'Geetha', city: 'Hyderabad', orderTotal: 7.9956}];
	
	$scope.doSort = function(propName){
		$scope.sortBy = propName;
		$scope.reverse = !scope.reverse;
	}
});*/

/*// Option 2
(function(){
	angular.module("cusomersApp")
		.controller('CustomersController', function($scope){ 
			$scope.sortBy = 'name';
			$scope.reverse = false;

			$scope.customers =  [
				{joined: '2014-08-17', name: 'Srikant', city: 'Hyderabad', orderTotal: 9.9956},
				{joined: '2014-08-16', name: 'Rajni', city: 'Hyderabad', orderTotal: 19.9956},
				{joined: '2014-08-15', name: 'Uday', city: 'Hyderabad', orderTotal: 10.9956},
				{joined: '2014-08-14', name: 'Geetha', city: 'Hyderabad', orderTotal: 7.9956}];

			$scope.doSort = function(propName){
				$scope.sortBy = propName;
				$scope.reverse = !scope.reverse;
			}
		});
}());*/

// Option 3
(function(){
	
	var CustomersController = function($scope){ 
			$scope.sortBy = 'name';
			$scope.reverse = false;

			$scope.customers =  [
				{
					id: 1,
					joined: '2014-08-17', 
					name: 'Srikant', 
					city: 'Hyderabad', 
					orderTotal: 9.9956,
					orders:[
						{
							id: 1,
							product: 'Shoes',
							total: 9.9956
						}
					]
				},
				{
					id: 2,
					joined: '2014-08-16', 
					name: 'Rajni', 
					city: 'Hyderabad', 
					orderTotal: 19.9956,
					orders:[
						{
							id: 2,
							product: 'Baseball',
							total: 9.995
						},
						{
							id: 3,
							product: 'Bat',
							total: 9.995
						}
					]
				},
				{
					id: 3,
					joined: '2014-08-15', 
					name: 'Uday', 
					city: 'Hyderabad', 
					orderTotal: 10.9956,
					orders:[
						{
							id: 4,
							product: 'Baseball',
							total: 9.995
						},
						{
							id: 5,
							product: 'Bat',
							total: 9.995
						}
					]
				},
				{
					id: 4,
					joined: '2014-08-14', 
					name: 'Geetha', 
					city: 'Hyderabad', 
					orderTotal: 7.9956,
					orders:[
						{
							id: 6,
							product: 'Shoes',
							total: 9.9956
						},
						{
							id: 7,
							product: 'Baseball',
							total: 9.995
						},
						{
							id: 8,
							product: 'Bat',
							total: 9.995
						}
					]
				}];

			$scope.doSort = function(propName){
				$scope.sortBy = propName;
				$scope.reverse = !scope.reverse;
			}
		};
	
	CustomersController.$inject = ['$scope'];
	
	angular.module("cusomersApp")
		.controller('CustomersController', CustomersController);
}());



/*function CustomersController($scope){

	$scope.sortBy = 'name';
	$scope.reverse = false;

	$scope.customers =  [
		{joined: '2014-08-17', name: 'Srikant', city: 'Hyderabad', orderTotal: 9.9956},
		{joined: '2014-08-16', name: 'Rajni', city: 'Hyderabad', orderTotal: 19.9956},
		{joined: '2014-08-15', name: 'Uday', city: 'Hyderabad', orderTotal: 10.9956},
		{joined: '2014-08-14', name: 'Geetha', city: 'Hyderabad', orderTotal: 7.9956}];
	
	$scope.doSort = function(propName){
		$scope.sortBy = propName;
		$scope.reverse = !scope.reverse;
	}
}*/