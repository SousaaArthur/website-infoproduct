//Code Preview eBook
let hide = document.querySelector('.hide');
let body = document.documentElement;

function toView(){
    hide.classList.remove('hide');
    document.body.style.overflow = 'hidden'
    document.body.style.overflowX = 'hidden'
}

function closePreview(){
    hide.classList.add('hide')
    document.body.style.overflow = 'visible'
    document.body.style.overflowX = 'hidde'
}

//Code Scrolled Navbar
let navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function(){
    if (window.scrollY > 0){
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
})

//Code slider assessment
// Função para mover o carrossel para a esquerda
function moveCarouselLeft() {
    const carousel = document.querySelector('.card-group-assessment');
    carousel.scrollBy({
        left: -250, // Quantidade de pixels para mover o carrossel
        behavior: 'smooth' // Adiciona uma animação suave
    });
}

// Função para mover o carrossel para a direita
function moveCarouselRight() {
    const carousel = document.querySelector('.card-group-assessment');
    carousel.scrollBy({
        left: 250, // Quantidade de pixels para mover o carrossel
        behavior: 'smooth' // Adiciona uma animação suave
    });
}

// Adiciona os ouvintes de evento aos botões
const btnLeft = document.querySelector('.btn-slider.btn-left');
const btnRight = document.querySelector('.btn-slider.btn-right');
btnLeft.addEventListener('click', moveCarouselLeft);
btnRight.addEventListener('click', moveCarouselRight);