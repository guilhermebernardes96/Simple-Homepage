let btnMenu = document.getElementById('btn-open-menu');
let menu = document.getElementById('nav-mobile');
let btnClosed = document.getElementById('btn-closed')

document.addEventListener("DOMContentLoaded", function() {
  const navSwitch = document.querySelector('.nav-switch');
  const body = document.querySelector('body');
  const selectedText = document.querySelector('.selected');
  const text1 = document.querySelector('.text1');
  const text2 = document.querySelector('.text2');
  const companyLogo = document.querySelector('.company-logo');
  const companyLogoDark = document.querySelector('.company-logo-dark');

  navSwitch.addEventListener('click', function() {
    const switchToggle = document.querySelector('.nav-switch-toggle');
    switchToggle.classList.toggle('toggled');
    body.classList.toggle('dark-theme');
    selectedText.classList.toggle('dark-theme');
    text1.classList.toggle('dark-theme');
    text2.classList.toggle('dark-theme');
    
    if (switchToggle.classList.contains('toggled')) {
      companyLogo.style.display = 'block';
      companyLogoDark.style.display = 'none';
    } else {
      companyLogo.style.display = 'none';
      companyLogoDark.style.display = 'block';
    }
  });

});

document.addEventListener("DOMContentLoaded", function() {
  const navSwitchMobile = document.querySelector('.nav-switch-mobile');
  const body = document.querySelector('body');
  const selectedText = document.querySelector('.selected');
  const text1 = document.querySelector('.text1');
  const text2 = document.querySelector('.text2');
  const companyLogo = document.querySelector('.company-logo');
  const companyLogoDark = document.querySelector('.company-logo-dark');

  navSwitchMobile.addEventListener('click', function() {
  const switchToggleMobile = document.querySelector('.nav-switch-toggle-mobile');
  switchToggleMobile.classList.toggle('toggled');
  body.classList.toggle('dark-theme');
  selectedText.classList.toggle('dark-theme');
  text1.classList.toggle('dark-theme');
  text2.classList.toggle('dark-theme');
  
  if (switchToggleMobile.classList.contains('toggled')) {
    companyLogo.style.display = 'block';
    companyLogoDark.style.display = 'none';
  } else {
    companyLogo.style.display = 'none';
    companyLogoDark.style.display = 'block';
  }
})
});


btnMenu.addEventListener('click', () => {
  menu.classList.add('open-menu')
});


btnClosed.addEventListener('click', () => {
   menu.classList.remove('open-menu')
});


