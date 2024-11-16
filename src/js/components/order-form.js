const orderForm = () => {
  const formSubmit = document.querySelector('.order-form');
  const termsCheckbox = document.querySelector('.form-check-input');

  const validateTermsCheckbox = () => {
    console.log(termsCheckbox.validity.valid);

    if (!termsCheckbox.validity.valid) {
      termsCheckbox.classList.add('is-invalid');
      termsCheckbox.setAttribute('aria-invalid', 'true');
    } else {
      termsCheckbox.classList.remove('is-invalid');
      termsCheckbox.setAttribute('aria-invalid', 'false');
    }
  };

  termsCheckbox.addEventListener('change', validateTermsCheckbox);

  formSubmit.addEventListener('submit', event => {
    event.preventDefault();

    validateTermsCheckbox();
  });
};

export default orderForm;
