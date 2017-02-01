/**
 * Created by efe.sozen on 26.07.2016.
 */
(function(){
  "use strict";

  angular
    .module('app.controllers')
    .controller('FoodCtrl',FoodCtrl);

  FoodCtrl.$inject = ['$state','FoodService','$ionicLoading'];

  function FoodCtrl($state,FoodService,$ionicLoading) {
    var vm = this;
    var cards = [];
    var shownCards = [];

    vm.card = {};
    vm.changeCards = changeCard;
    vm.selectCard = selectCard;

    init();

    /******* functions *********/

    function init(){
      getCards();
    }

    function selectCard(card){
      //$state.go('places',{ searchText:card});

    }

    function changeCard() {
      getCards();
    }

    function changeCards() {
      var card = cards[Math.floor(Math.random()*cards.length)];
      if(shownCards.indexOf(card) === -1){
        vm.card = card;
        shownCards.push(card);
      }
      else{
        changeCards();
      }

      if(shownCards.length == cards.length){
        /*Done*/
        resetCards();
      }
    }

    function resetCards() {
      shownCards = [];
      changeCards();
    }

    function getCard() {
      vm.card = {};
      $ionicLoading.show({
        template: 'Loading...'
      }).then(function(){
        console.log("The loading indicator is now displayed");
      });
      FoodService.getFoods(0,function (d) {
        vm.card = d;
        $ionicLoading.hide().then(function(){
          console.log("The loading indicator is now hidden");
        });
      });
    }


    function getCards() {
      $ionicLoading.show({
        template: 'Loading...'
      }).then(function(){
        console.log("The loading indicator is now displayed");
      });
      FoodService.getFoods(1,function (d) {
        cards = d;
        changeCards();
        $ionicLoading.hide().then(function(){
          console.log("The loading indicator is now hidden");
        });
      });
    }
  }

})();
