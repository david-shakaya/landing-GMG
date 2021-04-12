// УДаляю точку с кнопки
const paginationSliderBtn = document.querySelectorAll(
    '.pagination-slider__btn',
);

paginationSliderBtn.forEach(btn => (btn.textContent = ''));

const footerBtnArrow = document.querySelector('.footer__btn-arrow');
footerBtnArrow.textContent = '';
