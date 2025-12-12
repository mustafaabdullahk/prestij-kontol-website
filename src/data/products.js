// Product data for Prestij Kontrol website with full details
export const products = [
  {
    id: 'yuz-tanima',
    title: 'Yüz Tanıma Sistemleri',
    description: 'Biyometrik yüz okuma sistemleri ile belirli bölgelere giriş çıkışları kontrol altına alın. TRFACE ve UFACE serisi terminaller ile üst düzey güvenlik.',
    icon: '👤',
    image: '/images/products/uface_800.png',
    features: [
      'Yüzlerce farklı kişinin kaydı',
      'Saniyelik sürede tanıma',
      'Parmak izi ile birlikte kullanım',
      'Kolay ara yüz',
      'PDKS yazılımları ile entegrasyon'
    ],
    fullDescription: `Kurumsal işletmelerde, şirketlerde, devlet kurumlarında ve benzeri yerlerde güvenliğin sağlanması, giriş ve çıkışların kontrol altına alınması için biyometrik yüz okuma sistemleri kullanılır. Bu sistem sayesinde belirli bölgelere giriş çıkışların ya da belirli işlemlerin yapılması için kişilerin yüzünü okuyarak izinler verilir.`,
    usageAreas: [
      'Banka ve Finans Kurumları',
      'Büyük Şirket ve Holdingler',
      'Önemli Kamu Kurumları',
      'Fabrika ve Üretim Tesisleri',
      'Hastane ve Sağlık Kurumları'
    ],
    models: [
      {
        name: 'TRFACE 100',
        image: '/images/products/trface_100.png',
        description: 'Biometrik okuma terminali - yüz ve parmak izi tanıma',
        features: [
          'Yüzlerce farklı kişinin kaydı yapılabilir',
          'Kayıtlı yüzlerin saniyelik sürede tanıması',
          'Parmak izi gibi başka özelliklerle birlikte kullanılabilir',
          'Kullanımı kolay ara yüz',
          'Kısa sürede kurulum ve devreye alma'
        ]
      },
      {
        name: 'UFACE 800',
        image: '/images/products/uface_800.png',
        specsImage: '/images/products/uface_800_specs.png',
        description: 'Gelişmiş biyometrik okuma terminali - çoklu sistem desteği',
        features: [
          'Yüz okuma sistemi',
          'Kart okuma desteği',
          'Şifre ile giriş',
          'Parmak izi okuma',
          'Access kontrol ve PDKS entegrasyonu'
        ]
      }
    ]
  },
  {
    id: 'parmak-izi',
    title: 'Parmak İzi Sistemleri',
    description: 'Yüksek hassasiyetli parmak izi okuma sistemleri. Personel takip ve access kontrol için güvenilir biyometrik çözümler.',
    icon: '🔐',
    image: '/images/products/parmak_izi_k30.png',
    features: [
      'Yüksek hassasiyetli sensör',
      'Hızlı tanıma süresi',
      'Geniş kullanıcı kapasitesi',
      'Sahte parmak izi algılama',
      'Access kontrol entegrasyonu'
    ],
    fullDescription: `Parmak izi okuma sistemleri, personel takip ve güvenlik kontrolünde en yaygın kullanılan biyometrik yöntemlerden biridir. K30 serisi terminaller yüksek hassasiyetli sensörleri ile hızlı ve güvenilir tanıma sağlar.`,
    usageAreas: [
      'Ofis Giriş Kontrolü',
      'Fabrika Personel Takibi',
      'Depo ve Lojistik Merkezleri',
      'Eğitim Kurumları',
      'Spor Tesisleri'
    ],
    models: [
      {
        name: 'K30 Parmak İzi Okuyucu',
        image: '/images/products/parmak_izi_k30.png',
        description: 'Kompakt tasarımlı parmak izi okuyucu terminal',
        features: [
          'Optik parmak izi sensörü',
          'Geniş kullanıcı kapasitesi',
          'TCP/IP ve USB bağlantı',
          'Kolay kurulum ve kullanım',
          'PDKS yazılımı entegrasyonu'
        ]
      }
    ]
  },
  {
    id: 'turnike',
    title: 'Turnike Geçiş Sistemleri',
    description: 'Boy turnikeler ve bel turnikeleri ile güvenli geçiş kontrolü. Tripod ve tam boy turnike seçenekleri.',
    icon: '🚪',
    image: '/images/products/boy_turnike.png',
    features: [
      'Boy turnike sistemleri',
      'Tripod bel turnikeleri',
      'Kart ve biyometrik entegrasyon',
      'Çift yönlü geçiş kontrolü',
      'Acil durum açılma sistemi'
    ],
    fullDescription: `Turnike sistemleri bina ve tesis girişlerinde güvenli ve kontrollü geçiş sağlar. Boy turnikeler tam güvenlik gerektiren alanlarda, tripod turnikeler ise ofis ve bina girişlerinde tercih edilir.`,
    usageAreas: [
      'Fabrika Girişleri',
      'Metro ve Toplu Taşıma',
      'Stadyum ve Etkinlik Alanları',
      'Ofis Binaları',
      'Spor Salonları'
    ],
    specsImage: '/images/products/turnike_specs.png',
    models: [
      {
        name: 'Boy Turnike',
        image: '/images/products/boy_turnike.png',
        description: 'Tam boy turnike sistemi - maksimum güvenlik',
        features: [
          'Tam boy geçiş kontrolü',
          'Sağlam çelik konstrüksiyon',
          'Çift yönlü geçiş',
          'Acil durum modu',
          'LED gösterge ışıkları'
        ]
      },
      {
        name: 'Tansa LTD 303 AS Tripod Turnike',
        image: '/images/products/bel_turnike.png',
        description: 'Kompakt tripod turnike - ofis ve bina girişleri için ideal',
        features: [
          'Kompakt tasarım',
          'Paslanmaz çelik gövde',
          'Sessiz çalışma',
          'Kart okuyucu entegrasyonu',
          'Anti-panik özelliği'
        ]
      }
    ]
  },
  {
    id: 'bariyer',
    title: 'Oto Kontrol Bariyerleri',
    description: 'Araç giriş-çıkış kontrolü için otomatik bariyer sistemleri. Otopark ve güvenlik noktaları için ideal Magnetic marka bariyerler.',
    icon: '🚗',
    image: '/images/products/bariyer.jpg',
    specsImage: '/images/products/bariyer_specs.png',
    features: [
      'Otomatik açılma-kapanma',
      'Hızlı geçiş',
      'Güvenlik sensörleri',
      'Uzaktan kumanda',
      'Dayanıklı mekanik yapı'
    ],
    fullDescription: `Magnetic marka oto kontrol bariyerleri, araç giriş-çıkış noktalarında güvenli ve hızlı geçiş sağlar. Otopark, fabrika girişi, site girişi gibi alanlarda kullanılır.`,
    usageAreas: [
      'Otopark Girişleri',
      'Fabrika Araç Girişleri',
      'Site ve Rezidans Girişleri',
      'AVM Otoparkları',
      'Hastane Otoparkları'
    ],
    models: [
      {
        name: 'Magnetic MHTM Boom Gate',
        image: '/images/products/bariyer.jpg',
        description: 'Profesyonel araç bariyer sistemi',
        features: [
          'Otomatik açılma/kapanma',
          'Araç algılama sensörü',
          'LED uyarı ışıkları',
          'Uzaktan kumanda desteği',
          'Dayanıklı alüminyum kol'
        ]
      }
    ]
  },
  {
    id: 'bekci-kontrol',
    title: 'Bekçi Kontrol Saatleri',
    description: 'Aves Bekçi Tur Kontrol Sistemi ile güvenlik personelinin devriye kontrolü. USB okuyucu, kontrol noktaları ve bekçi tanıtıcıları.',
    icon: '🛡️',
    image: '/images/products/bekci_kontrol.jpg',
    features: [
      'C4128 USB okuyucu',
      '6 adet kontrol noktası',
      '3 adet bekçi tanıtıcısı',
      'Zaman damgalı kayıt',
      'Kolay raporlama'
    ],
    fullDescription: `Aves Bekçi Tur Kontrol Sistemi, güvenlik personelinin devriye turlarını takip etmek için kullanılır. Kontrol noktalarından geçiş bilgileri USB okuyucu ile bilgisayara aktarılır ve raporlanır.`,
    usageAreas: [
      'Fabrika ve Tesis Güvenliği',
      'Site ve Rezidans Güvenliği',
      'AVM Güvenliği',
      'Okul ve Kampüs Güvenliği',
      'Hastane Güvenliği'
    ],
    setContents: [
      'C4128 okuyucu (USB2.0 - HID)',
      '6 adet kontrol noktası',
      '3 adet bekçi tanıtıcısı',
      'USB A-B tipi standart data kablosu',
      'Montaj vidaları',
      'Kullanma kılavuzu'
    ],
    models: [
      {
        name: 'Aves Bekçi Tur Kontrol Sistemi',
        image: '/images/products/bekci_kontrol.jpg',
        description: 'Komple bekçi tur kontrol seti',
        features: [
          'USB 2.0 HID okuyucu',
          '6 kontrol noktası',
          '3 bekçi tanıtıcısı',
          'Yazılım desteği',
          'Detaylı raporlama'
        ]
      }
    ]
  },
  {
    id: 'merkezi-saat',
    title: 'Merkezi Saat Sistemleri',
    description: 'Tüm bina veya kampüs genelinde senkronize saat sistemleri. Ana saat ünitesi ile merkezi kontrol ve yönetim imkanı.',
    icon: '🕐',
    image: '/images/products/merkezi_saat.png',
    features: [
      'Merkezi kontrol',
      'Senkronize çalışma',
      'Geniş kapsama alanı',
      'Otomatik saat ayarı',
      'Yedekli sistem'
    ],
    fullDescription: `Erben Merkezi Saat Sistemleri, büyük bina ve kampüslerde tüm saatlerin senkronize çalışmasını sağlar. Ana saat ünitesi, yardımcı saatlere sinyal göndererek dakik zaman gösterimini garanti eder.`,
    usageAreas: [
      'Hastane ve Sağlık Kurumları',
      'Eğitim Kurumları',
      'Fabrika ve Üretim Tesisleri',
      'Havalimanı ve Terminaller',
      'Kamu Binaları'
    ],
    models: [
      {
        name: 'Erben Ana Saat Ünitesi',
        image: '/images/products/merkezi_saat.png',
        description: 'Merkezi saat sistemi kontrol ünitesi',
        features: [
          'GPS senkronizasyonu',
          'Çoklu yardımcı saat bağlantısı',
          'Programlanabilir zil sistemi',
          'Elektrik kesintisinde yedekleme',
          'Kolay kurulum'
        ]
      }
    ]
  },
  {
    id: 'kule-saat',
    title: 'Kule ve Meydan Saatleri',
    description: 'Dış mekan kullanımı için tasarlanmış büyük boy kule ve meydan saatleri. Erben marka kaliteli saat projeleri.',
    icon: '🏛️',
    image: '/images/products/kule_saati.png',
    features: [
      'Büyük boy gösterge',
      'Uzaktan görünürlük',
      'Hava koşullarına dayanıklı',
      'LED aydınlatma',
      'Estetik tasarım'
    ],
    fullDescription: `Erben Kule ve Meydan Saatleri, şehir meydanları, park alanları, belediye binaları ve özel projeler için tasarlanmış dış mekan saatleridir. Klasik ve modern tasarım seçenekleri mevcuttur.`,
    usageAreas: [
      'Şehir Meydanları',
      'Belediye Binaları',
      'Parklar ve Rekreasyon Alanları',
      'Üniversite Kampüsleri',
      'Özel Projeler'
    ],
    galleryImages: [
      '/images/products/kule_saati.png',
      '/images/products/kule_saat_modelleri.png'
    ],
    models: [
      {
        name: 'Erben Kule Saati',
        image: '/images/products/kule_saati.png',
        description: 'Dış mekan kule saat modelleri',
        features: [
          'Paslanmaz çelik veya alüminyum gövde',
          'LED aydınlatmalı kadran',
          'GPS senkronizasyonu',
          'Hava koşullarına dayanıklı',
          'Özel tasarım seçenekleri'
        ]
      }
    ]
  },
  {
    id: 'kart-okuyucu',
    title: 'Kart Okuyucu Terminaller',
    description: 'Prestij Proximity Kart Okuyucu Terminal ile personel giriş-çıkış takibi. 125 kHz RFID teknolojisi.',
    icon: '💳',
    image: '/images/products/parmak_izi_k30.png',
    features: [
      'RFID kart okuma',
      'Hızlı ve güvenilir',
      'Çeşitli kart formatları',
      'Kolay kurulum',
      'PDKS entegrasyonu'
    ],
    fullDescription: `Prestij Proximity Kart Okuyucu Terminaller, 125 kHz RFID teknolojisi ile personel giriş-çıkış takibi sağlar. PDKS yazılımı ile tam entegre çalışarak puantaj ve raporlama işlemlerini kolaylaştırır.`,
    usageAreas: [
      'Ofis Giriş Kontrolü',
      'Fabrika Personel Takibi',
      'Okul ve Eğitim Kurumları',
      'Hastane Personel Takibi',
      'Otel Personel Yönetimi'
    ],
    models: [
      {
        name: 'Prestij Proximity Kart Okuyucu',
        image: '/images/products/parmak_izi_k30.png',
        description: 'RFID kart okuyucu terminal',
        features: [
          '125 kHz RFID teknolojisi',
          'Hızlı okuma süresi',
          'TCP/IP ve USB bağlantı',
          'PDKS yazılımı entegrasyonu',
          'Şık ve kompakt tasarım'
        ]
      }
    ]
  },
  {
    id: 'personel-kart',
    title: 'Personel Kartları',
    description: 'Proximity 125 kHz personel kartları ve anahtarlık tipi kartlar. Yüksek kalite baskı ile özelleştirilebilir tasarım.',
    icon: '🪪',
    image: '/images/products/personel_karti.png',
    features: [
      '125 kHz Proximity teknoloji',
      'Anahtarlık tipi kartlar',
      'Özelleştirilebilir tasarım',
      'Dayanıklı malzeme',
      'Hızlı teslimat'
    ],
    fullDescription: `Proximity personel kartları, RFID teknolojisi ile çalışan kart okuyucu terminallerle uyumludur. Standart kart ve anahtarlık tipi olmak üzere iki farklı formda sunulmaktadır.`,
    usageAreas: [
      'Personel Kimlik Kartları',
      'Giriş Kontrol Kartları',
      'Ziyaretçi Kartları',
      'Öğrenci Kartları',
      'Üyelik Kartları'
    ],
    galleryImages: [
      '/images/products/personel_karti.png',
      '/images/products/anahtarlik_kart.png'
    ],
    models: [
      {
        name: 'Proximity Personel Kartı',
        image: '/images/products/personel_karti.png',
        description: 'Standart boyut RFID personel kartı',
        features: [
          '125 kHz frekans',
          'ISO standart boyut',
          'Özel baskı imkanı',
          'Dayanıklı PVC malzeme',
          'Uzun okuma mesafesi'
        ]
      },
      {
        name: 'Anahtarlık Tipi Kart',
        image: '/images/products/anahtarlik_kart.png',
        description: 'Kompakt anahtarlık formunda RFID kart',
        features: [
          '125 kHz frekans',
          'Taşıması kolay',
          'Dayanıklı plastik gövde',
          'Anahtarlık halkası',
          'Düşük maliyet'
        ]
      }
    ]
  },
  {
    id: 'pdks-yazilim',
    title: 'PDKS Yazılımları',
    description: 'Prestij PDKS ve Access kontrol yazılımları. Her ölçekteki işletmenin ihtiyaçlarına cevap verebilecek tam entegre çözümler.',
    icon: '💻',
    features: [
      'Personel devam kontrolü',
      'Access kontrol yönetimi',
      'Raporlama modülleri',
      'Donanım entegrasyonu',
      'Çoklu şube desteği'
    ],
    fullDescription: `Prestij PDKS (Personel Devam Kontrol Sistemi) yazılımı, personel giriş-çıkış verilerini toplayarak puantaj, mesai, izin ve raporlama işlemlerini otomatikleştirir. Access kontrol modülü ile kapı ve turnike kontrolü de sağlanır.`,
    usageAreas: [
      'KOBİler',
      'Büyük İşletmeler',
      'Çoklu Şube Yönetimi',
      'Fabrika ve Üretim',
      'Perakende Sektörü'
    ],
    softwareFeatures: [
      'Personel giriş-çıkış takibi',
      'Vardiya ve mesai yönetimi',
      'İzin ve devamsızlık takibi',
      'Detaylı raporlama',
      'Bordro entegrasyonu',
      'Çoklu şube desteği',
      'Web tabanlı erişim',
      'Mobil uygulama desteği'
    ],
    models: []
  }
];

export const featuredProducts = products.slice(0, 4);

export const getProductById = (id) => products.find(p => p.id === id);
