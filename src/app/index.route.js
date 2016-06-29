(function() {
  'use strict';

  angular
    .module('seb')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('inventory', {
        url: '/',
        templateUrl: 'app/inventory/inventory.html',
        controller: 'InventoryController',
        controllerAs: 'inventory'
      })
      .state('inventory.server', {
        url: '/server/:key',
        templateUrl: 'app/server/server.html',
        controller: 'ServerController',
        controllerAs: 'server'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
