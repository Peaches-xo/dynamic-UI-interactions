//hovermenu.js

//PSEUDO
//1. get all div containers
//2. loop over & add event listener, get its ul
//3. on mouseover OR mouseenter (TEST), remove hidden/show menu
//4. on mouseleave, add hidden 

const containers = document.querySelectorAll('.container');

let dropdowns = document.getElementsByClassName("menu_ul");

for (let i = 1; i< containers.length; i++){
    containers[i].addEventListener('mouseover', openMenuOnHover);

    containers[i].addEventListener('mouseleave',closeMenuOnHover);
}

function openMenuOnHover(){
    this.children[1].classList.remove('hidden');
}

function closeMenuOnHover(){
    this.children[1].classList.add('hidden');
}


       