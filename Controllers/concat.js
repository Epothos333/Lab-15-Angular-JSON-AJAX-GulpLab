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
var app = angular.module('madLibModule');

app.controller('controllerThree', ['$scope', '$http', 'getReddit', function($scope, $http, getReddit) {

	getReddit.then(function(response) {
		$scope.titles = response.data.data.children;
	});

}]);
var app = angular.module('madLibModule');

app.factory('madLibStorage', function() {
	var wordInput, nouns, adjectives, verbs;


	return {
		saveWords: function(arr) {
			wordInput = arr;
			nouns = arr[0];
			adjectives = arr[1];
			verbs = arr[2];
		},
		getNoun: function() {
			return nouns || '';
		},
		getAdj: function() {
			return adjectives || '';
		},
		getVerb: function() {
			return verbs || '';
		}

	};
});
var app = angular.module('madLibModule');

app.factory('getReddit', ['$http', function($http) {
	return $http.get('https://www.reddit.com/r/aww/.json');
}]);