(function() {
  'use strict';

  angular
    .module('seb')
    .factory('Inventory', function ($resource) {
      return $resource('http://localhost:7379/:verb/:param', null, {
        keys: { method: 'GET' }
      });
    })
    .controller('InventoryController', InventoryController);

  /** @ngInject */
  function InventoryController($log, Inventory, $timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1466713238666;
    vm.showToastr = showToastr;

    Inventory.keys({verb: 'KEYS', param: '*'}, function(data) {
      $log.debug(data);
      toastr.info(data['KEYS'][1]);
    });

    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
