(function () {
  'use strict';
  angular.module('MenuApp')
  .component('items', {
    templateUrl: 'scr/templates/item-detail.template.html',
    bindings:{
      items: '<'
    }
  })
})()
