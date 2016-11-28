/**
 * Created by efe.sozen on 26.07.2016.
 */
(function(){
  "use strict";

  angular
    .module('app.controllers')
    .controller('FoodCtrl',FoodCtrl);

  FoodCtrl.$inject = ['$state','FoodService'];

  function FoodCtrl($state,FoodService) {
    var vm = this;
    
  }

})();
