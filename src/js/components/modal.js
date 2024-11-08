const modal = () => {
  // TODO: keyboard handling && focus trap

  let isOpen = false;

  const modal = document.querySelector('.modal');
  const modalTrigger = document.querySelector('.modal-trigger');
  const modalCloseActions = document.querySelectorAll('.modal-close');

  const toggleModal = () => {
    isOpen = !isOpen;

    if (isOpen) {
      modal.classList.add('show');
      modalCloseActions[0].focus();
    }

    if (!isOpen) {
      modal.classList.remove('show');
      modalTrigger.focus();
    }
  };

  modalTrigger.addEventListener('click', toggleModal);
  modalCloseActions.forEach(action =>
    action.addEventListener('click', toggleModal)
  );
};

export default modal;
