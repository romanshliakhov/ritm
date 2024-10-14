import Swiper from 'swiper';
import vars from "../_vars";

import { Pagination, Autoplay, Navigation, FreeMode, Grid } from "swiper/modules";

const { partnersSlider, promoSlider } = vars;

if (partnersSlider) {
  const swiper = new Swiper(partnersSlider.querySelector('.partners-section__container'), {
    modules: [Autoplay, Navigation, FreeMode, Grid],
    observer: true,
    observeParents: true,
    freeMode: true,
    loop: true,
    navigation: {
      nextEl: '.partner-next',
      prevEl: '.partner-prev',
    },

    // autoplay: {
    //   delay: 0,
    // },

    breakpoints: {
      320: {
        spaceBetween: 11,
        slidesPerView: 2.75,
        loop: true,

        grid: {
          fill: 'row',
          rows: 2,
        },
      },
      768: {
        spaceBetween: 20,
        slidesPerView: 3,
        loop: true,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
      },
      1240: {
        slidesPerView: 5,
        spaceBetween: 30,
        loop: true,
      },
      1440: {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
      },
    }
  });
}

if (promoSlider) {
  const swiper = new Swiper(promoSlider.querySelector('.promo__container'), {
    modules: [Autoplay, Navigation],
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    loop: true,
    navigation: {
      nextEl: '.promo-next',
      prevEl: '.promo-prev',
    },

    // autoplay: {
    //   delay: 3000,
    // },
  });
}

