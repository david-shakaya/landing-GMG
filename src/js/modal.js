console.log('hello');

// модалка

(() => {
    const refs = {
        openModalBtn: document.querySelector('.form__btn'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
        form: document.querySelector('.form'),
        btnOk: document.querySelector('.modal-form-btn'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', closeModal);
    refs.btnOk.addEventListener('click', closeModal);

    function toggleModal(e) {
        if (refs.form[0].value === '') {
            return;
        }
        e.preventDefault();
        refs.modal.classList.toggle('is-hidden');
        console.dir(refs.form);
    }

    function closeModal() {
        refs.modal.classList.toggle('is-hidden');
        refs.form.reset();
    }
})();
