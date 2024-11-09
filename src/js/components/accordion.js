const accordion = () => {
  const accordionButtons = document.querySelectorAll('.accordion-button');

  const toggleAccordion = button => {
    const isCollapsed = button.classList.toggle('collapsed');
    const trigger = button.getAttribute('aria-controls');
    const panel = document.getElementById(trigger);

    button.setAttribute('aria-expanded', !isCollapsed);
    panel.classList.toggle('collapse');
  };

  accordionButtons.forEach(button =>
    button.addEventListener('click', () => toggleAccordion(button))
  );
};

export default accordion;
