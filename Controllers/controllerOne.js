var app = angular.module('madLibModule');


app.controller('controllerOne', ['$scope','$location', 'madLibStorage', function($scope,$location, madLibStorage){
	$scope.save = function(view) {
		var nounArr = [$scope.noun1, $scope.noun2, $scope.noun3];
		var adjArr = [$scope.adjective1, $scope.adjective2];
		var verbArr = [$scope.verb1, $scope.verb2];

		madLibStorage.saveWords([nounArr, adjArr, verbArr]);
		$location.path(view);
	};
}]);