const toggleButton = document.getElementById('toggle');
const navbarLinks = document.getElementById('navLinks');
const header = document.getElementById('header');
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
  header.classList.toggle('active');
});
