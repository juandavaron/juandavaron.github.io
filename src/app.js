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