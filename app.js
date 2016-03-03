var app = angular.module('madLibModule', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'Views/inputView.html',
		controller: 'controllerOne'
	});
	$routeProvider.when('/Views/outputView', {
		controller: 'controllerTwo',
		templateUrl: 'Views/outputView.html'
	});
	$routeProvider.when('/Views/view3', {
		controller: 'controllerThree',
		templateUrl: 'Views/view3.html'
	})
})