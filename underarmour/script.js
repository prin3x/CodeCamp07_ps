const slides = document.querySelectorAll(".mySlides");
const dots = document.querySelectorAll(".dot");

let slideIndex = 0;

const currentSlide = slides => {
  changeSlides(slides);
};

const prevNextSlide = slides => {
  changeSlides((slideIndex += slides));
};

const changeSlides = nSlide => {
  if (nSlide > slides.length - 1) {
    slideIndex = 0;
  } else if (nSlide < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = nSlide;
  }
  slides.forEach(slide => (slide.style.display = "none"));
  dots.forEach(dot => {
    dot.classList.remove("active");
  });

  slides[slideIndex].style.display = "block";
  dots[slideIndex].classList.add("active");
};

changeSlides(0);
