export type Language = 'tr' | 'en'

export const translations = {
  tr: {
    nav: {
      home: 'Ana Sayfa',
      services: 'Hizmetler',
      references: 'Referanslar',
      contact: 'İletişim',
    },
    hero: {
      tagline: 'Fikrinizi ürüne dönüştürüyoruz — AI\'dan IoT\'ye, mobil\'den buluta.',
      descriptor: 'AI  •  IoT  •  Cross-Platform  •  Real-Time',
      subtitle: 'Sıfırdan production\'a: temiz kod, sağlam mimari, gerçek zamanlı altyapı.',
      cta_services: 'Hizmetlerimiz',
      cta_contact: 'İletişime Geç',
    },
    services: {
      title: 'Hizmetlerimiz',
      subtitle: 'CXD projesinde kanıtlanmış teknolojilerle kurumsal yazılım çözümleri sunuyoruz.',
      items: [
        {
          title: 'AI Platform Geliştirme',
          desc: 'Kullanıcı tercihlerini analiz eden, bağlam farkında ve gerçek zamanlı davranış modellemesi yapan AI motorları tasarlıyoruz.',
          tags: ['CXDAI', 'Python', 'LLM', 'Edge AI'],
        },
        {
          title: 'IoT & BLE Entegrasyonu',
          desc: 'Giyilebilir cihazlar, akıllı ev sistemleri ve BLE donanımları ile düşük gecikmeli veri iletişimi kuruyoruz.',
          tags: ['BLE', 'WebSocket', 'Yeelight', 'MQTT'],
        },
        {
          title: 'Mobil Uygulama (iOS/Android)',
          desc: 'QR eşleştirme, biyometrik sinyal aktarımı ve anlık senkronizasyon destekli native mobil companion uygulamaları.',
          tags: ['React Native', 'Swift', 'BLE', 'Real-Time'],
        },
        {
          title: 'Real-Time WebSocket Mimarisi',
          desc: 'Birden fazla cihazı milisaniye gecikmesiyle senkronize eden çift yönlü, ölçeklenebilir WebSocket altyapısı.',
          tags: ['WebSocket', 'Node.js', 'Socket.io', 'Redis'],
        },
        {
          title: 'Çok Platform Dağıtım',
          desc: 'Steam, Nintendo, Xbox ve PlayStation gibi küresel dijital dağıtım platformlarına içerik entegrasyonu.',
          tags: ['Steam', 'Xbox', 'PlayStation', 'Nintendo'],
        },
        {
          title: 'Next.js / React Web Geliştirme',
          desc: 'SEO dostu, yüksek performanslı ve çok dilli Next.js App Router uygulamaları. Statik ve dinamik çıktı desteği.',
          tags: ['Next.js 14', 'React', 'TypeScript', 'Tailwind'],
        },
        {
          title: 'Supabase Backend & Admin',
          desc: 'Veritabanı tasarımı, kimlik doğrulama, API katmanı ve içerik yönetimine özel admin paneli geliştirme.',
          tags: ['Supabase', 'PostgreSQL', 'NextAuth', 'REST'],
        },
        {
          title: 'Oyun Motoru Entegrasyonu',
          desc: 'Unity, Unreal Engine ve Godot ile geliştirilen oyun ve deneyimlerin web, console ve masaüstüne taşınması. WebGL, WASM ve platform SDK entegrasyonları.',
          tags: ['Unity', 'Unreal Engine', 'Godot', 'WebGL', 'WASM'],
        },
      ],
    },
    references: {
      title: 'Referans Projelerimiz',
      subtitle: '',
      cxd_name: 'Cinema X Dimension',
      cxd_desc: 'TÜBİTAK 1507 SME R&D programıyla desteklenen, AI destekli interaktif video platformu. Biyometrik sensörler, akıllı aydınlatma ve çok platform dağıtımı tek çatı altında.',
      visit: 'Siteyi Ziyaret Et',
    },
    contact: {
      title: 'İletişime Geçin',
      subtitle: 'Platform entegrasyonu, proje geliştirme veya iş birliği için doğrudan ulaşın.',
      linkedin: 'LinkedIn\'de Bağlanın',
      instagram: 'Instagram\'da Takip Edin',
      email: 'E-posta Gönderin',
    },
    footer: {
      rights: 'Tüm hakları saklıdır.',
      built: 'aliLab tarafından inşa edildi.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      references: 'References',
      contact: 'Contact',
    },
    hero: {
      tagline: 'We turn your idea into a product — from AI to IoT, mobile to cloud.',
      descriptor: 'AI  •  IoT  •  Cross-Platform  •  Real-Time',
      subtitle: 'Zero to production: clean code, solid architecture, real-time infrastructure.',
      cta_services: 'Our Services',
      cta_contact: 'Get in Touch',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Enterprise software solutions proven in the CXD project — delivered for your product.',
      items: [
        {
          title: 'AI Platform Development',
          desc: 'We design AI engines that analyze user preferences, understand context, and perform real-time behavior modeling.',
          tags: ['CXDAI', 'Python', 'LLM', 'Edge AI'],
        },
        {
          title: 'IoT & BLE Integration',
          desc: 'Low-latency data pipelines connecting wearables, smart home systems, and BLE hardware to your application.',
          tags: ['BLE', 'WebSocket', 'Yeelight', 'MQTT'],
        },
        {
          title: 'Mobile App (iOS/Android)',
          desc: 'Native companion apps with QR pairing, biometric signal transmission, and real-time synchronization.',
          tags: ['React Native', 'Swift', 'BLE', 'Real-Time'],
        },
        {
          title: 'Real-Time WebSocket Architecture',
          desc: 'Bidirectional, scalable WebSocket infrastructure synchronizing multiple devices with millisecond latency.',
          tags: ['WebSocket', 'Node.js', 'Socket.io', 'Redis'],
        },
        {
          title: 'Cross-Platform Distribution',
          desc: 'Content integration across global digital distribution platforms — Steam, Nintendo, Xbox, PlayStation.',
          tags: ['Steam', 'Xbox', 'PlayStation', 'Nintendo'],
        },
        {
          title: 'Next.js / React Development',
          desc: 'SEO-friendly, high-performance, multilingual Next.js App Router apps with static and dynamic output support.',
          tags: ['Next.js 14', 'React', 'TypeScript', 'Tailwind'],
        },
        {
          title: 'Supabase Backend & Admin',
          desc: 'Database design, authentication, API layer, and custom admin panel for complete content management.',
          tags: ['Supabase', 'PostgreSQL', 'NextAuth', 'REST'],
        },
        {
          title: 'Game Engine Integration',
          desc: 'Porting Unity, Unreal Engine, and Godot games/experiences to web, console, and desktop. WebGL, WASM, and platform SDK integrations.',
          tags: ['Unity', 'Unreal Engine', 'Godot', 'WebGL', 'WASM'],
        },
      ],
    },
    references: {
      title: 'Our Reference Projects',
      subtitle: '',
      cxd_name: 'Cinema X Dimension',
      cxd_desc: 'An AI-powered interactive video platform backed by TÜBİTAK 1507 SME R&D. Biometric sensors, smart ambient lighting, and multi-platform distribution — all under one roof.',
      visit: 'Visit the Website',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Reach out for platform integration, project development, or partnership opportunities.',
      linkedin: 'Connect on LinkedIn',
      instagram: 'Follow on Instagram',
      email: 'Send an Email',
    },
    footer: {
      rights: 'All rights reserved.',
      built: 'Built by aliLab.',
    },
  },
}

export type Translations = typeof translations.tr
