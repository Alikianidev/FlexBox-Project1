const navBtn = document.querySelector(".nav__btn")
const navMenu = document.querySelector(".nav-menu")

let navOpen = false;

navBtn.addEventListener("click",function(){
if (navOpen){
    navBtn.classList.remove("nav__btn--open")
          navMenu.classList.remove("nav-menu--open")

    navOpen = false
}else{
      navBtn.classList.add("nav__btn--open")
      navMenu.classList.add("nav-menu--open")
      navOpen = true
}
})

const links = document.querySelectorAll('.menu__link');
 
links.forEach(link => {
link.addEventListener('click', () => {
 
links.forEach(item =>
item.classList.remove('menu__link--active')
);
 
link.classList.add('menu__link--active');
});
});