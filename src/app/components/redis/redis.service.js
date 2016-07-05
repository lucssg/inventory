(function(){
	'use strict';

  angular
    .module('seb')
	.factory('Redis', redis);

		/** @ngInject */
		function redis($resource) {
			return $resource('http://localhost:7379/:verb/:param', null, {
				keys: {
					verb: 'KEYS',
					param: '*' 
				}, 
				detail: { method: 'GET' }
			});
		}
})();
