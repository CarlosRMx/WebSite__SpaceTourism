const iconHamburger = document.querySelector('.nav__menuIcon');
const iconBrand = document.querySelector('.nav__logo');
const btnExplore = document.querySelector('.explore__oval');
const bntClose = document.querySelector('.btn--close');
const menuContainer = document.querySelector('.menu-mobile-container');


iconHamburger.addEventListener('click',displayMenu);
bntClose.addEventListener('click',closeMenu);

iconBrand.addEventListener('click',()=>{
    window.location.href='index.html';
});

btnExplore.addEventListener('click',()=>{
    window.location.href='destination.html';
});

function displayMenu(){
    const isClosed = menuContainer.classList.contains('inactive');
    if(isClosed){
        menuContainer.classList.remove('inactive');
    }
}

function closeMenu(){
    menuContainer.classList.add('inactive');
}