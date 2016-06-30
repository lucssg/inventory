(function() {
	'use strict';
	angular
		.module('seb')
		.filter('replace', function() {
			return function(msg, pattern, replace) {
				return msg.replace(pattern, replace);
			}
		});
})();
