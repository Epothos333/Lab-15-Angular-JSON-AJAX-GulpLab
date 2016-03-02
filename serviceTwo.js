var app = angular.module('madLibModule');

app.factory('getReddit', ['$http', function($http) {
	return $http.get('https://www.reddit.com/r/aww/.json');
}]);