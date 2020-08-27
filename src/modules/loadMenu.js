// Function for loading Menu tab
const loadMenu = () => {
  let menuMainContainer = document.createElement('div');
  menuMainContainer.setAttribute('id', 'menu-main-container');

  // mainContainer
  let mainContainerItems = [];
  for(let i = 0; i < 6; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', 'menu-items');
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

  // Appending elements to the mainContainer
  mainContainerItems.forEach(div => menuMainContainer.appendChild(div));
  
  return menuMainContainer;
}

export { loadMenu }
