(function() {
  'use strict';

  angular
    .module('seb')
    .controller('InventoryController', InventoryController);

  /** @ngInject */
  function InventoryController($log, Redis, $timeout, toastr) {
    var vm = this;

    vm.creationDate = 1466713238666;
    vm.version = '0.0.1';

    vm.keys = Redis.keys({verb: 'KEYS', param: '*'}, function() {
        var cacheIndex = vm.keys['KEYS'].indexOf('ansible_cache_keys');
        vm.keys['KEYS'].splice(cacheIndex, 1);
//        $log.debug(vm.keys['KEYS']);
        vm.keys = vm.keys['KEYS'];
        toastr.info('Nombre de serveurs audités: ' + vm.keys.length);
      }  
    );

  }
})();
