(function(){
  'use strict';
  angular.module('Data')
  .sevice('MenuDataService', MenuDataService) ;

  MenuDataService.$inject=['$http']
  function MenuDataService($http){
    var service = this;

    service.getAllCategories = function(){
      console.log("getAllCategories service");
      var response = $http({
        method: "GET",
        url:("https://davids-restaurant.herokuapp.com/categories.json")
      });
      return response;
    };

    service.getItemsForCategory = function (shortName) {
      console.log("getItemsForCategory "+ shortName);
      var response = $http({
        method: "GET",
        url:("https://davids-restaurant.herokuapp.com/menu_items.json"),
        params: {category: shortName}
      });
      return response;
    };

  } // End MenuDataService

})()
