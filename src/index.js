// Modules for each tab
import { initialLoad } from './modules/initial-load'
import { loadAbout } from './modules/loadAbout'
import { loadMenu } from './modules/loadMenu'
import { loadContact } from './modules/loadContact'

// CSS
import './css/style.css'

let content = document.getElementById('content');
let container = initialLoad();
content.appendChild(container);

// First, I have to know when tab is clicked
let navBar = container.getElementsByTagName('ul')[0];

for(let i = 0; i < navBar.children.length; i++) {
  // Add eventlisteners to all li's
  let li = navBar.children[i];
  li.addEventListener('click', (event) => {
    let tab = li.innerHTML;

    switch(tab) {
      case 'Home':
        container = initialLoad();
        break;

      case 'About':
        container = loadAbout();
        break;

      case 'Menu':
        container = loadMenu();
        break;

      case 'Contact':
        container = loadContact();
        break;
    }    
    
    console.log(navBar);
    content.innerHTML = '';
    content.appendChild(container);

    console.log(content);
    console.log(container);
    console.log(navBar);
    console.log(li);
  })
}





