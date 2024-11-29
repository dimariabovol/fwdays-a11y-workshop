const accordion = () => {
  const accordionButtons = document.querySelectorAll('.accordion-button');

  const toggleAccordion = button => {
    const trigger = button.getAttribute('data-trigger');
    const panel = document.getElementById(trigger);

    panel.classList.toggle('collapse');
    button.classList.toggle('collapsed');
  };

  accordionButtons.forEach(button =>
    button.addEventListener('click', () => toggleAccordion(button))
  );
};

export default accordion;
