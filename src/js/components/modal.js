const modal = () => {
  let isOpen = false;

  const pageContent = document.querySelector('.page-content');
  const modal = document.querySelector('.modal');
  const modalTrigger = document.querySelector('.modal-trigger');
  const modalCloseActions = modal.querySelectorAll('.modal-close');
  const orderedProductsText = document.querySelector('.ordered-products');
  const firstFocusableEl = modal.querySelector('.first-focusable');
  const lastFocusableEl = modal.querySelector('.last-focusable');

  const handleKeyboardNav = event => {
    if (event.key === 'Escape') toggleModal();
    if (event.key !== 'Tab') return;

    if (event.shiftKey) {
      if (document.activeElement === firstFocusableEl) {
        event.preventDefault();
        lastFocusableEl.focus();
      }
    } else {
      if (document.activeElement === lastFocusableEl) {
        event.preventDefault();
        firstFocusableEl.focus();
      }
    }
  };

  const toggleModal = () => {
    isOpen = !isOpen;

    if (isOpen) {
      modal.classList.add('show');
      orderedProductsText.focus();
      pageContent.setAttribute('inert', '');
      document.body.style.overflow = 'hidden';
      modal.addEventListener('keydown', handleKeyboardNav);
    }

    if (!isOpen) {
      modal.classList.remove('show');
      pageContent.removeAttribute('inert');
      modalTrigger.focus();
      document.body.style.overflow = '';
      modal.removeEventListener('keydown', handleKeyboardNav);
    }
  };

  modalTrigger.addEventListener('click', toggleModal);
  modalCloseActions.forEach(action =>
    action.addEventListener('click', toggleModal)
  );
};

export default modal;
