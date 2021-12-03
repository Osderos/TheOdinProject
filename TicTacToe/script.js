let p1 = '';
let p2 = '';

const playerOne = document.querySelector('#player1')
const playerTwo = document.querySelector('#player2')
const checkAI = document.querySelector('#computer')
const startButton = document.querySelector('#start')
const restartButton = document.querySelector('#restart')

const createPlayers = function (){
  p1 = Player(playerOne.value)
  p2 = Player(playerTwo.value)
}

startButton.addEventListener('click', createPlayers)

restartButton.addEventListener('click', ()=>{
  p1 = '';
  p2 = '';
  board =[0,0,0,0,0,0,0,0,0];
  const removedElem = document.querySelectorAll('img');
  removedElem.parentNode.removeChild(removedElem);
})

checkAI.addEventListener('click',()=>{
  if(checkAI.checked){
    playerTwo.disabled = true;
  }else{
    playerTwo.disabled = false;
  }
})

const Player = (name) =>{
let score = 0;
let turn = 0;

  return{
    name,
    score,
    turn
  }
}


const gameBoard = (function(){
  'use strict';
  let board =[0,0,0,0,0,0,0,0,0]

  for(let i = 0 ; i < board.length ; i ++){
    let cell = document.createElement('div');
    cell.className='cell';
    cell.dataset.number= i;
    document.querySelector('.mainPage').appendChild(cell)
  }

  return{
    board
  }

})();

const displayController = (function(){

document.querySelectorAll('.cell').forEach(function(cell){
  cell.addEventListener('click',(e)=>{
    console.log(e.target)
    if( p1.turn <= p2.turn && gameBoard.board[cell.dataset.number] === 0){
      let x = document.createElement('img')
      x.src = 'x.png'
      e.target.appendChild(x)
      gameBoard.board[cell.dataset.number] = 1;
      p1.turn ++;

    }else if(p1.turn > p2.turn && gameBoard.board[cell.dataset.number] === 0){
      let o = document.createElement('img')
      o.src = 'o.png'
      e.target.appendChild(o)
      gameBoard.board[cell.dataset.number] = 2;
      p2.turn ++;
    }

  })
})

const determineWinner = function (){

}



})();
