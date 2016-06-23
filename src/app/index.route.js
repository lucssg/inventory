(function() {
  'use strict';

  angular
    .module('seb')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/inventory/inventory.html',
        controller: 'InventoryController',
        controllerAs: 'inventory'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
