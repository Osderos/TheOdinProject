
const gridContainer = document.querySelector('#gridContainer')
const containerWidth = gridContainer.offsetWidth;
const containerHeigth = gridContainer.offsetHeight;

const gridInput = document.querySelector('.form-control')
const gridMakeBtn =document.querySelector('#grid')

const colorPicker = document.querySelector('#head')

const blackCrayon = document.querySelector('#blackCrayon')
const blackCrayonContainer = document.querySelector('#blackCrayonContainer')

const coloredCrayon = document.querySelector('#coloredCrayon')
const coloredCrayonContainer = document.querySelector('#coloredCrayonContainer')

const rainbowCrayon = document.querySelector('#rainbowCrayon')
const rainbowCrayonContainer = document.querySelector('#rainbowCrayonContainer')

const eraseCrayon = document.querySelector('#eraseCrayon')
const eraseCrayonContainer = document.querySelector('#eraseCrayonContainer')


gridMakeBtn.addEventListener('click', ()=>{
  let size = parseInt(gridInput.value)
  makeGrid(size)

})

eraseCrayon.addEventListener('click', () =>{
  eraseCrayonContainer.style.border="1px solid green";
  document.querySelectorAll(".row").forEach(e => e.remove());

})

blackCrayon.addEventListener('click', () =>{
  blackCrayonContainer.style.border="1px solid green";
  startDrawBlack()
})

coloredCrayon.addEventListener('click', () =>{
  coloredCrayonContainer.style.border="1px solid green";
  startDrawColored()
})


rainbowCrayon.addEventListener('click', () =>{
  rainbowCrayonContainer.style.border="1px solid green";
  startDrawRainbow();
})


const makeRow = function (size) {
  const row = document.createElement('div')
  row.style.margin = '0px'
  row.classList.add('row')
  for(let i = 0 ; i < size; i++){
    const square = document.createElement('div')
    square.style.width = containerWidth/size+'px';
    square.style.height = containerHeigth/size+'px';
    square.style.padding = '0px'

    square.classList.add('square')
    row.appendChild(square)
  }
  gridContainer.appendChild(row)
}

const makeGrid = function (size) {
for(let i = 0 ; i < size; i++){
  makeRow(size)
}
}

const startDrawBlack= function () {
  document.querySelectorAll('.square').forEach(function(el) {
      el.addEventListener('mouseover', function() {
        el.style.backgroundColor = 'black';
      })
    })
}

const startDrawColored= function () {
  document.querySelectorAll('.square').forEach(function(el) {
      el.addEventListener('mouseover', function() {
        el.style.backgroundColor = colorPicker.value;
      })
    })
}

const startDrawRainbow= function () {
  document.querySelectorAll('.square').forEach(function(el) {
      el.addEventListener('mouseover', function() {
        el.style.backgroundColor = randomColor();
      })
    })
}

const randomColor = function (){
  let r = Math.floor(Math.random()*255)
  let g = Math.floor(Math.random()*255)
  let b = Math.floor(Math.random()*255)
  return `rgb(${r},${g},${b})`
}
