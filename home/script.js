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
 // Código JavaScript para simular o carregamento da página