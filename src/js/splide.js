import '@splidejs/splide/css/core';
import Splide from '@splidejs/splide';

const slide = new Splide( '.splide', {
    type   : 'loop',
    padding: '5rem',
    gap: '10px',
    arrows: false,
    mediaQuery: 'min',
    breakpoints: {
        767: {
            fixedWidth: "450px",
        }
    }
}).mount();

const next = document.querySelector(".btn-arrow-next");
const prev = document.querySelector(".btn-arrow-prev");

next.addEventListener('click', () => slide.go( '+1' ));
prev.addEventListener('click', () => slide.go( '-1' ));