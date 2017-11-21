(function () {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['items'];
  function ItemsController(items) {
    var itemsCtrl = this;

    itemsCtrl.items = items.data.menu_items;
    itemsCtrl.categoryName = items.data.category.name;
  };
})();
