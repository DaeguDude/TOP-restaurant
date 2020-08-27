// Modules for each tab
import { initialLoad, repeatedSetup } from './modules/initial-load'
import { loadAbout } from './modules/loadAbout'
import { loadMenu } from './modules/loadMenu'
import { loadContact } from './modules/loadContact'

// CSS
import './css/style.css'


let content = document.getElementById('content');

// Loading Home Contents
content.appendChild(repeatedSetup());
let main = content.querySelector('main');
main.appendChild(initialLoad());


/**
 * Tab swtiching logic. If any tab is clicked, it will load the
 * contents regarding to it
 */
let navBar = content.querySelector('ul');

// Add eventListeners to all li
for(let i = 0; i < navBar.children.length; i++) {
  let li = navBar.children[i];
  li.addEventListener('click', (event) => {
    let tab = li.innerHTML;

    switch(tab) {
      case 'Home':
        main.innerHTML = '';
        main.appendChild(initialLoad());
        break;

      case 'About':
        main.innerHTML = '';
        main.appendChild(loadAbout());
        break;

      case 'Menu':
        main.innerHTML = '';
        main.appendChild(loadMenu());
        break;

      case 'Contact':
        main.innerHTML = '';
        main.appendChild(loadContact());
        break;
    }    
  })
}






