# Abdi Party Box

Abdi Party Box, klasik Abdi kart görevlerini hızlı oynanan bir mobil parti oyununa dönüştürür. Proje bağımlılık indirmez; düz HTML, CSS ve JavaScript ile PWA olarak çalışır.

## Komutlar

```bash
npm run dev
npm run build
npm run preview
npm run mobile:build
```

- `npm run dev`: `src` klasörünü yerel sunucuda açar.
- `npm run build`: `src` içeriğini temiz bir `dist` klasörüne kopyalar.
- `npm run preview`: build çıktısını sunar.
- `npm run mobile:build`: PWA mobil çıktısını `dist` klasörüne hazırlar.

## Mobil

Bu sürüm PWA'dır. Android ve iOS'ta tarayıcıdan ana ekrana eklenince tam ekran uygulama gibi açılır, temel dosyaları offline cache'ler ve aynı `dist` çıktısı Capacitor paketlemeye hazırdır.

Gerçek APK/IPA paketleme gerektiğinde kullanılacak web klasörü `dist`, hazır uygulama kimliği ise `capacitor.config.json` içindedir.

## Araştırma notu

Abdi oyunu, yaygın anlatımlarda 52'lik iskambil destesiyle oynanan bir parti/içecek oyunudur. Oyuncular sırayla kart çeker; her kart değerinin kendine ait görevi vardır. Bu uyarlamada görevler korunur, fakat ceza kelimesi arayüzden `ceza`, `yudum` veya `shot` olarak değiştirilebilir.
