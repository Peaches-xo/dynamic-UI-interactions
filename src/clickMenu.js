//clickmenu.js


//PSEUDO

//get all divs
//add event listener to clickHandler() on click


const containers = document.querySelectorAll('.container');
let dropdowns = document.getElementsByClassName("menu_ul");

//set i to 1 to exclude Home container
for (let i = 1; i< containers.length; i++){
        containers[i].addEventListener('click', clickHandler);     
}

function clickHandler(e){      
        //show current UL
        this.children[1].classList.toggle('hidden');

        //get list of all uls
        //if ul != currentUL
        //add hidden 

        //get all menus uls
        const allMenus = document.getElementsByClassName('menu_ul');

        //loop over menuULs
        for (let j = 0; j<allMenus.length; j++){
                let currentUL = allMenus[j];

                if (currentUL != this.children[1]){
                        currentUL.classList.add('hidden');
                }
        }
}

window.addEventListener('click', closeMenuOnClick);

function closeMenuOnClick(e){
       //if thing clicked is not menu, toggle class hidden on ul 

        if (!e.target.matches('.menu_p')) {
          let dropdowns = document.getElementsByClassName("menu_ul");
        
          for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
                openDropdown.classList.add('hidden');
          }
        }
}





















//---------------------------------------
//call to clickMenu(dataObj) in index.js

//create div.container
//create p.menu_p 
//set textContent of p to dataObj.title
//append to div

//create ul.menu_ul
//add hidden class
//append to p

//loop over dataObj.itemsObj
//for each item
//create li.menu_li
//set textContent to dataObj.itemsObj.itemName
//append to ul 