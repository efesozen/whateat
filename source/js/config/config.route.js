/**
 * Created by efe.sozen on 25.07.2016.
 */
(function(){
    "use strict";

  angular
    .module('app.config')
    .config(appConfig);
  
  appConfig.$inject = ['$stateProvider','$urlRouterProvider','$ionicConfigProvider']
  
  function appConfig($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
    $urlRouterProvider.otherwise('/')
    $ionicConfigProvider.backButton.previousTitleText(false).text('');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html',
        controller:'HomeCtrl as vm'
      })
      .state('cards', {
        url: '/cards',
        templateUrl: 'views/cards.html',
        controller:'CardsCtrl as vm'
      })
      .state('places', {
        url: '/places:searchText',
        templateUrl: 'views/places.html',
        controller:'PlacesCtrl as vm'
      })
      .state('venueDetail', {
        url: '/venueDetail:id',
        templateUrl: 'views/venueDetail.html',
        controller:'VenueDetailCtrl as vm'
      })
      .state('foods', {
        url: '/foods',
        templateUrl: 'views/foods.html',
        controller:'FoodCtrl as vm'
      })
      .state('foodDetail', {
        url: '/foodDetail:name',
        templateUrl: 'views/foodDetail.html',
        controller:'FoodDetailCtrl as vm'
      })
  }

})();
