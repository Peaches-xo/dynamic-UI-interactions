 import './style.css';
 import cat from './cat128.png';
 import bg from './pawel-czerwinski-n_ytZFxeDDU-unsplash.jpg';


console.log('hi from index.js!');

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
  
  document.body.appendChild(component());