import './styles.css';
import location from './menuPics/location.png'

function contactLoad(){
  const element = document.createElement('div');
  element.classList.add("contact-content");

  return element
}

function makeDetails(text){
  let detail = document.createElement('p')
  detail.classList.add('detail');
  detail.innerHTML = text;

  document.querySelector('.contact-content').appendChild(detail)

}

function addLocation(){
  let image = new Image()
  image.src = location;
  image.style.width = '350px'
  image.style.height = '200px'

  document.querySelector('.contact-content').appendChild(image)
}

export {contactLoad, makeDetails, addLocation}
