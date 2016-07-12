(function(){
	'use strict';

  angular
    .module('seb')
	.factory('Redis', redis)
	.factory('RedisZRange', redisZRange);

		/** @ngInject */
		function redis($resource, HOST, $log) {
			$log.debug(HOST);
			return $resource(HOST + '/:verb/:param', null, {
				keys: {
					method: 'GET'
				}, 
				detail: { method: 'GET' }
			});
		}

		function redisZRange($resource, HOST) {
			return $resource(HOST + '/ZRANGE/:index/:start/:stop', null, {
				all: { method: 'GET' }
			});
		}
})();
