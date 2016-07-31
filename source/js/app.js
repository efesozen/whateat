(function(){
  "use strict";

  angular.module('whatEatApp', [
    'ionic',
    'firebase',
    'ngCordova',
    'app.config',
    'app.services',
    'app.controllers'
  ])


   .run(runBlock);

  runBlock.$inject = ['$ionicPlatform','$ionicPopup'];

  function runBlock($ionicPlatform,$ionicPopup) {
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

      if(window.Connection) {
        if(navigator.connection.type == Connection.NONE) {
          var alertPopup = $ionicPopup.alert({
            title: 'Uyarı',
            template: 'İnternet bağlantısı bulunamadı.',
            okText: 'Tamam',
          });

          alertPopup.then(function(res) {
            //alert("there is no connection");
            ionic.Platform.exitApp();
          });
        }

        cordova.plugins.diagnostic.isLocationEnabled(function(enabled) {
          if(!enabled){
            var confirmPopup = $ionicPopup.confirm({
              title: 'Uyarı',
              template: 'Bu uygulama için konum ayarlarınızı açmanız gerekiyor. Konum açılsın mı?',
              okText: 'Evet',
              okType: 'button-energized',
              cancelText: 'Hayır',
            });

            confirmPopup.then(function(res) {
              if(res) {
                cordova.plugins.diagnostic.switchToLocationSettings();
              } else {
                ionic.Platform.exitApp();
              }
            });
          }
        }, function(error) {
          // alert("The following error occurred: " + error);
          ionic.Platform.exitApp();
        });
      }
    });
  }

})();
