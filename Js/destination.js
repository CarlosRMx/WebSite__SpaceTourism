const marsDestination = document.querySelector('#mars');
const europeDestination = document.querySelector('#europe');
const titanDestination = document.querySelector('#titan');

const planetImg= document.querySelector('.planet__image');
const namePlanet = document.querySelector('.planet__name');
const planetInfo = document.querySelector('.planet__info');
const distancePlanet = document.querySelector('#distance');
const timeTravel = document.querySelector('#time');

marsDestination.addEventListener('click', ()=>{
    planetImg.setAttribute('src','./Images/destination/image-mars.png');
    namePlanet.textContent='MARS';
    planetInfo.textContent='Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!';
    distancePlanet.textContent='225 MIL. KM';
    timeTravel.textContent = '9 MONTHS';

    console.log('Estoy haciendo click');
});

europeDestination.addEventListener('click', ()=>{
    planetImg.setAttribute('src','./Images/destination/image-europa.png');
    namePlanet.textContent='EUROPE';
    planetInfo.textContent='The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.';
    distancePlanet.textContent='628 MIL. KM';
    timeTravel.textContent = '3 YEARS';

});

titanDestination.addEventListener('click', ()=>{
    planetImg.setAttribute('src','./Images/destination/image-titan.png');
    namePlanet.textContent='TITAN';
    planetInfo.textContent='The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.';
    distancePlanet.textContent='1.6 BIL. KM';
    timeTravel.textContent = '7 YEARS';
})