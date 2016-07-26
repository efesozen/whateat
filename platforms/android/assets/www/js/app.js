// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('whatEatApp',
  [
    'ionic',
    'ngCordova',
    // app modules
    'services',
    'controllers'
  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
  $urlRouterProvider.otherwise('/')
  $ionicConfigProvider.backButton.previousTitleText(false).text('');
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'views/home.html',
      controller:'homeCtrl as vm'
    })
    .state('cards', {
      url: '/cards',
      templateUrl: 'views/cards.html',
      controller:'cardsCtrl as vm'
    })
    .state('places', {
      url: '/places:searchText',
      templateUrl: 'views/places.html',
      controller:'placesCtrl as vm'
    })
    .state('venueDetail', {
      url: '/venueDetail:id',
      templateUrl: 'views/venueDetail.html',
      controller:'venueDetailCtrl as vm'
    })
    .state('foods', {
      url: '/foods',
      templateUrl: 'views/foods.html',
      controller:'foodCtrl as vm'
    })
    .state('cookDetail', {
      url: '/cookDetail:id',
      templateUrl: 'views/cookDetail.html',
      controller:'cookDetailCtrl as vm'
    })
})
