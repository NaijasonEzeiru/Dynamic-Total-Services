let ham = false;

const matcher = window.matchMedia('(prefers-color-scheme: dark)');
const menuIcon = document.getElementById('menu-icon');
const themeButton = document.getElementById('theme-button');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');
const navBar = document.getElementById('nav-bar');
const menuShape = document.getElementById('menu-shape');

let x = !menuIcon.getAttribute('aria-expanded');

const menuClassLists = [
  'duration-1000',
  'before:-rotate-45',
  'after:rotate-45',
  'before:-translate-x-[5px]',
  'before:translate-y-[1px]',
  'before:transition-transform',
  'after:-translate-x-[5px]',
  'after:-translate-y-[1px]',
  'after:scale-x-75',
  'before:scale-x-75',
  'after:transition-transform'
];

const setHam = () => {
  ham = !ham;
};

function toggleTheme() {
  if (document.documentElement.getAttribute('data-color-mode') === 'light') {
    setDarkTheme();
  } else {
    setLightTheme();
  }
}

function setDarkTheme() {
  sunIcon.setAttribute('class', 'hidden');
  moonIcon.setAttribute('class', 'block');
  document.documentElement.setAttribute('data-color-mode', 'dark');
  localStorage.setItem('data-color-mode', 'dark');
}

function setLightTheme() {
  moonIcon.setAttribute('class', 'hidden');
  sunIcon.setAttribute('class', 'block');
  document.documentElement.setAttribute('data-color-mode', 'light');
  localStorage.setItem('data-color-mode', 'light');
}

if (localStorage.getItem('data-color-mode') === 'dark') {
  document.documentElement.setAttribute('data-color-mode', 'dark');
  setDarkTheme();
}

if (
  localStorage.getItem('data-color-mode') === 'dark' ||
  (matcher.matches && !localStorage.getItem('data-color-mode'))
) {
  document.documentElement.setAttribute('data-color-mode', 'dark');
}

function menuToggle() {
  x = !x;
  menuIcon.setAttribute('aria-expanded', x);
  setHam();
  if (ham) {
    menuShape.classList.add(...menuClassLists);
    navBar.classList.remove('-translate-x-full');
  } else {
    menuShape.classList.remove(...menuClassLists);
    navBar.classList.add('-translate-x-full');
  }
}

menuIcon.addEventListener('click', menuToggle);
themeButton.addEventListener('click', toggleTheme);
document.documentElement.setAttribute('style', '"visibility: visible"');
