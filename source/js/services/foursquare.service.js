/**
 * Created by efe.sozen on 25.07.2016.
 */

(function(){
  "use strict";

  angular
    .module('app.services')
    .factory('FoursquareService',FoursquareService); 

  FoursquareService.$inject = ['$http'];

  function FoursquareService($http){
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

})();
