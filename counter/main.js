const footerDate = document.querySelector('.footer__date');
footerDate.innerText = new Date().getFullYear();

function initApp() {
  const counterCookies = document.cookie
    .split(';')
    .filter(cookie => cookie.trim().startsWith('counter-'));

  if(counterCookies.length > 0) {
    counterCookies.forEach(_ => new Counter(document.querySelector('.counters')));
  } else {
    new Counter(document.querySelector('.counters'));
  }
}

initApp();