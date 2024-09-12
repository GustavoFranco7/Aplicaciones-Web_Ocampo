// Selección de las imágenes del slider
let slides = document.querySelectorAll('.slider img');
let currentSlide = 0;

// Función para mostrar el siguiente slide
function showNextSlide() {
    // Oculta la imagen actual
    slides[currentSlide].classList.remove('active');
    
    // Calcula el índice del siguiente slide
    currentSlide = (currentSlide + 1) % slides.length;
    
    // Muestra el siguiente slide
    slides[currentSlide].classList.add('active');
}

// Muestra la primera imagen
slides[currentSlide].classList.add('active');

// Configura el intervalo para cambiar las imágenes cada 3 segundos (3000 ms)
setInterval(showNextSlide, 3000);