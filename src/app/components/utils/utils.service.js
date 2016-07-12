(function(){
	'use strict';

	angular
		.module('seb')
		.factory("Utils", utils);

	function utils() {

		var factory =  {};

		factory.countDiskSpace = function (devices) {
			var diskSpace = 0;
			for (var key in devices) {
				/**
				* do nothing for sr0, no space disk
				*/
				if ('sr0' == key) {
					continue;
				}
				diskSpace += parseFloat(devices[key].size.split(" ")[0]);
			}
			return diskSpace;
		}

		return factory;
	}

})();