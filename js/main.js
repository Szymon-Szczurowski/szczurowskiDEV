const footerYear = document.querySelector('.footer__year');
const loader = document.getElementById("preloader");

const burger = document.querySelector(".nav__burger");
const menu = document.querySelector(".nav__menu");
const items = document.querySelectorAll(".nav__menu-item");
const cross = document.querySelector(".nav__burger-box");



const handleNav = () => {
  menu.classList.toggle('nav__menu--active')
  cross.classList.toggle('nav__burger-cross')

  items.forEach(item => {
    item.addEventListener('click', () => {
      menu.classList.remove('nav__menu--active')
      cross.classList.remove('nav__burger-cross')
    })
})


}





// -------------------
// aktualna data
// -------------------

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

// -------------------
// okno ładowania
// -------------------

const windowLoading = () =>{
  window.addEventListener("load", function(){
    loader.style.display = "none";
  })
}



windowLoading()
handleCurrentYear()
burger.addEventListener('click', handleNav)