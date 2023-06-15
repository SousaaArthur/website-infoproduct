//Code Preview eBook
let hide = document.querySelector('.hide');
let body = document.documentElement;

function toView(){
    hide.classList.remove('hide');
    document.body.style.overflow = 'hidden'


}

function closePreview(){
    hide.classList.add('hide')
    document.body.style.overflow = 'visible'
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