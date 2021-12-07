import './styles.css';
import restaurant from './restaurant.jpg';
import dog from './dog.jpg'

function pageLoad(){
  const element = document.createElement('div');
  const image = new Image();
  const headLine = document.createElement('h1');
  const paragraph = document.createElement('p');
  const separator = document.createElement('hr');

  element.classList.add("homepage-content")

  image.classList.add("homepage-picture")
  image.src = restaurant;

  headLine.innerHTML = 'There is a new restaurant in town!';
  headLine.classList.add("headline-title")

  paragraph.innerHTML= 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'


  element.appendChild(image);
  element.appendChild(headLine);
  element.appendChild(separator);
  element.appendChild(paragraph);

  return element;
}

function changePicture() {
  let url = document.querySelector('.homepage-picture');
  let isDog = false // change this to true depending on which picture you want first
  isDog = !isDog
  if (isDog) {
    url.src = dog
  } else if (isDog === false) {
    url.src = restaurant
  }
}

function surprizeText(){
  let surprize = document.createElement('h2')
  surprize.innerHTML= "And he's a dog?!"

  document.querySelector('.headline-title').after(surprize)
}

export { pageLoad, changePicture, surprizeText };
