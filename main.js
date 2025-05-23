function scrollCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const scrollAmount = direction * 200; // Ajuste a velocidade de rolagem aqui
    carousel.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
}



const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.classList.toggle('open');
});

navLinks.addEventListener('click',() => {
    navLinks.classList.remove('active');
    menuBtn.classList.remove('open');
});