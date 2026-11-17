const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  const dark = document.body.classList.toggle('dark');
  themeToggle.textContent = dark ? '☀' : '☾';
  themeToggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
});

const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('.topbar nav');
menuToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Open navigation');
  }
});
