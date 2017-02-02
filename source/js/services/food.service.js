/**
 * Created by efe.sozen on 27.07.2016.
 */
(function () {
    "use strict";

    angular
        .module('app.services')
        .factory('FoodService', FoodService);

    var foods = [{
        name: 'Bulgur Pilavı',
        path: 'img/foods/bulgurpilavi.jpg',
        materials: [
            '1 kase pilavlık bulgur',
            '2 adet domates',
            '1 adet soğan',
            '2 adet sivri biber',
            '1 su bardağı tavuk suyu',
            '1 su bardağı sıcak su (tavuk suyu da kullanabilirsiniz)',
            '2 yemek kaşığı sıvı yağ',
            'Tuz'
        ],
        description: 'Bulgur pilavı için öncelikle soğanları ince kıyın, sıvı yağ ile hafif kavurun, üzerine doğranmış sivribiberi ekleyin, biraz daha kavurduktan sonra rende domatesi ekleyin, iyice kavurun. Bulguru ekleyerek 1-2 dakika kavurun ve sıcak tavuk suyunu ve sıcak suyu ekleyin.  Tuzunu da ilave ederek bir kez karıştırın kapağını kapatın. Kısık ateşte suyu çekene kadar karıştırmadan pişirin. Ocağı kapattıktan sonra kapağın altına havlu kağıt koyarak 10 dakika kadar dinlendirin. Bulgur Pilavımız servise hazır, afiyet olsun. '
    },
        {
            name: 'Çıtır Tavuk',
            path: 'img/foods/citirtavuk.jpg',
            materials: [
                'Tavuk göğsü',
                'Çıtır pane harcı',
                'Yarım su bardağı süt',
                '1 yumurta',
                'Tuz'
            ],
            description: 'Tavuk göğsü ince bir şekilde dilimlenir. Yumurta, süt ve tuz çırpılarak dilimlenen tavuk göğsü bu sosta yaklaşık 1 saat kadar buzdolabında bekletilir. Vaktiniz yoksa bekletmeyebilirsiniz ancak bekletirseniz tavuklar marine olduğu için daha yumuşak ve lezzetli olacaktır. Pane harcına bulanan tavuklar bol kızgın yağda kızartılır. Pişen tavuklar fazla yağını çekmesi için havlu kağıt üzerine alınır. Çıtır tavuklarınız servise hazır, şimdiden afiyet olsun.'
        },
        {
            name: 'Domates Çorbası',
            path: 'img/foods/domatescorba.jpg',
            materials: [
                '4-5 adet olgun domates',
                '2 çorba kaşığı tereyağı',
                '1 çorba kaşığı un',
                '1 su bardağı süt',
                '1 çorba kaşığı rendelenmiş taze kaşar'
            ],
            description: 'Domates çorbası yapmak için yağ ve un bir tencerede hafifçe kavrulur. Diğer taraftan kabuğu çıkarılıp, küp küp kesilmiş domates robottan geçirilip bu karışıma ilave edilir, birkaç dakika kavrulur. Ara verilmeden bir litre kadar su ilave edilip karıştırma işlemi sürdürülür.15 dakika bu şekilde kaynatılır. Daha sonra süt ilave edilip bir kaç dakika daha kaynatılarak ocaktan alınır. Arzu edildiği kadar tuz konur ve servis yaparken üzerine kaşar peyniri rendesi ilave edilir. Domates çorbamız servise hazır, afiyet olsun.'
        },
        {
            name: 'Enginar',
            path: 'img/foods/enginar.jpg',
            materials: [
                '6 adet enginar',
                '1 adet havuç',
                '1 adet patates',
                '1 su bardağı bezelye (haşlanmış ya da konserve)',
                '1 adet soğan',
                '1 çay bardağı zeytinyağı',
                '1 adet limon',
                '1 çay kaşığı şeker',
                'Tuz',
                '1 su bardağı su'
            ],
            description: 'Havuç minik küp şeklinde doğranır, üzeri geçecek kadar su eklenerek haşlanmaya bırakılır. Kaynadıktan 5 dk kadar sonra minik küpler halinde doğranan patates eklenir ve sebzeler hafif yumuşayana kadar kaynatılır. Tam pişmemesi önemli. Soğan yemeklik doğranarak yarım çay bardağı zeytinyağında hafif pembeleşene kadar kavrulur. Üzerine patates ve havuç eklenir. 1 su bardağı bezelye de ilave edilerek karıştırılır, ocaktan alınır. Enginarlar limon ile ovularak tencereye dizilir. Üzerine hazırlanan sebzeler dökülür. Şeker, tuz ve yarım çay bardağı zeytinyağı gezdirilir. 1 su bardağı sıcak su eklenerek tencerenin kapağı kapatılır. Enginarlar yumuşayana kadar pişirilir. Soğuduktan sonra servis edilir. Afiyet olsun'
        },
        {
            name: 'Et Sote',
            path: 'img/foods/etsote.jpg',
            materials: [
                '500 gr sotelik et',
                '1 adet büyük soğan',
                '3-4 adet sivri biber',
                '2-3 adet domates',
                'Maydanoz',
                'Yarım yemek kaşığı tereyağı',
                'Zeytinyağı',
                'Kekik, pul biber, karabiber, tuz'
            ],
            description: 'İlk olarak soğanı küp küp doğrayıp yağda kavuruyoruz. Sonra etleri ekleyip karıştırmaya devam ediyoruz. Biraz soteledikten sonra baharatları, biber ve domatesi, maydanozu ilave edip karıştırıyoruz. Etlerin üzerine gelecek kadarda su ilave edip pişmeye bırakıyoruz.(Eğer isterseniz etleri önceden biraz haşlayabilirsiniz, daha kolaylık olur). Afiyet olsun.'
        },
        {
            name: 'İzmir Köfte',
            path: 'img/foods/izmirkofte.jpg',
            materials: [
                'Köfte için gerekli malzemeler',
                '500 gram az yağlı kıyma',
                '1 adet kuru soğan',
                '1 adet yumurta',
                'Yarım demet maydanoz',
                '1,5 su bardağı bayat ekmek içi',
                'Karabiber, Kırmızı pul biber, kekik, tuz',
                'Diğer Malzemeler',
                '4 adet domates (3 adedi sosu için , 1 adedi de üzerine dilimlemek için)',
                '4 adet patates',
                '3 adet çarliston biber',
                '1 tatlı kaşığı salça (tercihen karışık)',
                'Sıvı yağ (Kızartmak için)'
            ],
            description: 'Ekmek içini ve arkasından soğanı rondo dan geçiriyoruz (isterseniz rendeleyip ufalayabilirsiniz). Yumurtayı, ince ince doğranmış maydanozu, baharatları ve kıymayı da ekleyip iyice yoğuruyoruz. Parmak uzunluğunda ince ve uzun bir şekil verip biraz dinlenmesi için tabağa sıralıyoruz. Patatesleri soyup, elma dilimi şeklinde kesiyoruz. Sıvı yağı iyice kızdırıp (çok yağ çekmesin diye) önce patatesleri arkasından da köfteleri azıcık kızartıyoruz. Tepsiye bir patates bir köfte şeklinde sıralıyoruz. Köftelerden sonra kızartma yağından bir kepçe sos tenceremize alıyoruz, salçamızı da ekleyip iyice karıştırıyoruz. Arkasından rendelediğimiz 3 adet domatesi de ekleyip 10 dakika pişmeye bırakalım, isterseniz sarımsak ekleyebilirsiniz. Kekik ve tuzunu da ekledikten birkaç dakika sonra ocaktan alıyoruz. Hazırlanan sosu patates ve köftelerin üzerine hepsine değecek şekilde döküyoruz ki pişerken kurumasın. Üzerine 1 adet soyulup dilimlenmiş domatesi sıralıyoruz, biberleri de kesip içini temizledikten sonra aralarına yerleştiriyoruz. Fırına atmadan önce tepsinin kenarından 1 çay bardağı sıcak su koyup önceden ısıtılmış fırında patateslerin üzeri kızarana kadar pişiriyoruz.  30. dakikadan sonra açıp, tepsinin içindeki sostan köftelerin ve patateslerin üzerine biraz gezdirebilirsiniz. İzmir köftemiz servise hazır, afiyet olsun.'
        },
        {
            name: 'Kuru Fasülye',
            path: 'img/foods/kurufasulye.jpg',
            materials: [
                '2 su bardağı kuru fasulye',
                '1 adet soğan',
                '1 yemek kaşığı salça',
                '1 tatlı kaşığı kırmızı tatlı toz biber',
                '3-4 yemek kaşığı sıvı yağ',
                'Tuz',
                'Oda sıcaklığında su'
            ],
            description: 'Fasulyeleri akşamdan iyice yıkayıp sıcak suyla ıslatın. Ertesi gün soğanı yemeklik doğrayın. Sıvı yağda kavurun. Salçayı ekleyip kokusu çıkana kadar kavurun. Toz biberi ekleyip karıştırın. Suyunu süzdüğünüz fasulyeleri ekleyin ve karıştırın. Düdüklü tencere için üzerini 1 parmak geçecek kadar su ekleyip kapağını kapatın ve buharı çıkmaya başladıktan sonra 20 dk pişirin. Normal tencere için üzerini 4 parmak geçecek kadar su ekleyip kısık ateşte fasulyeler yumuşayana kadar pişirin. Tuzunu ekleyip karıştırın. Kuru fasülyemiz servise hazır, afiyet olsun. '
        },
        {
            name: 'Sarma',
            path: 'img/foods/sarma.jpg',
            materials: [
                '500 gram tokat yaprağı (salamura)',
                '1 adet limon',
                'Zeytinyağı',
                'İç harcı için',
                '2 orta boy kuru soğan',
                '1,5 su bardağı pirinç',
                'Maydanoz',
                '1 yemek kaşığı salça',
                'Karabiber',
                'Kırmızı pul biber',
                'Kimyon',
                'Nane',
                'Tuz',
                '2 yemek kaşığı sıvı yağ'
            ],
            description: 'Öncelikle salamura yapraklar 2-3 dakika sıcak suda bekletilir, yıkanır ve süzgece alınır. Geniş bir kabın içerisine soğanlar rendelenir, üzerine zeytinyağı dökülür. Pirinç yıkanarak  kabın içerisine eklenir. Baharatlar, salça ve tuzu da ilave edildikten sonra ince kıyılmış maydanoz da eklenerek karıştırılır. Yaprağın geniş kısmına iç harçtan konulur ve rulo gibi iki yanlardan kapatarak sarılır. Bu işleme yaprak bitene kadar devam edilir. Sarılan yaprakların üzerine zeytinyağı ve limon dilimleri ekleyip yaklaşık 5-6 su bardağı kadar da sıcak su ilave edilerek kısık ateşte pişirilir. Üzerine sarmalar dağılmasın diye tencere kapağından biraz küçük ebatta bir kase kapatılır. Yaprak sarmamız servise hazır, afiyet olsun. '
        },
        {
            name: 'Soslu Makarna',
            path: 'img/foods/soslumakarna.jpg',
            materials: [
                '1 paket istenen çeşitte makarna',
                'Makarnayı haşlamak için su ve tuz',
                'Domates sosu için;',
                '2-3 yemek kaşığı sıvı yağ (veya zeytinyağı)',
                '1 adet kuru soğan',
                'Varsa 4-5 yemek kaşığı yazdan hazırlanmış domates sosu ya da 3-4 adet taze domates',
                'Tuz',
                'Karabiber',
                'Taze kekik (isteğe bağlı)',
                '1-2 diş sarımsak (isteğe bağlı)'
            ],
            description: 'Öncelikle pişirmek istediğiniz makarna, paketinde yazan tarife göre bol tuzlu suda haşlanmaya bırakılır. Makarnalar haşlanırken domates sosu için genişçe bir tavaya sıvı yağ alınır. İnce doğranmış soğanlar eklenerek birkaç dakika kavrulur. Daha sonra hazır domates sosundan 4-5 yemek kaşığı kadar ilave edilir. Hazır domates sosunuz yoksa 3-4 adet taze domatesin kabuklarını soyup küçük küçük doğradıktan sonra soğanlarla beraber pişirebilirsiniz. Bu durumda domatesler iyice ezilip suyunu çekene kadar sosunuzu kaynatmalısınız. Ayrıca 1-2 diş doğranmış sarımsak da ilave edilebilir. Domates sosu kaynayıp kıvam aldıktan sonra karabiber, tuz ve varsa tazesinden kekik eklenir. Kaynayan makarnanın haşlama suyundan da 1-2 kepçe kadar sosa ilave edilir. Sos hazır olduktan ve makarnalar da pişip suyu süzüldükten sonra birbirine karıştırılır. Dilerseniz sosun tamamını makarna ile karıştırmadan önce bir kısmını ayırıp servis esnasında makarnanın üzerine de 1-2 kaşık bırakabilirsiniz. Domates soslu makarnamız servise hazır, şimdiden afiyet olsun.'
        },
        {
            name: 'Taze Fasülye',
            path: 'img/foods/tazefasulye.jpg',
            materials: [
                'Yarım kg taze fasulye',
                '2 adet domates',
                '1 adet kuru soğan',
                'Kırmızı pul biber',
                '1,5 yemek kaşığı salça',
                'Karabiber',
                'Zeytinyağı',
                'Tuz'
            ],
            description: 'Taze fasulyeleri yıkadıktan sonra ayıklayıp doğrayalım. Düdüklü tencerenin içerisine zeytinyağı gezdirelim. Kuru soğan doğrayalım, soğanlar kavrulduktan sonra salçayı, doğranmış domatesi, taze fasulyeyi ve baharatları ilave edelim. 5-6 dakika kısık ateşte kavuralım. Yaklaşık 3 su bardağı kadar su ilave edelim ve düdüklü tencerenin kapağını kapatalım. 15 dakika pişirelim. Afiyet olsun. '
        }
    ];

    function FoodService() {

        var getFoods = function (index, successCallBack) {
            successCallBack(foods);
        };

        return {
            getFoods: getFoods
        }

    }

})();
