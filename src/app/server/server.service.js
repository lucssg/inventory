(function(){
	'use strict';

  angular
    .module('seb')
		.factory('ServerInventory', function ($resource) {
			return $resource('http://localhost:7379/:verb/:param', null, {
				keys: {
					verb: 'KEYS',
					param: '*' 
				}
			});
		});
})();