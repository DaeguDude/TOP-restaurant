import makChangImg from '../img/makchang.jpg'
import kimbapImg from '../img/kimbap.jpg'
import spicyRadishImg from '../img/spicy-radish.jpg'
import bibimbapImg from '../img/bibimbap.jpg'
import crabImg from '../img/crab.jpg'
import bulgogiImg from '../img/bulgogi.jpg'



// Function for loading Menu tab
const loadMenu = () => {
  let menuMainContainer = document.createElement('div');
  menuMainContainer.setAttribute('id', 'menu-main-container');

  // mainContainer
  let mainContainerItems = [];
  for(let i = 0; i < 6; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', 'menu-items');

    // Create a new image HTML element
    const img = new Image();
    
    switch(i) {
      case 0:
        img.src = makChangImg;
        div.appendChild(img);
        break;
    
      case 1:
        img.src = kimbapImg;
        div.appendChild(img);
        break;
    
      case 2:
        img.src = spicyRadishImg;
        div.appendChild(img);
        break;
    
      case 3:
        img.src = bibimbapImg;
        div.appendChild(img);
        break;

      case 4:
        img.src = crabImg;
        div.appendChild(img);
        break; 
      
      case 5:
        img.src = bulgogiImg;
        div.appendChild(img);
        break;
    }

    mainContainerItems.push(div);
  }

  // Appending elements to the mainContainer
  mainContainerItems.forEach(div => menuMainContainer.appendChild(div));
  
  return menuMainContainer;
}

export { loadMenu }
