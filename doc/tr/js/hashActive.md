# hashActive.js

URL bağlantılarına ve görüntü alanı kaydırmasına dayalı olarak gezinme bağlantısı vurgulama

## default(link_li, cls)

Sayfa kaydırma konumuna ve URL bağlantı noktası değişikliklerine göre, o anda görünür olan alana karşılık gelen gezinme bağlantılarını otomatik olarak vurgulayın.

parametre:
- `link_li` : Gezinme bağlantısı DOM öğesi listesi
- `cls` : Etkin CSS sınıfı adı, varsayılan `"A"`

Dönüş değeri: Tüm dinleme temizleme işlevlerini iptal edin