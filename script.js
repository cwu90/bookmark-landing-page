const toggle = document.querySelector('.nav-open-toggle');
const navbox = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');
const logowrapper = document.querySelector('.logo-wrapper');
const icon = document.querySelector('.fa-solid');
const body = document.querySelector('body');

toggle.addEventListener('click', () => {
  const visibility = navbox.getAttribute('data-visible');

  if (visibility === 'false') {
    navbox.setAttribute('data-visible', 'true');
    overlay.classList.remove('none');
    toggle.src = 'images/icon-close.svg';
    logowrapper.style.color = 'white';
    icon.style.color = 'white';
    body.classList.add('scroll-disable');
  } else if (visibility === 'true') {
    navbox.setAttribute('data-visible', 'false');
    overlay.classList.add('none');
    toggle.src = 'images/icon-hamburger.svg';
    logowrapper.style.color = '#252B46';
    icon.style.color = '#7D8DE3';
    body.classList.remove('scroll-disable');
  }
});

overlay.addEventListener('click', () => {
  navbox.setAttribute('data-visible', 'false');
  overlay.classList.add('none');
  toggle.src = 'images/icon-hamburger.svg';
  logowrapper.style.color = '#252B46';
  icon.style.color = '#7D8DE3';
  body.classList.remove('scroll-disable');
});

// Email Validation
const form = document.getElementById('form');
const emailIcon = document.querySelector('.error-icon');
const input = document.querySelector('.contact-input');
const errorbox = document.querySelector('.error-box');

form.addEventListener('submit', e => {
  e.preventDefault();

  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (input.value.match(pattern)) {
    emailIcon.classList.add('none');
    input.style.border = '3px solid white';
    input.style.borderRadius = '5px';
    input.classList.remove('.error-border');
    errorbox.style.display = 'none';
    return console.log('Thank you for the submission');
  } else if (input.value === '') {
    emailIcon.classList.remove('none');
    input.style.border = '3px solid #FA5757';
    input.style.borderRadius = '5px 5px 0px 0px';
    errorbox.style.display = 'block';
    return console.log('input is empty');
  }
});

// TAB Section

const panels = document.querySelector('.panels-nav-container');
const panelheading = document.querySelector('.panel-content-heading');
const panelsummary = document.querySelector('.panel-content-summary');
const panelimage = document.querySelector('.panel-img');

let data = [
  {
    heading: 'Bookmark in one click',
    summary:
      'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
    imgPath: 'images/illustration-features-tab-1.svg',
    altText: 'dashboard',
  },
  {
    heading: 'Intelligent search',
    summary:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
    imgPath: 'images/illustration-features-tab-2.svg',
    altText: 'dashboard with magnifying glass',
  },
  {
    heading: 'Share your bookmarks',
    summary:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
    imgPath: 'images/illustration-features-tab-3.svg',
    altText: 'people waving',
  },
];

function changePanel(index) {
  function changeContent(index) {
    panelheading.textContent = data[index].heading;
    panelsummary.textContent = data[index].summary;
    panelimage.src = data[index].imgPath;
    panelimage.alt = data[index].altText;
  }

  changeContent(index);
}

function changePanels(e) {
  for (panel of panels.children) {
    panel.classList.remove('panels-tab-active');
  }

  e.target.classList.add('panels-tab-active');
  if (e.target.id === 'panel-1') {
    changePanel(0);
  } else if (e.target.id === 'panel-2') {
    changePanel(1);
  } else if (e.target.id === 'panel-3') {
    changePanel(2);
  }
}

panels.addEventListener('click', e => {
  changePanels(e);
});
