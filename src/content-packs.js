export const contentPacks = {
  story: {
    friends: [
      {
        tag: "Oylama",
        prompt: "Herkes aynı anda {player} için 'bu kişi gizlice hangi uygulamada fenomen olurdu?' sorusuna cevap versin.",
        spark: "En çok oy alan cevap için {player} 10 saniyelik içerik denemesi yapar."
      },
      {
        tag: "İfşa light",
        prompt: "{player}, masadaki birinin en tahmin edilebilir bahanesini isim vermeden anlatsın.",
        spark: "Masa kimin olduğunu bulursa o kişi 1 {penalty} alır."
      },
      {
        tag: "Telefon sahnesi",
        prompt: "{player}, son çektiği zararsız fotoğrafı göstermeden 15 saniyede mahkeme delili gibi sunsun.",
        spark: "Masa fotoğrafın ne olduğunu tahmin eder."
      },
      {
        tag: "Most likely",
        prompt: "Masa, 'plansız tatile en hızlı ikna olacak kişi' için gizli oy versin. {player} sonucu açıklar.",
        spark: "Seçilen kişi kendini savunamazsa 1 {penalty}."
      },
      {
        tag: "Sıcak sandalye",
        prompt: "{player}, 30 saniye boyunca masadan gelen hızlı sorulara sadece tek kelimeyle cevap versin.",
        spark: "Açıklama yaparsa 1 {penalty}."
      },
      {
        tag: "Reklam arası",
        prompt: "{player}, masadan birini premium üyelik paketi gibi satmaya çalışsın.",
        spark: "Paket adı ve en saçma özelliği olmak zorunda."
      },
      {
        tag: "Gizli jüri",
        prompt: "Herkes {player} için bir kategori yazar: 'en iyi...', 'en kötü...', 'en şaşırtıcı...'. {player} birini seçip kabul konuşması yapar.",
        spark: "Konuşma 15 saniyeden kısa olursa 1 {penalty}."
      },
      {
        tag: "Kriz anı",
        prompt: "{player}, bu masanın WhatsApp grubunda çıkabilecek en saçma krizi tahmin etsin.",
        spark: "Masa krizin baş aktörünü oylasın."
      },
      {
        tag: "Sessiz sinema",
        prompt: "{player}, masadaki birinin en belirgin alışkanlığını konuşmadan canlandırsın.",
        spark: "Üç tahminde bulunamazlarsa {player} kazanır."
      },
      {
        tag: "Açık dosya",
        prompt: "{player}, kendisi hakkında 'bunu kabul ediyorum' dediği komik bir kusuru açıklasın.",
        spark: "Masa buna daha iyi bir isim bulur."
      },
      {
        tag: "Takas",
        prompt: "{player}, masadaki iki kişinin kişilik özelliğini bir geceliğine takas etse ne olurdu anlatsın.",
        spark: "İsim verilen iki kişi 5 saniyelik ortak sahne oynar."
      },
      {
        tag: "Duruşma",
        prompt: "{player}, bu masanın en geç cevap veren kişisini avukat gibi savunsun.",
        spark: "Masa ikna olmazsa savunulan kişi 1 {penalty}."
      },
      {
        tag: "Karar defteri",
        prompt: "Herkes {player} için bu gece uygulaması gereken küçük ama komik bir karar yazsın.",
        spark: "{player} birini seçer; üç tur boyunca geçerli olur."
      },
      {
        tag: "Final boss",
        prompt: "{player}, masanın en zor ikna edilen kişisine 20 saniyede hayali bir plan kabul ettirmeye çalışsın.",
        spark: "Plan kabul edilmezse {player} 1 {penalty}."
      }
    ],
    confession: [
      {
        tag: "Gerçek payı",
        prompt: "{player}, son zamanlarda 'bunu abartıyorum ama duramıyorum' dediği şeyi paylaşsın.",
        spark: "Masa bunun yüzde kaç gerçek olduğunu tahmin eder."
      },
      {
        tag: "Kırmızı çizgi",
        prompt: "{player}, arkadaşlıkta küçük görünen ama kendisi için büyük olan bir davranışı söylesin.",
        spark: "Bir kişi aynı çizgiye sahip olup olmadığını açıklar."
      },
      {
        tag: "Saklı gurur",
        prompt: "{player}, gizlice gurur duyduğu ama fazla anlatmadığı bir başarısını söylesin.",
        spark: "Masa 5 saniyelik alkış yapar; dalga geçmek yok."
      },
      {
        tag: "Yanlış anlaşılma",
        prompt: "{player}, insanlar tarafından en çok yanlış okunan huyunu anlatır.",
        spark: "Masa bu huyun artı tarafını bulmaya çalışır."
      },
      {
        tag: "Zor tercih",
        prompt: "{player}, 'rahatım bozulmasın' diye kaçırdığı bir fırsatı anlatır.",
        spark: "Masa o fırsata film adı koyar."
      },
      {
        tag: "İlk iz",
        prompt: "{player}, bu masadaki birinin onda bıraktığı en net ilk izlenimi söyler.",
        spark: "İsim vermek istemezse 1 {penalty}."
      },
      {
        tag: "Gölge huy",
        prompt: "{player}, stresliyken ortaya çıkan ve pek sevmediği bir huyunu açıklar.",
        spark: "Masa bu huya zararsız bir kod adı verir."
      },
      {
        tag: "Beklenti",
        prompt: "{player}, arkadaşlarından söylemeden beklediği ama çoğu zaman alamadığı bir şeyi paylaşır.",
        spark: "Cevap isteyen bir talep değil, dürüst bir gözlem olmalı."
      },
      {
        tag: "Sosyal yorgunluk",
        prompt: "{player}, kalabalıkta yorulduğunu belli etmeden yaptığı şeyi anlatır.",
        spark: "Masa bu davranışı kimde gördüğünü tahmin eder."
      },
      {
        tag: "Gizli rekabet",
        prompt: "{player}, kimseyle yarışmıyormuş gibi yapıp aslında yarıştığı bir alanı söyler.",
        spark: "Alan çok masumsa masa ikinci soru sorar."
      },
      {
        tag: "Dürüst not",
        prompt: "{player}, kendisine dışarıdan verilmesini istediği ama duymaktan çekindiği tavsiyeyi söyler.",
        spark: "Masa tavsiye vermeden sadece notu tekrar eder."
      },
      {
        tag: "Unutamadım",
        prompt: "{player}, küçük olduğu halde aklında kalan bir iltifatı veya eleştiriyi paylaşır.",
        spark: "Detay özel ise konu başlığı yeterli."
      },
      {
        tag: "Sahici soru",
        prompt: "{player}, masadan birine gerçekten merak ettiği tek soruyu sorar.",
        spark: "Karşı taraf pas geçebilir; pas geçerse soru soran 1 {penalty} almaz."
      },
      {
        tag: "Kapanış",
        prompt: "{player}, bu masadan ayrılırken insanların kendisiyle ilgili neyi hatırlamasını ister?",
        spark: "Masa tek kelimelik hatırlatma yazar."
      }
    ],
    tasks: [
      {
        tag: "Gerçek arama",
        prompt: "{player}, rahatsız olmayacak bir yakınını arayıp 10 saniyede 'çok kısa bir anket yapıyorum' desin ve en sevdiği atıştırmalığı sorsun.",
        spark: "Aramak istemezse aynı sahneyi masadan biriyle canlandırır ve 1 {penalty} alır."
      },
      {
        tag: "Taslak bomba",
        prompt: "{player}, bir arkadaşına göndermeden şu taslağı yazsın: 'Sence bende düzelmesi gereken en komik huy ne?'",
        spark: "Taslağı gösterirse tamam; göndermek tamamen isteğe bağlı."
      },
      {
        tag: "Story provası",
        prompt: "{player}, telefonu story çekiyormuş gibi tutup bu masayı 12 saniyede abartılı tanıtsın.",
        spark: "Video kaydetmek zorunlu değil. Enerji düşükse 1 {penalty}."
      },
      {
        tag: "Son arama",
        prompt: "{player}, son aradığı kişiye neden aradığını özel detaya girmeden tek cümleyle anlatsın.",
        spark: "Anlatmak istemezse masaya sahte ama inandırıcı bir sebep uydurur."
      },
      {
        tag: "Galeriden rol",
        prompt: "{player}, galerideki son zararsız fotoğrafın sahibiymiş gibi 15 saniye basın açıklaması yapsın.",
        spark: "Fotoğrafı göstermek zorunlu değil; konu başlığı yeterli."
      },
      {
        tag: "Kopyala yapıştır",
        prompt: "{player}, panosunda ne olduğunu söylemeden o içeriği reklam sloganı gibi tarif etsin.",
        spark: "Özel bir şeyse uydurabilir; masa yakalarsa 1 {penalty}."
      },
      {
        tag: "Sesli not",
        prompt: "{player}, kendine 'yarın bunu dinleyince neyi hatırlayayım?' diye 7 saniyelik sesli not kaydetsin.",
        spark: "Dinletirse tamam, sonra silebilir."
      },
      {
        tag: "Yanlış numara",
        prompt: "{player}, masadan birini yanlış numara sanıp 20 saniye çok ciddi konuşma yapsın.",
        spark: "Karşı taraf da rolünü bozmazsa ikisi de kurtulur."
      },
      {
        tag: "Uygulama mahkemesi",
        prompt: "{player}, ana ekranındaki bir uygulamayı suçlu ilan edip 20 saniye yargılasın.",
        spark: "Masa uygulamayı suçsuz bulursa {player} 1 {penalty}."
      },
      {
        tag: "Kilit ekranı",
        prompt: "{player}, kilit ekranı duvar kağıdını göstermeden neden onu seçmiş olabileceğini dramatik anlatır.",
        spark: "Gerçek sebebi söylemezse bile hikaye tutarlı olmalı."
      },
      {
        tag: "Emoji mahkumu",
        prompt: "{player}, 30 saniye boyunca sadece son kullandığı 3 emojinin ruh haliyle konuşur.",
        spark: "Normal konuşursa 1 {penalty}."
      },
      {
        tag: "Canlı yayın krizi",
        prompt: "{player}, yanlışlıkla canlı yayına girmiş gibi 15 saniye paniklemeden durumu toparlasın.",
        spark: "Masa 'inandık' demezse 1 {penalty}."
      },
      {
        tag: "DM editörü",
        prompt: "{player}, masadaki birine gönderilecek en risksiz ama en merak uyandıran tek cümlelik DM taslağı yazsın.",
        spark: "Okumazsa 1 {penalty}; göndermek yok."
      },
      {
        tag: "Kişi seç",
        prompt: "{player}, rehberinde güvenli gördüğü bir kişinin adını söylemeden ona hangi lakabı vereceğini açıklar.",
        spark: "Masa kişinin kim olduğunu tahmin etmeye çalışır."
      },
      {
        tag: "Ters sorgu",
        prompt: "{player}, masadan birini seçer. Seçilen kişi 20 saniye boyunca {player}'ı sorgular; {player} sadece 'evet', 'hayır', 'belki' der.",
        spark: "Başka kelime çıkarsa 1 {penalty}."
      },
      {
        tag: "Açık artırma",
        prompt: "{player}, telefonundaki şarj yüzdesini paha biçilemez bir ürün gibi açık artırmaya çıkarır.",
        spark: "En yüksek hayali teklifi veren bir sonraki oyuncuyu seçer."
      },
      {
        tag: "Dublaj",
        prompt: "{player}, masadaki iki kişinin sessizce yaptığı mini sahneye canlı dublaj yapar.",
        spark: "Sahne 15 saniye sürmeli."
      },
      {
        tag: "Cesur bildirim",
        prompt: "{player}, şu an gelmesini istemeyeceği ama zararsız bir bildirimi söyler.",
        spark: "Masa bildirime başlık atar."
      },
      {
        tag: "Mazeret üret",
        prompt: "{player}, yarın sabah geç kalırsa kullanacağı en absürt ama olası bahaneyi söyler.",
        spark: "Masa inandırıcı bulmazsa 1 {penalty}."
      },
      {
        tag: "Kamera arkası",
        prompt: "{player}, bu geceyi belgesel gibi anlatan 20 saniyelik dış ses yapar.",
        spark: "En az iki oyuncunun adı geçmeli."
      },
      {
        tag: "Kural tuzağı",
        prompt: "Masa {player} için iki tur sürecek bir mikro kural koyar: kelime, hareket veya yasak mimik.",
        spark: "Kural unutulursa {player} 1 {penalty}; kural haksızsa masa 1 toplu {penalty}."
      },
      {
        tag: "İkna odası",
        prompt: "{player}, seçtiği bir kişiyi 20 saniyede telefonunu 5 dakika masadan uzak tutmaya ikna etmeye çalışır.",
        spark: "Kabul edilirse seçilen kişi alkış alır; olmazsa {player} 1 {penalty}."
      },
      {
        tag: "Rehber ruleti",
        prompt: "{player}, rehberinden rastgele bir harf seçsin ve o harfle başlayan birini niye aramayacağını komikçe anlatsın.",
        spark: "İsim göstermek yok; sadece hikaye."
      },
      {
        tag: "Zor final",
        prompt: "{player}, masadaki herkes için tek tek birer 'bu kişiyi şu yüzden partiye çağırırsın' cümlesi kursun.",
        spark: "Birini unutursa 1 {penalty}."
      }
    ],
    truthdare: [
      {
        tag: "Telefon kilidi",
        prompt: "Doğruluk: {player}, telefonunu en çok hangi durumda saklama ihtiyacı duyarsın?\nCesaret: Kilit ekranını göstermeden 10 saniye savun.",
        spark: "Özel içerik göstermek zorunlu değil."
      },
      {
        tag: "Riskli oy",
        prompt: "Doğruluk: Masa, {player} için 'en beklenmedik huyu' oylar; {player} kabul eder ya da reddeder.\nCesaret: O huyu 12 saniye canlandır.",
        spark: "Reddedersen 1 {penalty}."
      },
      {
        tag: "Son mesaj",
        prompt: "Doğruluk: {player}, son mesajındaki duyguyu tek kelimeyle söyler.\nCesaret: Aynı duyguya sahip sahte bir mesaj taslağı yazar.",
        spark: "Mesajın içeriğini okumak yok."
      },
      {
        tag: "İtiraf turu",
        prompt: "Doğruluk: {player}, bu masada birinin seni şaşırttığı bir anı anlat.\nCesaret: O kişiye 15 saniyelik ödül konuşması yap.",
        spark: "İsim yoksa 1 {penalty}."
      },
      {
        tag: "Plan bozucu",
        prompt: "Doğruluk: {player}, en sık iptal etmek istediği sosyal plan türünü söyler.\nCesaret: O planı iptal etmeden kaçış konuşması yap.",
        spark: "Masa inandırıcı bulursa kurtuldun."
      },
      {
        tag: "Kendine not",
        prompt: "Doğruluk: {player}, kendisine vermesi gereken ama ertelediği tavsiyeyi söyler.\nCesaret: Bu tavsiyeyi notlar uygulamasına tek cümle yaz.",
        spark: "Notu kaydetmek zorunlu değil."
      },
      {
        tag: "Sosyal medya",
        prompt: "Doğruluk: {player}, sosyal medyada en çok neye gereksiz takıldığını anlatır.\nCesaret: Takıldığı şeyi influencer gibi savunur.",
        spark: "Savunma 15 saniye."
      },
      {
        tag: "Sert seçim",
        prompt: "Doğruluk: {player}, bu masada kriz anında kimi arardı?\nCesaret: O kişiye gerçek arama yapmadan kriz anonsu prova et.",
        spark: "Seçilen kişi yardımı kabul etmezse {player} 1 {penalty}."
      },
      {
        tag: "Açık hedef",
        prompt: "Doğruluk: {player}, bu yıl bitmeden yapmak istediği ama kimseye söylemediği bir şeyi paylaşır.\nCesaret: Masa ona 10 saniyelik geri sayım motivasyonu yapar, {player} hedefi ilan eder.",
        spark: "Hedef çok belirsizse takip sorusu gelir."
      },
      {
        tag: "Utanç barajı",
        prompt: "Doğruluk: {player}, anlatınca güldüğü bir küçük rezilliği paylaşır.\nCesaret: O anı ağır dram sahnesi gibi oynar.",
        spark: "Dram ciddiyeti bozulursa 1 {penalty}."
      },
      {
        tag: "Güven testi",
        prompt: "Doğruluk: {player}, şifresini değil ama telefonunu kime 2 dakika emanet edebileceğini söyler.\nCesaret: Seçtiği kişi {player} için güvenilirlik referansı verir.",
        spark: "Kimseyi seçmezse 1 {penalty}."
      },
      {
        tag: "Pas bedeli",
        prompt: "Doğruluk: {player}, cevaplamak istemediği soru türünü söyler.\nCesaret: Bu sınırı anayasa maddesi gibi okur.",
        spark: "Sınır geçerli; oyun sınırı zorlamaz."
      },
      {
        tag: "Grup kararı",
        prompt: "Doğruluk: Masa {player} için 'en olası gelecek skandalı' seçer, {player} savunma yapar.\nCesaret: Savunmayı 20 saniye basın toplantısı gibi yap.",
        spark: "Savunma zayıfsa 1 {penalty}."
      },
      {
        tag: "Çift seçenek",
        prompt: "Doğruluk: {player}, masadaki en iyi rol yapan kişiyi seçer.\nCesaret: O kişiyle 15 saniyelik sahte kavga oynar.",
        spark: "Kavga komik ve güvenli kalmalı."
      },
      {
        tag: "Ayna",
        prompt: "Doğruluk: {player}, insanlarda hızlı fark ettiği ama kendinde geç fark ettiği bir huyu söyler.\nCesaret: Bu huyu telefon kamerasına bakmadan itiraf eder gibi canlandır.",
        spark: "Kamera kaydı yok; sadece rol."
      },
      {
        tag: "Kapanış zor",
        prompt: "Doğruluk: {player}, bu masada senden beklenmeyen bir dürüst cevap ver.\nCesaret: Masanın seçtiği kişiye 12 saniyelik beklenmedik iltifat et.",
        spark: "Klişe yasak."
      }
    ],
    couples: [
      {
        tag: "Tahmin zor",
        prompt: "{player}, seçtiği kişinin son zamanlarda içinden en çok kurduğu cümleyi tahmin etsin.",
        spark: "Karşı taraf yakınlığı 1-5 puanlar."
      },
      {
        tag: "Mini söz",
        prompt: "İki kişi aynı anda 'beni en hızlı sakinleştiren şey...' cümlesini tamamlar.",
        spark: "Cevaplar benzerse ikili kazanır."
      },
      {
        tag: "Mesaj provası",
        prompt: "{player}, seçtiği kişiye göndermeden gününü güzelleştirecek tek satırlık mesaj yazar.",
        spark: "Okunursa tamam, göndermek isteğe bağlı."
      },
      {
        tag: "Yanlış tür",
        prompt: "İki kişi ilk buluşma/ilk tanışma anını korku filmi fragmanı gibi yeniden oynar.",
        spark: "Masa türü hissederse başarı."
      },
      {
        tag: "Saklı detay",
        prompt: "{player}, seçtiği kişide sevdiği ama daha önce söylemediği küçük bir detayı söyler.",
        spark: "Detay gerçek olmalı."
      },
      {
        tag: "Plan testi",
        prompt: "{player}, sadece 30 dakika süren ama unutulmaz olacak bir plan kurar.",
        spark: "Karşı taraf plana evet/hayır ve sebep verir."
      },
      {
        tag: "Denge",
        prompt: "{player}, ilişkide veya yakın arkadaşlıkta en çok ihtiyaç duyduğu alanı tek cümleyle söyler.",
        spark: "Masa yorum yapmaz, sadece dinler."
      },
      {
        tag: "Komik kriz",
        prompt: "İki kişi birlikte evde kaybolan bir eşyayı bulamama krizini 20 saniye oynar.",
        spark: "Eşya masadan seçilir."
      }
    ]
  },
  digital: {
    tell: [
      { word: "Telefon", forbidden: ["arama", "mesaj", "ekran", "şarj"] },
      { word: "Kahve", forbidden: ["fincan", "kafe", "uyku", "çekirdek"] },
      { word: "Bisiklet", forbidden: ["pedal", "tekerlek", "sürmek", "zincir"] },
      { word: "Şemsiye", forbidden: ["yağmur", "açmak", "ıslanmak", "gölge"] },
      { word: "Anahtar", forbidden: ["kapı", "kilit", "açmak", "ev"] },
      { word: "Kütüphane", forbidden: ["kitap", "sessiz", "okumak", "raf"] },
      { word: "Havalimanı", forbidden: ["uçak", "pasaport", "bilet", "valiz"] },
      { word: "Müze", forbidden: ["eser", "tarih", "tablo", "gezi"] },
      { word: "Restoran", forbidden: ["yemek", "garson", "menü", "masa"] },
      { word: "Sinema", forbidden: ["film", "perde", "bilet", "patlamış mısır"] },
      { word: "Tiyatro", forbidden: ["sahne", "oyuncu", "perde", "alkış"] },
      { word: "Stadyum", forbidden: ["maç", "tribün", "futbol", "taraftar"] },
      { word: "Hastane", forbidden: ["doktor", "hasta", "hemşire", "ilaç"] },
      { word: "Okul", forbidden: ["öğrenci", "öğretmen", "ders", "sınav"] },
      { word: "Otel", forbidden: ["oda", "resepsiyon", "tatil", "anahtar"] },
      { word: "Tren", forbidden: ["ray", "vagon", "istasyon", "yolcu"] },
      { word: "Köprü", forbidden: ["geçmek", "nehir", "bağlamak", "yol"] },
      { word: "Harita", forbidden: ["yol", "ülke", "konum", "pusula"] },
      { word: "Pusula", forbidden: ["kuzey", "yön", "ibare", "harita"] },
      { word: "Takvim", forbidden: ["gün", "ay", "yıl", "tarih"] },
      { word: "Saat", forbidden: ["zaman", "dakika", "kol", "alarm"] },
      { word: "Buzdolabı", forbidden: ["soğuk", "mutfak", "yiyecek", "kapak"] },
      { word: "Çamaşır Makinesi", forbidden: ["kıyafet", "yıkamak", "deterjan", "su"] },
      { word: "Gözlük", forbidden: ["cam", "görmek", "numara", "takmak"] },
      { word: "Ayakkabı", forbidden: ["giyinmek", "ayak", "bağcık", "taban"] },
      { word: "Bavul", forbidden: ["valiz", "seyahat", "eşya", "tatil"] },
      { word: "Merdiven", forbidden: ["basamak", "çıkmak", "inmek", "kat"] },
      { word: "Kamera", forbidden: ["fotoğraf", "video", "çekmek", "lens"] },
      { word: "Piyano", forbidden: ["tuş", "müzik", "çalmak", "nota"] },
      { word: "Gitar", forbidden: ["tel", "müzik", "çalmak", "akor"] },
      { word: "Satranç", forbidden: ["şah", "mat", "tahta", "vezir"] },
      { word: "Basketbol", forbidden: ["top", "pota", "smaç", "saha"] },
      { word: "Futbol", forbidden: ["top", "gol", "kaleci", "maç"] },
      { word: "Yüzme", forbidden: ["havuz", "su", "kulvar", "deniz"] },
      { word: "Kamp", forbidden: ["çadır", "orman", "ateş", "uyku tulumu"] },
      { word: "Piknik", forbidden: ["sepet", "örtü", "park", "yemek"] },
      { word: "Deniz", forbidden: ["su", "dalga", "plaj", "tuz"] },
      { word: "Dağ", forbidden: ["yüksek", "tırmanmak", "zirve", "kar"] },
      { word: "Orman", forbidden: ["ağaç", "yeşil", "doğa", "yürüyüş"] },
      { word: "Çöl", forbidden: ["kum", "sıcak", "susuz", "deve"] },
      { word: "Yanardağ", forbidden: ["lav", "patlamak", "dağ", "ateş"] },
      { word: "Güneş", forbidden: ["ışık", "sıcak", "gündüz", "yıldız"] },
      { word: "Ay", forbidden: ["gece", "uydu", "dünya", "dolunay"] },
      { word: "Yıldız", forbidden: ["gökyüzü", "gece", "parlamak", "uzay"] },
      { word: "Yağmur", forbidden: ["su", "bulut", "ıslanmak", "damla"] },
      { word: "Kar", forbidden: ["beyaz", "kış", "soğuk", "yağmak"] },
      { word: "Rüzgar", forbidden: ["esmek", "hava", "yel", "fırtına"] },
      { word: "Gökkuşağı", forbidden: ["renk", "yağmur", "güneş", "gökyüzü"] },
      { word: "İstanbul", forbidden: ["Boğaz", "Türkiye", "şehir", "köprü"] },
      { word: "Paris", forbidden: ["Fransa", "Eyfel", "şehir", "romantik"] },
      { word: "Piramit", forbidden: ["Mısır", "üçgen", "firavun", "antik"] },
      { word: "Eyfel Kulesi", forbidden: ["Paris", "demir", "Fransa", "turist"] },
      { word: "Pizza", forbidden: ["peynir", "hamur", "İtalya", "dilim"] },
      { word: "Dondurma", forbidden: ["soğuk", "külah", "tatlı", "erimek"] },
      { word: "Çikolata", forbidden: ["kakao", "tatlı", "sütlü", "bitter"] },
      { word: "Zeytin", forbidden: ["yağ", "kahvaltı", "ağaç", "siyah"] },
      { word: "Bal", forbidden: ["arı", "tatlı", "petek", "çiçek"] },
      { word: "Kitap", forbidden: ["okumak", "sayfa", "yazar", "kapak"] },
      { word: "Gazete", forbidden: ["haber", "kağıt", "okumak", "manşet"] },
      { word: "Mektup", forbidden: ["yazmak", "zarf", "posta", "kağıt"] },
      { word: "Robot", forbidden: ["makine", "insan", "teknoloji", "yapay"] },
      { word: "İnternet", forbidden: ["site", "online", "bağlantı", "arama"] },
      { word: "Uzay", forbidden: ["gezegen", "yıldız", "astronot", "roket"] },
      { word: "Dünya", forbidden: ["gezegen", "insan", "güneş", "yuvarlak"] },
      { word: "Okyanus", forbidden: ["deniz", "su", "büyük", "balina"] }
    ],
    guess: [
      {
        question: "Dünya'nın en büyük okyanusu hangisidir?",
        hint: "Asya ile Amerika arasında çok geniş bir alan kaplar.",
        answer: "Pasifik Okyanusu"
      },
      {
        question: "İnsan vücudundaki en büyük organ hangisidir?",
        hint: "Dış yüzeyimizi kaplar.",
        answer: "Deri"
      },
      {
        question: "Mona Lisa tablosu bugün hangi müzededir?",
        hint: "Paris'teki çok ünlü müze.",
        answer: "Louvre Müzesi"
      },
      {
        question: "Güneş Sistemi'nin en büyük gezegeni hangisidir?",
        hint: "Büyük kırmızı lekesiyle bilinir.",
        answer: "Jüpiter"
      },
      {
        question: "Kızıl Gezegen olarak bilinen gezegen hangisidir?",
        hint: "Toprağındaki demir oksit nedeniyle kırmızı görünür.",
        answer: "Mars"
      },
      {
        question: "Dünya'ya en yakın yıldız hangisidir?",
        hint: "Gündüz gökyüzünde gördüğümüz yıldız.",
        answer: "Güneş"
      },
      {
        question: "Bir ışık yılı neyi ölçmek için kullanılır?",
        hint: "Zaman gibi görünür ama uzayda başka bir şeyi anlatır.",
        answer: "Mesafe"
      },
      {
        question: "Satrançta en güçlü taş hangisidir?",
        hint: "Hem düz hem çapraz ilerleyebilir.",
        answer: "Vezir"
      },
      {
        question: "Olimpiyat bayrağında kaç halka vardır?",
        hint: "Kıtaları temsil eden renkli halkalar.",
        answer: "5"
      },
      {
        question: "Türkiye Cumhuriyeti hangi yıl ilan edildi?",
        hint: "29 Ekim tarihiyle bilinir.",
        answer: "1923"
      },
      {
        question: "İstanbul'un fethi hangi yılda gerçekleşti?",
        hint: "Orta Çağ'ın kapanışıyla ilişkilendirilir.",
        answer: "1453"
      },
      {
        question: "Türkiye'nin en yüksek dağı hangisidir?",
        hint: "Doğu Anadolu'dadır.",
        answer: "Ağrı Dağı"
      },
      {
        question: "DNA'nın açılımında hangi asit adı geçer?",
        hint: "Kalıtsal bilgiyi taşıyan molekül.",
        answer: "Deoksiribonükleik asit"
      },
      {
        question: "Bitkiler fotosentez yaparken havadan en çok hangi gazı alır?",
        hint: "Sera gazı olarak da bilinir.",
        answer: "Karbondioksit"
      },
      {
        question: "Atmosferde en fazla bulunan gaz hangisidir?",
        hint: "Oksijenden daha fazladır.",
        answer: "Azot"
      },
      {
        question: "En küçük asal sayı kaçtır?",
        hint: "Tek çift asal sayıdır.",
        answer: "2"
      },
      {
        question: "Bir düzine kaç adettir?",
        hint: "Yumurta paketlerinde sık duyulur.",
        answer: "12"
      },
      {
        question: "Bir byte kaç bitten oluşur?",
        hint: "Bilgisayar temel ölçülerinden biridir.",
        answer: "8 bit"
      },
      {
        question: "Periyodik tabloda Fe sembolü hangi elemente aittir?",
        hint: "Paslanmayla da akla gelir.",
        answer: "Demir"
      },
      {
        question: "Periyodik tabloda Au sembolü hangi elemente aittir?",
        hint: "Takı ve yatırım denince akla gelir.",
        answer: "Altın"
      },
      {
        question: "Oda sıcaklığında sıvı halde bulunan metal hangisidir?",
        hint: "Eski termometrelerde kullanılırdı.",
        answer: "Cıva"
      },
      {
        question: "İnsülin hormonunu hangi organ üretir?",
        hint: "Kan şekeriyle ilişkilidir.",
        answer: "Pankreas"
      },
      {
        question: "İnsan kalbi kaç odacıktan oluşur?",
        hint: "İki kulakçık ve iki karıncık vardır.",
        answer: "4"
      },
      {
        question: "Su deniz seviyesinde kaç derecede donar?",
        hint: "Celsius ölçeğinde başlangıç noktası.",
        answer: "0 derece"
      },
      {
        question: "Ses hangi ortamda yayılmaz?",
        hint: "Uzayda bu yüzden ses duyulmaz.",
        answer: "Boşluk"
      },
      {
        question: "Dünya kendi ekseni etrafındaki dönüşünü yaklaşık kaç saatte tamamlar?",
        hint: "Bir günün uzunluğudur.",
        answer: "24 saat"
      },
      {
        question: "Dünya'nın doğal uydusu hangisidir?",
        hint: "Geceleri evreleri görülür.",
        answer: "Ay"
      },
      {
        question: "Halkalarıyla en çok bilinen gezegen hangisidir?",
        hint: "Güneş Sistemi'nin gaz devlerinden biridir.",
        answer: "Satürn"
      },
      {
        question: "Everest Dağı hangi dağ sırasındadır?",
        hint: "Asya'daki en yüksek dağ sistemi.",
        answer: "Himalayalar"
      },
      {
        question: "Kilimanjaro Dağı hangi kıtadadır?",
        hint: "Tanzanya'da yer alır.",
        answer: "Afrika"
      },
      {
        question: "Dünyanın en büyük sıcak çölü hangisidir?",
        hint: "Kuzey Afrika'dadır.",
        answer: "Sahra Çölü"
      },
      {
        question: "Dünyanın en geniş çölü aslında hangisidir?",
        hint: "Soğuk bir çöldür.",
        answer: "Antarktika"
      },
      {
        question: "En büyük memeli hayvan hangisidir?",
        hint: "Okyanusta yaşar.",
        answer: "Mavi balina"
      },
      {
        question: "En hızlı kara hayvanı hangisidir?",
        hint: "Kısa mesafede çok hızlı koşar.",
        answer: "Çita"
      },
      {
        question: "Kutup ışıklarının bilimsel adı nedir?",
        hint: "Aurora borealis ve australis olarak iki türü vardır.",
        answer: "Aurora"
      },
      {
        question: "Yeşil bitkilerde fotosentezle ilişkilendirilen pigment hangisidir?",
        hint: "Yapraklara yeşil rengini verir.",
        answer: "Klorofil"
      },
      {
        question: "Görelilik teorisiyle tanınan bilim insanı kimdir?",
        hint: "E = mc² formülüyle de bilinir.",
        answer: "Albert Einstein"
      },
      {
        question: "Radyoaktivite çalışmalarıyla iki Nobel alan bilim insanı kimdir?",
        hint: "Polonyalı-Fransız bir bilim insanı.",
        answer: "Marie Curie"
      },
      {
        question: "Telefonun icadıyla en çok ilişkilendirilen kişi kimdir?",
        hint: "Bell soyadıyla bilinir.",
        answer: "Alexander Graham Bell"
      },
      {
        question: "Yıldızlı Gece tablosunu kim yaptı?",
        hint: "Hollandalı post-empresyonist ressam.",
        answer: "Vincent van Gogh"
      },
      {
        question: "Guernica tablosu hangi ressama aittir?",
        hint: "Kübizm akımıyla özdeşleşmiştir.",
        answer: "Pablo Picasso"
      },
      {
        question: "Hamlet eserini kim yazdı?",
        hint: "İngiliz edebiyatının en ünlü oyun yazarlarından.",
        answer: "William Shakespeare"
      },
      {
        question: "Piyanoda standart olarak kaç tuş bulunur?",
        hint: "Modern konser piyanolarında kabul edilen sayı.",
        answer: "88"
      },
      {
        question: "Japonya'nın başkenti neresidir?",
        hint: "Dünyanın en kalabalık metropollerinden biridir.",
        answer: "Tokyo"
      },
      {
        question: "Kanada'nın başkenti neresidir?",
        hint: "Toronto veya Vancouver değildir.",
        answer: "Ottawa"
      },
      {
        question: "Avustralya'nın başkenti neresidir?",
        hint: "Sydney değil.",
        answer: "Canberra"
      },
      {
        question: "Güney Amerika'da Portekizce konuşulan büyük ülke hangisidir?",
        hint: "Rio de Janeiro ve Amazon ile bilinir.",
        answer: "Brezilya"
      },
      {
        question: "Roma rakamlarında L kaç sayısını temsil eder?",
        hint: "C'nin yarısıdır.",
        answer: "50"
      },
      {
        question: "Roma rakamlarında C kaç sayısını temsil eder?",
        hint: "Yüzyıl kelimesiyle de akla gelir.",
        answer: "100"
      },
      {
        question: "Bir üçgenin iç açıları toplamı kaç derecedir?",
        hint: "Geometrinin temel bilgilerinden.",
        answer: "180 derece"
      },
      {
        question: "Gökkuşağında geleneksel olarak kaç renk sayılır?",
        hint: "Kırmızıdan mora uzanır.",
        answer: "7"
      },
      {
        question: "Pusula ibresi genellikle hangi yönü gösterir?",
        hint: "Haritaların üst tarafı çoğunlukla bu yöndür.",
        answer: "Kuzey"
      },
      {
        question: "Bumerang hangi kıtanın yerli kültürüyle özdeşleşmiştir?",
        hint: "Kangurularla da bilinen kıta.",
        answer: "Avustralya"
      },
      {
        question: "Lale ve yel değirmenleriyle bilinen Avrupa ülkesi hangisidir?",
        hint: "Amsterdam bu ülkededir.",
        answer: "Hollanda"
      },
      {
        question: "Sümerler en çok hangi büyük kültürel buluşla anılır?",
        hint: "Tarihin başlamasıyla ilişkilendirilir.",
        answer: "Yazı"
      },
      {
        question: "Antik Mısır'da krallara verilen unvan nedir?",
        hint: "Piramitlerle birlikte anılır.",
        answer: "Firavun"
      },
      {
        question: "Ornitorenk hangi ilginç özelliğiyle bilinir?",
        hint: "Memeli olmasına rağmen çoğu memeliden farklıdır.",
        answer: "Yumurtlaması"
      },
      {
        question: "Venüs gezegeni halk arasında hangi adlarla da bilinir?",
        hint: "Günün iki farklı zamanında parlak görünür.",
        answer: "Sabah yıldızı / Akşam yıldızı"
      },
      {
        question: "Dünya'nın katı dış katmanına ne denir?",
        hint: "Üzerinde yaşadığımız ince tabakadır.",
        answer: "Yer kabuğu"
      },
      {
        question: "Bir yılda kaç mevsim vardır?",
        hint: "İlkbahar, yaz, sonbahar ve kış.",
        answer: "4"
      },
      {
        question: "Morse alfabesinde iletişim hangi iki temel işaretle yapılır?",
        hint: "Kısa ve uzun sinyaller.",
        answer: "Nokta ve çizgi"
      },
      {
        question: "Gemi yönlendirmekte kullanılan tekerlek veya düzeneğe ne denir?",
        hint: "Kaptanın elindedir.",
        answer: "Dümen"
      },
      {
        question: "İnsanlarda kan grubu sisteminde evrensel alıcı olarak bilinen grup hangisidir?",
        hint: "AB ve Rh pozitif kombinasyonu.",
        answer: "AB Rh+"
      },
      {
        question: "Dünya üzerinde iki kıtaya yayılan şehir örneği olarak en çok hangi şehir verilir?",
        hint: "Boğazıyla ünlüdür.",
        answer: "İstanbul"
      }
    ],
    whoami: [
      "Mustafa Kemal Atatürk", "Fatih Sultan Mehmet", "Mimar Sinan", "Mevlana", "Nasreddin Hoca",
      "Evliya Çelebi", "Piri Reis", "Sabiha Gökçen", "Aziz Sancar", "Orhan Pamuk",
      "Yaşar Kemal", "Nazım Hikmet", "Barış Manço", "Zeki Müren", "Sezen Aksu",
      "Tarkan", "Ajda Pekkan", "Kemal Sunal", "Şener Şen", "Münir Özkul",
      "Haluk Bilginer", "Cem Yılmaz", "Ara Güler", "Nuri Bilge Ceylan", "Sertab Erener",
      "Albert Einstein", "Marie Curie", "Nikola Tesla", "Leonardo da Vinci", "Galileo Galilei",
      "Isaac Newton", "Charles Darwin", "Ada Lovelace", "Alan Turing", "Stephen Hawking",
      "William Shakespeare", "Mozart", "Beethoven", "Frida Kahlo", "Pablo Picasso",
      "Cleopatra", "Julius Caesar", "Napolyon Bonapart", "Mahatma Gandhi", "Nelson Mandela",
      "Martin Luther King Jr.", "Amelia Earhart", "Charlie Chaplin", "Michael Jackson", "Madonna",
      "Elvis Presley", "Freddie Mercury", "Beyonce", "Lionel Messi", "Cristiano Ronaldo",
      "Muhammed Ali", "Usain Bolt", "Serena Williams", "Michael Jordan", "Harry Potter",
      "Hermione Granger", "Sherlock Holmes", "Darth Vader", "Yoda", "Frodo Baggins",
      "Gandalf", "Batman", "Superman", "Spider-Man", "Iron Man",
      "Wonder Woman", "Joker", "Elsa", "Simba", "Shrek",
      "Mickey Mouse", "Bugs Bunny", "SüngerBob", "Homer Simpson", "Pikachu",
      "Mario", "Lara Croft", "Wednesday Addams", "Walter White", "Michael Scott"
    ]
  }
};

const easyTellWords = new Set([
  "Telefon", "Kahve", "Bisiklet", "Şemsiye", "Anahtar", "Saat", "Gözlük", "Ayakkabı",
  "Pizza", "Dondurma", "Çikolata", "Kitap", "Futbol", "Deniz", "Güneş", "Ay",
  "Yağmur", "Kar", "Bal", "Okul", "Kamera", "Gitar"
]);

const hardTellWords = new Set([
  "Kütüphane", "Havalimanı", "Tiyatro", "Stadyum", "Harita", "Pusula", "Buzdolabı",
  "Çamaşır Makinesi", "Satranç", "Yanardağ", "Gökkuşağı", "Piramit", "Eyfel Kulesi",
  "Zeytin", "Mektup", "Robot", "İnternet", "Uzay", "Okyanus"
]);

const advancedTellCards = [
  { word: "Yer Çekimi", forbidden: ["düşmek", "Dünya", "ağırlık", "Newton"], difficulty: "hard" },
  { word: "Fotosentez", forbidden: ["bitki", "güneş", "oksijen", "yeşil"], difficulty: "hard" },
  { word: "Demokrasi", forbidden: ["oy", "seçim", "halk", "yönetim"], difficulty: "hard" },
  { word: "Enflasyon", forbidden: ["para", "zam", "fiyat", "ekonomi"], difficulty: "hard" },
  { word: "Arkeoloji", forbidden: ["kazı", "tarih", "antik", "eser"], difficulty: "hard" },
  { word: "Ekvator", forbidden: ["Dünya", "çizgi", "sıcak", "orta"], difficulty: "hard" },
  { word: "Atmosfer", forbidden: ["hava", "Dünya", "gaz", "katman"], difficulty: "hard" },
  { word: "Mıknatıs", forbidden: ["metal", "çekmek", "kutup", "demir"], difficulty: "hard" },
  { word: "Hafıza", forbidden: ["bellek", "hatırlamak", "unutmak", "zihin"], difficulty: "hard" },
  { word: "Evrim", forbidden: ["Darwin", "canlı", "değişim", "tür"], difficulty: "hard" }
];

contentPacks.digital.tell = [
  ...contentPacks.digital.tell.map((card) => ({
    ...card,
    difficulty: easyTellWords.has(card.word) ? "easy" : hardTellWords.has(card.word) ? "hard" : "medium"
  })),
  ...advancedTellCards
];

contentPacks.digital.guess = [
  { question: "Dünya'nın en büyük okyanusu olan Pasifik'in yaklaşık yüzölçümü kaç milyon km²'dir?", hint: "160 ile 170 milyon arasında.", answer: 165.25, unit: "milyon km²" },
  { question: "İnsan vücudunda yetişkinlerde yaklaşık kaç kemik bulunur?", hint: "200'ün biraz üstü.", answer: 206, unit: "kemik" },
  { question: "Modern piyanoda standart olarak kaç tuş bulunur?", hint: "80'lerin sonu.", answer: 88, unit: "tuş" },
  { question: "Bir satranç tahtasında kaç kare vardır?", hint: "8 x 8.", answer: 64, unit: "kare" },
  { question: "Olimpiyat bayrağında kaç halka vardır?", hint: "Kıtaları temsil eder.", answer: 5, unit: "halka" },
  { question: "Bir maratonun resmi uzunluğu kaç kilometredir?", hint: "42'den biraz fazla.", answer: 42.195, unit: "km" },
  { question: "Işığın boşluktaki hızı yaklaşık kaç km/s'dir?", hint: "300 bine çok yakın.", answer: 299792, unit: "km/s" },
  { question: "Ay'ın Dünya'ya ortalama uzaklığı yaklaşık kaç kilometredir?", hint: "384 bin civarı.", answer: 384400, unit: "km" },
  { question: "Everest Dağı'nın yüksekliği yaklaşık kaç metredir?", hint: "8.8 kilometre civarı.", answer: 8849, unit: "metre" },
  { question: "Burj Khalifa'nın yüksekliği kaç metredir?", hint: "800 metrenin üstünde.", answer: 828, unit: "metre" },
  { question: "Eyfel Kulesi anteniyle birlikte yaklaşık kaç metredir?", hint: "300'ün biraz üstü.", answer: 330, unit: "metre" },
  { question: "Türkiye Cumhuriyeti hangi yıl ilan edildi?", hint: "29 Ekim.", answer: 1923, unit: "yıl" },
  { question: "İstanbul'un fethi hangi yılda gerçekleşti?", hint: "15. yüzyıl.", answer: 1453, unit: "yıl" },
  { question: "İlk insanlı Ay inişi hangi yılda gerçekleşti?", hint: "Apollo 11.", answer: 1969, unit: "yıl" },
  { question: "Titanic hangi yılda battı?", hint: "20. yüzyılın başı.", answer: 1912, unit: "yıl" },
  { question: "Bir byte kaç bitten oluşur?", hint: "Bilgisayar temel ölçüsü.", answer: 8, unit: "bit" },
  { question: "Bir düzine kaç adettir?", hint: "Yumurta paketlerinde duyulur.", answer: 12, unit: "adet" },
  { question: "Türk alfabesinde kaç harf vardır?", hint: "Latin alfabesinden farklı harfler de içerir.", answer: 29, unit: "harf" },
  { question: "Güneş Sistemi'nde kaç gezegen vardır?", hint: "Plüton artık klasik gezegen sayılmaz.", answer: 8, unit: "gezegen" },
  { question: "Dünya kendi ekseni etrafında yaklaşık kaç saatte döner?", hint: "Bir gün.", answer: 24, unit: "saat" },
  { question: "Bir yıl yaklaşık kaç gündür?", hint: "Artık yıllar bu yüzden vardır.", answer: 365.25, unit: "gün" },
  { question: "Su deniz seviyesinde kaç derecede kaynar?", hint: "Celsius.", answer: 100, unit: "°C" },
  { question: "Su deniz seviyesinde kaç derecede donar?", hint: "Celsius.", answer: 0, unit: "°C" },
  { question: "Nötr suyun pH değeri kaçtır?", hint: "pH ölçeğinin ortası.", answer: 7, unit: "pH" },
  { question: "Periyodik tabloda bugün kaç onaylı element vardır?", hint: "100'ün üstünde.", answer: 118, unit: "element" },
  { question: "Altının atom numarası kaçtır?", hint: "Au.", answer: 79, unit: "atom numarası" },
  { question: "Oksijenin atom numarası kaçtır?", hint: "O.", answer: 8, unit: "atom numarası" },
  { question: "İnsan hücrelerinde normalde kaç kromozom bulunur?", hint: "23 çift.", answer: 46, unit: "kromozom" },
  { question: "İnsan kalbi kaç odacıktan oluşur?", hint: "İki kulakçık, iki karıncık.", answer: 4, unit: "odacık" },
  { question: "Bir futbol takımında sahada kaç oyuncu bulunur?", hint: "Kaleci dahil.", answer: 11, unit: "oyuncu" },
  { question: "Bir basketbol takımında sahada aynı anda kaç oyuncu bulunur?", hint: "Tek takım için.", answer: 5, unit: "oyuncu" },
  { question: "Voleybolda bir takım sahada kaç oyuncuyla oynar?", hint: "Salon voleybolu.", answer: 6, unit: "oyuncu" },
  { question: "Bir üçgenin iç açıları toplamı kaç derecedir?", hint: "Geometri klasiği.", answer: 180, unit: "derece" },
  { question: "Bir çember kaç derecedir?", hint: "Tam tur.", answer: 360, unit: "derece" },
  { question: "Roma rakamlarında L kaçtır?", hint: "C'nin yarısı.", answer: 50, unit: "" },
  { question: "Roma rakamlarında C kaçtır?", hint: "Yüzyıl kelimesiyle akılda kalır.", answer: 100, unit: "" },
  { question: "ABD'de kaç eyalet vardır?", hint: "Bayraktaki yıldız sayısı.", answer: 50, unit: "eyalet" },
  { question: "Dünyada geleneksel olarak kaç kıta sayılır?", hint: "Okul bilgisidir.", answer: 7, unit: "kıta" },
  { question: "Gökkuşağında geleneksel olarak kaç renk sayılır?", hint: "Kırmızıdan mora.", answer: 7, unit: "renk" },
  { question: "Bir tenis Grand Slam sezonunda kaç büyük turnuva vardır?", hint: "Avustralya, Fransa, Wimbledon, ABD.", answer: 4, unit: "turnuva" },
  { question: "Oscar Ödülleri ilk kez hangi yılda düzenlendi?", hint: "1920'lerin sonu.", answer: 1929, unit: "yıl" },
  { question: "İlk modern Olimpiyat Oyunları hangi yılda yapıldı?", hint: "Atina.", answer: 1896, unit: "yıl" },
  { question: "Mona Lisa'nın sergilendiği Louvre Müzesi'nin cam piramidi hangi yılda açıldı?", hint: "1980'lerin sonu.", answer: 1989, unit: "yıl" },
  { question: "İnternette HTTP'nin varsayılan port numarası kaçtır?", hint: "HTTPS 443'tür.", answer: 80, unit: "port" },
  { question: "İnternette HTTPS'nin varsayılan port numarası kaçtır?", hint: "HTTP 80'dir.", answer: 443, unit: "port" },
  { question: "Morse alfabesinde SOS işareti toplam kaç kısa/uzun sinyalden oluşur?", hint: "Üç kısa, üç uzun, üç kısa.", answer: 9, unit: "sinyal" },
  { question: "Bir zarın karşılıklı yüzlerindeki sayıların toplamı kaçtır?", hint: "Standart altı yüzlü zar.", answer: 7, unit: "" },
  { question: "Bir futbol maçının normal süresi kaç dakikadır?", hint: "Uzatmalar hariç.", answer: 90, unit: "dakika" },
  { question: "Bir dakikada kaç saniye vardır?", hint: "Temel zaman ölçüsü.", answer: 60, unit: "saniye" },
  { question: "Bir saatte kaç dakika vardır?", hint: "Akrep-yelkovan.", answer: 60, unit: "dakika" }
].map((card) => {
  const hardPhrases = [
    "Pasifik", "maraton", "Işığın", "Ay'ın", "Everest", "Burj", "Eyfel", "Periyodik",
    "Altının", "Oksijenin", "kromozom", "Oscar", "modern Olimpiyat", "Louvre",
    "HTTP", "HTTPS", "Morse"
  ];
  const easyPhrases = [
    "satranç", "Olimpiyat bayrağı", "Bir byte", "Bir düzine", "Türk alfabesi",
    "Güneş Sistemi", "Dünya kendi", "Su deniz", "Nötr su", "kalbi", "futbol",
    "basketbol", "Voleybolda", "Bir üçgen", "Bir çember", "Roma rakamlarında",
    "ABD", "kaç kıta", "Gökkuşağında", "zarın", "futbol maçının", "dakikada",
    "saatte"
  ];
  const difficulty = hardPhrases.some((phrase) => card.question.includes(phrase))
    ? "hard"
    : easyPhrases.some((phrase) => card.question.includes(phrase))
      ? "easy"
      : "medium";
  return { ...card, difficulty };
});

const whoAmIByDifficulty = {
  easy: [
    "Mustafa Kemal Atatürk", "Fatih Sultan Mehmet", "Mimar Sinan", "Nasreddin Hoca", "Barış Manço",
    "Kemal Sunal", "Şener Şen", "Münir Özkul", "Tarkan", "Sezen Aksu",
    "Ajda Pekkan", "Zeki Müren", "Cem Yılmaz", "Acun Ilıcalı", "Arda Turan",
    "Hidayet Türkoğlu", "Naim Süleymanoğlu", "Seda Sayan", "Kıvanç Tatlıtuğ", "Kenan İmirzalıoğlu",
    "Beren Saat", "Haluk Bilginer", "Şahan Gökbakar", "Ata Demirer", "Hadise",
    "Albert Einstein", "Leonardo da Vinci", "Michael Jackson", "Madonna", "Elvis Presley",
    "Freddie Mercury", "Beyonce", "Taylor Swift", "Cristiano Ronaldo", "Lionel Messi",
    "Muhammed Ali", "Michael Jordan", "Usain Bolt", "Harry Potter", "Hermione Granger",
    "Sherlock Holmes", "Batman", "Superman", "Spider-Man", "Iron Man",
    "Joker", "Elsa", "Shrek", "Mickey Mouse", "SüngerBob",
    "Pikachu", "Mario", "Darth Vader", "Yoda", "Homer Simpson"
  ],
  medium: [
    "Mevlana", "Evliya Çelebi", "Piri Reis", "Sabiha Gökçen", "Aziz Sancar",
    "Orhan Pamuk", "Yaşar Kemal", "Nazım Hikmet", "Ara Güler", "Nuri Bilge Ceylan",
    "Sertab Erener", "Gülse Birsel", "Demet Evgar", "Çağatay Ulusoy", "Can Yaman",
    "Engin Akyürek", "Tuba Büyüküstün", "Serenay Sarıkaya", "Mabel Matiz", "Duman",
    "Ceza", "Sagopa Kajmer", "Ezhel", "Edis", "Murat Boz",
    "Candan Erçetin", "Sıla", "Fazıl Say", "İbrahim Tatlıses", "Müslüm Gürses",
    "Marie Curie", "Nikola Tesla", "Isaac Newton", "Charles Darwin", "Stephen Hawking",
    "William Shakespeare", "Mozart", "Beethoven", "Frida Kahlo", "Pablo Picasso",
    "Cleopatra", "Julius Caesar", "Napolyon Bonapart", "Mahatma Gandhi", "Nelson Mandela",
    "Martin Luther King Jr.", "Charlie Chaplin", "Walt Disney", "Oprah Winfrey", "Lady Gaga",
    "Rihanna", "Adele", "Justin Bieber", "Tom Cruise", "Leonardo DiCaprio",
    "Keanu Reeves", "Johnny Depp", "Dwayne Johnson", "Angelina Jolie", "Brad Pitt",
    "Morgan Freeman", "Serena Williams", "LeBron James", "Kobe Bryant", "Roger Federer",
    "Rafael Nadal", "Lewis Hamilton", "Frodo Baggins", "Gandalf", "Wonder Woman",
    "Lara Croft", "Wednesday Addams", "Walter White", "Michael Scott", "Simba"
  ],
  hard: [
    "Cahit Arf", "Afet İnan", "Halide Edip Adıvar", "Sabahattin Ali", "Oğuz Atay",
    "Adile Naşit", "Tarık Akan", "Türkan Şoray", "Yılmaz Güney", "Metin Oktay",
    "Lefter Küçükandonyadis", "Süreyya Ayhan", "Neşet Ertaş", "Aşık Veysel", "Selda Bağcan",
    "Zülfü Livaneli", "MFÖ", "Barış Arduç", "Meryem Uzerli", "Bihter Ziyagil",
    "Polat Alemdar", "Kral Şakir", "Keloğlan", "Dede Korkut", "Hacivat",
    "Karagöz", "Ada Lovelace", "Alan Turing", "Galileo Galilei", "Aristoteles",
    "Sokrates", "Platon", "Vincent van Gogh", "Salvador Dali", "Andy Warhol",
    "Agatha Christie", "J.R.R. Tolkien", "George Orwell", "Jane Austen", "Virginia Woolf",
    "Amelia Earhart", "Malala Yousafzai", "Greta Thunberg", "Steve Jobs", "Bill Gates",
    "Elon Musk", "Mark Zuckerberg", "Jeff Bezos", "Barack Obama", "Queen Elizabeth II",
    "Princess Diana", "Marilyn Monroe", "Audrey Hepburn", "David Bowie", "Bob Marley",
    "Tupac Shakur", "Eminem", "Kanye West", "Ariana Grande", "Billie Eilish",
    "The Weeknd", "Shakira", "Neymar", "Kylian Mbappe", "Zinedine Zidane",
    "Diego Maradona", "Pele", "Naomi Osaka", "Tiger Woods", "Novak Djokovic",
    "Katniss Everdeen", "Indiana Jones", "Jack Sparrow", "Forrest Gump", "Rocky Balboa",
    "Vito Corleone", "Harley Quinn", "Loki", "Black Panther", "Deadpool",
    "Dumbledore", "Voldemort", "Daenerys Targaryen", "Jon Snow", "Eleven"
  ]
};

contentPacks.digital.whoami = Object.entries(whoAmIByDifficulty).flatMap(([difficulty, names]) =>
  names.map((name) => ({ name, difficulty }))
);
