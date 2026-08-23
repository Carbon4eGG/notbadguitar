(function() {
  // ================================================
  // НАСТРОЙКИ ГАЛЕРЕИ
  // ================================================
  const galleryImages = [
    "image/gallery/notbadguitar_gallery_1.jpg",
    "image/gallery/notbadguitar_gallery_2.jpg",
    "image/gallery/notbadguitar_gallery_3.jpg",
    "image/gallery/notbadguitar_gallery_4.jpg",
    "image/gallery/notbadguitar_gallery_5.jpg",
    "image/gallery/notbadguitar_gallery_6.jpg",
    "image/gallery/notbadguitar_gallery_7.jpg",
    "image/gallery/notbadguitar_gallery_8.jpg"
  ];
  const gallerySpeed = 4000;

  // ================================================
  // 📨 НАСТРОЙКИ МЕССЕНДЖЕРОВ (БЛОК "НАПИСАТЬ")
  // ================================================
  const messengerRows = [
  [
    { 
      label: "Telegram", 
      url: "tg://resolve?domain=afterthevoid/", 
      colorClass: "btn-telegram",
      iconType: "png",
      iconSrc: "icons/telegram.png"
    }
  ],
  [
    { 
      label: "WhatsApp", 
      url: "whatsapp://send?phone=79997937906&text=/", 
      colorClass: "btn-whatsapp",
      iconType: "png",
      iconSrc: "icons/whatsapp.png"
    },
    { 
      label: "ВКонтакте", 
      url: "https://vk.me/carbon4egg", 
      colorClass: "btn-vk",
      iconType: "png",
      iconSrc: "icons/vk.png"
    }
  ]
];

  // ================================================
  // 🌐 НАСТРОЙКИ СОЦСЕТЕЙ (БЛОК "СОЦ СЕТИ")
  // ================================================
  const socialNetworks = [
  { 
    title: "BOOSTY", 
    desc: "Мысли. Материалы. Музыка.", 
    url: "https://boosty.to/notbadguitar", 
    colorClass: "social-boost",
    iconType: "png",
    iconSrc: "icons/boosty.png"
  },
  { 
    title: "YouTube", 
    desc: "Работы учеников", 
    url: "https://www.youtube.com/@Notbadguitar", 
    colorClass: "social-youtube",
    iconType: "png",
    iconSrc: "icons/youtube.png"
  },
  { 
    title: "YouTube", 
    desc: "Мой канал", 
    url: "https://www.youtube.com/@AfterTheVoid", 
    colorClass: "social-youtube",
    iconType: "png",
    iconSrc: "icons/youtube.png"
  },
  { 
    title: "ВИДЕО НА ДЗЕН", 
    desc: "", 
    url: "https://dzen.ru/notbadguitar", 
    colorClass: "social-dzen",
    iconType: "png",
    iconSrc: "icons/dzen.png"
  },
  { 
    title: "АККАУНТ TIKTOK", 
    desc: "", 
    url: "https://www.tiktok.com/@notbad_guitar", 
    colorClass: "social-tiktok",
    iconType: "png",
    iconSrc: "icons/tiktok.png"
  }
];

  // ================================================
  // ЧАСТЫЕ ВОПРОСЫ
  // ================================================
  const faqItems = [
    { 
      question: "Что нести на первое занятие?", 
      answer: "Нотную тетрадь формата A4. Желательно вертикальную. Можно принести инструмент, чтобы я посмотрел его состояние." 
    },
    { 
      question: "Нужно ли носить свой инструмент на занятия?", 
      answer: "Нет." 
    },
    { 
      question: "Сколько идёт занятие?", 
      answer: "Академический час (45 минут)" 
    },
    { 
      question: "Как проходят занятия? Как составляется расписание?", 
      answer: "Занятия индивидуальны. Расписание составляется исходя из свободного времени и пожеланий ученика.\nВозможные дни занятий: Понедельник-Пятница, Воскресенье." 
    },
    { 
      question: "Как проходят видеозанятия?", 
      answer: "Видеоуроки унифицированы.\nДоступ к урокам можно получить на площадке BOOSTY.\nВидеоуроки нацелены на отработку технических навыков.\nВыстроены от самых простых упражнений к сложным.\nТакой формат позволяет снизить нагрузку на индивидуальных занятиях, что даёт больше времени на изучение песен и композиций.\nДанный формат не является обязательным. Выступает в качестве дополнения." 
    },
    { 
      question: "Мне 7, 15, 36, 52, 75 лет. Наверное, уже поздно начинать заниматься музыкой?", 
      answer: "У меня есть опыт работы с учениками в возрасте от 6 до 76 лет.\nИ как показывает практика, самое главное — это желание и упорство.\nВсё остальное не имеет значения." 
    },
    { 
      question: "Про он-лайн занятия.", 
      answer: "Для комфортной работы он-лайн занятия требуют серьёзного технического оснащения со стороны ученика.\n\nМинимальный набор: компьютер (ПК, ноутбук), звуковая карта, DAW с правильно настроенными выходами, камера, микрофон, программа захвата с настроенной трансляцией.\n\nЧерез мобильный телефон (его камеру, микрофон, петличку) занятия не проводятся." 
    }
  ];

  // ================================================
  // ВАЖНЫЕ ПРАВИЛА
  // ================================================
  const rulesItems = [
    { 
      title: "Мы работаем на результат.", 
      answer: "Дорогой друг, если ты хочешь получить результат, ты должен заниматься.\nЭто весьма просто, если не тратить время на сублимацию.\n\nСекрет самого секретного кунг-фу в том, что нужно просто делать.\nНе рассуждать лишний раз, а именно делать.\n\nЧем более трепетно ты будешь относиться к гитаре и к музыке, тем быстрее будешь развиваться как гитарист и как музыкант." 
    },
    { 
      title: "Задания выполняются, чтобы уметь, а не знать.", 
      answer: "Все домашние задания ты выполняешь в первую очередь для себя.\nКаждое успешно выполненное задание приближает тебя к званию самостоятельного музыканта.\n\nЕсли ты пытался, но не получилось — ничего страшного. Мы вместе разберем все нюансы.\nЕсли ты не пытался, то придется выполнять ДЗ прямо на занятии." 
    },
    { 
      title: "Взаимное уважение.", 
      answer: "Мы не изучаем песни в текстах которых содержится ненормативная лексика.\nНа каждое занятие нужно брать с собой нотную тетрадь.\nВ тетради мы ведем записи всего, что изучаем.\nЗаписываем и выполняем домашние задания.\nО необходимости пропустить занятие нужно сообщать заранее.\nСистематические опоздания и/или пропуски занятий без серьёзной причины, невыполнение указаний и домашних заданий — это повод для прекращения нашего взаимодействия." 
    },
    { 
      title: "Договор оферты.", 
      answer: "Записываясь на занятие и/или оплачивая его, вы подтверждаете, что ознакомились с договором оферты.\nБолее подробно с базовыми положениями можно ознакомиться в договоре оферты по ссылке ниже или в моей группе в Telegram." 
    }
  ];

  const offerUrl = "https://example.com/offer.pdf";
  const offerSubtitleText = "Ознакомьтесь с условиями";

  const dzenVideoUrl = "https://dzen.ru/embed/oEEZvtWMOAAA?from_block=partner&from=zen&mute=0&autoplay=0&tv=0";
  const yandexMusicUrls = [
  { url: "https://music.yandex.ru/iframe/album/35762716",  height: "150" },
  { url: "https://music.yandex.ru/iframe/#album/28278603", height: "150" },
  { url: "https://music.yandex.ru/iframe/album/22520761", height: "150" },
  { url: "https://music.yandex.ru/iframe/album/22386491",  height: "450" }  
];

  // ---------- ГАЛЕРЕЯ ----------
  const imgEl = document.getElementById('galleryImage');
  const imgNextEl = document.getElementById('galleryImageNext');
  const dotsContainer = document.getElementById('galleryDots');
  let currentIndex = 0;
  let galleryInterval;

  function updateGallery(index) {
  if (galleryImages.length === 0) return;
  currentIndex = index;
  
  // Загружаем новое фото в скрытый слой
  imgNextEl.src = galleryImages[currentIndex];
  
  // Когда новое фото загрузится — плавно показываем его
imgNextEl.onload = () => {
  imgNextEl.style.opacity = '1';
  imgNextEl.style.filter = 'blur(0)';
  
  // Старое фото пока остаётся чётким
  imgEl.style.opacity = '0';
  
  // За 150мс до конца перехода добавляем размытие
  setTimeout(() => {
    imgEl.style.filter = 'blur(4px)';
  }, 450);
  
  setTimeout(() => {
    imgEl.src = galleryImages[currentIndex];
    imgEl.style.opacity = '1';
    imgEl.style.filter = 'blur(0)';
    imgNextEl.style.opacity = '0';
  }, 600);
};
  
  const dots = document.querySelectorAll('.gallery-dot');
  dots.forEach((dot, i) => {
    if (i === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
  }

  function renderDots() {
    dotsContainer.innerHTML = '';
    if (galleryImages.length <= 1) return;
    
    galleryImages.forEach((_, index) => {
      const dot = document.createElement('button');
      dot.className = 'gallery-dot';
      if (index === 0) dot.classList.add('active');
      dot.setAttribute('aria-label', `Фото ${index + 1}`);
      dot.addEventListener('click', () => {
        clearInterval(galleryInterval);
        updateGallery(index);
        startAutoSlide();
      });
      dotsContainer.appendChild(dot);
    });
  }

  function startAutoSlide() {
    if (galleryImages.length <= 1) return;
    clearInterval(galleryInterval);
    galleryInterval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      updateGallery(nextIndex);
    }, gallerySpeed);
  }

  if (galleryImages.length > 0) {
    imgEl.src = galleryImages[0];
    renderDots();
    startAutoSlide();
  }

// ---------- ПЛАВНАЯ ПРОКРУТКА ДЛЯ ЯКОРНЫХ ССЫЛОК (С ОТСТУПОМ) ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      const offset = 120; // отступ в пикселях
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
});

  // ---------- УНИВЕРСАЛЬНАЯ ФУНКЦИЯ СОЗДАНИЯ КНОПОК ----------
  function createButtonWithIcon(config) {
 const { url, label, colorClass, iconType, iconSrc, isFullWidth } = config;
  
  const a = document.createElement('a');
  a.href = url;
  a.target = '_blank';
  a.rel = 'noopener';
  a.className = isFullWidth ? `social-full-btn ${colorClass}` : `btn ${colorClass}`;
  
  if (iconType === 'png' && iconSrc) {
    const img = document.createElement('img');
    img.src = iconSrc;
    img.alt = label;
    img.className = 'btn-icon';
    img.onerror = function() {
      this.style.display = 'none';
    };
    
    a.appendChild(img);
    
    // Для fullWidth кнопок НЕ добавляем текст здесь — он добавится позже с desc
    if (!isFullWidth) {
      a.appendChild(document.createTextNode(' ' + label));
    }
  } else {
    a.innerHTML = `<i class="${iconSrc}"></i> ${label}`;
  }
  
  return a;
}

  // ---------- МЕССЕНДЖЕРЫ ----------
const messengerGrid = document.getElementById('messengerGrid');
messengerGrid.innerHTML = '';
messengerRows.forEach(row => {
  const rowDiv = document.createElement('div');
  rowDiv.className = 'messenger-row';
  row.forEach(btn => {
    const button = createButtonWithIcon({
      url: btn.url,
      label: btn.label,
      colorClass: btn.colorClass,
      iconType: btn.iconType || 'fontawesome',
      iconSrc: btn.iconSrc || btn.icon,
      isFullWidth: false
    });
    rowDiv.appendChild(button);
  });
  messengerGrid.appendChild(rowDiv);
});

  // ---------- СОЦСЕТИ ----------
const socialDiv = document.getElementById('socialLinks');
socialDiv.innerHTML = '';
socialNetworks.forEach(soc => {
  const button = createButtonWithIcon({
    url: soc.url,
    label: soc.title,
    colorClass: soc.colorClass,
    iconType: soc.iconType || 'fontawesome',
    iconSrc: soc.iconSrc || soc.imgSrc,
    isFullWidth: true
  });
  
  // Всегда создаём текстовый блок заново
  const textDiv = document.createElement('div');
  textDiv.className = 'social-text';
  
  if (soc.desc) {
    textDiv.innerHTML = `
      <span class="social-title">${soc.title}</span>
      <span class="social-desc">${soc.desc}</span>
    `;
  } else {
    textDiv.innerHTML = `<span class="social-title">${soc.title}</span>`;
  }
  
  button.appendChild(textDiv);
  socialDiv.appendChild(button);
});

  // ---------- АККОРДЕОНЫ ----------
function buildAccordion(containerId, items) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';
  items.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'accordion-item';

    const headerBtn = document.createElement('button');
    headerBtn.className = 'accordion-header';
    headerBtn.innerHTML = `${item.question || item.title} <i class="fas fa-chevron-down"></i>`;

    const contentDiv = document.createElement('div');
    contentDiv.className = 'accordion-content';
    
    // Внутренняя обёртка с ОДИНАКОВЫМИ отступами со всех сторон
    const innerDiv = document.createElement('div');
    innerDiv.style.padding = '0.8rem';
    innerDiv.style.whiteSpace = 'pre-wrap';
    innerDiv.style.textAlign = 'left';
    innerDiv.style.color = '#ffffff';
    innerDiv.style.fontSize = '0.95rem';
    innerDiv.style.lineHeight = '1.5';
    innerDiv.style.textShadow = '0 1px 4px rgba(0, 0, 0, 0.3)';
    innerDiv.textContent = item.answer;
    contentDiv.appendChild(innerDiv);

    // Убираем все лишние отступы у contentDiv
    contentDiv.style.padding = '0';
    contentDiv.style.margin = '0';
    contentDiv.style.height = '0px';
    contentDiv.style.overflow = 'hidden';
    contentDiv.style.transition = 'height 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    contentDiv.style.background = 'rgba(255, 255, 255, 0.05)';
    contentDiv.style.borderRadius = '1rem 1rem 1rem 1rem';

    headerBtn.addEventListener('click', () => {
  const isOpen = contentDiv.classList.contains('open');
  const icon = headerBtn.querySelector('i');
  
  if (isOpen) {
    // Получаем текущую полную высоту содержимого
    const currentHeight = innerDiv.scrollHeight;
    
    // Устанавливаем точную высоту
    contentDiv.style.height = currentHeight + 'px';
    
    // Форсируем перерисовку
    contentDiv.getBoundingClientRect();
    
    // Запускаем анимацию закрытия
    contentDiv.classList.remove('open');
    contentDiv.style.height = '0px';
    icon.style.transform = 'rotate(0deg)';
    
    // После завершения анимации сбрасываем inline стиль
    setTimeout(() => {
      if (!contentDiv.classList.contains('open')) {
        contentDiv.style.height = '0px';
      }
    }, 500); // 500ms соответствует transition: 0.5s
  } else {
    // Открываем
    contentDiv.classList.add('open');
    contentDiv.style.height = innerDiv.scrollHeight + 'px';
    icon.style.transform = 'rotate(180deg)';
    
    // После анимации убираем фиксированную высоту
    setTimeout(() => {
      if (contentDiv.classList.contains('open')) {
        contentDiv.style.height = 'auto';
      }
    }, 500);
  }
    });

    itemDiv.appendChild(headerBtn);
    itemDiv.appendChild(contentDiv);
    container.appendChild(itemDiv);
  });
}
  buildAccordion('faqAccordion', faqItems);
  buildAccordion('rulesAccordion', rulesItems);

  // ---------- ОФЕРТА ----------
  const offerBtn = document.getElementById('offerButton');
  offerBtn.href = offerUrl;
  document.getElementById('offerSubtitle').textContent = offerSubtitleText;

  // ---------- МУЗЫКА ----------
const musicContainer = document.getElementById('myMusicContainer');
musicContainer.innerHTML = '';

// Добавляем видео из Дзен
if (dzenVideoUrl && dzenVideoUrl.includes('dzen')) {
  const videoDiv = document.createElement('div');
  videoDiv.className = 'media-embed';
  videoDiv.innerHTML = `<iframe src="${dzenVideoUrl}" allowfullscreen style="width:100%;height:100%;border:0;"></iframe>`;
  musicContainer.appendChild(videoDiv);
}

// Добавляем альбомы из Яндекс.Музыки
yandexMusicUrls.forEach(item => {
  const audioDiv = document.createElement('div');
  audioDiv.className = 'audio-wrapper';
  audioDiv.innerHTML = `<iframe src="${item.url}" width="100%" height="${item.height}" frameborder="0" style="border-radius:1.5rem;"></iframe>`;
  musicContainer.appendChild(audioDiv);
});

// ================================================
// 🔒 БАЗОВЫЕ НАСТРОЙКИ БЕЗОПАСНОСТИ
// ================================================

// 1. Запрет правой кнопки мыши
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
  return false;
});

// 2. Запрет комбинаций клавиш для копирования и просмотра кода
document.addEventListener('keydown', function(e) {
  // Ctrl+C, Ctrl+U, Ctrl+S, Ctrl+Shift+I, F12
  if ((e.ctrlKey && (e.key === 'c' || e.key === 'u' || e.key === 's' || e.key === 'i')) || 
      e.key === 'F12') {
    e.preventDefault();
    return false;
  }
});

// 3. Запрет выделения текста
document.addEventListener('selectstart', function(e) {
  e.preventDefault();
  return false;
});

// 4. Защита от перетаскивания изображений
document.addEventListener('dragstart', function(e) {
  e.preventDefault();
  return false;
});

// ---------- ЗАТЕМНЕНИЕ МЕНЮ ПРИ ПРОКРУТКЕ ----------
const navButtons = document.querySelector('.nav-buttons');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navButtons.classList.add('scrolled');
  } else {
    navButtons.classList.remove('scrolled');
  }
});

// ---------- ЗАМЕНА ПРЕВЬЮ НА ПЛЕЕР ПРИ КЛИКЕ ----------
document.querySelectorAll('.video-item[data-video]').forEach(item => {
  item.addEventListener('click', function() {
    let videoUrl = this.getAttribute('data-video');
    
    // Добавляем autoplay=1 для автоматического запуска
    videoUrl = videoUrl.replace('autoplay=0', 'autoplay=1');
    this.innerHTML = `<iframe src="${videoUrl}" allowfullscreen></iframe>`;
    this.style.cursor = 'default';
  });
});

// ================================================
// 🔦 СОЗДАНИЕ ЛУЧЕЙ ПРОЖЕКТОРОВ
// ================================================
function createLightBeams() {
  const container = document.createElement('div');
  container.className = 'light-beams-container';
  document.body.appendChild(container);
  
  // Создаём 7 лучей
  for (let i = 0; i < 7; i++) {
    const beam = document.createElement('div');
    beam.className = 'light-beam';
    container.appendChild(beam);
  }
}

createLightBeams();
  
// ================================================
// 🎵 ДОБАВЛЕНИЕ ЭКВАЛАЙЗЕРА В "МОЯ МУЗЫКА"
// ================================================
function addEqualizer() {
  const musicSection = document.getElementById('myMusicContainer');
  const eq = document.createElement('div');
  eq.className = 'equalizer';
  for (let i = 0; i < 8; i++) {
    const bar = document.createElement('div');
    bar.className = 'equalizer-bar';
    eq.appendChild(bar);
  }
  musicSection.insertBefore(eq, musicSection.firstChild);
}

// Вызываем после загрузки музыки
setTimeout(addEqualizer, 500);

// ================================================
// ✨ УСИЛЕННЫЙ OBSERVER ДЛЯ АНИМАЦИЙ
// ================================================
const fadeElements = document.querySelectorAll('.about-text, .prices-block, .messenger-grid, .video-grid, #socialLinks, .accordion, .offer-btn, #myMusicContainer');
fadeElements.forEach(el => el.classList.add('fade-up'));

document.querySelectorAll('.section-title').forEach(el => {
  el.classList.add('fade-up');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -20px 0px'
});

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));


  // ================================================
// 🔝 КНОПКА "НАВЕРХ"
// ================================================
const scrollToTopBtn = document.getElementById('scrollToTop');

// Показываем кнопку после прокрутки
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollToTopBtn.classList.add('visible');
  } else {
    scrollToTopBtn.classList.remove('visible');
  }
});

// Плавная прокрутка наверх при клике
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

  // ================================================
// 🔥 ЭКРАН ЗАГРУЗКИ
// ================================================
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  setTimeout(() => {
    preloader.classList.add('hidden');
  }, 1800); // 1.8 секунды
});
  
})();
