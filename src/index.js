 import './style.css';
//  import clickMenu from './clickMenu.js'
//  import cat from './cat128.png';
//  import bg from './pawel-czerwinski-n_ytZFxeDDU-unsplash.jpg';



// CLICK TO TOGGLE MENU 
const about = document.querySelector('.about_title'); //div
const about_menu = document.querySelector('.about_menu'); //ul


 about.addEventListener('click', toggleMenuOnClick);

// about.addEventListener('mouseout', function(){
//     about_menu.classList.add('hidden');
   
   
// });

// about_menu.addEventListener('mouseout', toggleMenuOnClick); //THIS CAUSING FLICKERS

function toggleMenuOnClick(){
  const classes = about_menu.classList;
  classes.toggle("hidden");
}






//HOVER TO TOGGLE MENU 
const services = document.querySelector('.services_title');
const services_menu = document.querySelector('.services_menu');

services.addEventListener('mouseenter',toggleMenuOnHover);

services_menu.addEventListener('mouseleave',toggleMenuOnHover);

function toggleMenuOnHover(){
  const classes = services_menu.classList;
  classes.toggle("hidden");
}


//TESTTING P TOGGLE

const p_title = document.querySelector('.p_title');
const p_menu = document.querySelector('.p_menu');



p_title.addEventListener('click', toggleMenu)

function toggleMenu(){
  const classes = p_menu.classList;
  classes.toggle("hidden");
}



//OPEN MOBILE MENU
const hamburger = document.querySelector('.hamburger');
const mobile_ul = document.querySelector('.mobile_ul');

hamburger.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(){
  const classes = mobile_ul.classList;
  classes.toggle("hidden");
}

























//import saloonImg from './saloon.png';
// function imageFactory(image){

// 	const myImage = new Image();
// 	myImage.src = image;
// 	return myImage;
// }
//imageFactory(saloonImg);


function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    // element.textContent = "Hello Webpackety";

      // Add the image to our existing div.
      const myCat = new Image();
      myCat.src = cat;

      element.appendChild(myCat);
  
    return element;
  }
  
  // document.body.appendChild(component());