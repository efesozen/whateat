/**
 * Created by efe.sozen on 27.07.2016.
 */
(function(){
  "use strict";

  angular
    .module('app.services')
    .factory('FoodService',FoodService);

  function FoodService() {
    return {
      foods: [{
        "name" : "Biber Dolması",
        "path" : ""
      }
      ]
    }

  }

})();
