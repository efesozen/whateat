/**
 * Created by efe.sozen on 26.07.2016.
 */
(function(){
  "use strict";

  angular
    .module('app.controllers')
    .controller('FoodDetailCtrl',FoodDetailCtrl);

  FoodDetailCtrl.$inject = ['$stateParams'];

  function FoodDetailCtrl($stateParams) {

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

})();
