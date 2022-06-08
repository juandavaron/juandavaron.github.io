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