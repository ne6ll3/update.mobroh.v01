let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const totalSlides = slides.length;

// Função para mover o carousel
function moveCarousel(direction) {
  slides[currentSlide].classList.remove('active');
  
  // Atualiza o índice do slide atual
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides; 
   
   // Mostra o slide atual e oculta os outros
   slides[currentSlide].classList.add('active');
   document.querySelector('.carrossel').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Auto mudar de slides a cada 5 segundos
setInterval(() => moveCarousel(1), 5000);
