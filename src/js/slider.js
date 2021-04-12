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
