var app = angular.module('madLibModule');

app.controller('controllerTwo', ['$scope', 'madLibStorage', function($scope, madLibStorage) {
	$scope.noun1 = madLibStorage.getNoun()[0]; 
	$scope.noun2 = madLibStorage.getNoun()[1];
	$scope.noun3 = madLibStorage.getNoun()[2]; 
	$scope.adjective1 = madLibStorage.getAdj()[0]; 
	$scope.adjective2 = madLibStorage.getAdj()[1]; 
	$scope.verb1 = madLibStorage.getVerb()[0]; 
	$scope.verb2 = madLibStorage.getVerb()[1]; 
}]);