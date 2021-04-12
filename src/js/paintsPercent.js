const sliderPercent = document.querySelectorAll('.slider__percent');

sliderPercent.forEach(el => {
    if (+el.textContent.slice(0, 1) >= 0) {
        el.classList.add('positive-balance');
    } else {
        el.classList.add('negative-balance');
    }
});
