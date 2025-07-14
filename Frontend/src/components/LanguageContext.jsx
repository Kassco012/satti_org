import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

// Переводы для разных языков
const translations = {
    ru: {
        // Навигация
        home: "Главная",
        menu: "Меню",
        about: "О нас",
        quickOrder: "Быстрый заказ",
        calculator: "Калькулятор заказа",
        reviews: "Отзывы",
        contacts: "Контакты",
        services: "Услуги",

        // Услуги
        furshet: "Фуршеты",
        coffeeBreak: "Кофе брейк",
        banquet: "Банкет",
        delivery: "Доставка закусок и блюд",

        // AboutUsPage
        organizeEverything: "Организуем всё",
        organizeDesc: "От планирования до финального аккорда — мы позаботимся о каждой детали вашего мероприятия",
        nationalCuisine: "Национальная кухня",
        nationalCuisineDesc: "Казахская и турецкая кухня от профессиональных поваров",
        locationChoice: "Локации на выбор",
        locationChoiceDesc: "Зал, природа, восточный стиль - любое место для вашего события",
        fullService: "Полный сервис",
        fullServiceDesc: "Сервировка, персонал, ведущие и шоу-программа",
        mediaServices: "Медиа услуги",
        mediaServicesDesc: "Фото- и видеосъёмка, музыка и живой певец",
        decoration: "Оформление",
        decorationDesc: "Декор и атмосфера, которая запомнится навсегда",
        turnkey: "Под ключ",
        turnkeyDesc: "Организуем всё от А до Я - вам остается только наслаждаться",

        ourMission: "Наша миссия",
        missionText1: "— это кулинарное и гостеприимное искусство на казахской земле. Мы — надёжный партнёр для проведения мероприятий в Алматы, предлагающий более полувека опыта и безупречного сервиса.",
        missionText2: "Мы вносим свою страсть в креативной кухне и изысканному обслуживанию на любую площадку или мероприятие, для любого повода и на любой вкус. Каждый банкет, корпоратив, свадьба или любое другое событие так же важно для нашей команды, как и для ваших клиентов.",
        missionText3: "Сегодня мы с гордостью обслуживаем мероприятия, предлагая индивидуально подобранные и вкуснейшие блюда казахской кухни, а также изысканные напитки.",

        ourValues: "Наши ценности",
        passionWork: "Страсть к делу",
        passionWorkDesc: "Каждое мероприятие мы проводим с душой и любовью к своему делу",
        quality: "Качество",
        qualityDesc: "Используем только свежие продукты и проверенные рецепты",
        individualApproach: "Индивидуальный подход",
        individualApproachDesc: "Учитываем все ваши пожелания и создаем уникальное мероприятие",
        punctuality: "Пунктуальность",
        punctualityDesc: "Всегда вовремя и согласно утвержденному плану",

        ourAchievements: "Наши достижения",
        satisfiedClients: "Довольных клиентов",
        completedEvents: "Проведенных мероприятий",
        experienceYears: "Лет опыта команды",
        customerSupport: "Поддержка клиентов",

        readyForEvent: "Готовы создать незабываемое мероприятие?",
        readyForEventDesc: "Доверьте нам организацию вашего события, и мы превратим его в настоящий праздник, который запомнится вам и вашим гостям на всю жизнь!",
        contactUs: "Связаться с нами",
        calculateCost: "Рассчитать стоимость",

        // Calculator
        orderCalculator: "Калькулятор заказа",
        qualityFirst: "Качество превыше всего",
        eventDetails: "Детали мероприятия",
        guestCount: "Количество гостей",
        eventDate: "Дата мероприятия",
        time: "Время",
        address: "Адрес",
        addressPlaceholder: "Укажите адрес",
        selectServiceType: "Выберите тип услуги",

        // Calculator Services
        buffets: "Фуршеты",
        lightBuffet: "Легкий фуршет",
        standardBuffet: "Стандартный фуршет",
        premiumBuffet: "Премиум фуршет",
        vipBuffet: "VIP фуршет",

        coffeeBreaks: "Кофе-брейк",
        miniCoffeeBreak: "Мини кофе-брейк",
        standardCoffeeBreak: "Стандартный кофе-брейк",
        extendedCoffeeBreak: "Расширенный кофе-брейк",

        banquets: "Банкеты",
        classicBanquet: "Классический банкет",
        deluxeBanquet: "Делюкс банкет",
        royalBanquet: "Роял банкет",

        dishDelivery: "Доставка блюд",
        hotDishes: "Горячие блюда",
        coldAppetizers: "Холодные закуски",
        desserts: "Десерты",
        salads: "Салаты",

        additionalServices: "Дополнительные услуги",
        waiters: "Официанты",
        equipmentRental: "Аренда оборудования",
        decorDesign: "Декор и оформление",
        musicSupport: "Музыкальное сопровождение",
        photographer: "Фотограф",

        perPerson: "за чел.",
        perPortion: "за порцию",
        perDay: "за день",
        perSet: "за комплект",
        total: "итого",
        totalPayment: "Итого к оплате",
        forPersons: "На",
        persons: "человек",

        // Reviews
        clientReviews: "Отзывы наших клиентов",

        // Contact
        contactUsAnyQuestion: "Свяжитесь с нами по любым вопросам",
        ourAddress: "Наш адрес",
        contacts: "Контакты",
        email: "Электронная почта",
        name: "Имя",
        message: "Сообщение",
        send: "Отправить",

        // Footer
        mainLinks: "Основные ссылки",
        improveBetter: "Мы стремимся стать лучше!",
        dontHesitate: "Пожалуйста, не сомневайтесь",

        // Services
        ourStoryServices: "Наша история и услуги",
        culinaryJourney: "Наш кулинарный путь и услуги",
        culinaryDesc: "Основанные на страсти, мы создаём незабываемые гастрономические впечатления и предлагаем исключительный сервис, сочетая кулинарное мастерство с тёплым гостеприимством.",

        catering: "Кейтеринг",
        cateringDesc: "Порадуйте своих гостей нашими вкусами и презентацией",
        fastDelivery: "Быстрая доставка",
        fastDeliveryDesc: "Мы оперативно доставляем ваш заказ до двери",
        onlineOrdering: "Онлайн заказ",
        onlineOrderingDesc: "Изучайте меню и заказывайте легко с нашей системой онлайн заказов",
        giftCards: "Подарочные карты",
        giftCardsDesc: "Подарите исключительный ужин с подарочными картами Satty",

        // Общие
        language: "Язык",
        backToHome: "Вернуться на главную",
        learnMore: "Узнать больше",
        getConsultation: "Получить консультацию",

        // Особенности
        bestStaff: "Лучший персонал",
        bestStaffDesc: "Наш шеф-повар создаёт кулинарные шедевры, а внимательные организаторы мероприятий следят за идеальным исполнением каждой детали.",
        naturalIngredients: "Натуральные ингредиенты",
        naturalIngredientsDesc: "Наш кейтеринг предлагает исключительно блюда, приготовленные из натуральных ингредиентов.",
        highQualityProducts: "Продукция высшего качества",
        highQualityProductsDesc: "Мы стремимся к совершенству, чтобы каждый кусочек демонстрировал нашу заботу о качестве и лучшие продукты для вашего мероприятия.",
        freshVegetablesMeat: "Свежие овощи и мясо",
        freshVegetablesMeatDesc: "Мы гордимся тем, что лично отбираем самые свежие овощи и лучшие мясные куски, чтобы наши блюда радовали вас насыщенным вкусом и качественными ингредиентами.",
        fastestDelivery: "Самая быстрая доставка до двери",
        fastestDeliveryDesc: "Мы обеспечиваем быструю доставку до двери, чтобы сделать ваш кейтеринг максимально удобным и приятным.",
        customerSupport24: "Круглосуточная поддержка клиентов",
        customerSupportDesc: "Мы гарантируем круглосуточную поддержку клиентов.",

        // Cards Component
        orderViaChat: "Заказ через чат-ботов",
        orderViaChatDesc: "Заказы принимаются через Telegram или WhatsApp",
        order: "Заказ",
        price: "Цена",
        orderButton: "Заказать",

        // ServicePage Component
        furshetPageDesc: "Организуем незабываемые фуршеты для ваших мероприятий. Широкий выбор блюд и закусок для любого события.",
        coffeeBreakPageDesc: "Вкусные кофе-брейки для деловых встреч и конференций. Свежая выпечка и качественные напитки.",
        banquetPageDesc: "Торжественные банкеты для особых случаев. Изысканное меню и безупречное обслуживание.",
        deliveryPageDesc: "Быстрая доставка вкусных блюд и закусок прямо к вам в офис или на мероприятие.",
        serviceNotFound: "Услуга не найдена",
        wantToKnowMore: "Хотите узнать больше?",
        contactForConsultation: "Свяжитесь с нами для получения подробной консультации и индивидуального предложения",

        // MenuPage Component
        worldCuisines: "Наши кухни мира",
        selectCuisineGetMenu: "Выберите кухню и получите персональное меню за 1 клик",
        kazakhCuisine: "Казахская кухня",
        kazakhCuisineDesc: "Традиционные блюда: бешбармак, казы, шубат",
        kazakhCuisineWhatsApp: "Здравствуйте! Интересует казахская кухня для мероприятия. Пришлите, пожалуйста, подробное меню.",
        turkishCuisine: "Турецкая кухня",
        turkishCuisineDesc: "Изысканные блюда: кебаб, пилав, баклава",
        turkishCuisineWhatsApp: "Здравствуйте! Интересует турецкая кухня для мероприятия. Пришлите, пожалуйста, подробное меню.",
        thankYouChoice: "Спасибо! Ваш выбор",
        accepted: "принят!",
        selectCuisinePrompt: "Выберите кухню:",
        sendDetailedMenuAfter: "Мы вышлем подробное меню после заявки в WhatsApp/Telegram",
        flag: "Флаг",
        kazakhstan: "Казахстана",
        turkey: "Турции",
        selected: "Выбрано",
        select: "Выбрать",
        detailedMenuInMessenger: "Подробное меню в мессенджере",
        whatHappensAfterChoice: "Что происходит после выбора?",
        chooseCuisineStep: "Выбираете кухню",
        oneClickOnCard: "Один клик на карточку",
        getMenuStep: "Получаете меню",
        inMessenger: "В WhatsApp/Telegram",
        placeOrderStep: "Оформляете заказ",
        withPersonalManager: "С персональным менеджером",
        yourChoice: "Ваш выбор",
        excellentWePrepare: "Отлично! Мы подготовим для вас подробное меню",
        andSendToMessenger: "и вышлем его в выбранный мессенджер.",
        getInWhatsApp: "Получить в WhatsApp",
        getInTelegram: "Получить в Telegram",


        // CorporateGenie Component
        instantOrder: "МГНОВЕННЫЙ ЗАКАЗ",
        basicInfo: "Основная информация",
        yourName: "Ваше имя",
        enterYourName: "Введите ваше имя",
        phone: "Телефон",
        eventDateLabel: "Дата мероприятия",
        approximateGuests: "Примерное количество гостей",
        forExample30: "Например: 30",
        selectCuisineTitle: "Выбор кухни",
        kazakhCuisineLabel: "Казахская кухня",
        turkishCuisineLabel: "Турецкая кухня",
        bothCuisines: "Обе кухни",
        menuExampleAfterOrder: "Пример меню вышлем в WhatsApp после заявки",
        eventLocation: "Локация мероприятия",
        clientHasPlace: "У заказчика есть место",
        natureLocation: "Локация 1 – на природе",
        banquetHall: "Локация 2 – банкетный зал",
        easternStyle: "Локация 3 – восточный стиль",
        additionalServicesTitle: "Дополнительные услуги",
        hallDecoration: "Оформление зала",
        staffService: "Подача персоналом",
        liveMusic: "Живая музыка",
        hostMaster: "Ведущий",
        singerShow: "Певец / шоу",
        videoPhotoShooting: "Видео / фото съёмка",
        specialRequests: "Специальные пожелания",
        tellAboutWishes: "Расскажите о ваших особых пожеланиях...",
        orderConfirmation: "Подтверждение заказа",
        nameLabel: "Имя:",
        phoneLabel: "Телефон:",
        dateLabel: "Дата:",
        guestsLabel: "Гостей:",
        cuisineLabel: "Кухня:",
        locationLabel: "Локация:",
        servicesLabel: "Услуги:",
        wishesLabel: "Пожелания:",
        notSelected: "Не выбрано",
        getProposal: "Получить предложение",
        fillInWhatsApp: "Заполнить в WhatsApp",
        back: "Назад",
        next: "Далее",
        thankYouSubmit: "Спасибо!",
        applicationSentWhatsApp: "Ваша заявка отправлена в WhatsApp. Мы свяжемся с вами в течение 15 минут для уточнения деталей заказа.",
        newOrder: "Новый заказ",
        "callButton": "Позвонить",

        // LoadingSpinner Component
        loading: "Загрузка...",

        // Home Component
        aboutUs: "О нас",
        sattiOrganization: "Sátti Organization",
        aboutUsHomeDesc1: "— это искусство гостеприимства и организации мероприятий в казахском стиле. Мы — надёжный партнёр в Алматы с более чем полувековым опытом и безупречным сервисом.",
        aboutUsHomeDesc2: "Мы сопровождаем клиентов на всех этапах подготовки: от выбора площадки и разработки концепции до кейтеринга и координации в день события. Для нас каждое мероприятие — это уникальный проект, к которому мы подходим с вниманием и заботой.",
        aboutUsHomeDesc3: "Сегодня мы с гордостью предлагаем не только вкуснейшие блюда казахской кухни и изысканные напитки, но и полный спектр услуг по организации мероприятий любой сложности.",
        kazakhCuisineHome: "Казахская кухня",
        kazakhCuisineHomeDesc: "Традиционные блюда от профессиональных поваров",
        fullServiceHome: "Полный сервис",
        fullServiceHomeDesc: "Организация мероприятий под ключ",
        anyLocationsHome: "Любые локации",
        anyLocationsHomeDesc: "Зал, природа, восточный стиль",
        yearsExperience: "5+ лет опыта",
        yearsExperienceDesc: "Проверенное качество и надежность",

        // Homebg Component
        culinaryArtKazakh: "Казахская идентичность и высокий уровень сервиса",
        viewMenu: "Посмотреть меню",
        calculateCostHome: "Рассчитать стоимость",

        // BoxGenie Component
        instantOrderTitle: "МГНОВЕННЫЙ ЗАКАЗ",

        
    },

    kz: {
        // Навигация
        home: "Басты бет",
        menu: "Мәзір",
        about: "Біз туралы",
        quickOrder: "Жылдам тапсырыс",
        calculator: "Тапсырыс калькуляторы",
        reviews: "Пікірлер",
        contacts: "Байланыс",
        services: "Қызметтер",

        // Услуги
        furshet: "Фуршеттер",
        coffeeBreak: "Кофе брейк",
        banquet: "Банкет",
        delivery: "Жеңіл тағамдар мен тағамдарды жеткізу",

        // AboutUsPage
        organizeEverything: "Барлығын ұйымдастырамыз",
        organizeDesc: "Жоспарлаудан бастап соңғы аккордқа дейін — біз сіздің іс-шараңыздың әрбір бөлшегі туралы қамқорлық жасаймыз",
        nationalCuisine: "Ұлттық ас",
        nationalCuisineDesc: "Кәсіби аспазшылардан қазақ және түрік тағамдары",
        locationChoice: "Таңдауға орындар",
        locationChoiceDesc: "Зал, табиғат, шығыс стилі - сіздің оқиғаңыз үшін кез келген орын",
        fullService: "Толық қызмет",
        fullServiceDesc: "Үстел жабдықтау, персонал, жүргізушілер және шоу-бағдарлама",
        mediaServices: "Медиа қызметтері",
        mediaServicesDesc: "Фото және видео түсірілім, музыка және тірі әнші",
        decoration: "Әрлеу",
        decorationDesc: "Мәңгілікке есте қалатын декор мен атмосфера",
        turnkey: "Кілтпен тапсыру",
        turnkeyDesc: "А-дан Я-ға дейін барлығын ұйымдастырамыз - сізге тек ләззат алу ғана қалады",

        ourMission: "Біздің миссия",
        missionText1: "— бұл қазақ жерінде аспаздық және қонақжайлылық өнері. Біз — Алматыда іс-шараларды өткізу үшін сенімді серіктес, жарты ғасырдан астам тәжірибе мен мінсіз қызметті ұсынатын.",
        missionText2: "Біз кез келген алаңға немесе іс-шараға, кез келген себеп пен кез келген дәмге шығармашылық асханаға және талғампаз қызметке деген құмарлығымызды енгіземіз. Әрбір банкет, корпоратив, үйлену немесе кез келген басқа оқиға біздің команда үшін сіздің клиенттеріңіз үшін сияқты маңызды.",
        missionText3: "Бүгін біз жеке таңдалған және дәмді қазақ тағамдарын, сондай-ақ талғампаз сусындарды ұсына отырып, іс-шараларға мақтанышпен қызмет етеміз.",

        ourValues: "Біздің құндылықтарымыз",
        passionWork: "Ісіне деген құмарлық",
        passionWorkDesc: "Біз әрбір іс-шараны жанымызбен және ісімізге деген сүйіспеншілікпен өткіземіз",
        quality: "Сапа",
        qualityDesc: "Тек жаңа өнімдер мен тексерілген рецепттерді пайдаланамыз",
        individualApproach: "Жеке көзқарас",
        individualApproachDesc: "Сіздің барлық тілектеріңізді ескере отырып, бірегей іс-шара жасаймыз",
        punctuality: "Уақытылылық",
        punctualityDesc: "Әрқашан уақытында және бекітілген жоспар бойынша",

        ourAchievements: "Біздің жетістіктеріміз",
        satisfiedClients: "Қанағаттанған клиенттер",
        completedEvents: "Өткізілген іс-шаралар",
        experienceYears: "Команда тәжірибесі жылдар",
        customerSupport: "Клиенттерді қолдау",

        readyForEvent: "Ұмытылмас іс-шара құруға дайынсыз ба?",
        readyForEventDesc: "Сіздің оқиғаңызды ұйымдастыруды бізге сеніп тапсырыңыз, біз оны сіз бен қонақтарыңызға ғұмырға есте қалатын нағыз мейрамға айналдырамыз!",
        contactUs: "Бізбен байланысу",
        calculateCost: "Құнын есептеу",

        // Calculator
        orderCalculator: "Тапсырыс калькуляторы",
        qualityFirst: "Сапа бәрінен жоғары",
        eventDetails: "Іс-шара мәліметтері",
        guestCount: "Қонақтар саны",
        eventDate: "Іс-шара күні",
        time: "Уақыт",
        address: "Мекенжай",
        addressPlaceholder: "Мекенжайды көрсетіңіз",
        selectServiceType: "Қызмет түрін таңдаңыз",

        // Calculator Services
        buffets: "Фуршеттер",
        lightBuffet: "Жеңіл фуршет",
        standardBuffet: "Стандартты фуршет",
        premiumBuffet: "Премиум фуршет",
        vipBuffet: "VIP фуршет",

        coffeeBreaks: "Кофе-брейк",
        miniCoffeeBreak: "Мини кофе-брейк",
        standardCoffeeBreak: "Стандартты кофе-брейк",
        extendedCoffeeBreak: "Кеңейтілген кофе-брейк",

        banquets: "Банкеттер",
        classicBanquet: "Классикалық банкет",
        deluxeBanquet: "Делюкс банкет",
        royalBanquet: "Роял банкет",

        dishDelivery: "Тағамдарды жеткізу",
        hotDishes: "Ыстық тағамдар",
        coldAppetizers: "Суық тағамдар",
        desserts: "Тәттілер",
        salads: "Салаттар",

        additionalServices: "Қосымша қызметтер",
        waiters: "Даяшылар",
        equipmentRental: "Жабдықты жалға алу",
        decorDesign: "Декор және безендіру",
        musicSupport: "Музыкалық сүйемелдеу",
        photographer: "Фотограф",

        perPerson: "адамға",
        perPortion: "порцияға",
        perDay: "күніне",
        perSet: "жинаққа",
        total: "барлығы",
        totalPayment: "Барлығы төлеуге",
        forPersons: "",
        persons: "адамға",

        // Reviews
        clientReviews: "Біздің клиенттеріміздің пікірлері",

        // Contact
        contactUsAnyQuestion: "Кез келген сұрақ бойынша бізбен байланысыңыз",
        ourAddress: "Біздің мекенжайымыз",
        contacts: "Байланыстар",
        email: "Электрондық пошта",
        name: "Аты",
        message: "Хабарлама",
        send: "Жіберу",

        // Footer
        mainLinks: "Негізгі сілтемелер",
        improveBetter: "Біз жақсы болуға тырысамыз!",
        dontHesitate: "Өтінемін, күмәнданбаңыз",

        // Services
        ourStoryServices: "Біздің тарихымыз және қызметтеріміз",
        culinaryJourney: "Біздің аспаздық жолымыз және қызметтеріміз",
        culinaryDesc: "Құмарлыққа негізделе отырып, біз ұмытылмас гастрономиялық әсерлер жасаймыз және ерекше қызмет ұсынамыз, аспаздық шеберлікті жылы қонақжайлылықпен үйлестіреміз.",

        catering: "Кейтеринг",
        cateringDesc: "Біздің дәмдеріміз бен презентациямызбен қонақтарыңызды қуантыңыз",
        fastDelivery: "Жылдам жеткізу",
        fastDeliveryDesc: "Біз сіздің тапсырысыңызды есікке дейін жылдам жеткіземіз",
        onlineOrdering: "Онлайн тапсырыс",
        onlineOrderingDesc: "Біздің онлайн тапсырыс беру жүйесімен мәзірді зерттеңіз және оңай тапсырыс беріңіз",
        giftCards: "Сыйлық карталары",
        giftCardsDesc: "Satty сыйлық карталарымен ерекше тамақты сыйлаңыз",

        // Общие
        language: "Тіл",
        backToHome: "Басты бетке оралу",
        learnMore: "Көбірек білу",
        getConsultation: "Кеңес алу",

        // Особенности
        bestStaff: "Ең жақсы персонал",
        bestStaffDesc: "Біздің ас үй басшысы аспаздық шедеврлерін жасайды, ал мұқият іс-шара ұйымдастырушылары әрбір бөлшектің мінсіз орындалуын қадағалайды.",
        naturalIngredients: "Табиғи ингредиенттер",
        naturalIngredientsDesc: "Біздің кейтеринг тек табиғи ингредиенттерден дайындалған тағамдарды ұсынады.",
        highQualityProducts: "Жоғары сапалы өнімдер",
        highQualityProductsDesc: "Біз әрбір кесек біздің сапаға деген қамқорлығымызды көрсету үшін жетілдікке ұмтыламыз.",
        freshVegetablesMeat: "Жаңа көкөністер мен ет",
        freshVegetablesMeatDesc: "Біз ең жаңа көкөністер мен ең жақсы ет кесектерін жеке таңдап алатынымызды мақтан тұтамыз.",
        fastestDelivery: "Есікке дейін ең жылдам жеткізу",
        fastestDeliveryDesc: "Біз кейтерингіңізді ыңғайлы және жағымды ету үшін есікке дейін жылдам жеткізуді қамтамасыз етеміз.",
        customerSupport24: "Тәулік бойы клиенттерді қолдау",
        customerSupportDesc: "Біз тәулік бойы клиенттерді қолдауға кепілдік береміз.",

        // Cards Component
        orderViaChat: "Чат-боттар арқылы тапсырыс",
        orderViaChatDesc: "Тапсырыстар Telegram немесе WhatsApp арқылы қабылданады",
        order: "Тапсырыс",
        price: "Баға",
        orderButton: "Тапсырыс беру",

        // ServicePage Component  
        furshetPageDesc: "Сіздің іс-шараларыңыз үшін ұмытылмас фуршеттерді ұйымдастырамыз. Кез келген оқиға үшін тағамдар мен жеңіл тағамдардың кең таңдауы.",
        coffeeBreakPageDesc: "Іскерлік кездесулер мен конференциялар үшін дәмді кофе-брейк. Жаңа нан өнімдері мен сапалы сусындар.",
        banquetPageDesc: "Ерекше жағдайлар үшін салтанатты банкеттер. Талғампаз мәзір мен мінсіз қызмет көрсету.",
        deliveryPageDesc: "Дәмді тағамдар мен жеңіл тағамдарды тікелей сіздің кеңсеңізге немесе іс-шараңызға жылдам жеткізу.",
        serviceNotFound: "Қызмет табылмады",
        wantToKnowMore: "Көбірек білгіңіз келе ме?",
        contactForConsultation: "Толық консультация мен жеке ұсыныс алу үшін бізбен байланысыңыз",

        // MenuPage Component
        worldCuisines: "Біздің әлем асханалары",
        selectCuisineGetMenu: "Асхананы таңдаңыз және 1 шерту арқылы жеке мәзір алыңыз",
        kazakhCuisine: "Қазақ тағамдары",
        kazakhCuisineDesc: "Дәстүрлі тағамдар: бешбармақ, қазы, шұбат",
        kazakhCuisineWhatsApp: "Сәлеметсіз бе! Іс-шара үшін қазақ тағамдары қызықтырады. Толық мәзірді жіберіңіз.",
        turkishCuisine: "Түрік тағамдары",
        turkishCuisineDesc: "Талғампаз тағамдар: кебаб, пілаф, баклава",
        turkishCuisineWhatsApp: "Сәлеметсіз бе! Іс-шара үшін түрік тағамдары қызықтырады. Толық мәзірді жіберіңіз.",
        thankYouChoice: "Рахмет! Сіздің таңдауыңыз",
        accepted: "қабылданды!",
        selectCuisinePrompt: "Асхананы таңдаңыз:",
        sendDetailedMenuAfter: "WhatsApp/Telegram арқылы өтініш жасағаннан кейін толық мәзірді жібереміз",
        flag: "Туы",
        kazakhstan: "Қазақстанның",
        turkey: "Түркияның",
        selected: "Таңдалды",
        select: "Таңдау",
        detailedMenuInMessenger: "Мессенджерде толық мәзір",
        whatHappensAfterChoice: "Таңдағаннан кейін не болады?",
        chooseCuisineStep: "Асхананы таңдайсыз",
        oneClickOnCard: "Картаға бір шерту",
        getMenuStep: "Мәзір аласыз",
        inMessenger: "WhatsApp/Telegram арқылы",
        placeOrderStep: "Тапсырыс ресімдейсіз",
        withPersonalManager: "Жеке менеджермен",
        yourChoice: "Сіздің таңдауыңыз",
        excellentWePrepare: "Керемет! Сіз үшін толық мәзірді дайындаймыз",
        andSendToMessenger: "және оны таңдалған мессенджерге жібереміз.",
        getInWhatsApp: "WhatsApp арқылы алу",
        getInTelegram: "Telegram арқылы алу",


        // CorporateGenie Component
        instantOrder: "ЛЕЗДЕ ТАПСЫРЫС",
        basicInfo: "Негізгі ақпарат",
        yourName: "Сіздің атыңыз",
        enterYourName: "Атыңызды енгізіңіз",
        phone: "Телефон",
        eventDateLabel: "Іс-шара күні",
        approximateGuests: "Қонақтардың шамамен саны",
        forExample30: "Мысалы: 30",
        selectCuisineTitle: "Ас мәдениетін таңдау",
        kazakhCuisineLabel: "Қазақ тағамдары",
        turkishCuisineLabel: "Түрік тағамдары",
        bothCuisines: "Екі ас мәдениеті",
        menuExampleAfterOrder: "Мәзір үлгісін өтініш жасағаннан кейін WhatsApp арқылы жібереміз",
        eventLocation: "Іс-шара орыны",
        clientHasPlace: "Тапсырыс берушінің орны бар",
        natureLocation: "1-орын – табиғатта",
        banquetHall: "2-орын – банкет залы",
        easternStyle: "3-орын – шығыс стилі",
        additionalServicesTitle: "Қосымша қызметтер",
        hallDecoration: "Залды безендіру",
        staffService: "Персоналмен ұсыну",
        liveMusic: "Тірі музыка",
        hostMaster: "Жүргізуші",
        singerShow: "Әнші / шоу",
        videoPhotoShooting: "Видео / фото түсірілім",
        specialRequests: "Арнайы тілектер",
        tellAboutWishes: "Арнайы тілектеріңіз туралы айтып беріңіз...",
        orderConfirmation: "Тапсырысты растау",
        nameLabel: "Аты:",
        phoneLabel: "Телефон:",
        dateLabel: "Күні:",
        guestsLabel: "Қонақтар:",
        cuisineLabel: "Ас мәдениеті:",
        locationLabel: "Орын:",
        servicesLabel: "Қызметтер:",
        wishesLabel: "Тілектер:",
        notSelected: "Таңдалмаған",
        getProposal: "Ұсыныс алу",
        fillInWhatsApp: "WhatsApp арқылы толтыру",
        back: "Артқа",
        next: "Әрі қарай",
        thankYouSubmit: "Рахмет!",
        applicationSentWhatsApp: "Сіздің өтінішіңіз WhatsApp арқылы жіберілді. Тапсырыс мәліметтерін нақтылау үшін 15 минут ішінде сізбен хабарласамыз.",
        newOrder: "Жаңа тапсырыс",
        "callButton": "Қоңырау шалу",

        // LoadingSpinner Component
        loading: "Жүктелуде...",

        // Home Component
        aboutUs: "Біз туралы",
        sattiOrganization: "Sátti Organization",
        aboutUsHomeDesc1: "— бұл қазақы нақыштағы қонақжайлылық пен іс-шараларды ұйымдастыру өнері. Біз — Алматы қаласында жарты ғасырлық тәжірибесі мен мінсіз қызметі бар сенімді серіктеспіз.",
        aboutUsHomeDesc2: "Біз клиенттерімізге алаң таңдау мен тұжырымдама жасаудан бастап, тамақтандыру мен іс-шара күніндегі үйлестіруге дейін барлық кезеңдерде қолдау көрсетеміз. Әрбір шара — біз үшін ерекше жоба, оған үлкен жауапкершілікпен қараймыз.",
        aboutUsHomeDesc3: "Бүгінде біз тек дәмді қазақ тағамдары мен ерекше сусындарды ғана емес, кез келген деңгейдегі іс-шараларды толық ұйымдастыру қызметтерін ұсынуға мақтан тұтамыз.",
        kazakhCuisineHome: "Қазақ тағамдары",
        kazakhCuisineHomeDesc: "Кәсіби аспазшылардан дәстүрлі тағамдар",
        fullServiceHome: "Толық қызмет",
        fullServiceHomeDesc: "Іс-шараларды кілтпен ұйымдастыру",
        anyLocationsHome: "Кез келген орындар",
        anyLocationsHomeDesc: "Зал, табиғат, шығыс стилі",
        yearsExperience: "5+ жыл тәжірибе",
        yearsExperienceDesc: "Тексерілген сапа мен сенімділік",

        // Homebg Component
        culinaryArtKazakh: "Қазақы болмыс пен жоғары деңгейдегі сервис",
        viewMenu: "Мәзірді қарау",
        calculateCostHome: "Құнын есептеу",

        // BoxGenie Component  
        instantOrderTitle: "ЖЕДЕЛ ТАПСЫРЫС",
    },

    en: {
        // Навигация
        home: "Home",
        menu: "Menu",
        about: "About Us",
        quickOrder: "Quick Order",
        calculator: "Order Calculator",
        reviews: "Reviews",
        contacts: "Contacts",
        services: "Services",

        // Услуги
        furshet: "Buffets",
        coffeeBreak: "Coffee Break",
        banquet: "Banquet",
        delivery: "Snacks & Meals Delivery",

        // AboutUsPage
        organizeEverything: "We Organize Everything",
        organizeDesc: "From planning to the final chord — we take care of every detail of your event",
        nationalCuisine: "National Cuisine",
        nationalCuisineDesc: "Kazakh and Turkish cuisine from professional chefs",
        locationChoice: "Choice of Locations",
        locationChoiceDesc: "Hall, nature, oriental style - any place for your event",
        fullService: "Full Service",
        fullServiceDesc: "Table setting, staff, hosts and show program",
        mediaServices: "Media Services",
        mediaServicesDesc: "Photo and video shooting, music and live singer",
        decoration: "Decoration",
        decorationDesc: "Decor and atmosphere that will be remembered forever",
        turnkey: "Turnkey",
        turnkeyDesc: "We organize everything from A to Z - you just need to enjoy",

        ourMission: "Our Mission",
        missionText1: "— is the culinary and hospitality art in the Kazakh land. We are a reliable partner for organizing events in Almaty, offering more than half a century of experience and impeccable service.",
        missionText2: "We bring our passion for creative cuisine and exquisite service to any venue or event, for any occasion and taste. Every banquet, corporate event, wedding or any other event is as important to our team as it is to your clients.",
        missionText3: "Today we are proud to serve events, offering individually selected and delicious Kazakh cuisine dishes, as well as exquisite drinks.",

        ourValues: "Our Values",
        passionWork: "Passion for Work",
        passionWorkDesc: "We conduct every event with soul and love for our work",
        quality: "Quality",
        qualityDesc: "We use only fresh products and proven recipes",
        individualApproach: "Individual Approach",
        individualApproachDesc: "We take into account all your wishes and create a unique event",
        punctuality: "Punctuality",
        punctualityDesc: "Always on time and according to the approved plan",

        ourAchievements: "Our Achievements",
        satisfiedClients: "Satisfied Clients",
        completedEvents: "Completed Events",
        experienceYears: "Years of Team Experience",
        customerSupport: "Customer Support",

        readyForEvent: "Ready to create an unforgettable event?",
        readyForEventDesc: "Trust us to organize your event, and we will turn it into a real celebration that you and your guests will remember for a lifetime!",
        contactUs: "Contact Us",
        calculateCost: "Calculate Cost",

        // Calculator
        orderCalculator: "Order Calculator",
        qualityFirst: "Quality Above All",
        eventDetails: "Event Details",
        guestCount: "Number of Guests",
        eventDate: "Event Date",
        time: "Time",
        address: "Address",
        addressPlaceholder: "Specify address",
        selectServiceType: "Select Service Type",

        // Calculator Services
        buffets: "Buffets",
        lightBuffet: "Light Buffet",
        standardBuffet: "Standard Buffet",
        premiumBuffet: "Premium Buffet",
        vipBuffet: "VIP Buffet",

        coffeeBreaks: "Coffee Breaks",
        miniCoffeeBreak: "Mini Coffee Break",
        standardCoffeeBreak: "Standard Coffee Break",
        extendedCoffeeBreak: "Extended Coffee Break",

        banquets: "Banquets",
        classicBanquet: "Classic Banquet",
        deluxeBanquet: "Deluxe Banquet",
        royalBanquet: "Royal Banquet",

        dishDelivery: "Dish Delivery",
        hotDishes: "Hot Dishes",
        coldAppetizers: "Cold Appetizers",
        desserts: "Desserts",
        salads: "Salads",

        additionalServices: "Additional Services",
        waiters: "Waiters",
        equipmentRental: "Equipment Rental",
        decorDesign: "Decor and Design",
        musicSupport: "Music Support",
        photographer: "Photographer",

        perPerson: "per person",
        perPortion: "per portion",
        perDay: "per day",
        perSet: "per set",
        total: "total",
        totalPayment: "Total Payment",
        forPersons: "For",
        persons: "persons",

        // Reviews
        clientReviews: "Our Clients' Reviews",

        // Contact
        contactUsAnyQuestion: "Contact us with any questions",
        ourAddress: "Our Address",
        contacts: "Contacts",
        email: "Email",
        name: "Name",
        message: "Message",
        send: "Send",

        // Footer
        mainLinks: "Main Links",
        improveBetter: "We strive to become better!",
        dontHesitate: "Please don't hesitate",

        // Services
        ourStoryServices: "Our Story and Services",
        culinaryJourney: "Our Culinary Journey and Services",
        culinaryDesc: "Founded on passion, we create unforgettable gastronomic experiences and offer exceptional service, combining culinary mastery with warm hospitality.",

        catering: "Catering",
        cateringDesc: "Delight your guests with our flavors and presentation",
        fastDelivery: "Fast Delivery",
        fastDeliveryDesc: "We deliver your order promptly to your door",
        onlineOrdering: "Online Ordering",
        onlineOrderingDesc: "Explore menu & order with ease using our Online Ordering system",
        giftCards: "Gift Cards",
        giftCardsDesc: "Give the gift of exceptional dining with Satty Gift Cards",

        // Общие
        language: "Language",
        backToHome: "Back to Home",
        learnMore: "Learn More",
        getConsultation: "Get Consultation",

        // Особенности
        bestStaff: "Best Staff",
        bestStaffDesc: "Our chef creates culinary masterpieces, while attentive event organizers ensure perfect execution of every detail.",
        naturalIngredients: "Natural Ingredients",
        naturalIngredientsDesc: "Our catering offers exclusively dishes prepared from natural ingredients.",
        highQualityProducts: "Highest Quality Products",
        highQualityProductsDesc: "We strive for perfection so that every bite demonstrates our care for quality and the best products for your event.",
        freshVegetablesMeat: "Fresh Vegetables and Meat",
        freshVegetablesMeatDesc: "We pride ourselves on personally selecting the freshest vegetables and best meat cuts to delight you with rich flavor and quality ingredients.",
        fastestDelivery: "Fastest Door-to-Door Delivery",
        fastestDeliveryDesc: "We provide fast door-to-door delivery to make your catering as convenient and pleasant as possible.",
        customerSupport24: "24/7 Customer Support",
        customerSupportDesc: "We guarantee 24/7 customer support.",

        // Cards Component
        orderViaChat: "Order via Chat Bots",
        orderViaChatDesc: "Orders are accepted via Telegram or WhatsApp",
        order: "Order",
        price: "Price",
        orderButton: "Order",

        // ServicePage Component
        furshetPageDesc: "We organize unforgettable buffets for your events. Wide selection of dishes and snacks for any occasion.",
        coffeeBreakPageDesc: "Delicious coffee breaks for business meetings and conferences. Fresh pastries and quality drinks.",
        banquetPageDesc: "Ceremonial banquets for special occasions. Exquisite menu and impeccable service.",
        deliveryPageDesc: "Fast delivery of delicious dishes and snacks directly to your office or event.",
        serviceNotFound: "Service not found",
        wantToKnowMore: "Want to know more?",
        contactForConsultation: "Contact us for detailed consultation and individual offer",

        // MenuPage Component
        worldCuisines: "Our World Cuisines",
        selectCuisineGetMenu: "Choose cuisine and get personal menu in 1 click",
        kazakhCuisine: "Kazakh Cuisine",
        kazakhCuisineDesc: "Traditional dishes: beshbarmak, kazy, shubat",
        kazakhCuisineWhatsApp: "Hello! Interested in Kazakh cuisine for an event. Please send detailed menu.",
        turkishCuisine: "Turkish Cuisine",
        turkishCuisineDesc: "Exquisite dishes: kebab, pilaf, baklava",
        turkishCuisineWhatsApp: "Hello! Interested in Turkish cuisine for an event. Please send detailed menu.",
        thankYouChoice: "Thank you! Your choice",
        accepted: "accepted!",
        selectCuisinePrompt: "Choose cuisine:",
        sendDetailedMenuAfter: "We will send detailed menu after application in WhatsApp/Telegram",
        flag: "Flag",
        kazakhstan: "Kazakhstan",
        turkey: "Turkey",
        selected: "Selected",
        select: "Select",
        detailedMenuInMessenger: "Detailed menu in messenger",
        whatHappensAfterChoice: "What happens after choice?",
        chooseCuisineStep: "Choose cuisine",
        oneClickOnCard: "One click on card",
        getMenuStep: "Get menu",
        inMessenger: "In WhatsApp/Telegram",
        placeOrderStep: "Place order",
        withPersonalManager: "With personal manager",
        yourChoice: "Your choice",
        excellentWePrepare: "Excellent! We will prepare detailed menu for you",
        andSendToMessenger: "and send it to chosen messenger.",
        getInWhatsApp: "Get in WhatsApp",
        getInTelegram: "Get in Telegram",


        // CorporateGenie Component
        instantOrder: "INSTANT ORDER",
        basicInfo: "Basic Information",
        yourName: "Your Name",
        enterYourName: "Enter your name",
        phone: "Phone",
        eventDateLabel: "Event Date",
        approximateGuests: "Approximate number of guests",
        forExample30: "For example: 30",
        selectCuisineTitle: "Cuisine Selection",
        kazakhCuisineLabel: "Kazakh Cuisine",
        turkishCuisineLabel: "Turkish Cuisine",
        bothCuisines: "Both Cuisines",
        menuExampleAfterOrder: "Menu example will be sent via WhatsApp after application",
        eventLocation: "Event Location",
        clientHasPlace: "Client has a place",
        natureLocation: "Location 1 – in nature",
        banquetHall: "Location 2 – banquet hall",
        easternStyle: "Location 3 – eastern style",
        additionalServicesTitle: "Additional Services",
        hallDecoration: "Hall decoration",
        staffService: "Staff service",
        liveMusic: "Live music",
        hostMaster: "Host",
        singerShow: "Singer / show",
        videoPhotoShooting: "Video / photo shooting",
        specialRequests: "Special requests",
        tellAboutWishes: "Tell us about your special wishes...",
        orderConfirmation: "Order Confirmation",
        nameLabel: "Name:",
        phoneLabel: "Phone:",
        dateLabel: "Date:",
        guestsLabel: "Guests:",
        cuisineLabel: "Cuisine:",
        locationLabel: "Location:",
        servicesLabel: "Services:",
        wishesLabel: "Wishes:",
        notSelected: "Not selected",
        getProposal: "Get Proposal",
        fillInWhatsApp: "Fill in WhatsApp",
        back: "Back",
        next: "Next",
        thankYouSubmit: "Thank you!",
        applicationSentWhatsApp: "Your application has been sent via WhatsApp. We will contact you within 15 minutes to clarify order details.",
        newOrder: "New Order",
        "callButton": "Call",

        // LoadingSpinner Component
        loading: "Loading...",


        // Home Component
        aboutUs: "About Us",
        sattiOrganization: "Sátti Organization",
        aboutUsHomeDesc1: "Satti Organization is the art of hospitality and event management with a Kazakh spirit. We are a reliable partner in Almaty with over half a century of experience and impeccable service.",
        aboutUsHomeDesc2: "We support our clients at every stage — from selecting the venue and developing the concept to catering and coordination on the event day. Each event is a unique project we approach with great care and attention.",
        aboutUsHomeDesc3: "Today, we proudly offer not only delicious Kazakh cuisine and exquisite beverages, but also a full range of event management services for any occasion.",
        kazakhCuisineHome: "Kazakh Cuisine",
        kazakhCuisineHomeDesc: "Traditional dishes from professional chefs",
        fullServiceHome: "Full Service",
        fullServiceHomeDesc: "Turnkey event organization",
        anyLocationsHome: "Any Locations",
        anyLocationsHomeDesc: "Hall, nature, eastern style",
        yearsExperience: "5+ years experience",
        yearsExperienceDesc: "Proven quality and reliability",

        // Homebg Component
        culinaryArtKazakh: "Kazakh identity and high-level service",
        viewMenu: "View Menu",
        calculateCostHome: "Calculate Cost",

        // BoxGenie Component
        instantOrderTitle: "INSTANT ORDER",
    }
};

export const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState('ru');

    const changeLanguage = (language) => {
        setCurrentLanguage(language);
        localStorage.setItem('language', language);
    };

    const t = (key) => {
        return translations[currentLanguage][key] || key;
    };

    // Загружаем сохраненный язык при инициализации
    React.useEffect(() => {
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage && translations[savedLanguage]) {
            setCurrentLanguage(savedLanguage);
        }
    }, []);

    const value = {
        currentLanguage,
        changeLanguage,
        t,
        availableLanguages: [
            { code: 'ru', name: 'Русский', flag: '🇷🇺' },
            { code: 'kz', name: 'Қазақша', flag: '🇰🇿' },
            { code: 'en', name: 'English', flag: '🇺🇸' }
        ]
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};