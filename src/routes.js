(function () {
  'use strict;'

  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider

    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
    })

    .state('categories', {
      url: '/categories',
      templateUrl: 'src/manuapp/template/categories.template.html',
      controller: 'CategoriesController as categoriesCtrl',
      resolve : {
        categories : ['MenuDataService',function (MenuDataService) {
          return MenuDataService.getAllCategories();
        }]
      }
    });
  }
})();