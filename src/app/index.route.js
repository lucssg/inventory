(function() {
  'use strict';

  angular
    .module('seb')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/'
      })
      .state('inventory', {
        url: '/inventory',
        templateUrl: 'app/inventory/inventory.html',
        controller: 'InventoryController',
        controllerAs: 'inventory'
      })
      .state('grid', {
        url: '/inventory/grid',
        templateUrl: 'app/grid/grid.html',
        controller: 'GridController',
        controllerAs: 'grid'
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
