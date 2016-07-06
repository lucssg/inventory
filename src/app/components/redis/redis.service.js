(function(){
	'use strict';

  angular
    .module('seb')
	.factory('Redis', redis)
	.factory('RedisZRange', redisZRange);

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

		function redisZRange($resource) {
			return $resource('http://localhost:7379/ZRANGE/:index/:start/:stop', null, {
				all: { method: 'GET' }
			});
		}
})();
