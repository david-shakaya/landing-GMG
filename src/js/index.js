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

const footerBtnArrow = document.querySelector('.footer__btn-arrow');
footerBtnArrow.textContent = '';

// SLIDER

new Splide('#splide', {
    type: 'loop',
    perPage: 2,
    perMove: 2,
    rewind: true,
    fixedWidth: 270,
    arrows: false,
    focus: 'center',
    gap: 30,
    padding: {
        left: '20rem',
    },

    autoplay: true,
    interval: 1500,
}).mount();

// Select
let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');
    const selectCurrent = document.querySelector('.select__current');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle);
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose);
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        console.log(text);
        selectCurrent.classList.add('is-active');
        select.classList.remove('is-active');
    }
};

select();
