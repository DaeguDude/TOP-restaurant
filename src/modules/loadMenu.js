import { repeatedSetup } from './initial-load'

// Function for loading Menu tab
const loadMenu = () => {
  // Repeated Setup, Loading Header and get main, mainContainer elements
  let container = repeatedSetup();
  let main = container.getElementsByTagName('main')[0];
  let mainContainer = main.children[0];

  // mainContainer
  let mainContainerItems = [];
  for(let i = 0; i < 6; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', 'main-container-items');
    switch(i) {
      case 0:
        div.innerHTML = '<img src="../img/makchang.jpg" alt="makchang"></img>'
        break;
    
      case 1:
        div.innerHTML = '<img src="../img/kimbap.jpg" alt="kimbap"></img>'
        break;
    
      case 2:
        div.innerHTML = '<img src="../img/spicy-radish.jpg" alt="spicy-radish"></img>'
        break;
    
      case 3:
        div.innerHTML = '<img src="../img/bibimbap.jpg" alt="bibimbap"></img>'
        break;

      case 4:
        div.innerHTML = '<img src="../img/crab.jpg" alt="crab"></img>'
        break; 
      
      case 5:
        div.innerHTML = '<img src="../img/bulgogi.jpg" alt="bulgogi"></img>'
        break;
    }

    mainContainerItems.push(div);
  }

  // Appending elements to the Main
  mainContainerItems.forEach(div => mainContainer.appendChild(div));
  main.appendChild(mainContainer)
  container.appendChild(main);
  
  return container;
}

export { loadMenu }
