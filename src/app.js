// HEADER
function scrollHeader(){
  //Add class scroll-header to header element when scrollY is bigger than 50.
  const header = document.getElementById('header');
  if(this.scrollY >= 50){
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header')
  }
}

window.addEventListener('scroll', scrollHeader);

// EXPERIENCE TABS
const tabs = document.querySelectorAll('[data-target]'),
  tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
  tab.addEventListener('click', () =>{
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach(tabContent =>{
      tabContent.classList.remove('experience__active')
    })
    target.classList.add('experience__active')

    tabs.forEach(tab =>{
      tab.classList.remove('experience__active')
    })
    tab.classList.add('experience__active')
  })
})

// PORTFOLIO
// Mix
let mixerPortfolio = mixitup('.work__container', {
  selectors: {
      target: '.work__card'
  },
  animation: {
      duration: 300
  }
});

//Change background color
const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
  linkWork.forEach(item => item.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(item => item.addEventListener('click', activeWork))

// SCROLL SECTIONS ACTIVE LINK
const id = document.querySelectorAll('section[id]');
const sections = [...id];

function scrollActive(){
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id');

      if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
      } else{
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
      }
  });
};

window.addEventListener('scroll', scrollActive);

// TOGGLE THEME
const themeButton = document.getElementById('theme-button');
const lightTheme = 'light-theme';
const iconTheme = 'bx-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light';
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun';

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or desactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme);
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme);
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem('selected-theme', getCurrentTheme())
  localStorage.setItem('selected-icon', getCurrentIcon())
})