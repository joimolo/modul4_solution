(function functionName() {
  'use strict'
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/templates/home.template.html'
    })

    .state('categoriesList', {
      url: '/categories-list',
      templateUrl: 'src/templates/main-categories.template.html',
      controller: 'CategoriesController as categoriesList',
      resolve: {
        items: ['MenuDataService', function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    })
    .state('categoriesList.menuItems', {
      url: '/menu-items/{catShortName}',
      templateUrl: 'src/templates/items.template.html',
      controller: 'ItemDetailController as itemDetail',
      resolve: {
        items: ['$stateParams', 'MenuDataService',
              function ($stateParams, MenuDataService) {
                console.log(MenuDataService.getItemsForCategory($stateParams.catShortName));
                console.log('shortname in routes ' + $stateParams.catShortName);
                return MenuDataService.getItemsForCategory($stateParams.catShortName);
              }]
      }
    });

  };

})();
