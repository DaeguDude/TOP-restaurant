const initialLoad = () => {
  /**
   * 1. Making all elements first that are in 'index.html'
   */
  
  // container, header, main
  let container = document.createElement('div');
  container.setAttribute('id', 'container');
  
  let header = document.createElement('header');
  let main = document.createElement('main');
  
  // Container - Direct elements
  let headerContainer = document.createElement('div');
  headerContainer.setAttribute('id', 'header-container');

  let mainContainer = document.createElement('div');
  mainContainer.setAttribute('id', 'main-container');


  // headerContainer elements
  let restaurantTitle = document.createElement('h1');
  restaurantTitle.setAttribute('id', 'restaurant-title');
  restaurantTitle.innerHTML = 'DG<span id="kor">KOR</span>DISH';


  let navBar = document.createElement('ul');
  navBar.setAttribute('id', 'nav-bar');

  // navBar elements
  let navBarlis = [];
  for(let i = 0; i < 4; i++) {
    let li = document.createElement('li');  
    let a = document.createElement('a');
    let page;
    switch(i) {
      case 0:
        page = 'index.html';
        break;
      case 1:
        page = 'about.html';
        break;
      case 2:
        page = 'menu.html';
        break;
      case 3:
        page = 'contact.html';
        break;
    }

    a.setAttribute('href', page);
    li.appendChild(a)
    navBarlis.push(li);   
  }

  // mainContainer
  let landingImg = document.createElement('img');
  landingImg.setAttribute('src', '../img/my-landing-page.jpg');
  landingImg.setAttribute('id', 'landing-img');
  landingImg.setAttribute('alt', 'landing-page');

  let phraseBox = document.createElement('div');
  phraseBox.setAttribute('id', 'phrase-box');

  let mainPhrase = document.createElement('p');
  mainPhrase.setAttribute('id', 'main-phrase');
  mainPhrase.innerHTML = 'HAVE YOU TRIED KOREAN FOOD YET? VISIT US TODAY!';

  /**
   * 2. Appending elements to the elements where they belong to
   */

  // Header
  navBarlis.forEach(li => navBar.appendChild(li));
  headerContainer.appendChild(restaurantTitle);
  headerContainer.appendChild(navBar);
  header.appendChild(headerContainer);
  container.appendChild(header);

  // Main
  phraseBox.appendChild(mainPhrase);
  mainContainer.appendChild(landingImg);
  mainContainer.appendChild(phraseBox);
  main.appendChild(mainContainer)
  container.appendChild(main);
  
  return container;
}

export { initialLoad }
