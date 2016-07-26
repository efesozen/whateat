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
