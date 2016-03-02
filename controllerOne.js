var app = angular.module('madLibModule');


app.controller('controllerOne', ['$scope', 'madLibStorage', function($scope, madLibStorage){
	$scope.save = function() {
		madLibStorage.saveWords([$scope.noun1, $scope.noun2, $scope.noun3, $scope.adjective1, $scope.adjective2, $scope.verb1, $scope.verb2]);
	};
}]);