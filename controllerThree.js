var app = angular.module('madLibModule');

app.controller('controllerThree', ['$scope', '$http', 'getReddit', function($scope, $http, getReddit) {

	getReddit.then(function(response) {
		$scope.titles = response.data.data.children;
		console.log($scope.titles);
	});

}]);