// Testimonial Carousel
const carouselSlide = document.querySelector('#testimonial-carousel');
const carouselSlides = document.querySelectorAll('.testimonial-slide');

const nextButton = document.createElement('button');
nextButton.innerHTML = '>';
nextButton.classList.add('carousel-button', 'next-button');

const prevButton = document.createElement('button');
prevButton.innerHTML = '<';
prevButton.classList.add('carousel-button', 'prev-button');

let currentIndex = 0;

carouselSlide.insertBefore(prevButton, carouselSlides[0]);
carouselSlide.appendChild(nextButton);

nextButton.addEventListener('click', () => {
  if (currentIndex === carouselSlides.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  if (currentIndex === 0) {
    currentIndex = carouselSlides.length - 1;
  } else {
    currentIndex--;
  }
  updateCarousel();
});

function updateCarousel() {
  carouselSlide.style.transform = translateX(-${currentIndex * 100}%);
}

// Photo Gallery
const photoGallery = document.querySelector('#photo-gallery');
const photoModal = document.createElement('div');
photoModal.classList.add('photo-modal');
photoModal.innerHTML = '<img class="photo-modal-image"><button class="close-button">×</button>';

photoGallery.addEventListener('click', (event) => {
  if (event.target.tagName === 'IMG') {
    const photoSrc = event.target.getAttribute('src');
    photoModal.querySelector('.photo-modal-image').setAttribute('src', photoSrc);
    photoModal.classList.add('open');
  }
});

photoModal.querySelector('.close-button').addEventListener('click', () => {
  photoModal.classList.remove('open');
});

document.body.appendChild(photoModal);
