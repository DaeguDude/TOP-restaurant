const initialLoad = () => {
  // Making 3 big elements first. Container, header, and main.
  let container = document.createElement('div');
  container.setAttribute('id', 'container');
  
  let header = document.createElement('header');

  let main = document.createElement('main');
  
  // Container - Direct elements
  let headerContainer = document.createElement('div');
  headerContainer.setAttribute('id', 'header-container');

  let mainContainer = document.createElement('div');
  mainContainer.setAttribute('id', 'main-container');


  // header - Direct elements
  let restaurantTitle = document.createElement('h1');
  restaurantTitle.setAttribute('id', 'restaurant-title');

  let navBar = document.createElement('ul');
  navBar.setAttribute('id', 'nav-bar');

  // main - Direct elements
  let landingImg = document.createElement('img');
  landingImg.setAttribute('id', 'landing-img');
  landingImg.setAttribute('alt', 'landing-page');
  console.log(landingImg)

  let phraseBox = document.createElement('div');
  phraseBox.setAttribute('id', 'phrase-box');






  
}

export { initialLoad }
