// === i18n Translations ===
const i18n = {
    de: {
        nav_about: 'Über mich',
        nav_skills: 'Fähigkeiten',
        nav_projects: 'Projekte',
        nav_contact: 'Kontakt',
        hero_greeting: 'Hallo, ich bin',
        hero_tagline: 'Embedded-Entwickler \u2022 Maker \u2022 Forscher',
        hero_projects: 'Meine Projekte',
        hero_contact: 'Kontakt',
        about_title: 'Über mich',
        about_embedded_title: 'Embedded-Entwicklung',
        about_embedded_desc: 'Entwicklung von Firmware für ESP32, Arduino und andere Mikrocontroller. Arbeit mit Sensoren, Displays und Kommunikationsprotokollen.',
        about_hardware_title: 'Hardware',
        about_hardware_desc: 'Arbeit mit Hochfrequenzgeneratoren, Bluetooth-Audio, IR-Kommunikation und Automobil-Diagnose (OBD/K-Line).',
        about_learning_title: 'Ständiges Lernen',
        about_learning_desc: 'Erforschung neuer Technologien, Protokolle und Ansätze. Jedes Projekt ist eine Gelegenheit, etwas Neues zu lernen.',
        skills_title: 'Fähigkeiten',
        skills_languages: 'Sprachen',
        skills_platforms: 'Plattformen',
        skills_protocols: 'Protokolle',
        skills_sensors: 'Sensoren / ICs',
        projects_title: 'Projekte',
        proj_meteo_desc: 'Wetterstation auf Basis eines Sensors AHT20+BMP280. Temperatur, Luftfeuchtigkeit und Luftdruck messen.',
        proj_si5351_desc: 'Frequenzgenerator auf SI5351 mit Web-Interface und ESP32-C3. Vielseitiger HF-Signalgenerator.',
        proj_ecu_desc: 'ECU-Emulator für ELM327 und K-Line Adapter. Automobil-Diagnose-Schnittstelle simulieren.',
        proj_eink_desc: 'E-Ink-Display-Projekt. Arbeit mit elektronischem Papier für stromsparende Anzeigen.',
        proj_ir_desc: 'Arduino-Projekt zum Dekodieren von Infrarot-Signalen von Fernbedienungen.',
        proj_esp32gen_desc: 'Kompakter Signalgenerator 10Hz\u20131MHz auf Basis des ESP32-C3.',
        proj_hp5883_desc: 'GY-271 Modul mit HP5883 / QMC5883P Magnetometer am Arduino UNO.',
        proj_vl6180x_desc: 'Distanzmessung mit VL6180X Sensor auf ESP32 mit SSD1306 OLED-Display.',
        proj_bt_desc: 'ESP32 Bluetooth-Audio-Transceiver mit MAX98357 DAC (ESP32-A2DP).',
        proj_st77xx_desc: 'ST77xx TFT-Display-Treiber mit DMA für schnelle Bildschirmaktualisierung auf Mikrocontrollern.',
        proj_github: 'GitHub \u2192',
        contact_title: 'Kontakt',
        contact_text: 'Möchten Sie Kontakt aufnehmen? Schreiben Sie mir — ich bin immer offen für neue Ideen und Zusammenarbeit.',
        contact_bio: 'Hier teile ich meine Reise in die Welt der Elektronik, Amateurfunk (73!) und Automobiltechnik. Wenn Sie interessiert sind, wie Dinge von innen funktionieren, sind Sie hier richtig.',
        contact_what_title: 'Was Sie hier finden:',
        contact_microcontrollers: 'Tiefe Einblicke in die Atmel (AVR) Programmierung und Hardware-Projekte.',
        contact_cartech: 'OBD-II Diagnose, Custom-Coding und Wartung (speziell für Chevrolet Aveo T300 und darüber hinaus).',
        contact_diy: 'Wiederherstellung von Elektronik, Löten und Bau von benutzerdefinierten Geräten von Grund auf.',
        contact_hamradio: 'Experimente mit Antennen, Transceivern und Funkkommunikation.',
        contact_goal: 'Mein Ziel ist es, praktisches Wissen zu teilen und den "DIY-Geist" am Leben zu erhalten!',
        contact_support_title: 'Unterstütze mein Hobby & zukünftige Projekte',
        contact_support_text: 'Wenn Sie meine Inhalte nützlich finden und die Entwicklung neuer Geräte und Videos unterstützen möchten, können Sie hier spenden:',
        contact_btc_label: '🪙 BTC-Adresse:',
        contact_thanks: 'Danke fürs Zuschauen und vergessen Sie nicht zu abonnieren!',
        contact_location: '📍 Standort:',
        contact_location_value: 'Österreich',
        footer_copy: '\u00a9 2025 ATMEL. Alle Rechte vorbehalten.'
    },
    ua: {
        nav_about: 'Про мене',
        nav_skills: 'Навички',
        nav_projects: 'Проєкти',
        nav_contact: 'Контакти',
        hero_greeting: 'Привіт, я',
        hero_tagline: 'Embedded-розробник \u2022 Мейкер \u2022 Дослідник',
        hero_projects: 'Мої проєкти',
        hero_contact: 'Контакти',
        about_title: 'Про мене',
        about_embedded_title: 'Embedded-розробка',
        about_embedded_desc: 'Розробка прошивок для ESP32, Arduino та інших мікроконтролерів. Робота з датчиками, дисплеями та протоколами зв\'язку.',
        about_hardware_title: 'Апаратне забезпечення',
        about_hardware_desc: 'Робота з ВЧ-генераторами, Bluetooth-аудіо, ІЧ-зв\'язком та автомобільною діагностикою (OBD/K-Line).',
        about_learning_title: 'Постійне навчання',
        about_learning_desc: 'Дослідження нових технологій, протоколів та підходів. Кожен проєкт — нагода навчитися чомусь новому.',
        skills_title: 'Навички',
        skills_languages: 'Мови',
        skills_platforms: 'Платформи',
        skills_protocols: 'Протоколи',
        skills_sensors: 'Датчики / МС',
        projects_title: 'Проєкти',
        proj_meteo_desc: 'Метеостанція на базі датчика AHT20+BMP280. Вимірювання температури, вологості та тиску.',
        proj_si5351_desc: 'Генератор частоти на SI5351 з веб-інтерфейсом та ESP32-C3. Універсальний ВЧ-генератор сигналів.',
        proj_ecu_desc: 'Емулятор ECU для ELM327 та K-Line адаптера. Симуляція інтерфейсу автомобільної діагностики.',
        proj_eink_desc: 'Проєкт з E-Ink дисплеєм. Робота з електронним папером для енергоощадних індикаторів.',
        proj_ir_desc: 'Проєкт Arduino для декодування інфрачервоних сигналів пультів керування.',
        proj_esp32gen_desc: 'Компактний генератор сигналів 10Гц\u20131МГц на базі ESP32-C3.',
        proj_hp5883_desc: 'Модуль GY-271 з HP5883 / QMC5883P магнітометром на Arduino UNO.',
        proj_vl6180x_desc: 'Вимірювання відстані з датчиком VL6180X на ESP32 з SSD1306 OLED-дисплеєм.',
        proj_bt_desc: 'ESP32 Bluetooth-аудіо трансивер з MAX98357 ЦАП (ESP32-A2DP).',
        proj_st77xx_desc: 'Драйвер ST77xx TFT-дисплея з DMA для швидкого оновлення зображення на мікроконтролерах.',
        proj_github: 'GitHub \u2192',
        contact_title: 'Контакти',
        contact_text: 'Хочете зв\'язатися? Напишіть мені — я завжди відкритий до нових ідей та співпраці.',
        contact_bio: 'Тут я ділюся своєю подорожжю у світ електроніки, аматорського радіо (73!) та автомобільної техніки. Якщо вас цікавить, як речі працюють зсередини, ви тут правильно.',
        contact_what_title: 'Що ви знайдете тут:',
        contact_microcontrollers: 'Глибококе занурення в програмуванні Atmel (AVR) та апаратних проектах.',
        contact_cartech: 'OBD-II діагностика, кастомне кодування та обслуговування (зокрема для Chevrolet Aveo T300 та далі).',
        contact_diy: 'Відновлення електроніки, пайка та створення кастомних гаджетів з нуля.',
        contact_hamradio: 'Експерименти з антенами, трансиверами та радіозв\'язком.',
        contact_goal: 'Моя мета — поділитися практичними знаннями та зберегти "DIY-дух" живим!',
        contact_support_title: 'Підтримайте моє хобі та майбутні проєкти',
        contact_support_text: 'Якщо ви вважаєте мій контент корисним і хочете підтримати розробку нових пристроїв та відео, ви можете зробити донат тут:',
        contact_btc_label: '🪙 BTC-адреса:',
        contact_thanks: 'Дякую за перегляд і не забудьте підписатися!',
        contact_location: '📍 Локація:',
        contact_location_value: 'Австрія',
        footer_copy: '\u00a9 2025 ATMEL. Усі права захищені.'
    },
    en: {
        nav_about: 'About me',
        nav_skills: 'Skills',
        nav_projects: 'Projects',
        nav_contact: 'Contact',
        hero_greeting: "Hello, I'm",
        hero_tagline: 'Embedded Developer \u2022 Maker \u2022 Researcher',
        hero_projects: 'My Projects',
        hero_contact: 'Contact',
        about_title: 'About me',
        about_embedded_title: 'Embedded Development',
        about_embedded_desc: 'Firmware development for ESP32, Arduino and other microcontrollers. Working with sensors, displays and communication protocols.',
        about_hardware_title: 'Hardware',
        about_hardware_desc: 'Working with RF generators, Bluetooth audio, IR communication and automotive diagnostics (OBD/K-Line).',
        about_learning_title: 'Continuous Learning',
        about_learning_desc: 'Exploring new technologies, protocols and approaches. Every project is an opportunity to learn something new.',
        skills_title: 'Skills',
        skills_languages: 'Languages',
        skills_platforms: 'Platforms',
        skills_protocols: 'Protocols',
        skills_sensors: 'Sensors / ICs',
        projects_title: 'Projects',
        proj_meteo_desc: 'Weather station based on AHT20+BMP280 sensor. Measuring temperature, humidity and atmospheric pressure.',
        proj_si5351_desc: 'SI5351 frequency generator with web interface and ESP32-C3. Versatile RF signal generator.',
        proj_ecu_desc: 'ECU Emulator for ELM327 and K-Line adapter. Simulating automotive diagnostic interface.',
        proj_eink_desc: 'E-Ink display project. Working with electronic paper for low-power displays.',
        proj_ir_desc: 'Arduino project for decoding infrared signals from remote controls.',
        proj_esp32gen_desc: 'Compact signal generator 10Hz\u20131MHz based on ESP32-C3.',
        proj_hp5883_desc: 'GY-271 module with HP5883 / QMC5883P magnetometer on Arduino UNO.',
        proj_vl6180x_desc: 'Distance measurement with VL6180X sensor on ESP32 with SSD1306 OLED display.',
        proj_bt_desc: 'ESP32 Bluetooth audio transceiver with MAX98357 DAC (ESP32-A2DP).',
        proj_st77xx_desc: 'ST77xx TFT display driver with DMA for fast screen updates on microcontrollers.',
        proj_github: 'GitHub \u2192',
        contact_title: 'Contact',
        contact_text: "Want to get in touch? Write to me — I'm always open to new ideas and collaboration.",
        contact_bio: 'Here I share my journey into the world of electronics, ham radio (73!), and automotive engineering. If you are interested in how things work from the inside, you have come to the right place.',
        contact_what_title: 'What you will find here:',
        contact_microcontrollers: 'Deep dives into Atmel (AVR) programming and hardware projects.',
        contact_cartech: 'OBD-II diagnostics, custom coding, and maintenance (specifically for Chevrolet Aveo T300 and beyond).',
        contact_diy: 'Restoring electronics, soldering, and building custom gadgets from scratch.',
        contact_hamradio: 'Experiments with antennas, transceivers, and radio communication.',
        contact_goal: 'My goal is to share practical knowledge and keep the "DIY spirit" alive!',
        contact_support_title: 'Support my hobby & future projects',
        contact_support_text: 'If you find my content useful and would like to support the development of new devices and videos, you can donate here:',
        contact_btc_label: '🪙 BTC Address:',
        contact_thanks: 'Thanks for watching and do not forget to subscribe!',
        contact_location: '📍 Location:',
        contact_location_value: 'Austria',
        footer_copy: '\u00a9 2025 ATMEL. All rights reserved.'
    },
    ru: {
        nav_about: 'Обо мне',
        nav_skills: 'Навыки',
        nav_projects: 'Проекты',
        nav_contact: 'Контакты',
        hero_greeting: 'Привет, я',
        hero_tagline: 'Embedded-разработчик \u2022 Мейкер \u2022 Исследователь',
        hero_projects: 'Мои проекты',
        hero_contact: 'Связаться',
        about_title: 'Обо мне',
        about_embedded_title: 'Embedded-разработка',
        about_embedded_desc: 'Разработка прошивок для ESP32, Arduino и других микроконтроллеров. Работа с датчиками, дисплеями и протоколами связи.',
        about_hardware_title: 'Аппаратное обеспечение',
        about_hardware_desc: 'Работа с ВЧ-генераторами, Bluetooth-аудио, ИК-связью и автомобильной диагностикой (OBD/K-Line).',
        about_learning_title: 'Постоянное обучение',
        about_learning_desc: 'Исследование новых технологий, протоколов и подходов. Каждый проект — шанс научиться чему-то новому.',
        skills_title: 'Навыки',
        skills_languages: 'Языки',
        skills_platforms: 'Платформы',
        skills_protocols: 'Протоколы',
        skills_sensors: 'Датчики / ИС',
        projects_title: 'Проекты',
        proj_meteo_desc: 'Метеостанция на базе датчика AHT20+BMP280. Измерение температуры, влажности и давления.',
        proj_si5351_desc: 'Генератор частоты на SI5351 с веб-интерфейсом и ESP32-C3. Универсальный ВЧ-генератор сигналов.',
        proj_ecu_desc: 'Эмулятор ECU для ELM327 и K-Line адаптера. Симуляция интерфейса автомобильной диагностики.',
        proj_eink_desc: 'Проект с E-Ink дисплеем. Работа с электронными чернилами для энергосберегающих индикаторов.',
        proj_ir_desc: 'Проект Arduino для декодирования инфракрасных сигналов пультов управления.',
        proj_esp32gen_desc: 'Компактный генератор сигналов 10Гц\u20131МГц на базе ESP32-C3.',
        proj_hp5883_desc: 'Модуль GY-271 с HP5883 / QMC5883P магнитометром на Arduino UNO.',
        proj_vl6180x_desc: 'Измерение расстояния с датчиком VL6180X на ESP32 с SSD1306 OLED-дисплеем.',
        proj_bt_desc: 'ESP32 Bluetooth-аудио трансивер с MAX98357 ЦАП (ESP32-A2DP).',
        proj_st77xx_desc: 'Драйвер ST77xx TFT-дисплея с DMA для быстрого обновления экрана на микроконтроллерах.',
        proj_github: 'GitHub \u2192',
        contact_title: 'Контакты',
        contact_text: 'Хотите связаться? Пишите — всегда открыт к новым идеям и сотрудничеству.',
        contact_bio: 'Здесь я делюсь своим путешествием в мир электроники, любительского радио (73!) и автомобильной техники. Если вам интересно, как вещи работают изнутри, вы пришли по адресу.',
        contact_what_title: 'Что вы найдёте здесь:',
        contact_microcontrollers: 'Глубокое погружение в программирование Atmel (AVR) и аппаратные проекты.',
        contact_cartech: 'OBD-II диагностика, кастомное кодирование и обслуживание (в частности для Chevrolet Aveo T300 и далее).',
        contact_diy: 'Восстановление электроники, пайка и создание кастомных гаджетов с нуля.',
        contact_hamradio: 'Эксперименты с антеннами, трансиверами и радиосвязью.',
        contact_goal: 'Моя цель — делиться практическими знаниями и сохранять "DIY дух" живым!',
        contact_support_title: 'Поддержите моё хобби и будущие проекты',
        contact_support_text: 'Если вы считаете мой контент полезным и хотите поддержать разработку новых устройств и видео, вы можете сделать донат здесь:',
        contact_btc_label: '🪙 BTC-адрес:',
        contact_thanks: 'Спасибо за просмотр и не забудьте подписаться!',
        contact_location: '📍 Локация:',
        contact_location_value: 'Австрия',
        footer_copy: '\u00a9 2025 ATMEL. Все права защищены.'
    }
};

// === Language switching ===
const langMap = { de: 'de', ua: 'uk', en: 'en', ru: 'ru' };

function setLanguage(lang) {
    if (!i18n[lang]) return;
    document.documentElement.lang = langMap[lang] || lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18n[lang][key]) {
            el.textContent = i18n[lang][key];
        }
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    localStorage.setItem('lang', lang);
}

const savedLang = localStorage.getItem('lang') || 'de';
setLanguage(savedLang);

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// === Theme toggle ===
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
});

// === Mobile menu ===
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// === Scroll animations ===
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// === Navbar scroll effect ===
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// === High-Quality RP2040 Zero Particle System ===
const canvas = document.getElementById('particlesCanvas');
const ctx = canvas.getContext('2d');
let particles = [];
let animationId;

function resizeCanvas() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
}

class RP2040Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        
        // Movement types
        const types = ['drift', 'drift', 'speedster', 'slow', 'projectile'];
        this.type = types[Math.floor(Math.random() * types.length)];
        
        let speedMultiplier = 1;
        if (this.type === 'speedster') speedMultiplier = 2.5;
        if (this.type === 'slow') speedMultiplier = 0.4;
        if (this.type === 'projectile') speedMultiplier = 3.5;
        
        if (this.type === 'projectile') {
            const angle = Math.random() * Math.PI * 2;
            const speed = 2 + Math.random() * 2;
            this.vx = Math.cos(angle) * speed * speedMultiplier;
            this.vy = Math.sin(angle) * speed * speedMultiplier;
        } else {
            this.vx = (Math.random() - 0.5) * 1.5 * speedMultiplier;
            this.vy = (Math.random() - 0.5) * 1.5 * speedMultiplier;
        }
        
        this.size = 8 + Math.random() * 8;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.04;
        this.opacity = 0.5 + Math.random() * 0.3;
        this.ledBlink = Math.random() * Math.PI * 2;
        this.ledColor = Math.random() > 0.5 ? '#00ff00' : '#ff6600';
        this.speedChangeTimer = 50 + Math.random() * 100;
    }

    update() {
        this.speedChangeTimer--;
        if (this.speedChangeTimer <= 0) {
            this.speedChangeTimer = 50 + Math.random() * 150;
            const change = (Math.random() - 0.5) * 0.5;
            if (this.type !== 'projectile') {
                this.vx *= (1 + change);
                this.vy *= (1 + change);
                const maxSpeed = this.type === 'speedster' ? 4 : 2;
                const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
                if (speed > maxSpeed) {
                    this.vx = (this.vx / speed) * maxSpeed;
                    this.vy = (this.vy / speed) * maxSpeed;
                }
            }
        }
        
        this.x += this.vx;
        this.y += this.vy;
        this.rotation += this.rotationSpeed;
        this.ledBlink += 0.1;

        const margin = this.size;
        if (this.x < -margin) this.x = canvas.width + margin;
        if (this.x > canvas.width + margin) this.x = -margin;
        if (this.y < -margin) this.y = canvas.height + margin;
        if (this.y > canvas.height + margin) this.y = -margin;
    }

    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.globalAlpha = this.opacity;

        const w = this.size * 1.6;
        const h = this.size;
        const r = 4;

        // PCB board - blue with gradient
        const pcbGradient = ctx.createLinearGradient(-w/2, -h/2, w/2, h/2);
        pcbGradient.addColorStop(0, '#1a4a8a');
        pcbGradient.addColorStop(0.5, '#2a6ab8');
        pcbGradient.addColorStop(1, '#1a4a8a');
        
        ctx.fillStyle = pcbGradient;
        ctx.strokeStyle = '#3a7ac8';
        ctx.lineWidth = 1.5;
        
        // Main board shape
        ctx.beginPath();
        ctx.roundRect(-w/2, -h/2, w, h, r);
        ctx.fill();
        ctx.stroke();

        // Mounting holes
        ctx.fillStyle = '#0a2a4a';
        const holeSize = 4;
        const holes = [
            [-w/2 + 6, -h/2 + 6],
            [w/2 - 6, -h/2 + 6],
            [-w/2 + 6, h/2 - 6],
            [w/2 - 6, h/2 - 6]
        ];
        holes.forEach(([hx, hy]) => {
            ctx.beginPath();
            ctx.arc(hx, hy, holeSize, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#ffd700';
            ctx.lineWidth = 1;
            ctx.stroke();
        });

        // USB-C connector
        ctx.fillStyle = '#c0c0c0';
        ctx.strokeStyle = '#808080';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(w/2 - 10, -5, 10, 10, 2);
        ctx.fill();
        ctx.stroke();
        // USB-C internal
        ctx.fillStyle = '#404040';
        ctx.fillRect(w/2 - 8, -3, 6, 6);

        // RP2040 chip
        const chipW = w * 0.35;
        const chipH = h * 0.35;
        ctx.fillStyle = '#1a1a1a';
        ctx.strokeStyle = '#404040';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(-chipW/2, -chipH/2, chipW, chipH, 2);
        ctx.fill();
        ctx.stroke();
        // Chip text
        ctx.fillStyle = '#888';
        ctx.font = `bold ${this.size * 0.08}px Inter`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('RP2040', 0, -this.size * 0.03);
        ctx.font = `${this.size * 0.06}px Inter`;
        ctx.fillStyle = '#666';
        ctx.fillText('RPI', 0, this.size * 0.08);

        // Gold pins on sides
        ctx.fillStyle = '#ffd700';
        const pinCount = 12;
        const pinSpacing = (h - 16) / (pinCount - 1);
        for (let i = 0; i < pinCount; i++) {
            const py = -h/2 + 8 + i * pinSpacing;
            // Left pins
            ctx.beginPath();
            ctx.arc(-w/2 + 5, py, 2.5, 0, Math.PI * 2);
            ctx.fill();
            // Right pins
            ctx.beginPath();
            ctx.arc(w/2 - 20, py, 2.5, 0, Math.PI * 2);
            ctx.fill();
        }

        // Flash memory chip
        const flashW = w * 0.25;
        const flashH = h * 0.2;
        ctx.fillStyle = '#2a2a2a';
        ctx.strokeStyle = '#505050';
        ctx.beginPath();
        ctx.roundRect(-flashW/2, h/2 - flashH - 8, flashW, flashH, 2);
        ctx.fill();
        ctx.stroke();

        // LED with animated glow
        const ledOpacity = 0.4 + Math.sin(this.ledBlink) * 0.6;
        const ledX = -w/2 + 15;
        const ledY = -h/2 + 15;
        
        // LED glow
        ctx.shadowColor = this.ledColor;
        ctx.shadowBlur = 15;
        ctx.fillStyle = this.ledColor;
        ctx.globalAlpha = ledOpacity * this.opacity;
        ctx.beginPath();
        ctx.arc(ledX, ledY, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = this.opacity;

        // LED highlight
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(ledX - 1, ledY - 1, 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Board text labels
        ctx.fillStyle = '#fff';
        ctx.font = `bold ${this.size * 0.07}px Inter`;
        ctx.textAlign = 'center';
        ctx.fillText('RP2040', 0, -this.size * 0.35);
        ctx.font = `${this.size * 0.06}px Inter`;
        ctx.fillStyle = '#aaa';
        ctx.fillText('ZERO', 0, -this.size * 0.28);

        // Reset button
        ctx.fillStyle = '#303030';
        ctx.strokeStyle = '#505050';
        ctx.beginPath();
        ctx.arc(w/2 - 15, h/2 - 15, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = '#606060';
        ctx.beginPath();
        ctx.arc(w/2 - 15, h/2 - 15, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
    }
}

function initParticles() {
    resizeCanvas();
    particles = [];
    const particleCount = Math.min(30, Math.floor(canvas.width * canvas.height / 15000));
    for (let i = 0; i < particleCount; i++) {
        particles.push(new RP2040Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });

    animationId = requestAnimationFrame(animateParticles);
}

// Initialize particles
initParticles();

// === Typing Effect ===
function typeWriter(element, text, speed = 50) {
    element.textContent = '';
    let i = 0;

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed + Math.random() * 30);
        }
    }
    type();
}

// === Cursor Glow ===
const cursorGlow = document.getElementById('cursorGlow');
let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    cursorGlow.style.left = cursorX + 'px';
    cursorGlow.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
}

// === 3D Tilt Effect ===
function initTiltEffect() {
    const cards = document.querySelectorAll('.about-card, .project-card, .skill-category');

    cards.forEach(card => {
        card.classList.add('tilt-card');
        const inner = card.querySelector('.about-icon, .project-body, .skill-tags') || card.firstElementChild;
        if (inner) inner.classList.add('tilt-card-inner');

        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
        });
    });
}

// === Magnetic Buttons ===
function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn, .contact-card');

    buttons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translate(0, 0)';
        });
    });
}

// === Enhanced Scroll Animations with Stagger ===
function initStaggerAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                    entry.target.style.transitionDelay = '0s';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        el.classList.add('stagger-item');
        observer.observe(el);
    });
}

// === Skill Tag Counter Animation ===
function initSkillCounter() {
    const skillTags = document.querySelectorAll('.skill-tag');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.transform = 'scale(1)';
                    entry.target.style.opacity = '1';
                }, index * 50);
            }
        });
    }, { threshold: 0.5 });

    skillTags.forEach(tag => {
        tag.style.transform = 'scale(0)';
        tag.style.opacity = '0';
        tag.style.transition = 'transform 0.3s ease, opacity 0.3s ease';
        observer.observe(tag);
    });
}

// === Thematic Project Card Animations ===
function initProjectAnimations() {
    const projectCards = document.querySelectorAll('.project-card');

    const animations = {
        'meteo': { icon: '☁️', anim: 'weather-pulse', color: '#60a5fa' },
        'si5351': { icon: '〰️', anim: 'wave-gen', color: '#a78bfa' },
        'ecu': { icon: '🚗', anim: 'engine-rev', color: '#f87171' },
        'eink': { icon: '📄', anim: 'ink-refresh', color: '#9ca3af' },
        'ir': { icon: '📡', anim: 'signal-pulse', color: '#fbbf24' },
        'esp32': { icon: '⚡', anim: 'spark-gen', color: '#34d399' },
        'hp5883': { icon: '🧭', anim: 'compass-spin', color: '#60a5fa' },
        'vl6180x': { icon: '📏', anim: 'laser-scan', color: '#f472b6' },
        'bt': { icon: '🔊', anim: 'sound-wave', color: '#818cf8' },
        'st77xx': { icon: '🖥️', anim: 'screen-refresh', color: '#34d399' }
    };

    projectCards.forEach((card, index) => {
        const projectName = card.querySelector('h3').textContent.toLowerCase();
        const animKey = Object.keys(animations).find(key => projectName.includes(key));
        const animData = animations[animKey] || animations['esp32'];

        // Add animation class
        card.classList.add('project-animated');
        card.dataset.anim = animData.anim;

        // Add hover sound wave effect
        card.addEventListener('mouseenter', () => {
            createProjectEffect(card, animData);
        });

        // Add click ripple with thematic color
        card.addEventListener('click', (e) => {
            const ripple = document.createElement('div');
            ripple.style.cssText = `
                position: absolute;
                width: 20px;
                height: 20px;
                background: ${animData.color};
                border-radius: 50%;
                transform: scale(0);
                animation: ripple-burst 0.6s ease-out;
                pointer-events: none;
                left: ${e.offsetX - 10}px;
                top: ${e.offsetY - 10}px;
            `;
            card.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add CSS for effects
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple-burst {
            to { transform: scale(20); opacity: 0; }
        }
        @keyframes weather-pulse {
            0%, 100% { transform: scale(1); filter: brightness(1); }
            50% { transform: scale(1.02); filter: brightness(1.2) drop-shadow(0 0 10px #60a5fa); }
        }
        @keyframes wave-gen {
            0% { background-position: 0% 0%; }
            100% { background-position: 100% 100%; }
        }
        @keyframes engine-rev {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-2px) rotate(-1deg); }
            75% { transform: translateX(2px) rotate(1deg); }
        }
        @keyframes ink-refresh {
            0% { filter: invert(0); }
            50% { filter: invert(1); }
            100% { filter: invert(0); }
        }
        @keyframes signal-pulse {
            0%, 100% { box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.4); }
            50% { box-shadow: 0 0 0 20px rgba(251, 191, 36, 0); }
        }
        @keyframes spark-gen {
            0%, 100% { filter: drop-shadow(0 0 5px #34d399); }
            50% { filter: drop-shadow(0 0 20px #34d399); }
        }
        @keyframes compass-spin {
            0% { --angle: 0deg; }
            100% { --angle: 360deg; }
        }
        @keyframes laser-scan {
            0% { background: linear-gradient(90deg, transparent 0%, rgba(244, 114, 182, 0.3) 50%, transparent 100%); background-position: -200% 0; }
            100% { background: linear-gradient(90deg, transparent 0%, rgba(244, 114, 182, 0.3) 50%, transparent 100%); background-position: 200% 0; }
        }
        @keyframes sound-wave {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(1.05); }
        }
        @keyframes screen-refresh {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
        .project-animated:hover {
            animation: ${projectCards[0]?.dataset.anim || 'none'} 0.5s ease;
        }
    `;
    document.head.appendChild(style);
}

function createProjectEffect(card, animData) {
    const effect = document.createElement('div');
    effect.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 24px;
        animation: icon-bounce 0.5s ease;
        pointer-events: none;
        z-index: 10;
    `;
    effect.textContent = animData.icon;
    card.appendChild(effect);

    const bounceStyle = document.createElement('style');
    bounceStyle.textContent = `
        @keyframes icon-bounce {
            0% { transform: scale(0) rotate(-180deg); }
            50% { transform: scale(1.2) rotate(10deg); }
            100% { transform: scale(1) rotate(0deg); }
        }
    `;
    document.head.appendChild(bounceStyle);

    setTimeout(() => effect.remove(), 500);
}

// === Optimus Prime Canvas Eyes ===
function initOptimusEyes() {
    const canvas = document.getElementById('optimusEyes');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const wrapper = canvas.parentElement;

    function resize() {
        canvas.width = wrapper.offsetWidth;
        canvas.height = wrapper.offsetHeight;
    }
    resize();

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let time = 0;

    // Eye positions (relative to canvas size)
    const leftEye = { x: 0.38, y: 0.42, radius: 0.06 };
    const rightEye = { x: 0.62, y: 0.42, radius: 0.06 };

    wrapper.addEventListener('mousemove', (e) => {
        const rect = wrapper.getBoundingClientRect();
        mouseX = (e.clientX - rect.left) / rect.width * canvas.width;
        mouseY = (e.clientY - rect.top) / rect.height * canvas.height;
    });

    function drawEye(eye, isBlinking) {
        const cx = eye.x * canvas.width;
        const cy = eye.y * canvas.height;
        const r = eye.radius * Math.min(canvas.width, canvas.height);

        // Calculate look direction
        const dx = mouseX - cx;
        const dy = mouseY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxOffset = r * 0.3;
        const offsetX = (dx / dist) * Math.min(dist * 0.1, maxOffset) || 0;
        const offsetY = (dy / dist) * Math.min(dist * 0.1, maxOffset) || 0;

        // Eye glow gradient
        const gradient = ctx.createRadialGradient(
            cx + offsetX, cy + offsetY, 0,
            cx + offsetX, cy + offsetY, r * 2
        );
        gradient.addColorStop(0, 'rgba(0, 212, 255, 1)');
        gradient.addColorStop(0.3, 'rgba(0, 212, 255, 0.8)');
        gradient.addColorStop(0.6, 'rgba(0, 128, 255, 0.4)');
        gradient.addColorStop(1, 'transparent');

        // Main eye glow
        ctx.save();
        ctx.globalCompositeOperation = 'screen';

        // Outer glow
        ctx.beginPath();
        ctx.ellipse(cx + offsetX, cy + offsetY, r * 2, r, 0, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Inner bright core
        ctx.beginPath();
        ctx.ellipse(cx + offsetX, cy + offsetY, r * 0.6, r * 0.4, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(200, 250, 255, 0.9)';
        ctx.shadowColor = '#00d4ff';
        ctx.shadowBlur = 20;
        ctx.fill();

        // Highlight
        ctx.beginPath();
        ctx.ellipse(cx + offsetX - r*0.2, cy + offsetY - r*0.1, r * 0.15, r * 0.1, 0, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.fill();

        ctx.restore();

        // Eyelid blink effect
        if (isBlinking) {
            ctx.save();
            ctx.fillStyle = 'rgba(10, 10, 15, 0.95)';
            ctx.beginPath();
            ctx.ellipse(cx, cy, r * 2.5, r * 1.2 * blinkProgress, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
        }
    }

    let blinkProgress = 0;
    let isBlinking = false;
    let nextBlink = 100 + Math.random() * 200;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        time++;

        // Random blinking
        nextBlink--;
        if (nextBlink <= 0) {
            isBlinking = true;
            blinkProgress = 0;
            nextBlink = 100 + Math.random() * 300;
        }

        if (isBlinking) {
            blinkProgress += 0.15;
            if (blinkProgress >= 1) {
                blinkProgress = 1;
                isBlinking = false;
            }
        }

        // Pulse intensity
        const pulse = 1 + Math.sin(time * 0.05) * 0.1;

        drawEye(leftEye, isBlinking && blinkProgress < 1);
        drawEye(rightEye, isBlinking && blinkProgress < 1);

        // Additional energy arcs
        if (Math.random() > 0.95) {
            ctx.save();
            ctx.strokeStyle = 'rgba(0, 212, 255, 0.6)';
            ctx.lineWidth = 1;
            ctx.shadowColor = '#00d4ff';
            ctx.shadowBlur = 10;
            ctx.beginPath();
            ctx.moveTo(leftEye.x * canvas.width, (leftEye.y + 0.15) * canvas.height);
            ctx.lineTo(rightEye.x * canvas.width, (rightEye.y + 0.15) * canvas.height);
            ctx.stroke();
            ctx.restore();
        }

        requestAnimationFrame(animate);
    }

    animate();
    window.addEventListener('resize', resize);
}

// === Project Canvas Animations ===
class ProjectAnimation {
    constructor(canvas, type) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.type = type;
        this.width = canvas.offsetWidth;
        this.height = canvas.offsetHeight;
        canvas.width = this.width * window.devicePixelRatio;
        canvas.height = this.height * window.devicePixelRatio;
        this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        this.time = 0;
        this.init();
    }

    init() {
        // Override in subclasses
    }

    update() {
        this.time += 0.016;
    }

    draw() {
        // Override in subclasses
    }

    animate() {
        this.update();
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

class WeatherAnimation extends ProjectAnimation {
    init() {
        this.clouds = [];
        for (let i = 0; i < 3; i++) {
            this.clouds.push({
                x: Math.random() * this.width,
                y: 20 + Math.random() * 40,
                size: 30 + Math.random() * 20,
                speed: 0.2 + Math.random() * 0.3
            });
        }
    }

    draw() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.width, this.height);
        
        // Background gradient
        const bg = ctx.createLinearGradient(0, 0, 0, this.height);
        bg.addColorStop(0, '#4a90d9');
        bg.addColorStop(1, '#87ceeb');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, this.width, this.height);

        // Clouds
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        this.clouds.forEach(cloud => {
            ctx.beginPath();
            ctx.arc(cloud.x, cloud.y, cloud.size, 0, Math.PI * 2);
            ctx.arc(cloud.x + cloud.size * 0.5, cloud.y - cloud.size * 0.2, cloud.size * 0.7, 0, Math.PI * 2);
            ctx.arc(cloud.x + cloud.size, cloud.y, cloud.size * 0.8, 0, Math.PI * 2);
            ctx.fill();
            
            cloud.x += cloud.speed;
            if (cloud.x > this.width + 50) cloud.x = -50;
        });

        // Sun
        const sunY = 30 + Math.sin(this.time) * 5;
        ctx.fillStyle = '#ffd700';
        ctx.shadowColor = '#ffd700';
        ctx.shadowBlur = 20;
        ctx.beginPath();
        ctx.arc(this.width - 60, sunY, 25, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Temperature display
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 24px Inter';
        ctx.textAlign = 'center';
        const temp = 20 + Math.sin(this.time * 0.5) * 5;
        ctx.fillText(`${temp.toFixed(1)}°C`, this.width / 2, this.height - 30);
    }
}

class WaveAnimation extends ProjectAnimation {
    draw() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.width, this.height);
        
        // Background
        const bg = ctx.createLinearGradient(0, 0, 0, this.height);
        bg.addColorStop(0, '#1a1a2e');
        bg.addColorStop(1, '#16213e');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, this.width, this.height);

        // Sine waves
        for (let i = 0; i < 3; i++) {
            ctx.beginPath();
            ctx.strokeStyle = `hsla(${200 + i * 40}, 70%, 60%, 0.7)`;
            ctx.lineWidth = 3;
            
            for (let x = 0; x < this.width; x++) {
                const y = this.height / 2 + 
                    Math.sin((x + this.time * 50) * 0.02 + i) * 30 +
                    Math.sin((x + this.time * 30) * 0.01) * 20;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();
        }

        // Frequency display
        ctx.fillStyle = '#00ff88';
        ctx.font = 'bold 20px Inter';
        ctx.textAlign = 'center';
        const freq = 1000 + Math.sin(this.time) * 500;
        ctx.fillText(`${freq.toFixed(0)} Hz`, this.width / 2, this.height - 25);
    }
}

class CompassAnimation extends ProjectAnimation {
    draw() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.width, this.height);
        
        // Background
        const bg = ctx.createRadialGradient(this.width/2, this.height/2, 0, this.width/2, this.height/2, this.width/2);
        bg.addColorStop(0, '#2a4a6a');
        bg.addColorStop(1, '#1a2a3a');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, this.width, this.height);

        const cx = this.width / 2;
        const cy = this.height / 2;
        const angle = this.time * 0.5;

        // Compass circle
        ctx.strokeStyle = '#ffd700';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, 60, 0, Math.PI * 2);
        ctx.stroke();

        // North needle
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);
        
        ctx.fillStyle = '#ff4444';
        ctx.beginPath();
        ctx.moveTo(0, -50);
        ctx.lineTo(8, 0);
        ctx.lineTo(0, 10);
        ctx.lineTo(-8, 0);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = '#4444ff';
        ctx.beginPath();
        ctx.moveTo(0, 50);
        ctx.lineTo(8, 0);
        ctx.lineTo(0, -10);
        ctx.lineTo(-8, 0);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();

        // Center dot
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(cx, cy, 5, 0, Math.PI * 2);
        ctx.fill();

        // Direction
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 16px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('N', cx, cy - 70);
    }
}

class BluetoothAnimation extends ProjectAnimation {
    draw() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.width, this.height);
        
        // Background
        const bg = ctx.createRadialGradient(this.width/2, this.height/2, 0, this.width/2, this.height/2, this.width/2);
        bg.addColorStop(0, '#0066cc');
        bg.addColorStop(1, '#003366');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, this.width, this.height);

        const cx = this.width / 2;
        const cy = this.height / 2;
        const pulse = 1 + Math.sin(this.time * 3) * 0.1;

        // Bluetooth symbol
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(pulse, pulse);
        
        ctx.beginPath();
        ctx.moveTo(-15, -20);
        ctx.lineTo(15, 0);
        ctx.lineTo(-15, 20);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(15, -20);
        ctx.lineTo(-15, 0);
        ctx.lineTo(15, 20);
        ctx.stroke();
        
        ctx.restore();

        // Waves
        ctx.strokeStyle = 'rgba(0, 150, 255, 0.5)';
        ctx.lineWidth = 2;
        for (let i = 1; i <= 3; i++) {
            const radius = 40 + i * 20 + Math.sin(this.time * 2 + i) * 10;
            ctx.beginPath();
            ctx.arc(cx, cy, radius, -Math.PI/4, Math.PI/4);
            ctx.stroke();
        }
    }
}

class DisplayAnimation extends ProjectAnimation {
    draw() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.width, this.height);
        
        // Background (screen)
        ctx.fillStyle = '#1a1a1a';
        ctx.fillRect(10, 10, this.width - 20, this.height - 20);
        
        // Screen border
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 4;
        ctx.strokeRect(10, 10, this.width - 20, this.height - 20);

        // Animated pixels
        const pixelSize = 8;
        const cols = Math.floor((this.width - 30) / pixelSize);
        const rows = Math.floor((this.height - 30) / pixelSize);
        
        for (let i = 0; i < 50; i++) {
            const x = 15 + (i % cols) * pixelSize;
            const y = 15 + Math.floor(i / cols) * pixelSize;
            const hue = (this.time * 50 + i * 10) % 360;
            ctx.fillStyle = `hsl(${hue}, 70%, 60%)`;
            ctx.fillRect(x, y, pixelSize - 1, pixelSize - 1);
        }

        // Scan line
        const scanY = 15 + (Math.sin(this.time * 2) + 1) / 2 * (this.height - 30);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        ctx.fillRect(10, scanY, this.width - 20, 2);
    }
}

class LidarAnimation extends ProjectAnimation {
    draw() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.width, this.height);
        
        // Background
        const bg = ctx.createRadialGradient(this.width/2, this.height/2, 0, this.width/2, this.height/2, this.width/2);
        bg.addColorStop(0, '#2a2a4a');
        bg.addColorStop(1, '#1a1a2a');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, this.width, this.height);

        const cx = this.width / 2;
        const cy = this.height / 2;
        const angle = this.time * 2;

        // Lidar sensor
        ctx.fillStyle = '#444';
        ctx.beginPath();
        ctx.arc(cx, cy, 15, 0, Math.PI * 2);
        ctx.fill();

        // Rotating beam
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(angle);
        
        const gradient = ctx.createLinearGradient(0, 0, 100, 0);
        gradient.addColorStop(0, 'rgba(255, 0, 0, 0.8)');
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, 100, -0.2, 0.2);
        ctx.closePath();
        ctx.fill();
        
        ctx.restore();

        // Distance points
        for (let i = 0; i < 8; i++) {
            const a = (i / 8) * Math.PI * 2;
            const dist = 40 + Math.sin(this.time + i) * 20;
            ctx.fillStyle = '#ff4444';
            ctx.beginPath();
            ctx.arc(cx + Math.cos(a) * dist, cy + Math.sin(a) * dist, 3, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

class OBDAnimation extends ProjectAnimation {
    draw() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.width, this.height);
        
        // Background
        ctx.fillStyle = '#1a2a1a';
        ctx.fillRect(0, 0, this.width, this.height);

        // Car outline
        ctx.strokeStyle = '#00ff00';
        ctx.lineWidth = 2;
        ctx.strokeRect(20, 30, this.width - 40, this.height - 60);

        // Data stream
        ctx.fillStyle = '#00ff00';
        ctx.font = '12px monospace';
        for (let i = 0; i < 5; i++) {
            const y = 50 + i * 20;
            const data = `0x${Math.floor(Math.random() * 255).toString(16).padStart(2, '0').toUpperCase()}`;
            ctx.fillText(`PID: ${data}`, 30, y);
        }

        // Status
        ctx.fillStyle = '#00ff00';
        ctx.font = 'bold 14px Inter';
        ctx.fillText('OBD CONNECTED', this.width / 2, this.height - 20);
    }
}

class EInkAnimation extends ProjectAnimation {
    draw() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.width, this.height);
        
        // E-ink background
        ctx.fillStyle = '#f5f5f5';
        ctx.fillRect(5, 5, this.width - 10, this.height - 10);

        // Border
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.strokeRect(5, 5, this.width - 10, this.height - 10);

        // Text (e-ink style - grayscale)
        ctx.fillStyle = '#000';
        ctx.font = 'bold 16px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('E-INK', this.width / 2, this.height / 2 - 10);
        
        ctx.font = '12px Inter';
        ctx.fillStyle = '#333';
        ctx.fillText('Display', this.width / 2, this.height / 2 + 15);

        // Refresh effect
        if (Math.random() > 0.98) {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(5, 5, this.width - 10, this.height - 10);
        }
    }
}

class IRAnimation extends ProjectAnimation {
    draw() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.width, this.height);
        
        // Background
        ctx.fillStyle = '#1a1a2a';
        ctx.fillRect(0, 0, this.width, this.height);

        const cx = this.width / 2;
        const cy = this.height / 2;

        // IR LED
        ctx.fillStyle = '#333';
        ctx.beginPath();
        ctx.arc(cx, cy, 20, 0, Math.PI * 2);
        ctx.fill();

        // IR waves
        ctx.strokeStyle = `rgba(255, 0, 0, ${0.5 + Math.sin(this.time * 5) * 0.5})`;
        ctx.lineWidth = 2;
        
        for (let i = 0; i < 3; i++) {
            const radius = 25 + i * 15 + (this.time * 20) % 20;
            ctx.beginPath();
            ctx.arc(cx, cy, radius, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Signal pulse
        if (Math.sin(this.time * 3) > 0.5) {
            ctx.fillStyle = '#ff0000';
            ctx.shadowColor = '#ff0000';
            ctx.shadowBlur = 20;
            ctx.beginPath();
            ctx.arc(cx, cy, 8, 0, Math.PI * 2);
            ctx.fill();
            ctx.shadowBlur = 0;
        }
    }
}

class SignalAnimation extends ProjectAnimation {
    draw() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.width, this.height);
        
        // Background
        const bg = ctx.createLinearGradient(0, 0, 0, this.height);
        bg.addColorStop(0, '#0a0a1a');
        bg.addColorStop(1, '#1a1a3a');
        ctx.fillStyle = bg;
        ctx.fillRect(0, 0, this.width, this.height);

        // Oscilloscope grid
        ctx.strokeStyle = 'rgba(0, 255, 100, 0.2)';
        ctx.lineWidth = 1;
        for (let i = 0; i < this.width; i += 20) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, this.height);
            ctx.stroke();
        }
        for (let i = 0; i < this.height; i += 20) {
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(this.width, i);
            ctx.stroke();
        }

        // Signal wave
        ctx.strokeStyle = '#00ff66';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        for (let x = 0; x < this.width; x++) {
            const y = this.height / 2 + 
                Math.sin((x + this.time * 100) * 0.05) * 30 +
                Math.sin((x + this.time * 50) * 0.1) * 15;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();

        // Frequency text
        ctx.fillStyle = '#00ff66';
        ctx.font = 'bold 16px Inter';
        ctx.textAlign = 'center';
        ctx.fillText('10Hz - 1MHz', this.width / 2, this.height - 15);
    }
}

// Initialize project animations
function initProjectCanvasAnimations() {
    const canvases = document.querySelectorAll('.project-canvas');
    canvases.forEach(canvas => {
        const type = canvas.dataset.animation;
        let animation;
        
        switch(type) {
            case 'weather': animation = new WeatherAnimation(canvas, type); break;
            case 'wave': animation = new WaveAnimation(canvas, type); break;
            case 'compass': animation = new CompassAnimation(canvas, type); break;
            case 'bluetooth': animation = new BluetoothAnimation(canvas, type); break;
            case 'display': animation = new DisplayAnimation(canvas, type); break;
            case 'lidar': animation = new LidarAnimation(canvas, type); break;
            case 'obd': animation = new OBDAnimation(canvas, type); break;
            case 'eink': animation = new EInkAnimation(canvas, type); break;
            case 'ir': animation = new IRAnimation(canvas, type); break;
            case 'signal': animation = new SignalAnimation(canvas, type); break;
            default: return;
        }
        
        animation.animate();
    });
}

// === Initialize Everything ===
document.addEventListener('DOMContentLoaded', () => {
    // Init particles
    initParticles();
    animateParticles();

    // Init typing effect
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const originalText = typingElement.textContent;
        setTimeout(() => typeWriter(typingElement, originalText, 60), 800);
    }

    // Init cursor glow
    if (window.matchMedia('(pointer: fine)').matches) {
        animateCursor();
    }

    // Init 3D tilt
    initTiltEffect();

    // Init magnetic buttons
    initMagneticButtons();

    // Init stagger animations
    initStaggerAnimations();

    // Init skill counter
    initSkillCounter();

    // Init project animations
    initProjectAnimations();

    // Init project canvas animations
    initProjectCanvasAnimations();
});

// Resize handler
window.addEventListener('resize', () => {
    resizeCanvas();
    initParticles();
});
