// Определение операционной системы на мобильных
import { mobileCheck } from "./functions/mobile-check";

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
import { burger } from "./functions/burger";

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from "./functions/disable-scroll";

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from "./functions/enable-scroll";




// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
import Swiper, { Navigation, Pagination, Scrollbar, Autoplay } from "swiper";

Swiper.use([Navigation, Pagination, Scrollbar, Autoplay]);

const SWIPER_TICKER = new Swiper('.ticker-swiper', {
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: 20,

  autoplay: {
    delay: 1000, // Задержка между слайдами в миллисекундах
    disableOnInteraction: false, // Продолжать автоплей после взаимодействия
  },
  speed: 3000,
})


// Подключение анимаций по скроллу
// import AOS from "aos";

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from "smooth-scroll";
// const scroll = new SmoothScroll('a[href*="#"]', {
//   header: "[data-scroll-header]",
// });

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

import { accordion } from "./functions/accordion";
import { MY_SELECT } from "./functions/my-select";
import { listener } from "./functions/listener";
import { auto } from "@popperjs/core";

accordion();

const heroMap = document.querySelectorAll('.hero__img path');



function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function setAnimationForMap(selector) {
  const shuffled = shuffleArray([...selector]);

  shuffled.forEach((circle, index) => {
    circle.style.animationDelay = `${index * 2}ms`;
    circle.classList.add('appear');
  });
}

setAnimationForMap(heroMap);
