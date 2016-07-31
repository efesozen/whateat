/**
 * Created by efe.sozen on 26.07.2016.
 */

(function(){
  "use strict";

  angular
    .module('app.controllers')
    .controller('CardsCtrl',CardsCtrl);

  CardsCtrl.$inject = ['$state','CardsService','$ionicLoading'];


  function CardsCtrl($state,CardsService,$ionicLoading){
    var vm = this;
    var cards = [];
    var shownCards = [];

    vm.card = {};
    vm.changeCards = changeCards;
    vm.selectCard = selectCard;

    init();

    /******* functions *********/

    function init(){
      getCards();
    }

    function selectCard(card){
      $state.go('places',{ searchText:card})
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


    function getCards() {$ionicLoading.show({
        template: 'Loading...'
      }).then(function(){
        console.log("The loading indicator is now displayed");
      });
      CardsService.getCards(function (d) {
       cards = d;
       changeCards();
        $ionicLoading.hide().then(function(){
          console.log("The loading indicator is now hidden");
        });
      });
    }

    /*** test oparation *****/
    //vm.items = [];
    //vm.item = {};
    //$ionicLoading.show({
    //  template: 'Loading...'
    //}).then(function(){
    //  console.log("The loading indicator is now displayed");
    //});
    //CardsService.getCards(function (d) {
    //  vm.items = d;
    //  $ionicLoading.hide().then(function(){
    //    console.log("The loading indicator is now hidden");
    //  });
    //});
    //
    //vm.addItem = function (){
    //  CardsService.addCard();
    //}
  }
})();
