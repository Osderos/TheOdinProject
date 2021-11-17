
// DEFINING VARIABLES
let playerPoints = 0;
let computerPoints = 0;

// SELECTING SCORE DISPLAY
const playerScore= document.querySelector('#playerPoints')
const computerScore= document.querySelector('#computerPoints')

// SELECTING BUTTONS
const rock= document.querySelector('#rock')
const paper= document.querySelector('#paper')
const scissors= document.querySelector('#scissors')


// SELECTING RESULTS DISPLAY
const roundResult= document.querySelector('#roundResult')
const gameResult= document.querySelector('#gameResult')

// OTHER SELECTIONS
const buttons = document.querySelector('#buttons')

// BUTTONS EVENTS
rock.addEventListener('click', ()=>{
  gameResult.innerText = "Game ongoing";
  playOneRound('rock');
  playerScore.innerText = playerPoints;
  computerScore.innerText = computerPoints;
  determineWinner()
})

paper.addEventListener('click', ()=>{
  gameResult.innerText = "Game ongoing";
  playOneRound('paper');
  playerScore.innerText = playerPoints;
  computerScore.innerText = computerPoints;
  determineWinner()
})

scissors.addEventListener('click', ()=>{
  gameResult.innerText = "Game ongoing";
  playOneRound('scissors');
  playerScore.innerText = playerPoints;
  computerScore.innerText = computerPoints;
  determineWinner()
})


// PLAY AGAIN BUTTON
const generatePlayAgainBtn = () =>{
  const playAgaintBtn = document.createElement('button');
  playAgaintBtn.innerText = 'Play again?';
  playAgaintBtn.setAttribute('id','playAgain');
  playAgaintBtn.className = "button is-danger";
  buttons.appendChild(playAgaintBtn)
  const playAgainBtn = document.querySelector('#playAgain').addEventListener('click', () => {
    gameResult.innerText ="Game not started";
    roundResult.innerText = '';
    playerPoints = 0;
    computerPoints = 0;
    playerScore.style.color = "black"
    computerScore.style.color="black"
    playerScore.innerText = 0;
    computerScore.innerText = 0;
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
    playAgaintBtn.remove()
  })
}



const determineWinner = () =>{
  if(playerPoints === 5){
    gameResult.innerText = "You have won! Try again?"
    playerScore.style.color = "green"
    computerScore.style.color="red"
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    generatePlayAgainBtn()
  }
  else if (computerPoints === 5){
    gameResult.innerText = "Computer has won! Try again?"
    playerScore.style.color = "red"
    computerScore.style.color="green"
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
    generatePlayAgainBtn()
  }
}


const computerPlay = () =>{
  let choice = ['rock','paper','scissors'];
  return choice[Math.floor(Math.random()*3)];
}


const playOneRound = (choice) =>{
  let computerSelection = computerPlay();
  let playerSelection = choice;
  if(computerSelection===playerSelection){
    roundResult.innerText ="Tie!";

  }
  else if (computerSelection==='rock' && playerSelection==='scissors' ) {
    roundResult.innerText = "You lose! Rock beats scissors."
    computerPoints += 1;
  }
  else if (computerSelection==='rock' && playerSelection==='paper' ) {
    roundResult.innerText ="You win! Paper beats rock.";
    playerPoints +=1;
  }
  else if (computerSelection==='paper' && playerSelection==='scissors' ) {
    roundResult.innerText ="You win! Scissors beats paper."
    playerPoints +=1;
  }
  else if (computerSelection==='paper' && playerSelection==='rock' ) {
    roundResult.innerText ="You lose! Paper beats rock."
    computerPoints += 1;
  }
  else if (computerSelection==='scissors' && playerSelection==='paper' ) {
    roundResult.innerText ="You lose! Scissors beats paper."
    computerPoints += 1;
  }
  else if (computerSelection==='scissors' && playerSelection==='rock' ) {
    roundResult.innerText ="You win! Rock beats scissors."
    playerPoints +=1;
  }
}
