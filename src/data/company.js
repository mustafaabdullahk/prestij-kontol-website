// Company data for Prestij Kontrol website
export const company = {
    name: 'Prestij Güvenlik ve Kontrol Sistemleri',
    tagline: 'Personel Takip ve Güvenlik Sistemleri',
    shortDescription: 'Konya merkezli olarak, İç Anadolu başta olmak üzere Türkiye genelinde personel kontrol terminalleri, yazılımları ile güvenlik sistemleri alanında hizmet vermekteyiz.',

    // Full about content
    about: {
        history: `Firmamız 1979 yılında Sayın Hüseyin ÇETİN tarafından "Çetin Saatçilik" adıyla Konya'da kurulmuştur. Kuruluşunun ilk yıllarında saat tamir ve bakım hizmetleri veren firmamız, ilerleyen süreçte Konya ve çevre illerde duvar ve kol saati toptan satışı yaparak faaliyet alanını genişletmiştir.`,

        growth: `İç Anadolu Bölgesi'nde kamu ve özel sektörde kullanılan işçi kart basma saatlerinin teknik servisi ve yedek parça temininde önemli bir boşluk bulunduğunun fark edilmesiyle, 1993 yılında bu alana yönelmiş ve kısa sürede sektörün öncü firmalarından biri haline gelmiştir.`,

        present: `Zamanla personel takip ve kontrol sistemleri alanında uzmanlaşan firmamız, 2005 yılına kadar "Prestij Güvenlik ve Kontrol Sistemleri" unvanı ile faaliyetlerini sürdürmüş, aynı yıl itibarıyla yasal sorumluluğu Sayın İzzet ÇETİN devralmıştır. Bugün firmamız; Konya merkezli olarak, İç Anadolu başta olmak üzere Türkiye genelinde personel kontrol terminalleri, yazılımları ile güvenlik sistemleri alanında faaliyetlerini her geçen gün büyüyerek sürdürmektedir.`,

        expertise: `Prestij Güvenlik ve Kontrol Sistemleri; teknolojiyi şehir yaşamı ve kurumsal ihtiyaçlarla buluşturan yenilikçi çözümler üretmektedir. Kule ve meydan saatleri projeleri, parmak izi ve yüz tanıma sistemleri, turnike geçiş sistemleri, insan kaynakları yazılımları ve bekçi kontrol saatleri kurulumu alanlarında güçlü bir uzmanlığa sahiptir.`,

        software: `Firma bünyemizde geliştirdiğimiz Prestij Proximity Kart Okuyucu Terminal ve PDKS Yazılımı ve Access kontrol yazılımları her ölçekteki işletmenin ihtiyaçlarına cevap verebilecek kapasitede; yazılım ve donanım olarak tam entegre, güvenilir çözümler sunmaktadır.`
    },

    mission: `Firmamız; insan kaynakları süreçlerinin etkin şekilde yönetilmesi, personel takip stratejilerinin belirlenmesi ve işveren yükünün azaltılarak maksimum verim elde edilmesi hedefiyle hizmet vermektedir. Gelişen teknolojiyi en doğru şekilde kullanarak müşterilerimize en ekonomik, en kaliteli ve en güvenilir çözümleri sunmak temel misyonumuzdur.`,

    vision: `Müşteri memnuniyetini her zaman merkezine alan firmamız; güvenilir hizmet anlayışı, tecrübeli kadrosu ve yenilikçi bakış açısıyla, bugün olduğu gibi gelecekte de teknolojiyi hayatı kolaylaştıran çözümlerle buluşturmaya devam edecektir.`,

    founders: [
        { name: 'Hüseyin ÇETİN', role: 'Kurucu', year: 1979 },
        { name: 'İzzet ÇETİN', role: 'Yönetici', year: 2005 }
    ],

    milestones: [
        { year: 1979, event: 'Çetin Saatçilik olarak Konya\'da kuruldu' },
        { year: 1993, event: 'İşçi kart basma saatleri teknik servisi alanına giriş' },
        { year: 2005, event: 'Prestij Güvenlik ve Kontrol Sistemleri adını aldı' }
    ],

    serviceAreas: [
        {
            id: 'personel',
            title: 'Personel Takip Sistemleri',
            icon: '👥',
            description: 'Parmak izi ve yüz tanıma ile personel giriş-çıkış takibi'
        },
        {
            id: 'pdks',
            title: 'PDKS Yazılımları',
            icon: '💻',
            description: 'Tam entegre personel devam kontrol yazılımları'
        },
        {
            id: 'turnike',
            title: 'Turnike Geçiş Sistemleri',
            icon: '🚪',
            description: 'Güvenli erişim kontrolü için turnike çözümleri'
        },
        {
            id: 'kule',
            title: 'Kule ve Meydan Saatleri',
            icon: '🏛️',
            description: 'Şehir meydanları ve binalar için özel saat projeleri'
        },
        {
            id: 'bekci',
            title: 'Bekçi Kontrol Sistemleri',
            icon: '🛡️',
            description: 'Güvenlik personeli devriye takip sistemleri'
        },
        {
            id: 'embedded',
            title: 'Gömülü Sistem & Firmware',
            icon: '🔧',
            description: 'C/C++, Rust, Zephyr/FreeRTOS ile yüksek güvenlikli firmware geliştirme'
        },
        {
            id: 'cloud',
            title: 'Bulut & Altyapı',
            icon: '☁️',
            description: 'Docker, AWS ve CI/CD ile ölçeklenebilir bulut altyapıları ve servisleri'
        },
        {
            id: 'web-desktop',
            title: 'Web & Masaüstü Uygulamaları',
            icon: '🖥️',
            description: 'React, Tauri, Rust ile web ve cross-platform masaüstü uygulamalar geliştirme'
        },
        {
            id: 'mobile',
            title: 'Mobil Uygulamalar',
            icon: '📱',
            description: 'Mobil uygulama geliştirme ve cihaz-ara yüz entegrasyonları'
        },
        {
            id: 'protocols',
            title: 'IoT Protokoller & Entegrasyon',
            icon: '🔗',
            description: 'BLE, LoRa, UWB, MQTT, LwM2M ile cihaz ve bulut entegrasyonları'
        },
        {
            id: 'ci-cd',
            title: 'CI/CD & Otomasyon',
            icon: '⚙️',
            description: 'GitHub Actions, container CI ve otomatik test/sürüm süreçleri'
        },
        {
            id: 'hardware',
            title: 'Donanım & Entegrasyon',
            icon: '🔩',
            description: 'SPI, I2C, ADC, UART, RS-232/485 gibi donanım arayüzleri ve sürücüler'
        },
        {
            id: 'safety',
            title: 'Güvenlik, Test & Uyumluluk',
            icon: '🛡️',
            description: 'Clang Static Analysis, ISO/ASIL uyumluluk ve kapsamlı test altyapıları'
        }
    ],

    partners: [
        { id: 'aves', name: 'Aves Elektronik', logo: '/images/partners/aves.png', url: 'https://aveselektronik.com/' },
        { id: 'erben', name: 'Erben Kontrol Sistemleri', logo: '/images/partners/erben.png', url: 'https://www.erben.com.tr/' },
        { id: 'tansa', name: 'Tansa Turnike', logo: '/images/partners/tansa.png', url: 'https://tansa.com.tr/' },
        { id: 'zksoftware', name: 'ZKSoftware', logo: '/images/partners/zksoftware.png', url: 'https://zksoftware.com.tr/' },
        { id: 'amazeng', name: 'Amazeng', logo: '/images/partners/amazeng.png', url: 'https://amazeng.com.tr/' }
    ],

    contact: {
        address: 'Dr. M. Hulusi Baybal Cad. Nişantaş Mh. Hazım Uluşahin İş Merkezi C-Blok Asma Kat No:13 Selçuklu / Konya',
        phone: '+90 (332) 236 55 32',
        mobile: '+90 (555) 404 19 62',
        email: 'info@prestijkontrol.com',
        website: 'www.prestijkontrol.com'
    },

    businessHours: {
        weekdays: '09:00 - 18:00',
        saturday: '09:00 - 14:00',
        sunday: 'Kapalı'
    },

    social: {
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#'
    }
};

export const navigation = [
    { path: '/', label: 'Anasayfa' },
    { path: '/kurumsal', label: 'Kurumsal' },
    { path: '/urunler', label: 'Ürünler' },
    { path: '/referanslar', label: 'Referanslar' },
    { path: '/iletisim', label: 'İletişim' }
];
