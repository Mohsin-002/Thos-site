const burger = document.querySelector('.hamburger');
const navListContainer = document.querySelector('.nav-list-container');
const navList = document.querySelector('.nav-list');
const navContainer = document.querySelector('.navbar-container');

function fixedNav (){
    
    const navbar = document.getElementById('navbar');
    const root = document.querySelector(':root');
    root.style.setProperty('--navheight', `${navbar.clientHeight}px`);

}
window.addEventListener('resize', fixedNav);

function openMenu(){
    burger.setAttribute('aria-expanded', "true");
    navList.setAttribute('data-state', "opened");
}

function closeMenu(){
    burger.setAttribute('aria-expanded', "false");
    navList.setAttribute('data-state', "closed");
}

burger.addEventListener('click', ()=>{

    const isOpened = burger.getAttribute('aria-expanded') === "true";
    if(isOpened ? closeMenu() : openMenu());

    if(navListContainer.classList.contains('hidden')){
        navListContainer.classList.remove('hidden');
        navList.classList.add('py-4');
    }
    else{
        navListContainer.classList.add('hidden');
        navList.classList.remove('py-4');
    };

});

window.onscroll = function(){
   
    if(window.scrollY > 50){
        navContainer.classList.add('shadow-lg');
    }
    else{
        navContainer.classList.remove('shadow-lg');
    }
}

