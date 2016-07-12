(function() {
  'use strict';

  angular
    .module('seb')
    .controller('GridController', GridController);

  /** @ngInject */
  function GridController($log, RedisZRange, Utils, toastr) {
    var vm = this;

    vm.creationDate = 1466713238666;
    vm.version = '0.0.1';

    vm.servers = RedisZRange.all(
        { index: 'ansible_cache_facts', start: '0', stop: '100' }, 
        function() {
          vm.servers = vm.servers['ZRANGE'];
          for (var key in vm.servers) {
            vm.servers[key] = angular.fromJson(vm.servers[key]);
            vm.servers[key].diskSpace = Utils.countDiskSpace(vm.servers[key].ansible_devices);
          }
          toastr.info('Nombre de serveurs audités: ' + vm.servers.length);
        });

  }
})();
