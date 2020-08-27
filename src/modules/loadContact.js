// Function for loading Contact tab
const loadContact = () => {
  let mainContainer = document.createElement('div');
  mainContainer.setAttribute('id', 'main-container');

  // mainContainerContents
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
  
  return mainContainer;
}

export { loadContact }
