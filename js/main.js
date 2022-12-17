const footerYear = document.querySelector('.footer__year')

const heading = document.querySelector('.about__heading')
const aboutBox = document.querySelector('.about__box')
const contactBox = document.querySelector('.contact__box')

const loader = document.getElementById("preloader");

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}


document.addEventListener('scroll', function () {
  // Sprawdź, czy użytkownik jest na sekcji .about
  const aboutPosition = document.querySelector('.about').getBoundingClientRect().top
  const windowHeight = window.innerHeight

  if (aboutPosition < windowHeight) {
    // Jeśli tak, dodaj klasy do elementów
    heading.classList.add('show')
    aboutBox.classList.add('show-about')
  }

  // Sprawdź, czy użytkownik jest na sekcji .contact
  const contactPosition = document.querySelector('.contact').getBoundingClientRect().top

  if (contactPosition < windowHeight) {
    // Jeśli tak, dodaj klasę do elementu
    contactBox.classList.add('show')
  }
})


window.addEventListener("load", function(){
  loader.style.display = "none";
})


handleCurrentYear()

