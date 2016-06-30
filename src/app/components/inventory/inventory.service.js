(function(){
	'use strict';

  angular
    .module('seb')
	.factory('TestInventory', testInventory);

		/** @ngInject */
		function testInventory ($resource) {
			return $resource('http://localhost:7379/:verb/:param', null, {
				keys: {
					verb: 'KEYS',
					param: '*' 
				}
			});
		}
})();
