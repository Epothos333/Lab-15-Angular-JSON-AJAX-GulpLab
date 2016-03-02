var app = angular.module('madLibModule');

app.factory('madLibStorage', function() {
	var wordInput = [];


	return {
		saveWords: function(arr) {
			wordInput = arr;
		},
		getWords: function() {
			return wordInput;
		}

	};
});