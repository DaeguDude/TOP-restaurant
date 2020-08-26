import { repeatedSetup } from './initial-load'

// Function for loading Contact tab
const loadContact = () => {
  // Repeated Setup, Loading Header and get main, mainContainer elements
  let container = repeatedSetup();
  let main = container.getElementsByTagName('main')[0];
  let mainContainer = main.children[0];

  // mainContainer
  let contactImg = document.createElement('img');
  contactImg.setAttribute('src', '../img/contact.jpg');
  contactImg.setAttribute('id', 'contact-img');
  contactImg.setAttribute('alt', 'contact-img');

  let contactSection = document.createElement('div');
  contactSection.setAttribute('id', 'contact-section');
  
  let contactTxt = document.createElement('span');
  contactTxt.setAttribute('id', 'contact-txt');
  contactTxt.innerHTML = 'CONTACT US';

  let contactIcons = document.createElement('div');
  contactIcons.setAttribute('id', 'contact-icons');
  contactIcons.innerHTML = `
    <a href="https://github.com/daegudude"><i class="fab fa-github"></i></a>
    <a href="https://twitter.com/Daegudude_Kim"><i class="fab fa-twitter-square"></i></a>
    <a href="mailto:k3hppk@gmail.com"><i class="far fa-envelope"></i></a>
  `;
  
  // Appending elements to the Main
  contactSection.appendChild(contactTxt);
  contactSection.appendChild(contactIcons);
  mainContainer.appendChild(contactImg);
  mainContainer.appendChild(contactSection);
  main.appendChild(mainContainer)
  container.appendChild(main);
  
  return container;
}

export { loadContact }
