const rocket = document.querySelector('#rocket');
const spacePort = document.querySelector('#spaceport');
const capsule = document.querySelector('#capsule');

const imgVehicle= document.querySelector('.technology__image');
const typeVehicle= document.querySelector('.technology__vehicle');
const techVehicle = document.querySelector('.technology__content');

rocket.addEventListener('click', ()=>{

    spacePort.classList.remove('techClick');
    capsule.classList.remove('techClick');
    rocket.classList.add('techClick');
    
    imgVehicle.setAttribute('src','./Images/technology/image-launch-vehicle-landscape.jpg')
    typeVehicle.textContent='LAUCH VEHICLE';
    techVehicle.textContent = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
    
})

spacePort.addEventListener('click', ()=>{

    capsule.classList.remove('techClick');
    rocket.classList.remove('techClick');
    spacePort.classList.add('techClick');

    imgVehicle.setAttribute('src','./Images/technology/image-spaceport-portrait.jpg')
    typeVehicle.textContent='SPACEPORT';
    techVehicle.textContent = 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.';

});


capsule.addEventListener('click', ()=>{

    spacePort.classList.remove('techClick');
    capsule.classList.add('techClick');

    imgVehicle.setAttribute('src','./Images/technology/image-space-capsule-landscape.jpg')
    typeVehicle.textContent='SPACE CAPSULE';
    techVehicle.textContent = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
});

