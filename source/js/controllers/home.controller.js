/**
 * Created by efe.sozen on 25.07.2016.
 */
(function(){
  "use strict";

  angular
    .module('app.controllers')
    .controller('HomeCtrl',HomeCtrl);

  HomeCtrl.$inject = ['$state'];

  function HomeCtrl($state) {
    var vm = this;

    vm.title = 'Hello World';
    vm.whatEat = whatEat; 
    vm.whatCook = whatCook;

    vm.whatEatImg = "img/neyesem_back.png";
    vm.whatCookImg = "img/nepisirsem_back.png";
    vm.centerLogoImg = "img/center_logo.png";

    function whatEat(){
      $state.go('cards')
    }

    function whatCook () {
      $state.go('foods')
    }
  }

})();


