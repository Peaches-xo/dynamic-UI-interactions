import './style.css';
import clickMenu from './clickMenu.js';
// import hoverMenu from './hoverMenu.js';















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