console.log('hello');

const sliderPercent = document.querySelectorAll('.slider__percent');

// if(sliderPercent.textContent)
sliderPercent.forEach(el => {
    if (+el.textContent.slice(0, 1) >= 0) {
        el.classList.add('positive-balance');
    } else {
        el.classList.add('negative-balance');
    }
});

// УДаляю точку с кнопки
const paginationSliderBtn = document.querySelectorAll(
    '.pagination-slider__btn',
);

paginationSliderBtn.forEach(btn => (btn.textContent = ''));
