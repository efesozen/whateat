/**
 * Created by efe.sozen on 26.07.2016.
 */
(function(){
  "use strict";

  angular
    .module('app.services')
    .factory('CardsService',CardsService);

  CardsService.$inject = ['$firebaseArray']

  function CardsService($firebaseArray) {
    var ref = new Firebase("https://whateatapp.firebaseio.com/cards");

    var getCards = function(successCallBack){
      ref.on("value", function(snapshot) {
        var cardList = snapshot.val();
        successCallBack(cardList);
      }, function (errorObject) {
        console.log("The read failed: " + errorObject.code); 
      });
    }

    return {
      getCards:getCards
    }

  }

})();
