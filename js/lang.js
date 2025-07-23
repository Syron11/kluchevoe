const translations = {
    ru: {
        "about-title": "О компании",
        "about-text": `ТОО «Ключевое» — сельскохозяйственное предприятие, основанное в 1998 году в селе Новопавловка.<br>
        Основные направления деятельности — выращивание зерновых и масличных культур, а также разведение племенного крупного рогатого скота казахской белоголовой породы.<br><br>
        Компания активно внедряет современные агротехнологии и работает по стандартам ГОСТ. В штате — более 80 сотрудников, включая агрономов, инженеров и специалистов по животноводству.<br><br>
        «Ключевое» ценит качество, надёжность и устойчивое развитие, а также поддерживает местное сообщество и молодые кадры.`,
        "hero-title": "Надёжный партнёр в сельском хозяйстве",
        "hero-subtitle": "Зерноводство, племенной скот и современные технологии",
        "products-title": "Продукция",
        "advantages-title": "Преимущества",
        "contact-title": "Контакты",
        "contact-phone-label": "Телефон:",
        "contact-address-label": "Адрес:",
        "footer-text": "© ТОО «Ключевое», все права защищены"
    },
    kz: {
        "about-title": "Компания туралы",
        "about-text": `“Ключевое” ЖШС — Қостанай облысы, Новопавловка ауылында 1998 жылы құрылған ауыл шаруашылық кәсіпорын.<br>
        Негізгі қызмет бағыттары — дәнді және майлы дақылдарды өсіру, сондай-ақ қазақтың ақбас тұқымды асыл тұқымды ірі қара малын өсіру.<br><br>
        Компания заманауи агротехнологияларды белсенді енгізіп, өнімдерін ГОСТ стандарттарына сәйкес өндіреді. Штатында 80-нен астам қызметкер бар, олардың қатарында агрономдар, инженерлер және мал шаруашылығы мамандары бар.<br><br>
        “Ключевое” сапаны, сенімділікті және тұрақты дамуды бағалайды, сонымен қатар жергілікті қауымдастықты және жас мамандарды қолдайды.`,
        "hero-title": "Ауыл шаруашылығындағы сенімді серіктес",
        "hero-subtitle": "Дәнді дақылдар, асыл тұқымды мал және заманауи технологиялар",
        "products-title": "Өнімдер",
        "advantages-title": "Артықшылықтар",
        "contact-title": "Байланыс",
        "contact-phone-label": "Телефон:",
        "contact-address-label": "Мекенжай:",
        "footer-text": "© «Ключевое» ЖШС, барлық құқықтар қорғалған"
    }
};

function switchLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang);
    applyTranslations(lang);
    updateActiveButton(lang);
}

function applyTranslations(lang) {
    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

function updateActiveButton(lang) {
    document.querySelectorAll(".language-switch button").forEach(btn => {
        btn.classList.remove("active");
    });
    const active = document.getElementById(`lang-${lang}`);
    if (active) active.classList.add("active");
}

// Загрузка языка при старте страницы
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("selectedLanguage") || "ru";
    switchLanguage(savedLang);
});
