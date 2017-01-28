/**
 * Created by efe.sozen on 26.07.2016.
 */
(function () {
    "use strict";

    angular
        .module('app.controllers')
        .controller('PlacesCtrl', PlacesCtrl);

    PlacesCtrl.$inject = ['FoursquareService', '$stateParams', '$state', '$cordovaGeolocation', '$ionicLoading'];

    function PlacesCtrl(FoursquareService, $stateParams, $state, $cordovaGeolocation, $ionicLoading) {
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
            }, function (err) {
                // error
            });

        function searchVenue(location) {
            if ($stateParams) {
                searchText = $stateParams.searchText;
                vm.title = searchText;
                $ionicLoading.show();
                FoursquareService.searchVenue(searchText, location, function (data) {
                    var response = data.response;
                    angular.forEach(response.groups[0].items, function (v, k) {
                        if (v.venue.hours && v.venue.hours.isOpen) {
                            if (v.venue.rating) {
                                v.venue.rating = v.venue.rating.toFixed(1);
                                v.venue.location.distance = parseFloat((v.venue.location.distance / 1000).toFixed(1));
                                vm.venues.push(v);
                            }
                        }
                    })
                    // vm.venues = response.groups[0].items;//response.venues;
                    $ionicLoading.hide();
                })
            }
        }


        function getVenue(venueId) {
            $state.go('venueDetail', {id: venueId});
        }

    }

})();
