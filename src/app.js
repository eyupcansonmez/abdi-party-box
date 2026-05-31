const suits = [
  { symbol: "♠", name: "Maça", color: "black" },
  { symbol: "♥", name: "Kupa", color: "red" },
  { symbol: "♦", name: "Karo", color: "red" },
  { symbol: "♣", name: "Sinek", color: "black" }
];

const rankOrder = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];

const ruleBook = {
  A: {
    title: "Cümle zinciri",
    label: "Hafıza",
    text:
      "Kartı çeken bir kelimeyle başlar. Sırayla herkes tüm cümleyi doğru sırayla tekrar edip bir kelime ekler. İlk şaşıran 1 {penalty} alır."
  },
  K: {
    title: "Pas",
    label: "Nefes",
    text: "Kimse ceza almaz. Sıradaki oyuncuya geçilir."
  },
  Q: {
    title: "Soruna cevap veriyorum",
    label: "Tetik",
    text:
      "Bu karttan sonra soru sorulan kişi cevaptan önce 'Soruna cevap veriyorum' demelidir. Unutan 1 {penalty} alır."
  },
  J: {
    title: "Grup",
    label: "Kategori",
    text:
      "Kartı çeken bir kategori söyler. Herkes sırayla yeni bir örnek verir. Tekrar eden veya takılan 1 {penalty} alır."
  },
  10: {
    title: "Kural koy",
    label: "Masa",
    text:
      "Kartı çeken oyuncu yeni bir masa kuralı koyar. Kural bozulunca bozan kişi 1 {penalty} alır ve kural masadan kalkar."
  },
  9: {
    title: "Doğru / Yanlış",
    label: "Tahmin",
    text:
      "Kartı çeken bir iddia söyler. Diğerleri doğru mu yanlış mı tahmin eder. Yanlış tahmin edenler 1 {penalty} alır."
  },
  8: {
    title: "Parmak masaya",
    label: "Refleks",
    text:
      "Herkes parmağını masaya koyar. En son kalan oyuncu 1 {penalty} alır."
  },
  7: {
    title: "Ben hiç",
    label: "İtiraf",
    text:
      "Kartı çeken 'Ben hiç...' cümlesi kurar. Cümledeki şeyi yapan herkes 1 {penalty} alır."
  },
  6: {
    title: "Kızlar",
    label: "Klasik",
    text:
      "Klasik kuralda masadaki kızlar 1 {penalty} alır. İsterseniz bu kartı Takım A olarak oynayın."
  },
  5: {
    title: "Erkekler",
    label: "Klasik",
    text:
      "Klasik kuralda masadaki erkekler 1 {penalty} alır. İsterseniz bu kartı Takım B olarak oynayın."
  },
  4: {
    title: "Herkes",
    label: "Toplu",
    text: "Masadaki herkes 1 {penalty} alır."
  },
  3: {
    title: "İstediğine ver",
    label: "Seçim",
    text: "Kartı çeken bir oyuncu seçer. Seçilen oyuncu 1 {penalty} alır."
  },
  2: {
    title: "Kendin al",
    label: "Tekli",
    text: "Kartı çeken oyuncu 1 {penalty} alır."
  }
};

const storyModes = {
  friends: {
    kicker: "Arkadaşlar",
    title: "Arkadaş Masası",
    meta: ["3-8 kişi", "Rahat başlar", "Sosyal yükselir"],
    cards: [
      {
        tag: "Isınma",
        prompt: "{player}, masadaki birine bugün iyi gelen bir özelliğini söyle.",
        spark: "Cevap alan kişi bir sonraki kartta oyuncu seçer."
      },
      {
        tag: "Kahkaha",
        prompt: "Herkes {player} için 5 saniyede bir sahne adı bulsun. En çok güldüren kazanır.",
        spark: "Kazanan isterse birine +1 ceza yazdırır."
      },
      {
        tag: "Anı",
        prompt: "{player}, bu masadaki biriyle yaşadığı en plansız komik anı anlatsın.",
        spark: "Anıda adı geçen kişi mini yorum ekler."
      },
      {
        tag: "Meydan",
        prompt: "{player}, seçtiği bir oyuncuya 20 saniyelik hayali reklam yapsın.",
        spark: "Ürün: oyuncunun en belirgin alışkanlığı."
      },
      {
        tag: "Tahmin",
        prompt: "Masa, sahnedeki oyuncu {player} için gizli yetenek tahmini yapsın. En yakın tahmin alkış alır.",
        spark: "Gerçek yetenek yoksa uydurma yetenek seçilebilir."
      },
      {
        tag: "Bağ",
        prompt: "{player}, masadaki birine 'seninle şu planı yapardım' diye bir plan kursun.",
        spark: "Plan ne kadar garip olursa o kadar iyi."
      },
      {
        tag: "Sahne",
        prompt: "{player}, masadaki bir oyuncuyu 15 saniyede reality show karakteri gibi tanıtsın.",
        spark: "Tanıtılan kişi jüri gibi puan verir."
      },
      {
        tag: "Risk",
        prompt: "Herkes {player} için tek kelimelik bir lakap yazsın. En isabetli lakap bir tur kullanılacak.",
        spark: "Oyuncu lakabı reddederse 1 {penalty} alır."
      },
      {
        tag: "Açık mikrofon",
        prompt: "{player}, bu masanın gizli mottosunu bulup yüksek sesle ilan etsin.",
        spark: "Motto 3 kişi tarafından beğenilirse masanın kuralı olur."
      },
      {
        tag: "Tahmin",
        prompt: "Masa, {player} uyandığında ilk yaptığı şeyi tahmin etsin.",
        spark: "En yakın tahmin bir sonraki oyuncuyu seçer."
      },
      {
        tag: "Rol",
        prompt: "{player}, masadaki birini patronu gibi arayıp 20 saniye izin istesin.",
        spark: "Aranan kişi gerçek patron gibi cevap verir."
      },
      {
        tag: "Seçim",
        prompt: "{player}, masadan iki kişiyi seçsin: biri avukatı, biri menajeri. 20 saniyede kendini savunsun.",
        spark: "Avukat başarısızsa avukat 1 {penalty} alır."
      },
      {
        tag: "İtiraz",
        prompt: "{player}, masadaki en tartışmalı fikrini zararsız ve komik şekilde savunsun.",
        spark: "Masa ikna olmazsa 1 {penalty}."
      },
      {
        tag: "Anket",
        prompt: "Herkes aynı anda {player} için 'en çok hangi konuda dram çıkarır?' sorusuna cevap versin.",
        spark: "En çok tekrar eden cevap sahneye çıkar."
      },
      {
        tag: "Taklit",
        prompt: "{player}, masadan birinin telefona bakış şeklini 10 saniye taklit etsin.",
        spark: "Kimin olduğu bulunamazsa {player} 1 {penalty} alır."
      },
      {
        tag: "Final",
        prompt: "{player}, bu gecenin fragmanını film anlatıcısı gibi anlatsın.",
        spark: "Fragmanda herkesin adı en az bir kez geçmeli."
      }
    ]
  },
  confession: {
    kicker: "İtiraf",
    title: "Sır Açma",
    meta: ["Derin sohbet", "Pas hakkı var", "Zor sorular"],
    cards: [
      {
        tag: "Küçük sır",
        prompt: "{player}, son zamanlarda herkesten sakladığı küçük bir keyfi anlatsın.",
        spark: "Cevap kısa kalırsa masa bir takip sorusu sorar."
      },
      {
        tag: "İlk izlenim",
        prompt: "{player}, bu masadan biriyle ilk tanıştığında aklından geçen ilk şeyi söylesin.",
        spark: "İsim vermek istemezse kategori seçebilir."
      },
      {
        tag: "Cesaret",
        prompt: "{player}, ertelediği ama aslında yapmak istediği bir şeyi anlatsın.",
        spark: "Masa 10 saniyede ona motivasyon sloganı bulur."
      },
      {
        tag: "Ters köşe",
        prompt: "Masa, {player} hakkında yanlış bildiği bir şeyi tahmin etsin.",
        spark: "En şaşırtıcı tahmine bir puan."
      },
      {
        tag: "Açık soru",
        prompt: "{player}, 'bunu kimse sormuyor ama...' diye başlayan bir cevap versin.",
        spark: "Cevaptan sonra bir kişi benzer bir şey paylaşır."
      },
      {
        tag: "Güven",
        prompt: "{player}, iyi bir arkadaşta aradığı tek vazgeçilmez şeyi söylesin.",
        spark: "Masa bu özelliği en çok kim taşıyor diye oylar."
      },
      {
        tag: "Zor soru",
        prompt: "{player}, bu masada daha önce yanlış anladığı birini söylesin ve nedenini anlatsın.",
        spark: "İsim vermek istemezse 1 {penalty}."
      },
      {
        tag: "Pişmanlık",
        prompt: "{player}, son bir yılda 'keşke daha cesur olsaydım' dediği bir anı anlatsın.",
        spark: "Masa ona 10 saniyelik gerçekçi bir çözüm önerir."
      },
      {
        tag: "Ayna",
        prompt: "{player}, kendisiyle ilgili insanların fark etmediğini düşündüğü bir kırılganlığı paylaşsın.",
        spark: "Cevap kısa kalırsa bir takip sorusu gelir."
      },
      {
        tag: "Netlik",
        prompt: "{player}, bu masadaki birinden öğrenmek istediği ama sormaya çekindiği şeyi söylesin.",
        spark: "Karşı taraf pas diyebilir; pas masaya saygıdır."
      },
      {
        tag: "Cesur itiraf",
        prompt: "{player}, arkadaş ortamında oynadığı ama aslında sevmediği bir rolü anlatsın.",
        spark: "Masa bu rolü tek kelimeyle adlandırır."
      },
      {
        tag: "İlk mesaj",
        prompt: "{player}, birine yazıp sildiği ama göndermediği mesajın konusunu anlatsın.",
        spark: "İçeriği değil, duyguyu anlatmak yeterli."
      },
      {
        tag: "Kıskançlık",
        prompt: "{player}, son zamanlarda birinde kıskandığı ama takdir ettiği bir özelliği söylesin.",
        spark: "Özelliğin sahibini söylemek zorunda değil."
      },
      {
        tag: "Maske",
        prompt: "{player}, iyi görünmeye çalıştığı ama aslında zorlandığı bir alanı söylesin.",
        spark: "Masa sadece dinler; tavsiye yok."
      },
      {
        tag: "Kırılma",
        prompt: "{player}, arkadaşlıkta kendisi için affetmesi en zor şeyi söylesin.",
        spark: "Bir kişi aynı fikirde olup olmadığını açıklar."
      },
      {
        tag: "Gerçek",
        prompt: "{player}, bu oyunda cevaplamak istemeyeceği soru türünü açıkça söylesin.",
        spark: "Bu sınır oyun boyunca geçerli kabul edilir."
      },
      {
        tag: "Dürüstlük",
        prompt: "{player}, son zamanlarda kendine söylediği en büyük bahaneyi anlatsın.",
        spark: "Masa bahaneye yeni ve komik bir isim verir."
      }
    ]
  },
  tasks: {
    kicker: "Görev",
    title: "Yap Ya da Ceza",
    meta: ["Zor görev", "Telefon kartları", "Yapmazsan ceza"],
    cards: [
      {
        tag: "Telefon",
        prompt: "{player}, rehberinden güvenli hissettiği bir kişiye şu mesajı taslak olarak yazsın: 'Bugün beni çok saçma bir oyuna soktular.' Göndermek zorunlu değil.",
        spark: "Taslağı masaya gösterirse görev tamam. Yapmazsa 1 {penalty}."
      },
      {
        tag: "Arama",
        prompt: "{player}, masadan birini telefonla arıyormuş gibi yapsın ve 20 saniye boyunca ciddi bir iş görüşmesi yürütsün.",
        spark: "Gülerse veya karakterden çıkarsa 1 {penalty}."
      },
      {
        tag: "Kamera",
        prompt: "{player}, 10 saniyede masanın en ciddi selfie pozunu organize etsin ve fotoğrafı çeksin.",
        spark: "Fotoğraf silinebilir. Organize edemezse 1 {penalty}."
      },
      {
        tag: "Emoji",
        prompt: "{player}, son kullandığı 5 emojiyi kullanarak bu geceyi anlatan tek cümle kursun.",
        spark: "Emoji göstermek istemezse uydurabilir ama masa yakalarsa 1 {penalty}."
      },
      {
        tag: "Notlar",
        prompt: "{player}, telefonunda yeni bir not açıp 'Bu masanın gizli anlaşması' başlığıyla 3 madde yazsın.",
        spark: "Maddeler masadan onay almazsa 1 {penalty}."
      },
      {
        tag: "Alarm",
        prompt: "{player}, 30 saniyelik alarm kursun. Alarm çalana kadar masadaki bir ürünü açık artırmayla satmaya çalışsın.",
        spark: "Satış yapılmazsa 1 {penalty}."
      },
      {
        tag: "Ses",
        prompt: "{player}, kendine 8 saniyelik sesli not kaydetsin: 'Yarın bunu duyunca utanacağım çünkü...'",
        spark: "Kaydı göndermek yok; dinletirse tamam, silmek serbest."
      },
      {
        tag: "Kilit",
        prompt: "Masa {player} için bir yasak kelime seçsin. {player} üç kart boyunca bu kelimeyi söylerse 1 {penalty}.",
        spark: "Kelime gündelik ama kaçınılmaz olsun."
      },
      {
        tag: "Mesaj",
        prompt: "{player}, yakın bir arkadaşına göndermeden şu mesajı taslak yapsın: 'Beni bu akşam hangi konuda rezil ederdin?'",
        spark: "Göndermek tamamen isteğe bağlıdır. Taslak yoksa 1 {penalty}."
      },
      {
        tag: "Uygulama",
        prompt: "{player}, ana ekranındaki en çok zaman harcadığı uygulamayı söylesin ve nedenini 15 saniye savunsun.",
        spark: "Savunma ikna etmezse 1 {penalty}."
      },
      {
        tag: "Pazarlık",
        prompt: "{player}, masadan birine hayali borcunu kapatmak için üç komik teklif sunsun.",
        spark: "Karşı taraf hiçbirini kabul etmezse 1 {penalty}."
      },
      {
        tag: "Tiyatro",
        prompt: "{player}, seçtiği oyuncuya çok ciddi bir özür konuşması yapsın ama sebep tamamen saçma olsun.",
        spark: "Sebep masayı güldürmezse 1 {penalty}."
      },
      {
        tag: "DM taslağı",
        prompt: "{player}, masadaki birine sosyal medya DM'i gibi tek cümlelik abartılı bir iltifat taslasın.",
        spark: "Gerçekten göndermek yok. Okumazsa 1 {penalty}."
      },
      {
        tag: "Sorgu",
        prompt: "Masa {player} için 3 hızlı soru sorar. {player} her soruya 2 saniyede cevap verir.",
        spark: "Düşünürse veya kaçarsa 1 {penalty}."
      },
      {
        tag: "Reklam",
        prompt: "{player}, telefon şarj yüzdesini dramatik bir haber bülteni gibi duyursun.",
        spark: "Yüzdeyi söylemek istemezse 1 {penalty}."
      },
      {
        tag: "Kürsü",
        prompt: "{player}, herkesin önünde 'Bugün neden güvenilmezim?' başlıklı 20 saniyelik konuşma yapsın.",
        spark: "Masa alkışlamazsa 1 {penalty}."
      },
      {
        tag: "Takvim",
        prompt: "{player}, yarın yapacağı en sıradan işi epik bir görev gibi anlatsın.",
        spark: "En az üç dramatik kelime kullanmalı."
      },
      {
        tag: "Kopya",
        prompt: "{player}, masadaki birinin oturuşunu ve konuşma tarzını 15 saniye taklit etsin.",
        spark: "Kimin olduğu bilinmezse 1 {penalty}."
      },
      {
        tag: "Baskı",
        prompt: "{player}, bir oyuncu seçsin. Seçilen kişi {player}'a yapması zor ama güvenli bir mikro görev versin.",
        spark: "Görev reddedilirse {player} 1 {penalty}; görev haksızsa veren 1 {penalty}."
      },
      {
        tag: "Hafıza",
        prompt: "{player}, masadaki herkesin adını tersten söylemeye çalışsın.",
        spark: "İki isimden fazla kaçarsa 1 {penalty}."
      },
      {
        tag: "Şifre",
        prompt: "Masa bir kelime seçer. {player}, kelimeyi söylemeden 20 saniyede masaya anlatsın.",
        spark: "Bilemezlerse {player} 1 {penalty}."
      },
      {
        tag: "Göz teması",
        prompt: "{player}, seçtiği kişiyle 12 saniye göz teması kursun ve sonra tek cümlelik ciddi bir yorum yapsın.",
        spark: "İlk gülen 1 {penalty}."
      },
      {
        tag: "Mahkeme",
        prompt: "Masa {player}'ı saçma bir suçla itham eder. {player} 30 saniye kendini savunur.",
        spark: "Suç: masanın ortak kararı. Savunma zayıfsa 1 {penalty}."
      },
      {
        tag: "Bildirim",
        prompt: "{player}, telefonuna gelen son zararsız bildirimi başlık atmadan haber spikeri gibi dramatize etsin.",
        spark: "Bildirim özel ise göstermeden konusunu uydurabilir. İkna etmezse 1 {penalty}."
      },
      {
        tag: "Rehine pazarlığı",
        prompt: "{player}, masadaki bir objeyi rehin almış gibi 20 saniyelik pazarlık konuşması yapsın.",
        spark: "Masa objeyi geri almak istemezse 1 {penalty}."
      },
      {
        tag: "Sponsor",
        prompt: "{player}, kendi en kötü alışkanlığına sponsor bulmuş gibi 15 saniyelik reklam yapsın.",
        spark: "Alışkanlık gerçek olmazsa 1 {penalty}."
      },
      {
        tag: "Basın toplantısı",
        prompt: "Masa {player}'a iki hızlı soru sorar. {player}, ünlü biri kriz açıklaması yapıyormuş gibi cevaplar.",
        spark: "Cevaplar kaçamak değilse görev tamam."
      },
      {
        tag: "Final görevi",
        prompt: "{player}, 20 saniye boyunca herkesin dikkatini üstünde tutacak bir şey yapsın.",
        spark: "Telefon kullanmak serbest. Masa sıkılırsa 1 {penalty}."
      }
    ]
  },
  truthdare: {
    kicker: "Doğruluk / Cesaret",
    title: "Doğruluk mu Cesaret mi",
    meta: ["İki seçenek", "Zor sorular", "Pas = ceza"],
    cards: [
      {
        tag: "Seçim",
        prompt: "Doğruluk: {player}, bu masada senden daha cesur olan kişiyi söyle.\nCesaret: O kişiye 15 saniyelik motivasyon konuşması yap.",
        spark: "İkisini de reddedersen 1 {penalty}."
      },
      {
        tag: "Telefon",
        prompt: "Doğruluk: {player}, son mesaj attığın kişiyle arandaki ilişkiyi tek kelimeyle anlat.\nCesaret: O kişiye göndermeden komik bir cevap taslağı yaz.",
        spark: "Özel içerik okumak zorunlu değil; taslak yeterli."
      },
      {
        tag: "Açık",
        prompt: "Doğruluk: {player}, arkadaşlarının sende yanlış bildiği bir şeyi söyle.\nCesaret: Masanın seçtiği bir konuda 20 saniye uzman gibi konuş.",
        spark: "Uzmanlık ikna etmezse 1 {penalty}."
      },
      {
        tag: "Zor",
        prompt: "Doğruluk: {player}, bu masada en çok kime güvenirsin?\nCesaret: O kişiye telefonundaki notlar uygulamasında tek cümlelik referans yaz.",
        spark: "Notu göstermek yeterli, kaydetmek zorunlu değil."
      },
      {
        tag: "Utandırıcı",
        prompt: "Doğruluk: {player}, internette aratmaya utandığın zararsız bir konuyu anlat.\nCesaret: 10 saniye boyunca arama motoru reklamı gibi davran.",
        spark: "Masa gülerse başarı."
      },
      {
        tag: "Kıskançlık",
        prompt: "Doğruluk: {player}, masadaki birinin hangi özelliğini kıskanıyorsun?\nCesaret: O özelliği abartılı şekilde taklit et.",
        spark: "İsim vermek istemezsen 1 {penalty}."
      },
      {
        tag: "İtiraf",
        prompt: "Doğruluk: {player}, en son ne zaman bir davete gitmek istemediğin halde gittin?\nCesaret: Bu davetten kaçış bahaneni canlı canlandır.",
        spark: "Bahane gerçekçi olmalı."
      },
      {
        tag: "Cesaret",
        prompt: "Doğruluk: {player}, burada biri sana hangi soruyu sorsa zorlanırsın?\nCesaret: Masanın seçtiği oyuncuya tek cümlelik samimi iltifat et.",
        spark: "İltifat klişe olursa 1 {penalty}."
      },
      {
        tag: "Hız",
        prompt: "Doğruluk: {player}, en hızlı sinirlendiğin şey ne?\nCesaret: 15 saniye boyunca sinirlenmiş ama kibar müşteri rolü yap.",
        spark: "Karakter bozulursa 1 {penalty}."
      },
      {
        tag: "Gizli",
        prompt: "Doğruluk: {player}, kimsenin bilmediği küçük bir yeteneğini söyle.\nCesaret: Yoksa 12 saniyede yeni bir yetenek uydurup sergile.",
        spark: "Masa inanmazsa 1 {penalty}."
      },
      {
        tag: "Pişmanlık",
        prompt: "Doğruluk: {player}, yakın zamanda atmadığın için pişman olduğun bir adımı söyle.\nCesaret: O adımın fragmanını anlatıcı sesiyle sun.",
        spark: "Fragman en az 20 saniye sürmeli."
      },
      {
        tag: "Sır",
        prompt: "Doğruluk: {player}, bu masada en iyi sır tutacak kişiyi seç.\nCesaret: Seçtiğin kişiye sahte ama inandırıcı bir sır fısılda.",
        spark: "Diğerleri sırrı tahmin etmeye çalışır."
      },
      {
        tag: "Karizma",
        prompt: "Doğruluk: {player}, flörtöz olmadan en karizmatik bulduğun davranış ne?\nCesaret: Bu davranışı 10 saniye canlandır.",
        spark: "Masa karizmatik bulmazsa 1 {penalty}."
      },
      {
        tag: "Açık hesap",
        prompt: "Doğruluk: {player}, arkadaşlıkta seni en hızlı soğutan şeyi söyle.\nCesaret: Bunu yaşayan biri gibi 15 saniyelik monolog yap.",
        spark: "Monologda kimse hedef alınmasın."
      },
      {
        tag: "Sosyal",
        prompt: "Doğruluk: {player}, sosyal medyada seni en çok ne cringe ediyor?\nCesaret: Cringe bulduğun şeyi 10 saniye abartılı yap.",
        spark: "Masa dayanamazsa görev tamam."
      },
      {
        tag: "Kriz",
        prompt: "Doğruluk: {player}, baskı altında en kötü alışkanlığın ne?\nCesaret: Şu an çok önemli bir kriz yönetiyormuş gibi 20 saniye telefonla konuş.",
        spark: "Telefon gerçek arama değil."
      },
      {
        tag: "Anı",
        prompt: "Doğruluk: {player}, anlatınca hala utandığın ama komik olan bir anını paylaş.\nCesaret: Anıyı haber spikeri gibi yeniden anlat.",
        spark: "Anı pas geçilirse 1 {penalty}."
      },
      {
        tag: "Seçim",
        prompt: "Doğruluk: {player}, bu masadan kiminle ortak iş kurardın?\nCesaret: O kişiyle 20 saniyede şirket reklamı çekiyormuş gibi oynayın.",
        spark: "İkili reklamda ürün adı olmalı."
      },
      {
        tag: "Yüzleşme",
        prompt: "Doğruluk: {player}, kendinde düzeltmek istediğin ama ertelediğin bir huyu söyle.\nCesaret: Bu huyu temsil eden hayali karakterle tartış.",
        spark: "Tartışma 20 saniye."
      },
      {
        tag: "Hafif tehdit",
        prompt: "Doğruluk: {player}, bu masada seni en kolay kandıracak kişiyi seç.\nCesaret: O kişi sana 10 saniyede imkansız bir şeyi satmaya çalışsın.",
        spark: "Satın almazsan o kişi 1 {penalty}."
      },
      {
        tag: "Kural",
        prompt: "Doğruluk: {player}, hangi sosyal kuralın gereksiz olduğunu düşünüyorsun?\nCesaret: Bir tur boyunca o kuralı komik şekilde boz ama kimseyi rahatsız etme.",
        spark: "Rahatsızlık olursa görev iptal, ceza yok."
      },
      {
        tag: "Büyük soru",
        prompt: "Doğruluk: {player}, hayatında şu an en çok neyi değiştirmek isterdin?\nCesaret: Bu değişimi yapan gelecekteki halin olarak 20 saniye konuş.",
        spark: "Samimi cevap alkışlanır."
      },
      {
        tag: "Sınır",
        prompt: "Doğruluk: {player}, oyunda hangi görevi kesinlikle yapmazdın?\nCesaret: Bu sınırı komik bir yasa gibi ilan et.",
        spark: "Sınır masaya yazılı olmayan kural olur."
      },
      {
        tag: "Final",
        prompt: "Doğruluk: {player}, bu masadan biri senin hakkında neyi daha çok bilmeli?\nCesaret: Seçtiğin kişiye 15 saniyelik dürüst teşekkür konuşması yap.",
        spark: "Teşekkür sahici değilse 1 {penalty}."
      }
    ]
  },
  couples: {
    kicker: "Sevgililer",
    title: "İki Kişilik Hikaye",
    meta: ["2+ kişi", "Yakın sohbet", "Pas hakkı var"],
    cards: [
      {
        tag: "Tahmin",
        prompt: "{player}, partnerinin kendisinde en sevdiği küçük alışkanlığı tahmin etsin.",
        spark: "Partner doğruya ne kadar yakın olduğunu 1-5 arası puanlar."
      },
      {
        tag: "Anı",
        prompt: "Çiftler, ilk beraber güldükleri anı 30 saniyede anlatsın.",
        spark: "Masa en sinematik anıyı seçer."
      },
      {
        tag: "Bakış",
        prompt: "{player}, seçtiği kişiyle 10 saniye göz teması kursun. İlk gülen konuşur.",
        spark: "Konuşan kişi bir iltifat eder."
      },
      {
        tag: "Plan",
        prompt: "{player}, ideal bir pazar planı kursun; partneri yalnızca üç kelimeyle yorumlasın.",
        spark: "Üç kelime masayı güldürürse puan gelir."
      },
      {
        tag: "Uyum",
        prompt: "Aynı anda cevap: 'Bu ilişkide en komik tekrar eden şey ne?'",
        spark: "Cevaplar benzerse herkes alkışlar."
      },
      {
        tag: "Mini jest",
        prompt: "{player}, seçtiği kişiye bugün kullanabileceği küçük bir moral cümlesi söylesin.",
        spark: "Cümle gerçekçi olmalı."
      },
      {
        tag: "Açık soru",
        prompt: "{player}, partnerinin veya seçtiği kişinin son zamanlarda en çok neye ihtiyaç duyduğunu tahmin etsin.",
        spark: "Karşı taraf 1-5 arası yakınlık puanı verir."
      },
      {
        tag: "Plan",
        prompt: "{player}, sadece 100 lira bütçeyle unutulmaz bir randevu/arkadaş planı kursun.",
        spark: "Plan gerçekçi değilse 1 {penalty}."
      },
      {
        tag: "Hafıza",
        prompt: "İki kişi aynı anda cevaplasın: İlk dikkat ettiğiniz küçük detay neydi?",
        spark: "Cevaplar benzerse ikili puan alır."
      },
      {
        tag: "Cesaret",
        prompt: "{player}, seçtiği kişiye doğrudan ve samimi bir teşekkür etsin.",
        spark: "Klişe cümle yasak."
      },
      {
        tag: "Ters köşe",
        prompt: "{player}, karşı tarafın kendisi hakkında yanlış tahmin ettiği bir şeyi düzeltsin.",
        spark: "Düzeltme yumuşak ama net olmalı."
      },
      {
        tag: "Telefon",
        prompt: "{player}, notlar uygulamasında seçtiği kişi için tek satırlık mini sözleşme yazsın: 'Bundan sonra...'",
        spark: "Sözleşme komik ama uygulanabilir olmalı."
      },
      {
        tag: "Yakınlık",
        prompt: "{player}, seçtiği kişiyle beraber yapılınca daha keyifli olan sıradan bir şeyi söylesin.",
        spark: "Karşı taraf kabul etmezse 1 {penalty}."
      },
      {
        tag: "Rol",
        prompt: "İki kişi 20 saniyede ilk tanışma sahnesini yanlış türde oynasın: polisiye, bilim kurgu veya pembe dizi.",
        spark: "Türü masa seçer."
      },
      {
        tag: "Final",
        prompt: "{player}, seçtiği kişiyle ilgili iyi ki var dediği bir şeyi açıkça söylesin.",
        spark: "Cevap samimi olursa masa sessiz alkış yapar."
      }
    ]
  }
};

const digitalGames = {
  tell: {
    category: "guess",
    type: "tell",
    kicker: "Tahmin & Anlatım",
    title: "Anlat Bakalım",
    meta: ["60 sn", "Yasak kelimeler", "Takım puanı"],
    guide: [
      "Bir oyuncu karttaki ana kelimeyi takımına anlatır.",
      "Yasak kelimeler, kelimenin kökü ve doğrudan çeviri ipuçları kullanılamaz.",
      "Doğru cevap puan getirir; pas geçmek serbesttir."
    ],
    cards: [
      { word: "Düğün", forbidden: ["gelin", "damat", "nikah", "halay"] },
      { word: "Tatil", forbidden: ["deniz", "otel", "uçak", "izin"] },
      { word: "Karaoke", forbidden: ["şarkı", "mikrofon", "sahne", "ses"] },
      { word: "Kahve", forbidden: ["fincan", "çekirdek", "kafe", "uyku"] },
      { word: "Kıskançlık", forbidden: ["ilişki", "kontrol", "trip", "başkası"] },
      { word: "Influencer", forbidden: ["sosyal medya", "takipçi", "reklam", "story"] },
      { word: "Ayrılık", forbidden: ["sevgili", "bitmek", "mesaj", "üzülmek"] },
      { word: "Patron", forbidden: ["iş", "müdür", "maaş", "toplantı"] },
      { word: "Dedikodu", forbidden: ["konuşmak", "arkadan", "sır", "kim"] },
      { word: "Diyet", forbidden: ["yemek", "kilo", "spor", "salata"] },
      { word: "Alarm", forbidden: ["saat", "uyanmak", "telefon", "kurmak"] },
      { word: "Randevu", forbidden: ["buluşma", "doktor", "saat", "geç kalmak"] },
      { word: "Evlilik Teklifi", forbidden: ["yüzük", "diz", "evet", "romantik"] },
      { word: "Kredi Kartı", forbidden: ["banka", "para", "borç", "limit"] },
      { word: "Spor Salonu", forbidden: ["ağırlık", "koşu", "kas", "antrenman"] },
      { word: "Pasaport", forbidden: ["yurt dışı", "vize", "havaalanı", "kimlik"] },
      { word: "Netflix", forbidden: ["dizi", "film", "platform", "izlemek"] },
      { word: "Terapi", forbidden: ["psikolog", "konuşmak", "duygu", "seans"] },
      { word: "Ev Arkadaşı", forbidden: ["kira", "oda", "bulaşık", "anahtar"] },
      { word: "Canlı Yayın", forbidden: ["kamera", "internet", "izleyici", "chat"] }
    ]
  },
  guess: {
    category: "guess",
    type: "quiz",
    kicker: "Tahmin & Bilgi",
    title: "Bil Bakalım",
    meta: ["45 sn", "İpucu var", "Cevap açılır"],
    guide: [
      "Karttaki soruyu masaya oku.",
      "Takılan oyuncu ipucunu kullanabilir.",
      "Cevap açıldıktan sonra doğru bilen oyuncuya puan yazılır."
    ],
    cards: [
      { question: "Bir partide en hızlı yayılan şey nedir?", hint: "Yenmez, içilmez, herkes büyütür.", answer: "Dedikodu" },
      { question: "Telefonu sessizdeyken bile insanı panikleten şey nedir?", hint: "Ekranda görünür.", answer: "Bilinmeyen numara" },
      { question: "Bir masada herkesin bildiği ama kimsenin sahiplenmediği şey nedir?", hint: "Genelde kaybolur.", answer: "Şarj kablosu" },
      { question: "Hem içilir hem sohbeti uzatır hem de uykuyu kaçırır.", hint: "Sabah pişmanlığı olabilir.", answer: "Kahve" },
      { question: "Bir planın iptal olmasına en çok sevinen kimdir?", hint: "Dışarı çıkmaya hazır değildir.", answer: "Ev insanı" },
      { question: "Bir kişi 'beş dakikaya çıkıyorum' diyorsa gerçekte kaç dakika vardır?", hint: "Takvim değişebilir.", answer: "En az 20 dakika" },
      { question: "Masanın en sessiz kişisi ne zaman tehlikelidir?", hint: "Bir anda konuşursa.", answer: "Her şeyi dinlemişse" },
      { question: "En zararsız başlayan ama en çok uzayan tartışma nedir?", hint: "Kimin söylediği tartışılır.", answer: "Şarkı sözü tartışması" },
      { question: "Bir arkadaş grubunda ortak para toplamanın final boss'u nedir?", hint: "Hep unutulur.", answer: "IBAN istemek" },
      { question: "Bir partiye geç gelen kişinin ilk cümlesi genelde nedir?", hint: "Suç kendisinde değildir.", answer: "Trafik vardı" },
      { question: "En hızlı değişen masa kuralı nedir?", hint: "Birinin işine gelmeyince.", answer: "Oyunun kendi kuralı" },
      { question: "Kimse istemez ama herkes bakar.", hint: "Telefonla ilgilidir.", answer: "Eski fotoğraflar" },
      { question: "Bir oyunda en çok güvenilmeyen cümle nedir?", hint: "Masum görünür.", answer: "Ben kesin dürüstüm" },
      { question: "Her ev partisinin görünmez sponsoru nedir?", hint: "Genelde bitmiştir.", answer: "Buz" },
      { question: "Bir grupta karar almayı imkansız yapan soru nedir?", hint: "Yemekle ilgilidir.", answer: "Ne yiyelim?" }
    ]
  },
  whoami: {
    category: "guess",
    type: "identity",
    kicker: "Kimlik Oyunu",
    title: "Ben Kimim",
    meta: ["60 sn", "Evet / Hayır", "Telefon alına"],
    guide: [
      "Telefonu tahmin edecek oyuncuya göstermeden masaya doğru tut.",
      "Oyuncu yalnızca evet-hayır soruları sorar.",
      "Kimliğini bilirse puan alır, sonra sıradaki oyuncuya geçilir."
    ],
    cards: [
      "Tarkan", "Ajda Pekkan", "Barış Manço", "Cem Yılmaz", "Gülse Birsel",
      "Sherlock Holmes", "Harry Potter", "Darth Vader", "Spider-Man", "Wednesday",
      "Kral Şakir", "Nasreddin Hoca", "Keloğlan", "SüngerBob", "Shrek",
      "Bir astronot", "Bir barista", "Bir influencer", "Bir vampir", "Bir dedektif",
      "Bir DJ", "Bir futbol hakemi", "Bir öğretmen", "Bir korsan", "Bir robot"
    ]
  },
  spy: {
    category: "hidden",
    type: "secretLocation",
    kicker: "Gizli Roller",
    title: "Spy",
    meta: ["1 casus", "8 dk sorgu", "Tek telefon"],
    guide: [
      "Herkes aynı mekanı görür, casus yalnızca casus olduğunu görür.",
      "Oyuncular sırayla birbirine mekanla ilgili sorular sorar.",
      "Casus mekanı tahmin ederse veya yakalanmazsa kazanır."
    ],
    cards: [
      { place: "Havalimanı", roles: ["Pilot", "Güvenlik", "Yolcu", "Kabin memuru"] },
      { place: "Düğün Salonu", roles: ["Gelin arkadaşı", "DJ", "Fotoğrafçı", "Nikah memuru"] },
      { place: "Hastane", roles: ["Doktor", "Hasta", "Hemşire", "Ziyaretçi"] },
      { place: "Kafe", roles: ["Barista", "Müdavim", "Garson", "Laptoplu müşteri"] },
      { place: "Spor Salonu", roles: ["Antrenör", "Yeni üye", "Resepsiyon", "Proteinci"] },
      { place: "Karakol", roles: ["Komiser", "Şüpheli", "Avukat", "Memur"] },
      { place: "Otobüs", roles: ["Şoför", "Muavin", "Yolcu", "Biletçi"] },
      { place: "Sahne Arkası", roles: ["Sanatçı", "Menajer", "Işıkçı", "Hayran"] },
      { place: "Market", roles: ["Kasiyer", "Müşteri", "Reyon görevlisi", "Güvenlik"] },
      { place: "Plaj", roles: ["Cankurtaran", "Turist", "Satıcı", "Sörfçü"] },
      { place: "Ofis", roles: ["Patron", "Stajyer", "İK", "Toplantı kaçkını"] },
      { place: "Sinema", roles: ["Biletçi", "Mısır satıcısı", "İzleyici", "Yer gösterici"] }
    ]
  },
  vampire: {
    category: "hidden",
    type: "roles",
    kicker: "Gece / Gündüz",
    title: "Vampir Köylü",
    meta: ["Gizli rol", "Gece fazı", "Oylama"],
    guide: [
      "Telefonu sırayla verip herkes rolünü gizlice görür.",
      "Gece vampirler hedef seçer; kahin kontrol eder; koruyucu birini korur.",
      "Gündüz herkes tartışır ve oylamayla bir kişiyi eler."
    ],
    phases: ["Gece: herkes gözünü kapatır", "Vampirler uyanır ve hedef seçer", "Kahin uyanır ve bir kişiyi sorar", "Koruyucu uyanır ve bir kişiyi korur", "Gündüz: olay açıklanır", "Oylama: köy birini seçer"]
  },
  undercover: {
    category: "hidden",
    type: "undercover",
    kicker: "Kelime Dedüksiyonu",
    title: "Undercover",
    meta: ["Benzer kelimeler", "Mr White", "Tartışma"],
    guide: [
      "Siviller aynı kelimeyi, Undercover benzer kelimeyi görür.",
      "Mr White kelime görmez ve konuşmalardan kelimeyi çıkarmaya çalışır.",
      "Herkes tek ipucu verir; sonra tartışma ve oylama yapılır."
    ],
    cards: [
      ["Kahve", "Çay"], ["Deniz", "Havuz"], ["Kedi", "Köpek"], ["Takım elbise", "Gömlek"],
      ["Taksi", "Otobüs"], ["Pizza", "Lahmacun"], ["Film", "Dizi"], ["Kamp", "Piknik"],
      ["Patron", "Müdür"], ["Düğün", "Nişan"], ["Tatlı", "Dondurma"], ["Telefon", "Tablet"],
      ["Konser", "Festival"], ["Market", "Bakkal"], ["Spor", "Dans"], ["Uçak", "Tren"],
      ["Ayrılık", "Kavga"], ["Mesaj", "Arama"], ["Bar", "Kafe"], ["Makyaj", "Parfüm"]
    ]
  },
  beerPong: {
    category: "table",
    type: "beerPong",
    kicker: "Kutu & Masa",
    title: "Beer Pong",
    meta: ["10 kupa", "Takım skoru", "House rule"],
    guide: [
      "Gerçek bardakları masada kur; uygulama kupa takibini ve skoru tutar.",
      "A Takımı isabet ederse B tarafındaki bir kupa düşer; B için tersi.",
      "Alkol yerine suyla oynanabilir. İçme kuralları yalnızca 18+ ve sorumlu tüketim içindir."
    ],
    rules: ["Dirsek çizgisi", "Bounce atışı iki kupa sayılabilir", "Aynı tur iki isabet varsa geri top", "Son kupa kalınca savunma turu", "House rule başlamadan seçilir"]
  }
};

const penaltyLabels = {
  task: "ceza",
  sip: "yudum",
  shot: "shot"
};

const state = {
  players: [
    { id: crypto.randomUUID(), name: "Ayşe", score: 0 },
    { id: crypto.randomUUID(), name: "Mert", score: 0 },
    { id: crypto.randomUUID(), name: "Zeynep", score: 0 },
    { id: crypto.randomUUID(), name: "Can", score: 0 }
  ],
  deck: [],
  discard: [],
  history: [],
  activeRules: [],
  activeCategory: "party",
  activeMode: "home",
  storyMode: null,
  storyDeck: [],
  storyCurrent: null,
  storyHistory: [],
  storyRound: 0,
  digitalMode: null,
  digitalDeck: [],
  digitalCurrent: null,
  digitalHistory: [],
  digitalRound: 0,
  digitalRevealIndex: 0,
  digitalRevealVisible: false,
  digitalAssignments: [],
  digitalPhaseIndex: 0,
  digitalScore: { a: 0, b: 0 },
  digitalSeconds: 0,
  beerPong: null,
  vampire: null,
  turnIndex: 0,
  current: null,
  mode: "task",
  started: false
};

const els = {
  introScreen: document.querySelector("#intro-screen"),
  form: document.querySelector("#player-form"),
  playerName: document.querySelector("#player-name"),
  playerList: document.querySelector("#player-list"),
  playerCount: document.querySelector("#player-count"),
  scoreList: document.querySelector("#score-list"),
  ruleGrid: document.querySelector("#rule-grid"),
  activeRuleList: document.querySelector("#active-rule-list"),
  emptyRules: document.querySelector("#empty-rules"),
  historyList: document.querySelector("#history-list"),
  tableTitle: document.querySelector("#table-title"),
  deckCount: document.querySelector("#deck-count"),
  currentCard: document.querySelector("#current-card"),
  actionPanel: document.querySelector("#action-panel"),
  menuToggle: document.querySelector("#menu-toggle"),
  drawer: document.querySelector("#game-drawer"),
  drawerBackdrop: document.querySelector("#drawer-backdrop"),
  drawerClose: document.querySelector("#drawer-close"),
  menuHome: document.querySelector("[data-menu-home]"),
  menuButtons: document.querySelectorAll("[data-menu-target]"),
  drawCard: document.querySelector("#draw-card"),
  startGame: document.querySelector("#start-game"),
  resetDeck: document.querySelector("#reset-deck"),
  undoDraw: document.querySelector("#undo-draw"),
  abdiBack: document.querySelector("#abdi-back"),
  ruleMaker: document.querySelector("#rule-maker"),
  ruleInput: document.querySelector("#rule-input"),
  addRule: document.querySelector("#add-rule"),
  printRules: document.querySelector("#print-rules"),
  safetyNote: document.querySelector("#safety-note"),
  categoryTabs: document.querySelectorAll("[data-category-target]"),
  modeButtons: document.querySelectorAll("[data-mode-target]"),
  storyGame: document.querySelector("#story-game"),
  digitalGame: document.querySelector("#digital-game"),
  digitalKicker: document.querySelector("#digital-kicker"),
  digitalTitle: document.querySelector("#digital-title"),
  digitalMeta: document.querySelector("#digital-meta"),
  digitalTimer: document.querySelector("#digital-timer"),
  digitalScore: document.querySelector("#digital-score"),
  digitalStage: document.querySelector("#digital-stage"),
  digitalGuide: document.querySelector("#digital-guide"),
  digitalPrimary: document.querySelector("#digital-primary"),
  digitalSecondary: document.querySelector("#digital-secondary"),
  digitalTertiary: document.querySelector("#digital-tertiary"),
  digitalBack: document.querySelector("#digital-back"),
  premiumScreen: document.querySelector("#premium-screen"),
  abdiGame: document.querySelector("#abdi-game"),
  abdiRules: document.querySelector("#abdi-rules"),
  abdiHistory: document.querySelector("#abdi-history"),
  storyKicker: document.querySelector("#story-kicker"),
  storyTitle: document.querySelector("#story-title"),
  storyMeta: document.querySelector("#story-meta"),
  storyCard: document.querySelector("#story-card"),
  storyNext: document.querySelector("#story-next"),
  storyPlayer: document.querySelector("#story-player"),
  storyHistory: document.querySelector("#story-history"),
  backToModes: document.querySelector("#back-to-modes"),
  premiumBack: document.querySelector("#premium-back"),
  installTrigger: document.querySelector("#install-trigger"),
  installSheet: document.querySelector("#install-sheet"),
  installSheetCopy: document.querySelector("#install-sheet-copy"),
  installApp: document.querySelector("#install-app"),
  dismissInstall: document.querySelector("#dismiss-install"),
  soundToggle: document.querySelector("#sound-toggle")
};

let deferredInstallPrompt = null;
let audioContext = null;
const audioFallbackCache = new Map();
let soundEnabled = localStorage.getItem("party-box-sound") !== "off";
let digitalTimerInterval = null;

function createDeck() {
  return suits.flatMap((suit) =>
    rankOrder.map((rank) => ({
      id: `${rank}-${suit.name}`,
      rank,
      suit
    }))
  );
}

function shuffle(cards) {
  const deck = [...cards];
  for (let index = deck.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [deck[index], deck[swapIndex]] = [deck[swapIndex], deck[index]];
  }
  return deck;
}

function penaltyWord() {
  return penaltyLabels[state.mode];
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function taskText(rank) {
  return ruleBook[rank].text.replaceAll("{penalty}", penaltyWord());
}

function fillTemplate(text, playerName) {
  return escapeHTML(text)
    .replaceAll("{player}", escapeHTML(playerName))
    .replaceAll("{penalty}", escapeHTML(penaltyWord()));
}

function formatStoryText(text, playerName) {
  return fillTemplate(text, playerName).replaceAll("\n", "<br>");
}

function pickOne(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function setButton(button, text, hidden = false) {
  if (!button) return;
  button.textContent = text;
  button.hidden = hidden;
}

function stopDigitalTimer() {
  if (digitalTimerInterval) {
    window.clearInterval(digitalTimerInterval);
    digitalTimerInterval = null;
  }
}

function startDigitalTimer(seconds) {
  stopDigitalTimer();
  state.digitalSeconds = seconds;
  renderDigitalTimer();
  digitalTimerInterval = window.setInterval(() => {
    state.digitalSeconds = Math.max(0, state.digitalSeconds - 1);
    renderDigitalTimer();
    if (state.digitalSeconds === 0) {
      stopDigitalTimer();
      playSound("score");
      replayAnimation(els.digitalTimer, "is-updated");
    }
  }, 1000);
}

function renderDigitalTimer() {
  if (!els.digitalTimer) return;
  const value = state.digitalSeconds > 0 ? `${state.digitalSeconds}` : "--";
  els.digitalTimer.querySelector("span").textContent = value;
}

function touchPulse(pattern = 18) {
  if ("vibrate" in navigator) {
    navigator.vibrate(pattern);
  }
}

function updateSoundToggle() {
  if (!els.soundToggle) return;
  els.soundToggle.classList.toggle("is-muted", !soundEnabled);
  els.soundToggle.setAttribute("aria-label", soundEnabled ? "Sesi kapat" : "Sesi aç");
  els.soundToggle.querySelector("span").textContent = soundEnabled ? "♪" : "×";
}

function ensureAudioContext() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return null;
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }
  return audioContext;
}

function makeClickDataUri(frequency = 520, durationMs = 55) {
  const sampleRate = 8000;
  const samples = Math.floor((durationMs / 1000) * sampleRate);
  const bytesPerSample = 2;
  const dataSize = samples * bytesPerSample;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  const writeString = (offset, value) => {
    for (let index = 0; index < value.length; index += 1) {
      view.setUint8(offset + index, value.charCodeAt(index));
    }
  };

  writeString(0, "RIFF");
  view.setUint32(4, 36 + dataSize, true);
  writeString(8, "WAVE");
  writeString(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * bytesPerSample, true);
  view.setUint16(32, bytesPerSample, true);
  view.setUint16(34, 16, true);
  writeString(36, "data");
  view.setUint32(40, dataSize, true);

  for (let index = 0; index < samples; index += 1) {
    const progress = index / samples;
    const envelope = Math.pow(1 - progress, 2);
    const sample = Math.sin((2 * Math.PI * frequency * index) / sampleRate) * envelope * 0.34;
    view.setInt16(44 + index * bytesPerSample, sample * 32767, true);
  }

  const bytes = new Uint8Array(buffer);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return `data:audio/wav;base64,${btoa(binary)}`;
}

function playFallbackSound(type, profile) {
  if (!("play" in document.createElement("audio"))) return;

  if (!audioFallbackCache.has(type)) {
    const audio = document.createElement("audio");
    audio.preload = "auto";
    audio.src = makeClickDataUri(profile.end, profile.duration * 1000);
    audioFallbackCache.set(type, audio);
  }

  const audio = audioFallbackCache.get(type);
  audio.currentTime = 0;
  audio.volume = Math.min(0.35, profile.gain * 7);
  audio.play().catch(() => {});
}

function playSound(type = "tap") {
  if (!soundEnabled) return;
  const profiles = {
    tap: { start: 540, end: 720, duration: 0.055, gain: 0.035, wave: "triangle" },
    mode: { start: 420, end: 820, duration: 0.09, gain: 0.045, wave: "sine" },
    draw: { start: 220, end: 620, duration: 0.16, gain: 0.05, wave: "triangle" },
    switch: { start: 380, end: 520, duration: 0.07, gain: 0.035, wave: "sine" },
    score: { start: 720, end: 960, duration: 0.08, gain: 0.04, wave: "square" }
  };
  const profile = profiles[type] || profiles.tap;
  const context = ensureAudioContext();
  if (!context) {
    playFallbackSound(type, profile);
    return;
  }

  const now = context.currentTime;
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = profile.wave;
  oscillator.frequency.setValueAtTime(profile.start, now);
  oscillator.frequency.exponentialRampToValueAtTime(profile.end, now + profile.duration);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(profile.gain, now + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + profile.duration);

  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + profile.duration + 0.02);
}

function replayAnimation(element, className) {
  if (!element) return;
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
}

function animateVisibleMode(mode) {
  const target =
    storyModes[mode]
      ? els.storyGame
      : digitalGames[mode]
        ? els.digitalGame
        : mode === "premium"
          ? els.premiumScreen
          : els.abdiGame;
  replayAnimation(target, "is-entering");
}

function setupInteractionFeedback() {
  updateSoundToggle();

  els.soundToggle?.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem("party-box-sound", soundEnabled ? "on" : "off");
    updateSoundToggle();
    if (soundEnabled) {
      playSound("mode");
      replayAnimation(els.soundToggle, "is-pressed");
    }
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button || button.disabled || button === els.soundToggle) return;

    const soundType =
      button.id === "draw-card" || button.id === "story-next"
        ? "draw"
        : button.dataset.modeTarget
          ? "mode"
          : button.dataset.mode
            ? "switch"
            : button.classList.contains("mini-button") || button.dataset.action
              ? "score"
              : "tap";

    playSound(soundType);
    replayAnimation(button, "is-pressed");
  });
}

function setupIntro() {
  if (!els.introScreen) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const introDuration = prefersReducedMotion ? 700 : 2550;
  let didClose = false;

  document.body.classList.add("intro-lock");

  const closeIntro = () => {
    if (didClose) return;
    didClose = true;
    els.introScreen.classList.add("is-leaving");

    window.setTimeout(
      () => {
        els.introScreen.hidden = true;
        document.body.classList.remove("intro-lock");
      },
      prefersReducedMotion ? 80 : 560
    );
  };

  window.setTimeout(closeIntro, introDuration);
  els.introScreen.addEventListener("click", closeIntro, { once: true });
  els.introScreen.addEventListener("touchstart", closeIntro, { once: true });
}

function openDrawer() {
  els.drawer.hidden = false;
  els.drawerBackdrop.hidden = false;
  document.body.classList.add("drawer-open");
  replayAnimation(els.drawer, "is-entering");
}

function closeDrawer() {
  els.drawer.hidden = true;
  els.drawerBackdrop.hidden = true;
  document.body.classList.remove("drawer-open");
}

function nextPlayer() {
  return state.players[state.turnIndex] || state.players[0];
}

function clampTurn() {
  if (state.players.length === 0) {
    state.turnIndex = 0;
    return;
  }
  state.turnIndex %= state.players.length;
}

function saveSnapshot() {
  localStorage.setItem(
    "abdi-party-box",
    JSON.stringify({
      players: state.players,
      activeRules: state.activeRules,
      mode: state.mode,
      activeCategory: state.activeCategory,
      activeMode: state.activeMode,
      storyMode: state.storyMode,
      digitalMode: state.digitalMode
    })
  );
}

function loadSnapshot() {
  const saved = localStorage.getItem("abdi-party-box");
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed.players) && parsed.players.length >= 2) {
      state.players = parsed.players.slice(0, 8).map((player) => ({
        id: player.id || crypto.randomUUID(),
        name: String(player.name || "Oyuncu").slice(0, 18),
        score: Number(player.score) || 0
      }));
    }
    if (Array.isArray(parsed.activeRules)) {
      state.activeRules = parsed.activeRules;
    }
    if (parsed.mode && penaltyLabels[parsed.mode]) {
      state.mode = parsed.mode;
    }
    if (parsed.activeCategory && ["party", "guess", "hidden", "table", "premium"].includes(parsed.activeCategory)) {
      state.activeCategory = parsed.activeCategory;
    }
    if (
      parsed.activeMode &&
      ["home", "abdi", "friends", "confession", "tasks", "truthdare", "couples", "premium", ...Object.keys(digitalGames)].includes(parsed.activeMode)
    ) {
      state.activeMode = parsed.activeMode;
    }
    if (parsed.storyMode && storyModes[parsed.storyMode]) {
      state.storyMode = parsed.storyMode;
    }
    if (parsed.digitalMode && digitalGames[parsed.digitalMode]) {
      state.digitalMode = parsed.digitalMode;
    }
  } catch {
    localStorage.removeItem("abdi-party-box");
  }
}

function setActiveCategory(category) {
  state.activeCategory = category;
  touchPulse(6);
  playSound("switch");
  renderCategoryTabs();
  saveSnapshot();
}

function resetDigitalState(mode) {
  state.digitalMode = mode;
  state.digitalDeck = [];
  state.digitalCurrent = null;
  state.digitalHistory = [];
  state.digitalRound = 0;
  state.digitalRevealIndex = 0;
  state.digitalRevealVisible = false;
  state.digitalAssignments = [];
  state.digitalPhaseIndex = 0;
  state.digitalScore = { a: 0, b: 0 };
  state.digitalSeconds = 0;
  state.beerPong = null;
  state.vampire = null;
  stopDigitalTimer();
}

function drawDigitalCard() {
  const game = digitalGames[state.digitalMode];
  if (!game || !game.cards?.length) return;
  if (state.digitalDeck.length === 0) {
    state.digitalDeck = shuffle(game.cards);
  }
  state.digitalRound += 1;
  state.digitalCurrent = state.digitalDeck.pop();
  state.digitalRevealVisible = false;
  state.digitalHistory.unshift({
    label:
      typeof state.digitalCurrent === "string"
        ? state.digitalCurrent
        : state.digitalCurrent.word || state.digitalCurrent.question || state.digitalCurrent.place || "Kart",
    round: state.digitalRound
  });
  state.digitalHistory = state.digitalHistory.slice(0, 6);
  startDigitalTimer(game.type === "quiz" ? 45 : 60);
  renderDigitalGame();
  replayAnimation(els.digitalStage, "is-dealt");
}

function assignSecretLocation() {
  const location = pickOne(digitalGames.spy.cards);
  const spyIndex = Math.floor(Math.random() * state.players.length);
  state.digitalCurrent = location;
  state.digitalAssignments = state.players.map((player, index) => ({
    playerId: player.id,
    playerName: player.name,
    role: index === spyIndex ? "Casus" : pickOne(location.roles),
    secret: index === spyIndex ? "Mekanı bilmiyorsun. Soruları dikkatli cevapla." : location.place,
    isSpy: index === spyIndex
  }));
  state.digitalRevealIndex = 0;
  state.digitalRevealVisible = false;
  state.digitalSeconds = 0;
  stopDigitalTimer();
}

function assignUndercover() {
  const pair = pickOne(digitalGames.undercover.cards);
  const undercoverIndex = Math.floor(Math.random() * state.players.length);
  const mrWhiteIndex =
    state.players.length >= 5
      ? (undercoverIndex + 1 + Math.floor(Math.random() * (state.players.length - 1))) % state.players.length
      : -1;
  state.digitalCurrent = { civilian: pair[0], undercover: pair[1] };
  state.digitalAssignments = state.players.map((player, index) => ({
    playerId: player.id,
    playerName: player.name,
    role: index === mrWhiteIndex ? "Mr White" : index === undercoverIndex ? "Undercover" : "Sivil",
    secret: index === mrWhiteIndex ? "Kelime yok. Konuşmalardan çöz." : index === undercoverIndex ? pair[1] : pair[0]
  }));
  state.digitalRevealIndex = 0;
  state.digitalRevealVisible = false;
  stopDigitalTimer();
}

function assignVampireRoles() {
  const rolePool = ["Vampir", "Kahin", "Koruyucu"];
  if (state.players.length >= 7) {
    rolePool.push("Vampir");
  }
  while (rolePool.length < state.players.length) {
    rolePool.push("Köylü");
  }
  const roles = shuffle(rolePool).slice(0, state.players.length);
  state.digitalAssignments = state.players.map((player, index) => ({
    playerId: player.id,
    playerName: player.name,
    role: roles[index],
    secret:
      roles[index] === "Vampir"
        ? "Gece hedef seç. Gündüz köylü gibi davran."
        : roles[index] === "Kahin"
          ? "Gece bir oyuncunun vampir olup olmadığını sor."
          : roles[index] === "Koruyucu"
            ? "Gece bir kişiyi koru. Kendini de seçebilirsin."
            : "Bilgin yok. Tartışmada sezgilerine güven."
  }));
  state.vampire = {
    alive: Object.fromEntries(state.players.map((player) => [player.id, true])),
    day: 1,
    nightTarget: null,
    protectedId: null,
    checkedId: null,
    eliminatedId: null,
    privateResult: "",
    log: ["Roller dağıtıldı. Telefonu sırayla verin."]
  };
  state.digitalRevealIndex = 0;
  state.digitalRevealVisible = false;
  state.digitalPhaseIndex = 0;
  stopDigitalTimer();
}

function resetBeerPong() {
  state.beerPong = {
    a: Array(10).fill(true),
    b: Array(10).fill(true),
    history: []
  };
  state.digitalSeconds = 0;
  stopDigitalTimer();
}

function initDigitalGame(mode) {
  const game = digitalGames[mode];
  if (!game) return;

  resetDigitalState(mode);
  if (game.type === "tell" || game.type === "quiz" || game.type === "identity") {
    state.digitalDeck = shuffle(game.cards);
    drawDigitalCard();
  } else if (game.type === "secretLocation") {
    assignSecretLocation();
    renderDigitalGame();
  } else if (game.type === "undercover") {
    assignUndercover();
    renderDigitalGame();
  } else if (game.type === "roles") {
    assignVampireRoles();
    renderDigitalGame();
  } else if (game.type === "beerPong") {
    resetBeerPong();
    renderDigitalGame();
  }
}

function nextSecretReveal() {
  if (state.digitalRevealIndex < state.players.length - 1) {
    state.digitalRevealIndex += 1;
    state.digitalRevealVisible = false;
  } else {
    state.digitalRevealIndex = state.players.length;
    state.digitalRevealVisible = false;
    startDigitalTimer(state.digitalMode === "spy" ? 480 : state.digitalMode === "undercover" ? 180 : 120);
  }
  renderDigitalGame();
  replayAnimation(els.digitalStage, "is-dealt");
}

function hitBeerPong(targetTeam) {
  if (!state.beerPong) resetBeerPong();
  const cups = state.beerPong[targetTeam];
  const index = cups.findIndex(Boolean);
  if (index === -1) return;
  cups[index] = false;
  state.beerPong.history.unshift(`${targetTeam === "a" ? "B" : "A"} isabet`);
  renderDigitalGame();
  replayAnimation(els.digitalStage, "is-dealt");
}

function alivePlayers() {
  if (!state.vampire) return state.players;
  return state.players.filter((player) => state.vampire.alive[player.id]);
}

function assignmentForPlayer(id) {
  return state.digitalAssignments.find((assignment) => assignment.playerId === id);
}

function selectVampireTarget(action, playerId) {
  if (!state.vampire) return;
  const assignment = assignmentForPlayer(playerId);
  const playerName = assignment?.playerName || "Oyuncu";

  if (action === "kill") {
    state.vampire.nightTarget = playerId;
    state.vampire.log.unshift("Vampirler gece hedefini seçti.");
  } else if (action === "protect") {
    state.vampire.protectedId = playerId;
    state.vampire.log.unshift("Koruyucu bu gece bir oyuncuyu korudu.");
  } else if (action === "check") {
    state.vampire.checkedId = playerId;
    const isVampire = assignment?.role === "Vampir";
    state.vampire.privateResult = `${playerName}: ${isVampire ? "Vampir" : "Vampir değil"}`;
    state.vampire.log.unshift("Kahin gizli kontrolünü yaptı.");
  } else if (action === "vote") {
    state.vampire.eliminatedId = playerId;
    state.vampire.alive[playerId] = false;
    state.vampire.log.unshift(`Köy oylaması: ${playerName} elendi.`);
  }

  renderDigitalGame();
  replayAnimation(els.digitalStage, "is-dealt");
}

function resolveVampireDawn() {
  if (!state.vampire) return;
  const targetId = state.vampire.nightTarget;
  if (!targetId) {
    state.vampire.log.unshift("Sabah oldu: Vampirler hedef seçemedi.");
  } else if (targetId === state.vampire.protectedId) {
    state.vampire.log.unshift("Sabah oldu: Koruyucu hedefi kurtardı.");
  } else {
    state.vampire.alive[targetId] = false;
    const target = assignmentForPlayer(targetId);
    state.vampire.log.unshift(`Sabah oldu: ${target?.playerName || "Bir oyuncu"} gece elendi.`);
  }
  state.vampire.nightTarget = null;
  state.vampire.protectedId = null;
  state.vampire.checkedId = null;
  state.vampire.privateResult = "";
}

function advanceVampirePhase() {
  if (!state.vampire) return;
  state.digitalPhaseIndex = (state.digitalPhaseIndex + 1) % digitalGames.vampire.phases.length;

  if (state.digitalPhaseIndex === 4) {
    resolveVampireDawn();
    startDigitalTimer(180);
  } else if (state.digitalPhaseIndex === 0) {
    state.vampire.day += 1;
    state.vampire.privateResult = "";
    startDigitalTimer(45);
  } else if (state.digitalPhaseIndex === 5) {
    state.vampire.privateResult = "";
    startDigitalTimer(120);
  } else {
    if (state.digitalPhaseIndex !== 2) {
      state.vampire.privateResult = "";
    }
    startDigitalTimer(60);
  }
  renderDigitalGame();
  replayAnimation(els.digitalStage, "is-dealt");
}

function setActiveMode(mode) {
  state.activeMode = mode;
  touchPulse(12);
  const selectedButton = [...els.modeButtons].find((button) => button.dataset.modeTarget === mode);
  replayAnimation(selectedButton, "is-selected-pulse");

  if (storyModes[mode]) {
    stopDigitalTimer();
    state.digitalMode = null;
    state.storyMode = mode;
    state.storyDeck = shuffle(storyModes[mode].cards);
    state.storyCurrent = null;
    state.storyHistory = [];
    state.storyRound = 0;
    drawStoryCard();
  } else if (digitalGames[mode]) {
    state.storyMode = null;
    initDigitalGame(mode);
    render();
    animateVisibleMode(mode);
    els.digitalGame?.scrollIntoView({ behavior: "smooth", block: "start" });
  } else if (mode === "premium") {
    stopDigitalTimer();
    state.storyMode = null;
    state.digitalMode = null;
    render();
    animateVisibleMode(mode);
    els.premiumScreen?.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    stopDigitalTimer();
    state.storyMode = null;
    state.digitalMode = null;
    render();
    animateVisibleMode(mode);
    const target = mode === "abdi" ? els.abdiGame : document.querySelector("#mode-title");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  saveSnapshot();
}

function randomStoryPlayer() {
  if (state.players.length === 0) return "Oyuncu";
  return state.players[Math.floor(Math.random() * state.players.length)].name;
}

function drawStoryCard() {
  const mode = storyModes[state.storyMode];
  if (!mode) return;
  if (state.storyDeck.length === 0) {
    state.storyDeck = shuffle(mode.cards);
  }

  const card = state.storyDeck.pop();
  state.storyRound += 1;
  state.storyCurrent = {
    ...card,
    playerName: randomStoryPlayer(),
    mode: state.storyMode,
    round: state.storyRound
  };
  state.storyHistory.unshift(state.storyCurrent);
  state.storyHistory = state.storyHistory.slice(0, 6);
  render();
  animateVisibleMode(state.storyMode);
  replayAnimation(els.storyCard, "is-dealt");
  els.storyGame?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function rerollStoryPlayer() {
  if (!state.storyCurrent) return;
  state.storyCurrent.playerName = randomStoryPlayer();
  if (state.storyHistory[0]) {
    state.storyHistory[0].playerName = state.storyCurrent.playerName;
  }
  touchPulse(10);
  renderStory();
}

function startGame() {
  if (state.players.length < 2) return;
  touchPulse(12);
  state.players.forEach((player) => {
    player.score = 0;
  });
  state.deck = shuffle(createDeck());
  state.discard = [];
  state.history = [];
  state.current = null;
  state.activeRules = [];
  state.turnIndex = 0;
  state.started = true;
  saveSnapshot();
  render();
  replayAnimation(els.abdiGame, "is-entering");
}

function resetDeck() {
  touchPulse(12);
  state.deck = shuffle(createDeck());
  state.discard = [];
  state.history = [];
  state.current = null;
  state.turnIndex = 0;
  state.started = true;
  render();
}

function drawCard() {
  if (state.players.length < 2) return;
  touchPulse(20);
  if (!state.started || state.deck.length === 0) {
    resetDeck();
  }

  const player = nextPlayer();
  const card = state.deck.pop();
  if (!card || !player) return;

  state.discard.push(card);
  state.current = {
    card,
    playerId: player.id,
    playerName: player.name,
    time: new Date().toLocaleTimeString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit"
    })
  };
  state.history.unshift(state.current);
  state.history = state.history.slice(0, 10);
  state.turnIndex = (state.turnIndex + 1) % state.players.length;
  render();
  replayAnimation(els.currentCard, "is-drawn");
  replayAnimation(els.actionPanel, "is-updated");
}

function undoDraw() {
  const last = state.discard.pop();
  if (!last) return;

  touchPulse(8);
  state.deck.push(last);
  state.history.shift();
  state.current = state.history[0] || null;
  state.turnIndex = (state.turnIndex - 1 + state.players.length) % state.players.length;
  render();
}

function addPlayer(name) {
  const cleanName = name.trim().slice(0, 18);
  if (!cleanName || state.players.length >= 8) return;
  state.players.push({ id: crypto.randomUUID(), name: cleanName, score: 0 });
  clampTurn();
  saveSnapshot();
  render();
}

function removePlayer(id) {
  if (state.players.length <= 2) return;
  state.players = state.players.filter((player) => player.id !== id);
  clampTurn();
  saveSnapshot();
  render();
}

function renamePlayer(id, name) {
  const player = state.players.find((item) => item.id === id);
  if (!player) return;
  player.name = name.trim() || "Oyuncu";
  saveSnapshot();
  renderScoreboard();
}

function updateScore(id, delta) {
  const player = state.players.find((item) => item.id === id);
  if (!player) return;
  touchPulse(delta > 0 ? 14 : 6);
  player.score = Math.max(0, player.score + delta);
  saveSnapshot();
  renderScoreboard();
}

function addCurrentPlayerScore() {
  if (!state.current) return;
  updateScore(state.current.playerId, 1);
}

function addEveryoneScore() {
  state.players.forEach((player) => {
    player.score += 1;
  });
  saveSnapshot();
  renderScoreboard();
}

function addActiveRule() {
  const text = els.ruleInput.value.trim();
  if (!text) return;
  touchPulse(10);
  state.activeRules.unshift({
    id: crypto.randomUUID(),
    text
  });
  els.ruleInput.value = "";
  saveSnapshot();
  renderActiveRules();
}

function removeActiveRule(id) {
  state.activeRules = state.activeRules.filter((rule) => rule.id !== id);
  saveSnapshot();
  renderActiveRules();
}

function setMode(mode) {
  state.mode = mode;
  touchPulse(8);
  saveSnapshot();
  render();
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js").catch(() => {
      // Local file previews and private modes can block service workers.
    });
  });
}

function isStandaloneApp() {
  return window.matchMedia("(display-mode: standalone)").matches || navigator.standalone;
}

function fallbackInstallText() {
  const userAgent = navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(userAgent)) {
    return "Safari'de Paylaş menüsünden Ana Ekrana Ekle seçeneğini kullan.";
  }
  if (/android/.test(userAgent)) {
    return "Chrome menüsünden Ana ekrana ekle seçeneğini kullan.";
  }
  return "Tarayıcı menüsünden Uygulamayı yükle veya Ana ekrana ekle seçeneğini kullan.";
}

function showInstallSheet(message, buttonText = "Tamam") {
  if (!els.installSheet || !els.installSheetCopy || !els.installApp) return;
  els.installSheetCopy.textContent = message;
  els.installApp.textContent = buttonText;
  els.installSheet.hidden = false;
}

async function requestInstall() {
  if (isStandaloneApp()) return;
  touchPulse(10);

  if (!deferredInstallPrompt) {
    showInstallSheet(fallbackInstallText());
    return;
  }

  els.installSheet.hidden = true;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
}

function setupInstallPrompt() {
  if (!els.installSheet || !els.installApp || !els.dismissInstall) return;
  if (isStandaloneApp()) {
    if (els.installTrigger) {
      els.installTrigger.hidden = true;
    }
    return;
  }

  els.installTrigger?.addEventListener("click", requestInstall);

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    showInstallSheet("Telefona uygulama gibi ekle.", "Yükle");
  });

  els.installApp.addEventListener("click", () => {
    if (!deferredInstallPrompt) {
      els.installSheet.hidden = true;
      return;
    }
    requestInstall();
  });

  els.dismissInstall.addEventListener("click", () => {
    els.installSheet.hidden = true;
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    els.installSheet.hidden = true;
  });
}

function renderPlayers() {
  els.playerList.innerHTML = "";
  els.playerCount.textContent = `${state.players.length}/8`;

  state.players.forEach((player) => {
    const row = document.createElement("div");
    row.className = "player-row";

    const input = document.createElement("input");
    input.value = player.name;
    input.maxLength = 18;
    input.setAttribute("aria-label", `${player.name} adı`);
    input.addEventListener("change", () => renamePlayer(player.id, input.value));

    const removeButton = document.createElement("button");
    removeButton.className = "icon-button danger";
    removeButton.type = "button";
    removeButton.setAttribute("aria-label", `${player.name} oyuncusunu sil`);
    removeButton.innerHTML = '<span aria-hidden="true">−</span>';
    removeButton.disabled = state.players.length <= 2;
    removeButton.addEventListener("click", () => removePlayer(player.id));

    row.append(input, removeButton);
    els.playerList.append(row);
  });
}

function renderScoreboard() {
  els.scoreList.innerHTML = "";

  state.players.forEach((player) => {
    const row = document.createElement("div");
    row.className = "score-row";

    const name = document.createElement("strong");
    name.textContent = player.name;

    const controls = document.createElement("div");
    controls.className = "score-controls";

    const minus = document.createElement("button");
    minus.className = "mini-button";
    minus.type = "button";
    minus.setAttribute("aria-label", `${player.name} cezasını azalt`);
    minus.textContent = "−";
    minus.addEventListener("click", () => updateScore(player.id, -1));

    const score = document.createElement("span");
    score.textContent = player.score;

    const plus = document.createElement("button");
    plus.className = "mini-button";
    plus.type = "button";
    plus.setAttribute("aria-label", `${player.name} cezasını artır`);
    plus.textContent = "+";
    plus.addEventListener("click", () => updateScore(player.id, 1));

    controls.append(minus, score, plus);
    row.append(name, controls);
    els.scoreList.append(row);
  });
}

function renderCard() {
  const { current } = state;
  els.deckCount.textContent = state.started ? state.deck.length : 52;
  els.drawCard.disabled = state.players.length < 2;

  if (!current) {
    els.tableTitle.textContent = state.started ? `${nextPlayer().name} hazır` : "Oyunu başlat";
    els.currentCard.className = "playing-card card-back";
    els.currentCard.innerHTML = `
      <span class="card-rank">?</span>
      <span class="card-suit">?</span>
      <strong>ABDI</strong>
      <small>${state.started ? "kart çek" : "kart bekleniyor"}</small>
    `;
    els.ruleMaker.hidden = true;
    renderActionIntro();
    return;
  }

  const { card } = current;
  els.tableTitle.textContent = `${nextPlayer().name} sırada`;
  els.currentCard.className = `playing-card ${card.suit.color === "red" ? "is-red" : "is-black"}`;
  els.currentCard.innerHTML = `
    <span class="card-rank">${card.rank}</span>
    <span class="card-suit">${card.suit.symbol}</span>
    <strong>${card.rank}</strong>
    <small>${card.suit.name}</small>
  `;
  els.ruleMaker.hidden = card.rank !== "10";
  renderAction(card.rank, current.playerName);
}

function renderActionIntro() {
  els.actionPanel.innerHTML = `
    <p class="overline">Görev</p>
    <h3>Masayı kurup ilk kartı çek.</h3>
    <p>En az iki oyuncu yeterli. Ceza kelimesini sol panelden değiştirebilirsin.</p>
  `;
}

function renderAction(rank, playerName) {
  const rule = ruleBook[rank];
  let actionMarkup = "";

  if (rank === "4") {
    actionMarkup =
      '<button class="tool-button compact" type="button" data-action="everyone">Herkese +1</button>';
  } else if (rank !== "K") {
    const options = state.players
      .map((player) => {
        const selected = state.current?.playerId === player.id ? " selected" : "";
        return `<option value="${player.id}"${selected}>${escapeHTML(player.name)}</option>`;
      })
      .join("");
    actionMarkup = `
      <div class="penalty-picker">
        <label for="target-player">Ceza alan</label>
        <select id="target-player">${options}</select>
        <button class="tool-button compact" type="button" data-action="selected">+1 yaz</button>
      </div>
    `;
  }

  els.actionPanel.innerHTML = `
    <p class="overline">${escapeHTML(playerName)} çekti</p>
    <h3>${escapeHTML(rank)} - ${rule.title}</h3>
    <p>${taskText(rank)}</p>
    ${actionMarkup ? `<div class="inline-actions">${actionMarkup}</div>` : ""}
  `;

  els.actionPanel.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      if (button.dataset.action === "everyone") {
        addEveryoneScore();
      } else {
        const selectedPlayer = els.actionPanel.querySelector("#target-player");
        if (selectedPlayer) {
          updateScore(selectedPlayer.value, 1);
        }
      }
    });
  });
}

function renderActiveRules() {
  els.activeRuleList.innerHTML = "";
  els.emptyRules.hidden = state.activeRules.length > 0;

  state.activeRules.forEach((rule) => {
    const item = document.createElement("li");
    item.className = "active-rule-item";

    const text = document.createElement("span");
    text.textContent = rule.text;

    const done = document.createElement("button");
    done.className = "mini-button";
    done.type = "button";
    done.setAttribute("aria-label", "Kuralı kaldır");
    done.textContent = "✓";
    done.addEventListener("click", () => removeActiveRule(rule.id));

    item.append(text, done);
    els.activeRuleList.append(item);
  });
}

function renderRuleGrid() {
  els.ruleGrid.innerHTML = "";

  rankOrder.forEach((rank) => {
    const rule = ruleBook[rank];
    const card = document.createElement("article");
    card.className = "rule-card";
    card.innerHTML = `
      <div class="rule-card-head">
        <span class="rank-badge">${rank}</span>
        <span>${rule.label}</span>
      </div>
      <h3>${rule.title}</h3>
      <p>${taskText(rank)}</p>
    `;
    els.ruleGrid.append(card);
  });
}

function renderHistory() {
  els.historyList.innerHTML = "";

  if (state.history.length === 0) {
    els.historyList.innerHTML = '<div class="empty-state">Kart çekilince burası dolar.</div>';
    return;
  }

  state.history.forEach((entry) => {
    const item = document.createElement("div");
    item.className = "history-item";
    item.innerHTML = `
      <span class="mini-card ${entry.card.suit.color === "red" ? "is-red" : ""}">
        ${entry.card.rank}${entry.card.suit.symbol}
      </span>
      <strong>${entry.playerName}</strong>
      <span>${ruleBook[entry.card.rank].title}</span>
      <small>${entry.time}</small>
    `;
    els.historyList.append(item);
  });
}

function renderMode() {
  document.querySelectorAll("[data-mode]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mode === state.mode);
  });
  els.safetyNote.hidden = state.mode !== "shot";
}

function renderCategoryTabs() {
  els.categoryTabs.forEach((tab) => {
    const isActive = tab.dataset.categoryTarget === state.activeCategory;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });

  els.modeButtons.forEach((button) => {
    button.hidden = button.dataset.category !== state.activeCategory;
  });
}

function renderScreens() {
  const isStory = Boolean(storyModes[state.activeMode]);
  const isDigital = Boolean(digitalGames[state.activeMode]);
  document.body.classList.toggle("play-mode", state.activeMode !== "home");
  els.storyGame.hidden = !isStory;
  els.digitalGame.hidden = !isDigital;
  els.premiumScreen.hidden = state.activeMode !== "premium";
  els.abdiGame.hidden = state.activeMode !== "abdi";
  els.abdiRules.hidden = state.activeMode !== "abdi";
  els.abdiHistory.hidden = state.activeMode !== "abdi";

  els.modeButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.modeTarget === state.activeMode);
  });
}

function renderDigitalScore() {
  if (!els.digitalScore) return;
  const game = digitalGames[state.digitalMode];
  if (!game) {
    els.digitalScore.innerHTML = "";
    return;
  }
  if (game.type === "beerPong" && state.beerPong) {
    const aLeft = state.beerPong.a.filter(Boolean).length;
    const bLeft = state.beerPong.b.filter(Boolean).length;
    els.digitalScore.innerHTML = `<span>A kupası: ${aLeft}</span><span>B kupası: ${bLeft}</span>`;
    return;
  }
  els.digitalScore.innerHTML = `<span>Takım A: ${state.digitalScore.a}</span><span>Takım B: ${state.digitalScore.b}</span>`;
}

function renderSecretAssignment(game) {
  const done = state.digitalRevealIndex >= state.players.length;
  if (done) {
    if (game.type === "roles") {
      return renderVampireStage();
    }
    const phase =
      game.type === "undercover"
          ? "Herkes tek ipucu verir, sonra tartışma ve oylama başlar."
          : "Sorgu başladı. Casus mekanı bulmadan onu yakalayın.";
    return `
      <span class="story-card-tag">Tartışma</span>
      <h3>${phase}</h3>
      <p>Telefon artık masada kalabilir. Süreyi başlatıp turu yönetin.</p>
    `;
  }

  const assignment = state.digitalAssignments[state.digitalRevealIndex];
  if (!assignment) return "";
  const secretMarkup = state.digitalRevealVisible
    ? `
      <div class="secret-role">
        <strong>${escapeHTML(assignment.role)}</strong>
        <span>${escapeHTML(assignment.secret)}</span>
      </div>
    `
    : '<div class="secret-role is-hidden"><strong>Gizli</strong><span>Hazırsan rolünü göster.</span></div>';

  return `
    <span class="story-card-tag">${state.digitalRevealIndex + 1}/${state.players.length}</span>
    <h3>Telefon ${escapeHTML(assignment.playerName)} oyuncusunda</h3>
    <p>Kimse bakmadan rolünü aç, ezberle ve gizle.</p>
    ${secretMarkup}
  `;
}

function renderPlayerActionList(action, roleFilter = null) {
  const players = alivePlayers().filter((player) => {
    if (!roleFilter) return true;
    return assignmentForPlayer(player.id)?.role !== roleFilter;
  });
  return `
    <div class="action-block">
      <strong>Gizli seçim</strong>
      <div class="player-action-grid">
        ${players
          .map(
            (player) => `
              <button type="button" data-vampire-action="${action}" data-player-id="${player.id}">
                ${escapeHTML(player.name)}
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderVampireStage() {
  const game = digitalGames.vampire;
  const phaseIndex = state.digitalPhaseIndex % game.phases.length;
  const phase = game.phases[phaseIndex];
  const alive = alivePlayers();
  const log = state.vampire?.log || [];
  const aliveMarkup = alive.map((player) => `<span>${escapeHTML(player.name)}</span>`).join("");
  const logMarkup = log.slice(0, 4).map((entry) => `<li>${escapeHTML(entry)}</li>`).join("");

  let actionMarkup = "";
  if (phaseIndex === 1) {
    actionMarkup = `
      <p>Vampirler telefonu alır, kimse görmeden gece hedefini seçer.</p>
      ${renderPlayerActionList("kill", "Vampir")}
    `;
  } else if (phaseIndex === 2) {
    actionMarkup = `
      <p>Kahin telefonu alır ve bir oyuncunun vampir olup olmadığını kontrol eder.</p>
      ${renderPlayerActionList("check")}
      ${state.vampire?.privateResult ? `<div class="secret-role"><strong>Kahin sonucu</strong><span>${escapeHTML(state.vampire.privateResult)}</span></div>` : ""}
    `;
  } else if (phaseIndex === 3) {
    actionMarkup = `
      <p>Koruyucu telefonu alır ve bu gece korunacak oyuncuyu seçer.</p>
      ${renderPlayerActionList("protect")}
    `;
  } else if (phaseIndex === 5) {
    actionMarkup = `
      <p>Gündüz tartışması bittiğinde elenecek oyuncuyu seçin.</p>
      ${renderPlayerActionList("vote")}
    `;
  } else if (phaseIndex === 4) {
    actionMarkup = "<p>Sabah sonucu hesaplandı. Logdan gece sonucunu açıklayabilirsin.</p>";
  } else {
    actionMarkup = "<p>Telefon moderatörde kalsın. Herkese gözlerini kapatmasını söyle ve fazı ilerlet.</p>";
  }

  return `
    <span class="story-card-tag">Gün ${state.vampire?.day || 1} · ${phase}</span>
    <h3>Vampir Köylü yönetimi</h3>
    ${actionMarkup}
    <div class="alive-block">
      <strong>Hayatta kalanlar</strong>
      <div class="alive-strip">${aliveMarkup}</div>
    </div>
    <ol class="night-log">${logMarkup}</ol>
  `;
}

function renderBeerPong() {
  if (!state.beerPong) resetBeerPong();
  const renderCups = (team) =>
    state.beerPong[team]
      .map(
        (active, index) => `
          <button class="cup ${active ? "is-full" : "is-hit"}" type="button" data-cup-team="${team}" data-cup-index="${index}" aria-label="${team.toUpperCase()} kupa ${index + 1}">
            ${index + 1}
          </button>
        `
      )
      .join("");

  return `
    <span class="story-card-tag">Masa yardımcısı</span>
    <h3>Beer Pong kupa takibi</h3>
    <p>A takımı isabet ederse B kupasını, B takımı isabet ederse A kupasını düşür.</p>
    <div class="pong-board">
      <div>
        <strong>A kupaları</strong>
        <div class="cup-grid">${renderCups("a")}</div>
      </div>
      <div>
        <strong>B kupaları</strong>
        <div class="cup-grid">${renderCups("b")}</div>
      </div>
    </div>
  `;
}

function renderDigitalGame() {
  const game = digitalGames[state.digitalMode];
  if (!game) return;

  els.digitalKicker.textContent = game.kicker;
  els.digitalTitle.textContent = game.title;
  els.digitalMeta.innerHTML = game.meta.map((item) => `<span>${escapeHTML(item)}</span>`).join("");
  els.digitalGuide.innerHTML = `
    <ol class="compact-steps">
      ${game.guide.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
    </ol>
  `;

  renderDigitalTimer();
  renderDigitalScore();

  if (game.type === "tell") {
    const card = state.digitalCurrent;
    els.digitalStage.innerHTML = `
      <span class="story-card-tag">Tur ${state.digitalRound}</span>
      <h3>${escapeHTML(card?.word || "Kart çek")}</h3>
      <p>Anlatırken bu kelimeleri kullanma:</p>
      <div class="forbidden-list">${(card?.forbidden || []).map((item) => `<span>${escapeHTML(item)}</span>`).join("")}</div>
    `;
    setButton(els.digitalPrimary, "Yeni kart");
    setButton(els.digitalSecondary, "Doğru +1");
    setButton(els.digitalTertiary, "Pas");
  } else if (game.type === "quiz") {
    const card = state.digitalCurrent;
    els.digitalStage.innerHTML = `
      <span class="story-card-tag">Bil Bakalım</span>
      <h3>${escapeHTML(card?.question || "Soru çek")}</h3>
      <p><strong>İpucu:</strong> ${escapeHTML(card?.hint || "")}</p>
      ${state.digitalRevealVisible ? `<div class="answer-box">${escapeHTML(card?.answer || "")}</div>` : ""}
    `;
    setButton(els.digitalPrimary, "Yeni soru");
    setButton(els.digitalSecondary, state.digitalRevealVisible ? "Cevabı gizle" : "Cevabı aç");
    setButton(els.digitalTertiary, "Doğru +1");
  } else if (game.type === "identity") {
    const card = state.digitalCurrent;
    const player = nextPlayer();
    els.digitalStage.innerHTML = `
      <span class="story-card-tag">${escapeHTML(player.name)} tahmin ediyor</span>
      <h3>${escapeHTML(card || "Kimlik çek")}</h3>
      <p>Telefonu tahmin eden oyuncuya göstermeden masaya doğru tut. Sadece evet-hayır soruları.</p>
    `;
    setButton(els.digitalPrimary, "Yeni kimlik");
    setButton(els.digitalSecondary, "Bildim +1");
    setButton(els.digitalTertiary, "Sıradaki");
  } else if (game.type === "secretLocation" || game.type === "undercover" || game.type === "roles") {
    els.digitalStage.innerHTML = renderSecretAssignment(game);
    const revealedDone = state.digitalRevealIndex >= state.players.length;
    setButton(
      els.digitalPrimary,
      revealedDone ? (game.type === "roles" ? "Süre başlat" : "Süre başlat") : state.digitalRevealVisible ? "Gizle" : "Rolü göster"
    );
    setButton(els.digitalSecondary, revealedDone ? "Fazı ilerlet" : "Sonraki oyuncu");
    setButton(els.digitalTertiary, "Yeni tur");
  } else if (game.type === "beerPong") {
    els.digitalStage.innerHTML = renderBeerPong();
    setButton(els.digitalPrimary, "Yeni dizilim");
    setButton(els.digitalSecondary, "A isabet");
    setButton(els.digitalTertiary, "B isabet");
  }
}

function renderStory() {
  const mode = storyModes[state.storyMode];
  if (!mode) return;

  els.storyKicker.textContent = mode.kicker;
  els.storyTitle.textContent = mode.title;
  els.storyMeta.innerHTML = mode.meta
    .map((item) => `<span>${fillTemplate(item, nextPlayer()?.name || "Oyuncu")}</span>`)
    .join("");

  if (!state.storyCurrent) {
    els.storyCard.innerHTML = `
      <span class="story-card-tag">Hazır</span>
      <h3>Kart çek.</h3>
      <p>Bu modun ilk görevi burada açılacak.</p>
    `;
  } else {
    const card = state.storyCurrent;
    const playerName = escapeHTML(card.playerName);
    els.storyCard.innerHTML = `
      <span class="story-card-tag">${card.tag} · Tur ${card.round}</span>
      <h3>${playerName} sahnede</h3>
      <p>${formatStoryText(card.prompt, card.playerName)}</p>
      <small>${formatStoryText(card.spark, card.playerName)}</small>
    `;
  }

  if (state.storyHistory.length === 0) {
    els.storyHistory.innerHTML = '<div class="empty-state">Kart çekilince burası dolar.</div>';
    return;
  }

  els.storyHistory.innerHTML = state.storyHistory
    .map(
      (card) => `
        <div class="story-history-item">
          <strong>${card.tag}</strong>
          <span>${escapeHTML(card.playerName)}</span>
        </div>
      `
    )
    .join("");
}

function render() {
  clampTurn();
  renderCategoryTabs();
  renderScreens();
  renderPlayers();
  renderScoreboard();
  renderCard();
  renderActiveRules();
  renderRuleGrid();
  renderHistory();
  renderStory();
  renderDigitalGame();
  renderMode();
  els.startGame.disabled = state.players.length < 2;
}

function handleDigitalPrimary() {
  const game = digitalGames[state.digitalMode];
  if (!game) return;
  touchPulse(10);

  if (game.type === "tell" || game.type === "quiz" || game.type === "identity") {
    drawDigitalCard();
  } else if (game.type === "secretLocation" || game.type === "undercover" || game.type === "roles") {
    if (state.digitalRevealIndex >= state.players.length) {
      startDigitalTimer(game.type === "secretLocation" ? 480 : game.type === "undercover" ? 180 : 120);
    } else {
      state.digitalRevealVisible = !state.digitalRevealVisible;
      renderDigitalGame();
      replayAnimation(els.digitalStage, "is-dealt");
    }
  } else if (game.type === "beerPong") {
    resetBeerPong();
    renderDigitalGame();
  }
}

function handleDigitalSecondary() {
  const game = digitalGames[state.digitalMode];
  if (!game) return;
  touchPulse(8);

  if (game.type === "tell") {
    state.digitalScore.a += 1;
    drawDigitalCard();
  } else if (game.type === "quiz") {
    state.digitalRevealVisible = !state.digitalRevealVisible;
    renderDigitalGame();
    replayAnimation(els.digitalStage, "is-dealt");
  } else if (game.type === "identity") {
    state.digitalScore.a += 1;
    state.turnIndex = (state.turnIndex + 1) % state.players.length;
    drawDigitalCard();
  } else if (game.type === "secretLocation" || game.type === "undercover") {
    nextSecretReveal();
  } else if (game.type === "roles") {
    if (state.digitalRevealIndex >= state.players.length) {
      advanceVampirePhase();
    } else {
      nextSecretReveal();
    }
  } else if (game.type === "beerPong") {
    hitBeerPong("b");
  }
}

function handleDigitalTertiary() {
  const game = digitalGames[state.digitalMode];
  if (!game) return;
  touchPulse(8);

  if (game.type === "tell") {
    drawDigitalCard();
  } else if (game.type === "quiz") {
    state.digitalScore.a += 1;
    renderDigitalGame();
    replayAnimation(els.digitalScore, "is-updated");
  } else if (game.type === "identity") {
    state.turnIndex = (state.turnIndex + 1) % state.players.length;
    drawDigitalCard();
  } else if (game.type === "secretLocation" || game.type === "undercover" || game.type === "roles") {
    initDigitalGame(state.digitalMode);
  } else if (game.type === "beerPong") {
    hitBeerPong("a");
  }
}

els.form.addEventListener("submit", (event) => {
  event.preventDefault();
  addPlayer(els.playerName.value);
  els.playerName.value = "";
  els.playerName.focus();
});

els.drawCard.addEventListener("click", drawCard);
els.startGame.addEventListener("click", startGame);
els.resetDeck.addEventListener("click", resetDeck);
els.undoDraw.addEventListener("click", undoDraw);
els.addRule.addEventListener("click", addActiveRule);
els.ruleInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addActiveRule();
  }
});
els.printRules.addEventListener("click", () => window.print());
els.storyNext.addEventListener("click", drawStoryCard);
els.storyPlayer.addEventListener("click", rerollStoryPlayer);
els.backToModes.addEventListener("click", () => setActiveMode("home"));
els.digitalBack.addEventListener("click", () => setActiveMode("home"));
els.abdiBack.addEventListener("click", () => setActiveMode("home"));
els.digitalPrimary.addEventListener("click", handleDigitalPrimary);
els.digitalSecondary.addEventListener("click", handleDigitalSecondary);
els.digitalTertiary.addEventListener("click", handleDigitalTertiary);
els.digitalStage.addEventListener("click", (event) => {
  const vampireButton = event.target.closest("[data-vampire-action]");
  if (vampireButton && state.digitalMode === "vampire") {
    selectVampireTarget(vampireButton.dataset.vampireAction, vampireButton.dataset.playerId);
    return;
  }

  const cup = event.target.closest("[data-cup-team]");
  if (!cup || state.digitalMode !== "beerPong") return;
  const team = cup.dataset.cupTeam;
  const index = Number(cup.dataset.cupIndex);
  if (!state.beerPong?.[team]?.[index]) return;
  state.beerPong[team][index] = false;
  state.beerPong.history.unshift(`${team.toUpperCase()} kupası düştü`);
  renderDigitalGame();
});
els.premiumBack.addEventListener("click", () => setActiveMode("home"));
els.menuToggle.addEventListener("click", openDrawer);
els.drawerClose.addEventListener("click", closeDrawer);
els.drawerBackdrop.addEventListener("click", closeDrawer);
els.menuHome.addEventListener("click", () => {
  setActiveMode("home");
  closeDrawer();
});

els.menuButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setActiveCategory(button.dataset.menuCategory);
    setActiveMode(button.dataset.menuTarget);
    closeDrawer();
  });
});

els.categoryTabs.forEach((button) => {
  button.addEventListener("click", () => setActiveCategory(button.dataset.categoryTarget));
});

els.modeButtons.forEach((button) => {
  button.addEventListener("click", () => setActiveMode(button.dataset.modeTarget));
});

document.querySelectorAll("[data-mode]").forEach((button) => {
  button.addEventListener("click", () => setMode(button.dataset.mode));
});

loadSnapshot();
state.deck = shuffle(createDeck());
if (state.storyMode && storyModes[state.storyMode]) {
  state.storyDeck = shuffle(storyModes[state.storyMode].cards);
}
if (state.digitalMode && digitalGames[state.activeMode]) {
  initDigitalGame(state.digitalMode);
}
registerServiceWorker();
setupInstallPrompt();
setupIntro();
setupInteractionFeedback();
render();
