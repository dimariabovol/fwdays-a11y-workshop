const modal = () => {
  let isOpen = false;

  const modal = document.querySelector('.modal');
  const modalTrigger = document.querySelector('.modal-trigger');
  const modalCloseActions = modal.querySelectorAll('.modal-close');
  const modalSubmit = modal.querySelector('.modal-submit');

  const removeAlert = () => {
    const alert = modal.querySelector('.alert');
    if (alert) {
      alert.remove();
    }
  };

  const focusTrap = event => {
    if (event.key === 'Escape') toggleModal();
    if (event.key !== 'Tab') return;

    if (event.shiftKey) {
      if (document.activeElement === modalCloseActions[0]) {
        event.preventDefault();
        modalSubmit.focus();
      }
    } else {
      if (document.activeElement === modalSubmit) {
        event.preventDefault();
        modalCloseActions[0].focus();
      }
    }
  };

  const toggleModal = () => {
    isOpen = !isOpen;

    if (isOpen) {
      modal.classList.add('show');
      modalCloseActions[0].focus();
      document.body.style.overflow = 'hidden';
      modal.addEventListener('keydown', focusTrap);
    }

    if (!isOpen) {
      modal.classList.remove('show');
      modalTrigger.focus();
      document.body.style.overflow = '';
      modal.removeEventListener('keydown', focusTrap);
      removeAlert();
    }
  };

  modalTrigger.addEventListener('click', toggleModal);
  modalCloseActions.forEach(action =>
    action.addEventListener('click', toggleModal)
  );
};

export default modal;
