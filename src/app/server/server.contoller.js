(function() {
  'use strict';

  angular
    .module('seb')
    .factory('Server', function ($resource) {
      return $resource('http://localhost:7379/:verb/:param', null, {
        detail: { method: 'GET' }
      });
    })
    .controller('ServerController', ServerController);

  /** @ngInject */
  function ServerController($log, $state, Server) {
    var vm = this;

    vm.close = close;

    details();

    function details() {
//      $log.debug("details");
      vm.details = Server.detail(
        {verb: 'GET', param: $state.params.key}, 
        function() {
          vm.details = angular.fromJson(vm.details.GET);
          $log.debug(vm.details);
        }
      );
    }

    function close() {
      vm.details = null;
    }

  }

})();
