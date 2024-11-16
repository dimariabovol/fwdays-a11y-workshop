const orderForm = () => {
  const form = document.querySelector('.order-form');
  const formContent = document.querySelector('.order-form-content');
  const termsCheckbox = document.querySelector('.form-check-input');

  const validateTermsCheckbox = () => {
    if (!termsCheckbox.validity.valid) {
      termsCheckbox.classList.add('is-invalid');
      termsCheckbox.setAttribute('aria-invalid', 'true');
    } else {
      termsCheckbox.classList.remove('is-invalid');
      termsCheckbox.setAttribute('aria-invalid', 'false');
    }
  };

  const showNotification = () => {
    const alert = document.getElementById('alert');
    const clone = alert.content.cloneNode(true);

    formContent.prepend(clone);
  };

  termsCheckbox.addEventListener('change', validateTermsCheckbox);

  form.addEventListener('submit', event => {
    event.preventDefault();

    validateTermsCheckbox();

    if (termsCheckbox.validity.valid) {
      showNotification();
    }
  });
};

export default orderForm;
