(function() {
  'use strict';

  angular
    .module('seb')
    .controller('GridController', GridController);

  /** @ngInject */
  function GridController($log, RedisZRange, toastr) {
    var self = this;

    self.creationDate = 1466713238666;
    self.version = '0.0.1';

    self.servers = RedisZRange.all(
        { index: 'ansible_cache_facts', start: '0', stop: '100' }, 
        function() {
          self.servers = self.servers['ZRANGE'];
          for (var key in self.servers) {
            self.servers[key] = angular.fromJson(self.servers[key]);
          }
          toastr.info('Nombre de serveurs audités: ' + self.servers.length);
        });

  }
})();
