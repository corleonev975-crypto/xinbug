const splashScreen = document.getElementById('splashScreen');
const loginPage = document.getElementById('loginPage');
const appPage = document.getElementById('appPage');
const loginForm = document.getElementById('loginForm');
const navButtons = document.querySelectorAll('.nav-btn');
const tabPages = document.querySelectorAll('.tab-page');
const musicToggle = document.getElementById('musicToggle');

window.addEventListener('load', () => {
  setTimeout(() => {
    splashScreen.classList.add('hide');
  }, 1300);
});

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (!username || !password) {
    alert('Isi username dan password dulu.');
    return;
  }

  loginPage.classList.remove('active-page');
  appPage.classList.add('active-page');
});

navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-tab');

    navButtons.forEach((btn) => btn.classList.remove('active'));
    tabPages.forEach((page) => page.classList.remove('active-tab'));

    button.classList.add('active');
    document.getElementById(target).classList.add('active-tab');
  });
});

let soundOn = true;
musicToggle.addEventListener('click', () => {
  soundOn = !soundOn;
  musicToggle.textContent = soundOn ? '🔊' : '🔈';
});
