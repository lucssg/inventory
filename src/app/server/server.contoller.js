(function() {
  'use strict';

  angular
    .module('seb')
    .controller('ServerController', ServerController);

  /** @ngInject */
  function ServerController($log, $state, Redis, Utils) {
    var vm = this;

    vm.close = close;

    details();

    function details() {
//      $log.debug("details");
      vm.details = Redis.detail(
        {verb: 'GET', param: $state.params.key}, 
        function() {
          vm.details = angular.fromJson(vm.details.GET);
          vm.details.diskSpace = Utils.countDiskSpace(vm.details.ansible_devices);
          $log.debug(vm.details);
        }
      );
    }

    function close() {
      vm.details = null;
    }

  }

})();
