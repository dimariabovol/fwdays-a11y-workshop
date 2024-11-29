const navbar = () => {
  const toggler = document.querySelector('.navbar-toggler');
  const collapse = document.querySelector('.navbar-collapse');

  toggler.addEventListener('click', () => {
    collapse.classList.toggle('collapse');
  });
};

export default navbar;
