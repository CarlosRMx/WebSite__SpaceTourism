const iconHamburger = document.querySelector('.nav__menuIcon');
const bntClose = document.querySelector('.btn--close');
const menuContainer = document.querySelector('.menu-mobile-container');


iconHamburger.addEventListener('click',displayMenu);
bntClose.addEventListener('click',closeMenu);

function displayMenu(){
    const isClosed = menuContainer.classList.contains('inactive');
    if(isClosed){
        menuContainer.classList.remove('inactive');
    }
}

function closeMenu(){
    menuContainer.classList.add('inactive');
}