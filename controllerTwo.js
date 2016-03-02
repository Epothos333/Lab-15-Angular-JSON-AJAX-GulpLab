var app = angular.module('madLibModule');

app.controller('controllerTwo', ['$scope', 'madLibStorage', function($scope, madLibStorage) {
	$scope.noun1 = madLibStorage.getWords()[0];
	$scope.noun2 = madLibStorage.getWords()[1];
	$scope.noun3 = madLibStorage.getWords()[2];
	$scope.adjective1 = madLibStorage.getWords()[3];
	$scope.adjective2 = madLibStorage.getWords()[4];
	$scope.verb1 = madLibStorage.getWords()[5];
	$scope.verb2 = madLibStorage.getWords()[6];
}]);