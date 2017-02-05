/**
 * Created by efe.sozen on 26.07.2016.
 */
(function(){
  "use strict";

  angular
    .module('app.controllers')
    .controller('FoodDetailCtrl',FoodDetailCtrl);

  FoodDetailCtrl.$inject = ['$stateParams','FoodService','$ionicLoading','$cordovaSocialSharing'];

  function FoodDetailCtrl($stateParams,FoodService,$ionicLoading,$cordovaSocialSharing) {

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

    vm.shareSocial = function(){
      var message = "Ne pişireceğime Ne Yesem App ile karar verdim. " + vm.food.name + ' tarifi için:';
      var subject = vm.food.name + " Ne Yesem App";
      var link = "https://tinyurl.com/zvjgvdn";
      $cordovaSocialSharing
          .share(message, subject, null, link) // Share via native share sheet
          .then(function(result) {
            // Success!
          }, function(err) {
            // An error occured. Show a message to the user
          });
    }
  }

})();
