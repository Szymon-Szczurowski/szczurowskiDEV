const footerYear = document.querySelector('.footer__year');
const loader = document.getElementById("preloader");


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

