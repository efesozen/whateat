/**
 * Created by efe.sozen on 26.07.2016.
 */
(function(){
  "use strict";

  angular
    .module('app.services')
    .factory('CardsService',CardsService);

  CardsService.$inject = ['$firebaseArray','$firebaseObject'];

  var cards = [{
    name : 'Lahmacun',
    path : 'source/img/foods/lahmacun.jpg'
  },
    {
      name : 'Köfte',
      path : 'source/img/foods/kofte.jpg'
    },
    {
      name : 'Hamburger',
      path : 'source/img/foods/hamburger.jpg'
    },
    {
      name : 'Pizza',
      path : 'source/img/foods/pizza.jpg'
    },
    {
      name : 'Çiğ Köfte',
      path : 'source/img/foods/cigkofte.jpg'
    },
    {
      name : 'Tantuni',
      path : 'source/img/foods/tantuni.jpg'
    },
    {
      name : 'Kokoreç',
      path : 'source/img/foods/kokorec.jpg'
    },
    {
      name : 'İskender',
      path : '../img/foods/iskender.jpg'
    },
    {
      name : 'Sandviç',
      path : '../img/foods/sandvic.jpg'
    },
    {
      name : 'Döner',
      path : '../img/foods/doner.jpg'
    }
  ]; 

  function CardsService($firebaseArray,$firebaseObject) {

    var db = "https://whateatapp.firebaseio.com/cards";
    var ref = new Firebase(db);
    var shownCards = [];
    
    var getCards = function(index,successCallBack){
    /*  var a = true;
      var lastKnownKey = null;
      var firstQuery = ref.orderByKey().limitToFirst(100);
      firstQuery.once('value', function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          lastKnownKey = childSnapshot.key();
          if(a){
            if (shownCards.indexOf(lastKnownKey) === -1) {
              var childRed = ref.child(lastKnownKey);
              childRed.on("value", function (snapshot) {
                var card = snapshot.val();
                shownCards.push(lastKnownKey);
                successCallBack(card);
              });
              a = false;
            }
          }
        });
      });*/

      
     // ref.on("value", function(snapshot) {
     //   var cardList = snapshot.val();
     //   successCallBack(cardList);
     // }, function (errorObject) {
     //   console.log("The read failed: " + errorObject.code);
     // });

      successCallBack(cards);
    };

    return {
      getCards:getCards
    }

  }

})();
