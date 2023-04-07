const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// ketika hamburger menu di-klik
hamburger.onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
document.addEventListener("click", (e) => {
  if (!navbarNav.contains(e.target) && !hamburger.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//slider

const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".slider-prev");
const nextBtn = document.querySelector(".slider-next");
let currentSlide = 0;
let slideInterval = null;

function showSlide(n) {
  if (n < 0) {
    currentSlide = slides.length - 1;
  } else if (n >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide = n;
  }

  slides.forEach((slide) => slide.classList.remove("active"));
  slides[currentSlide].classList.add("active");
}

function prevSlide() {
  clearInterval(slideInterval);
  showSlide(currentSlide - 1);
  slideInterval = setInterval(nextSlide, 5000);
}

function nextSlide() {
  clearInterval(slideInterval);
  showSlide(currentSlide + 1);
  slideInterval = setInterval(nextSlide, 5000);
}

prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

slideInterval = setInterval(nextSlide, 5000);
