const modal = () => {
  let isOpen = false;

  const modal = document.querySelector('.modal');
  const modalTrigger = document.querySelector('.modal-trigger');
  const modalCloseActions = modal.querySelectorAll('.modal-close');

  const toggleModal = () => {
    isOpen = !isOpen;

    if (isOpen) {
      modal.classList.add('show');
      document.body.style.overflow = 'hidden';
    }

    if (!isOpen) {
      modal.classList.remove('show');
      document.body.style.overflow = '';
    }
  };

  modalTrigger.addEventListener('click', toggleModal);
  modalCloseActions.forEach(action =>
    action.addEventListener('click', toggleModal)
  );
};

export default modal;
