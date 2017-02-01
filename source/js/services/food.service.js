/**
 * Created by efe.sozen on 27.07.2016.
 */
(function(){
  "use strict";

  angular
    .module('app.services')
    .factory('FoodService',FoodService);

  var foods = [{
    name : 'Bulgur Pilavı',
    path : 'img/foods/bulgurpilavi.jpg'
  },
    {
      name : 'Çıtır Tavuk',
      path : 'img/foods/citirtavuk.jpg'
    },
    {
      name : 'Domates Çorbası',
      path : 'img/foods/hamburger.jpg'
    },
    {
      name : 'Enginar',
      path : 'img/foods/enginar.jpg'
    },
    {
      name : 'Et Sote',
      path : 'img/foods/etsote.jpg'
    },
    {
      name : 'İzmir Köfte',
      path : 'img/foods/izmirkofte.jpg'
    },
    {
      name : 'Kuru Fasülye',
      path : 'img/foods/kurufasulye.jpg'
    },
    {
      name : 'Sarma',
      path : 'img/foods/sarma.jpg'
    },
    {
      name : 'Soslu Makarna',
      path : 'img/foods/soslumakarna.jpg'
    },
    {
      name : 'Taze Fasülye',
      path : 'img/foods/tazefasulye.jpg'
    }
  ];

  function FoodService() {

    var getFoods = function(index,successCallBack){
      successCallBack(foods);
    };
    
    return {
      getFoods:getFoods
    }

  }

})();
