var app = angular.module('madLibModule');

app.factory('madLibStorage', function() {
	var emptyArr = [['', '', ''],['', ''] ['', '']];
	var wordInput;
	var nouns;
	var adjectives;
	var verbs;


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