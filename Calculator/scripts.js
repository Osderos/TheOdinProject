const numbers=document.querySelectorAll(".numbers")
const operators=document.querySelectorAll(".operators")
const equal = document.querySelector("#equal")
const clear = document.querySelector("#clear")
const decimal = document.querySelector("#decimal")
const state = document.querySelector('#state')
const upperDisplay=document.querySelector("#upperDisplay")
const lowerDisplay=document.querySelector("#lowerDisplay")


let displayValue = 0;
let storedValue = 0;
let operand = "";
let x = '';



window.addEventListener('keydown',function (e){
  let num =parseInt(e.code.slice(-1))
    if(lowerDisplay.innerText.length < 12){
      x += num;
      displayValue= parseInt(x);
      lowerDisplay.innerText = displayValue;
    }else{
      alert('Number to big!')
    }
  })



numbers.forEach((function(number){
  number.addEventListener('click',function (){

    if(lowerDisplay.innerText.length < 12){
      x += number.value;
      displayValue= parseInt(x);
      lowerDisplay.innerText = displayValue;
    }else{
      alert('Number to big!')
    }
  })
}));


operators.forEach((function(operator){
  operator.addEventListener('click',function (){
    if(storedValue === 0){
      storedValue = displayValue;
      upperDisplay.innerText = storedValue;

      displayValue = 0;
      lowerDisplay.innerText="";
      operand = operator.innerText;
      x=''
    }else{
      storedValue = operate (storedValue,displayValue,operand);
      upperDisplay.innerText = Math.round((storedValue)*1000)/1000;
      displayValue=0;
      lowerDisplay.innerText = '';
      operand = operator.innerText;
      x=''
    }

  })
}))




equal.addEventListener('click', () =>{
  if(storedValue === 0 && operand === ""){
    storedValue = 0;
    displayValue = 0;
    upperDisplay.innerText = '';
    lowerDisplay.innerText = '';
    x = ''
  } else {
    displayValue = operate(storedValue,displayValue,operand);
    upperDisplay.innerText = 0 ;
    storedValue = 0;
    lowerDisplay.innerText = Math.round((displayValue)*1000)/1000;
    x=''
  }

})

state.addEventListener('click',()=>{
  displayValue = displayValue*(-1);
  lowerDisplay.innerText=displayValue;
})

decimal.addEventListener('click',()=>{
  if(displayValue===0){

  }else{
    displayValue=displayValue/10;
    lowerDisplay.innerText=displayValue;
  }

})

clear.addEventListener('click', ()=>{
  displayValue = 0;
  storedValue = 0;
  operand = "";
  upperDisplay.innerText = "";
  lowerDisplay.innerText = "";
  x=''
})




const add = (a,b) =>  a+b;
const subtract = (a,b) =>  a-b;
const multiply = (a,b) =>  a*b;
const divide = (a,b) => a/b;




const operate = (storedValue,displayValue,operand) =>{
  if(operand === "+"){
    return add(storedValue,displayValue)
  }
  else if (operand === "-"){
    return subtract(storedValue,displayValue)
  }
  else if (operand === "/"){
    return divide(storedValue,displayValue)
  }
  else if (operand === "*"){
    return multiply(storedValue,displayValue)
  }

}
