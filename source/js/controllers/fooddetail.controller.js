/**
 * Created by efe.sozen on 26.07.2016.
 */
(function(){
  "use strict";

  angular
    .module('app.controllers')
    .controller('FoodDetailCtrl',FoodDetailCtrl);

  FoodDetailCtrl.$inject = ['$stateParams','FoodService','$ionicLoading'];

  function FoodDetailCtrl($stateParams,FoodService,$ionicLoading) {

    var vm = this;
    if($stateParams) {
      var name = $stateParams.name;
      
      $ionicLoading.show();
      FoodService.getFoods(0,function (d) {
        $ionicLoading.hide().then(function(){
          
          angular.forEach(d,function (v,k) {
            if(v.name===name){
              vm.food = v;
            }
          });
        });
      });
    }
  }

})();
