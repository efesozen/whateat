/**
 * Created by efe.sozen on 26.07.2016.
 */
(function(){
  "use strict";

  angular
    .module('app.controllers')
    .controller('VenueDetailCtrl',VenueDetailCtrl);

  VenueDetailCtrl.$inject = ['FoursquareService','$stateParams','$ionicLoading'];

  function VenueDetailCtrl(FoursquareService,$stateParams,$ionicLoading){
    var vm = this;

    vm.venue = {};

    if($stateParams){
      var id = $stateParams.id;
      $ionicLoading.show();
      FoursquareService.getVenue(id,function(data){
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
        //console.log(data.response.venue);
      });

      FoursquareService.getMenu(id,function(data) {
        //console.log('menu : ' + data); menu data 
      });
    }



    vm.openLink = function (link) {
      window.open(link, '_system');
    };

  }

})();
