const imgProfile = document.querySelector('#profileImage');
const profession = document.querySelector('.crewDescription__profession');
const nameProfile=  document.querySelector('.crewDescription__name');
const achievements= document.querySelector('.crewDescription__content');

const dotOne = document.querySelector('#firstDot');
const dotTwo= document.querySelector('#secondDot');
const dotThree= document.querySelector('#thirdDot');
const dotFour = document.querySelector('#fourthDot');




function missionEspecialis(){
    dotOne.classList.remove('crewDots__item--active');
    dotTwo.classList.add('crewDots__item--active');
    imgProfile.setAttribute('src','./Images/crew/image-mark-shuttleworth.png');
    profession.textContent='MISSION SPECIALIST';
    nameProfile.textContent='MARK SHUTTLEWORTH';
    achievements.textContent='Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.';
}
function pilot(){
    dotTwo.classList.remove('crewDots__item--active');
    dotThree.classList.add('crewDots__item--active');
    imgProfile.setAttribute('src','./Images/crew/image-victor-glover.png');
    profession.textContent='PILOT';
    nameProfile.textContent='VICTOR GLOVER';
    achievements.textContent='Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ';
}

function flightEngineer(){
    dotThree.classList.remove('crewDots__item--active');
    dotFour.classList.add('crewDots__item--active');
    imgProfile.setAttribute('src','./Images/crew/image-anousheh-ansari.png');
    profession.textContent='FLIGHT ENGINEER';
    nameProfile.textContent='ANOUSHEH ANSARI';
    achievements.textContent='Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ';
}


setTimeout(() => {
    missionEspecialis();
    setTimeout(() => {
        pilot();
        setTimeout(() => {
            flightEngineer();
            setTimeout(() => {
                location.href='crew.html';
            }, 3000);
        }, 3000);
    }, 3000);
}, 3000);


