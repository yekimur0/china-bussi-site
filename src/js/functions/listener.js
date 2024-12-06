
export const listener = () => {
    document.body.addEventListener('click', (e) => {
        let target = e.target;

        if (target.classList.contains('registry__changer-block')) changeWrapper(target);

        if (target.hasAttribute('data-modal-btn')) openModal();
        if (target.classList.contains('modal') || target.classList.contains('modal__close')) closeModal(target);


        function closeModal(target) {
            const activeModal = document.querySelector('.modal--active');

            if (activeModal) activeModal.classList.remove('modal--active');
        }

        function openModal() {
            const modal = document.getElementById('modal');
            modal.classList.add('modal--active')
        }
        
    })
}

listener();