(function() {
  'use strict';

  angular
    .module('seb')
    .controller('GridController', GridController);

  /** @ngInject */
  function GridController($log, Redis, $timeout, toastr) {
    var vm = this;

    vm.creationDate = 1466713238666;
    vm.version = '0.0.1';

    vm.servers = [];

    vm.keys = Redis.keys({verb: 'KEYS', param: '*'}, function() {
        var cacheIndex = vm.keys['KEYS'].indexOf('ansible_cache_keys');
        vm.keys['KEYS'].splice(cacheIndex, 1);
//        $log.debug(vm.keys['KEYS']);
        vm.keys = vm.keys['KEYS'];
        var sbuf = [];
        for (var i in vm.keys) {
          var server = Redis.detail(
            {verb: 'GET', param: vm.keys[i]}, 
            function() {
              $log.debug(server);
              if (server['GET']) {
                vm.servers.push(server['GET']);
              }

            });
        }
      }  
    );

  }
})();
