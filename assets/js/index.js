// Añadir clase "fixed" al header y "padding" al about al hacer scroll
window.addEventListener("scroll", function () {
  var header = document.querySelector(".l-header");
  var about = document.querySelector(".p-about");
  var mvHeight = document.querySelector(".p-mv").offsetHeight;

  if (window.scrollY >= mvHeight) {
      header.classList.add("fixed");
      about.classList.add("padding");
  } else {
      header.classList.remove("fixed");
      about.classList.remove("padding");
  }
});

// Inicializar Splide al cargar el DOM
document.addEventListener("DOMContentLoaded", function () {
  var slides = document.querySelectorAll(".splide__slide").length;

  new Splide("#gallery__carousel", {
      type: "loop",
      perPage: 1,
      fixedWidth: "33%",
      gap: "1%",
      rewind: true,
      autoplay: true,
      interval: 3000,
      pagination: false,
      arrows: false,
      breakpoints: {
          650: {
              fixedWidth: "50%"
          },
          500: {
              fixedWidth: "100%"
          }
      }
  }).mount();
});

// Añadir funcionalidad de desplegar respuesta en preguntas
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".p-other__question").forEach(function (question) {
      question.addEventListener("click", function () {
          var answer = question.nextElementSibling;

          if (answer && answer.classList.contains("p-other__answer")) {
              answer.classList.toggle("display");
              question.classList.toggle("rotated");
          }
      });
  });
});

// Contador para la fecha de la boda
var weddingDate = new Date("2025-05-05T17:00:00").getTime();
var countdownInterval = setInterval(function () {
  var now = new Date().getTime();
  var timeLeft = weddingDate - now;
  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

  document.querySelector(".days").innerText = days;
}, 1000);

// Segundo contador para una fecha adicional
var weddingDate2 = new Date("2025-05-04T17:00:00").getTime();
var countdownInterval2 = setInterval(function () {
  var now = new Date().getTime();
  var timeLeft = weddingDate2 - now;

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.querySelector(".days2").innerText = days;
  document.querySelector(".hours2").innerText = hours;
  document.querySelector(".minutes2").innerText = minutes;
  document.querySelector(".seconds2").innerText = seconds;
}, 1000);

// Efecto parallax para la imagen principal
window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  document.querySelector(".p-mv_mainImg").style.transform = "translateY(" + (-0.5 * scrollPosition) + "px)";
});

const btnSpain = document.querySelector('.language__item.spain a[href="#ES"]');
const btnVietnam = document.querySelector('.language__item.spain a[href="#VN"]');
const itemsEsp = document.querySelectorAll('.esp');
const itemsVtn = document.querySelectorAll('.vtn');

function activateLanguage(language) {
  const newUrl = `${window.location.origin}${window.location.pathname}#${language}`;
  history.replaceState(null, '', newUrl);

  if (language === 'ES') {
    itemsEsp.forEach(item => {
      item.style.display = '';
      item.style.pointerEvents = '';
    });
    itemsVtn.forEach(item => {
      item.style.display = 'none';
      item.style.pointerEvents = 'none';
    });
    btnSpain.parentElement.style.display = 'none'; // Ocultar botón de España
    btnVietnam.parentElement.style.display = ''; // Mostrar botón de Vietnam
  } else if (language === 'VN') {
    itemsEsp.forEach(item => {
      item.style.display = 'none'; // Ocultar elementos con clase "esp"
      item.style.pointerEvents = 'none'; // Deshabilitar eventos de puntero
    });
    itemsVtn.forEach(item => {
      item.style.display = ''; // Mostrar elementos con clase "vtn"
      item.style.pointerEvents = ''; // Habilitar eventos de puntero
    });
    btnSpain.parentElement.style.display = ''; // Mostrar botón de España
    btnVietnam.parentElement.style.display = 'none'; // Ocultar botón de Vietnam
  }
}


btnSpain.addEventListener('click', (event) => {
  event.preventDefault(); // Prevenimos el comportamiento por defecto
  activateLanguage('ES');
});

btnVietnam.addEventListener('click', (event) => {
  event.preventDefault(); // Prevenimos el comportamiento por defecto
  activateLanguage('VN');
});

// Inicialización al cargar la página
if (window.location.hash === '#ES') {
  activateLanguage('ES');
} else if (window.location.hash === '#VN') {
  activateLanguage('VN');
} else {
  activateLanguage('ES');
}
