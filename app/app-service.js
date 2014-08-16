(function(){
	
	var app =  angular.module('customersApp',['ngRoute']);
	
	//using constants
	//app.config(function($routeProvider, appSettings){
	app.config(function($routeProvider){
	
		$routeProvider
			.when('/',
				  {
				  	controller : 'CustomersController',
					templateUrl : 'app/views/customers.html'  
				  })
			.when('/orders/:customerId',
				  {
				  	controller : 'OrdersController',
					templateUrl : 'app/views/orders-factory.html'  
				  })
			.otherwise( { redirectTo: '/' });
	});
}());