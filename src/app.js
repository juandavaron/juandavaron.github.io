function scrollHeader(){
  //Add class scroll-header to header element when viewport height is bigger than 50.
  const header = document.getElementById('header');
  if(this.scrollY >= 50){
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header')
  }
}

window.addEventListener('scroll', scrollHeader);

// Experience Tabs
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

// Portfolio
let mixerPortfolio = mixitup('.work__container', {
  selectors: {
      target: '.work__card'
  },
  animation: {
      duration: 300
  }
});

const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
  linkWork.forEach(item => item.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(item => item.addEventListener('click', activeWork))

// Scroll sections active link
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