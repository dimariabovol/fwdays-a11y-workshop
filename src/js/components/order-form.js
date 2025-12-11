const orderForm = () => {
  const form = document.querySelector('.order-form');
  const formContent = document.querySelector('.order-form-content');
  const termsCheckbox = document.querySelector('.form-check-input');
  const productsCount = document.querySelector('.products-count');

  const validateTermsCheckbox = () => {
    if (!termsCheckbox.validity.valid) {
      termsCheckbox.classList.add('is-invalid');
      termsCheckbox.setAttribute('aria-invalid', 'true');
    } else {
      termsCheckbox.classList.remove('is-invalid');
      termsCheckbox.setAttribute('aria-invalid', 'false');
    }
  };

  const showAlert = () => {
    const alert = document.getElementById('alert');
    const clone = alert.content.cloneNode(true);

    if (!formContent.querySelector('.alert')) {
      formContent.prepend(clone);
    }
  };

  const removeAlert = () => {
    const alert = form.querySelector('.alert');
    if (alert) {
      alert.remove();
    }
  };

  const setUpdateCartListener = () => {
    document.addEventListener('update-cart', event => {
      productsCount.textContent = event.detail.cartCount;
    });
  };

  termsCheckbox.addEventListener('change', validateTermsCheckbox);

  form.addEventListener('submit', event => {
    event.preventDefault();

    validateTermsCheckbox();

    if (!termsCheckbox.validity.valid) {
      showAlert();
    } else {
      removeAlert();
      form.reset();
      alert('Order submitted successfully!');
    }
  });

  setUpdateCartListener();
};

export default orderForm;
