var app = angular.module('madLibModule', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'inputView.html',
		controller: 'controllerOne'
	});
	$routeProvider.when('/outputView', {
		controller: 'controllerTwo',
		templateUrl: 'outputView.html'
	});
})