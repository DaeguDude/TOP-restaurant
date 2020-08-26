import { repeatedSetup } from './initial-load'

// Function for loading About tab
const loadAbout = () => {
  // Repeated Setup, Loading Header and get main, mainContainer elements
  let container = repeatedSetup();
  let main = container.getElementsByTagName('main')[0];
  let mainContainer = main.children[0];

  // mainContainer
  let aboutImg = document.createElement('img');
  aboutImg.setAttribute('src', '../img/About.jpg');
  aboutImg.setAttribute('id', 'about-img');
  aboutImg.setAttribute('alt', 'about-img');

  let phraseBox = document.createElement('div');
  phraseBox.setAttribute('id', 'phrase-box');

  let phraseBoxSpan = document.createElement('span');
  phraseBoxSpan.setAttribute('id', 'phrase-box-span');
  phraseBoxSpan.innerHTML = 'WHO WE ARE';

  let phraseBoxP = document.createElement('p');
  phraseBoxP.setAttribute('id', 'phrase-box-p');
  phraseBoxP.innerHTML = 'We are the best Korean food restaurant in Daegu, South Korea';


  // Appending elements to the Main
  phraseBox.appendChild(phraseBoxSpan);
  phraseBox.appendChild(phraseBoxP);
  mainContainer.appendChild(aboutImg);
  mainContainer.appendChild(phraseBox);
  main.appendChild(mainContainer)
  container.appendChild(main);
  
  return container;
}

export { loadAbout }
