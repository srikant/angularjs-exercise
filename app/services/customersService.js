(function(){
	var customersService = function(){
		var customers = [
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
		
		 
		this.getCustomers = function(){
			return customers;
		};
		
		this.getCustomer = function(customerId){
			//Search the customers for the customerId
				for(var i=0,len=customers.length;i<len;i++){
					if(customers[i].id === parseInt(customerId)){
						return customers[i];
					}
				}
				return {};
		};
		
		 
	};
	
	angular.module('customersApp').service('customersService',customersService);
}());