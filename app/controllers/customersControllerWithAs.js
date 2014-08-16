function CustomersController(){

	this.sortBy = 'name';
	this.reverse = false;

	this.customers =  [
		{joined: '2014-08-17', name: 'Srikant', city: 'Hyderabad', orderTotal: 9.9956},
		{joined: '2014-08-16', name: 'Rajni', city: 'Hyderabad', orderTotal: 19.9956},
		{joined: '2014-08-15', name: 'Uday', city: 'Hyderabad', orderTotal: 10.9956},
		{joined: '2014-08-14', name: 'Geetha', city: 'Hyderabad', orderTotal: 7.9956}];
	
	this.doSort = function(propName){
		this.sortBy = propName;
		this.reverse = !scope.reverse;
	}
}