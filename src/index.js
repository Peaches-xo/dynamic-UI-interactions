 import './style.css';
 import clickMenu from './clickMenu.js'
//  import cat from './cat128.png';
//  import bg from './pawel-czerwinski-n_ytZFxeDDU-unsplash.jpg';



// CLICK TO TOGGLE MENU 
const about = document.querySelector('.about_title');
const about_menu = document.querySelector('.about_menu');


about.addEventListener('click', toggleMenuOnClick);

about.addEventListener('mouseout', function(){
    about_menu.classList.add('hidden');

});
about_menu.addEventListener('mouseout', toggleMenuOnClick);

function toggleMenuOnClick(){
  const classes = about_menu.classList;
  classes.toggle("hidden");
}



//call clickMenu with menu element




//HOVER TO TOGGLE MENU 
const services = document.querySelector('.services_title');
const services_menu = document.querySelector('.services_menu');

services.addEventListener('mouseenter',toggleMenuOnHover);
services.addEventListener('mouseout', toggleMenuOnHover);
services_menu.addEventListener('mouseleave',toggleMenuOnHover);

function toggleMenuOnHover(){
  const classes = services_menu.classList;
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