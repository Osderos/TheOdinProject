import './styles.css';
import pic1 from './menuPics/pic1.png'
import pic2 from './menuPics/pic2.png'
import pic3 from './menuPics/pic3.png'
import pic4 from './menuPics/pic4.png'
import pic5 from './menuPics/pic5.png'
import pic6 from './menuPics/pic6.png'
import pic7 from './menuPics/pic7.png'
import pic8 from './menuPics/pic8.png'

const picBase = [pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8]

function menuLoad(){
  const element = document.createElement('div');
  element.classList.add("menu-content")

  return element
}

function makeCell(num){
  for(let i = 0; i < num; i++){
    let cell = document.createElement('div')
    cell.classList.add('cell')
    cell.dataset.number = i;
    let menuContent = document.querySelector('.menu-content')
    menuContent.appendChild(cell)
  }
}

function picInsert(){
  for(let key of picBase){
    let image = new Image()
    image.src = key
    image.style.width = '100px'
    image.style.height = '100px'
    document.querySelectorAll('.cell').forEach((item) => {
      if(item.dataset.number == picBase.indexOf(key)){
        item.appendChild(image)
      }
    });

  }
}

function titleInsert(text, num){
  document.querySelectorAll('.cell').forEach((item) => {
    if(item.dataset.number == num){
      let title = document.createElement('h1');
      title.innerText = text;
      title.classList.add('plate-title')
      item.appendChild(title)
    }
  });
}

function contentInsert(text, num){
  document.querySelectorAll('.cell').forEach((item) => {
    if(item.dataset.number == num){
      let content = document.createElement('p1');
      content.innerText = text;
      content.classList.add('plate-content')
      item.appendChild(content)
    }
  });
}

// function makeTable(rows){
//   for(let j = 0: j < rows; j++){
//     makeRow(2)
//   }
// }

export {menuLoad, makeCell, picInsert, titleInsert, contentInsert}
