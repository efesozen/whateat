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

/**
 * Created by Efe on 22-Mar-16.
 */

angular
  .module('services',[])
  .factory('appService',appService)
  .factory('foursquareApi',foursquareApi)


  function appService() {
    return {
      logError: function(msg) {
        /* */
      }
    };
  }


function foursquareApi($http) {
  var apiUrl          = 'https://api.foursquare.com/v2/',
    clientId        = '0WT1LGBA2MSIWL2KRMKWXZSQRZVMJTIWCUCM20H3XAPAAUHF',
    clientSecret    = 'JC5GEVHZWSXOKSORYTRKVLECCKSCQUAR01L5TWU5N4TGQC5Q',
    v               = '20160322';

  var searchVenue = function(searchText,location, success){
    $http({
      url: apiUrl + 'venues/explore?',
      method: "GET",
      params: {
        client_id: clientId,
        client_secret: clientSecret,
        v: v,
        ll:location,
        llAcc: 3000.0,
        query: searchText,
        radius:4000

      }
    })
      .success(function(data) {
        success(data);
      });
  }

  var getVenue = function(venueId, success){
    $http({
      url: apiUrl + 'venues/' + venueId,
      method: "GET",
      params: {
        client_id: clientId,
        client_secret: clientSecret,
        v: v
      }
    })
      .success(function(data) {
        success(data);
      });
  }


  var getMenu = function(venueId,success){
    $http({
      url: apiUrl + 'venues/' + venueId + '/menu',
      method: "GET",
      params: {
        client_id: clientId,
        client_secret: clientSecret,
        v: v
      }
    })
      .success(function(data) {
        success(data);
      });
  }
  return {
    searchVenue: searchVenue,
    getVenue: getVenue,
    getMenu:getMenu
  }
}

/*near: 'Istanbul,tr',*/

/**
 * Created by Efe on 22-Mar-16.
 */


angular
  .module('controllers',[])
  .controller('homeCtrl',homeCtrl)
  .controller('cardsCtrl',cardsCtrl)
  .controller('placesCtrl',placesCtrl)
  .controller('venueDetailCtrl',venueDetailCtrl)
  .controller('foodCtrl',foodCtrl)
  .controller('cookDetailCtrl',cookDetailCtrl)

  function homeCtrl($state){
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

  function cardsCtrl($state){
    var vm = this;

    vm.title = 'Cards Page';
    vm.selectFood = selectFood;
    vm.change = change;
    vm.indexes = [];
    vm.food = {};
    vm.showMessage = false;
    vm.reset = reset;
    vm.foods = [
      {
        "name": "tavuk kanat",
        "description": "description1"
      },
      {
        "name": "Piliç Izgara",
        "description": "description2"
      },
      {
        "name": "et döner",
        "description": "description3"
      },
      {
        "name": "mercimek çorbası",
        "description": "description4"
      },
      {
        "name": "kıymalı pide",
        "description": "description5"
      },
      {
        "name": "köfte",
        "description": "description6"
      },
      {
        "name": "çiğ börek",
        "description": "description7"
      },
      {
        "name": "pide",
        "description": "description8"
      },
      {
        "name": "kebap",
        "description": "description9"
      },
      {
        "name": "baklava",
        "description": "description10"
      },
      {
        "name": "ekler",
        "description": "description11"
      }
    ];

    init();

    function init(){
      change();
    }

    function change(){
      var index = Math.floor((Math.random() * 11));
      if(vm.indexes.length == 11){
        vm.showMessage = true;
        vm.food = {};
        reset();
        return;
      }
      if(vm.indexes.length == 0){
        vm.food = vm.foods[index];
        vm.foods[index].selected = true;
        vm.indexes.push(index);
      }
      else{
        if(vm.indexes.indexOf(index) === -1){
          vm.food = vm.foods[index];
          vm.foods[index].selected = true;
          vm.indexes.push(index);
        }
        else{
          change();
        }
      }
    }

    function reset(){
      vm.showMessage = false;
      vm.indexes = [];
      vm.food = {};
      angular.forEach(vm.foods,function(value,key){
        value.selected = false;
      });

      change();
    }

    function selectFood(food){
      $state.go('places',{ searchText:food})
    }

  }

  function placesCtrl(foursquareApi,$stateParams,$state,$cordovaGeolocation,$ionicLoading){
    var vm = this;
    var searchText = '';
    vm.venues = [];
    vm.title = '';
    vm.getVenue = getVenue;

    var posOptions = {timeout: 10000, enableHighAccuracy: false};
    $cordovaGeolocation
      .getCurrentPosition(posOptions)
      .then(function (position) {
        var location = position.coords.latitude + ',' + position.coords.longitude;
        searchVenue(location);
      }, function(err) {
        // error
      });

    function searchVenue(location){
      if($stateParams){
        searchText = $stateParams.searchText;
        vm.title = searchText;
        $ionicLoading.show();
        foursquareApi.searchVenue(searchText,location,function(data){
          var response = data.response;
          angular.forEach(response.groups[0].items,function(v,k){
            if(v.venue.hours && v.venue.hours.isOpen){
              v.venue.rating = v.venue.rating.toFixed(1);
              vm.venues.push(v);
            }
          })
         // vm.venues = response.groups[0].items;//response.venues;
          $ionicLoading.hide();
        })
    }
    }



    function getVenue(venueId){
     $state.go('venueDetail',{id:venueId});
    }

  }

  function venueDetailCtrl(foursquareApi,$stateParams,$ionicLoading){
     var vm = this;

    vm.venue = {};

    if($stateParams){
      var id = $stateParams.id;
      $ionicLoading.show();
      foursquareApi.getVenue(id,function(data){
        vm.venue = data.response.venue;

        if (vm.venue.photos.groups[0]) {

          vm.venue.thumbnail = vm.venue.photos.groups[0].items[0].prefix + '40x40' + vm.venue.photos.groups[0].items[0].suffix;
          vm.venue.photo = vm.venue.photos.groups[0].items[1].prefix + '300x300' + vm.venue.photos.groups[0].items[1].suffix;

        }

        $ionicLoading.hide();
        if(vm.venue.contact.phone)
          vm.showPhone = vm.venue.contact.phone.replace('+90','').replace(/(\d\d\d)(\d\d\d)(\d\d\d\d)/, "($1) $2 $3");

        if(vm.venue.location.city)
          vm.showState = vm.venue.location.city + " / " + vm.venue.location.state;
        console.log(data.response.venue);
      });

      foursquareApi.getMenu(id,function(data) {
          //console.log('menu : ' + data); menu data
      });
      }



    vm.openLink = function (link) {
      window.open(link, '_system');
    };

  }

  function foodCtrl($state) {
    var vm = this;

    vm.title = 'Cards Page';
    vm.selectFood = selectFood;
    vm.change = change;
    vm.indexes = [];
    vm.food = {};
    vm.showMessage = false;
    vm.reset = reset;
    vm.foods = [
      {
        "id":0,
        "name": "Biber Dolması",
        "description": "description1"
      },
      {
        "id":1,
        "name": "Patates Yemeği",
        "description": "description2"
      },
      {
        "id":2,
        "name": "Sucuklu Kurufasülye",
        "description": "description3"
      },
      {
        "id":3,
        "name": "Pilav",
        "description": "description4"
      },
      {
        "id":4,
        "name": "Ayranaşı Çorbası",
        "description": "description5"
      },
      {
        "id":5,
        "name": "Güveç",
        "description": "description6"
      },
      {
        "id":6,
        "name": "Ispanak",
        "description": "description7"
      },
      {
        "id":7,
        "name": "Tavuk Sote",
        "description": "description8"
      },
      {
        "id":8,
        "name": "Et Sote",
        "description": "description9"
      },
      {
        "id":9,
        "name": "Karnıyarık",
        "description": "description10"
      },
      {
        "id":10,
        "name": "Hünkar Beğendi",
        "description": "description11"
      }
    ];

    init();

    function init(){
      change();
    }

    function change(){
      var index = Math.floor((Math.random() * 11));
      if(vm.indexes.length == 11){
        vm.showMessage = true;
        vm.food = {};
        reset();
        return;
      }
      if(vm.indexes.length == 0){
        vm.food = vm.foods[index];
        vm.foods[index].selected = true;
        vm.indexes.push(index);
      }
      else{
        if(vm.indexes.indexOf(index) === -1){
          vm.food = vm.foods[index];
          vm.foods[index].selected = true;
          vm.indexes.push(index);
        }
        else{
          change();
        }
      }
    }

    function reset(){
      vm.showMessage = false;
      vm.indexes = [];
      vm.food = {};
      angular.forEach(vm.foods,function(value,key){
        value.selected = false;
      });

      change();
    }

    function selectFood(id){
      $state.go('cookDetail',{ id:id})
    }
  }

  function cookDetailCtrl($stateParams) {

    var vm = this;
    if($stateParams) {
      var id = $stateParams.id;

      vm.food = {
        name : "Biber Dolması",
        imageUrl : "http://farm4.static.flickr.com/3448/3797187751_efc00e3546.jpg",
        description : "Dolmalık biberlerimizi temizleyelim. Soğanları, domatesi küçük küçük doğrayalım. Domatesin kenarlarını biberlerin üstünü kapatmak için kullanacağız o yüzden önce kapatmak için kullanacaklarımızı kesersek daha iyi olur. İçini yemek harcında kullanabiliriz. Bir kaba hazırladığımız soğan, pirinç, salça, maydanoz, domates, karabiber, tuz, nane ve çok az sıvıyağı ekleyip iyice karıştıralım. Daha sonra bu harcı biberlere dolduralım. Harcı doldurduğumuz biberleri, tencereye dizelim. Harcı yaptığımız kabın içine soğuk su koyalım o artık göz kararı olacak biberlerin yarısına kadar gelecek şekilde.Kabın içine koyduğumuz suya 1 yemek kaşığı salça ekleyelim ve eritelim. Bu karışımı biberlerin üstüne gelmeyecek şekilde tencereye, biberlerin yarısına gelene kadar dökelim. Kestiğimiz domateslerle biberlerin üstünü kapatalım. Daha sonra biberlerin üstüne çok az sıvıyağ ve zeytinyağı gezdirelim. Kısık ateşte yemeğimizi pişirelim. Afiyet olsun."
      }
    }
  }
