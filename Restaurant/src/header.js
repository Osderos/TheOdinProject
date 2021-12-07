import './styles.css';

function createHeader(){
  const header = document.createElement('header');
  header.classList.add('header-container')
  document.body.prepend(header)
  return header
}

function createHeaderTitle(){
  const title = document.createElement('h1')
  title.append("CANINE WOOF BAR")
  title.classList.add('header-title')
  document.querySelector('.header-container').append(title)
}

function createHeaderTabs(){
  const tabNames= ['Home','Menu','Contact']
  const tabsContainer = document.createElement('div')
  tabsContainer.classList.add('header-tabsContainer')
  document.querySelector('.header-container').append(tabsContainer)

  for(let i = 0; i<3;i++){
    const container = document.createElement('div')
    container.classList.add('header-tab')
    const lightBar = document.createElement('div')
    lightBar.classList.add('header-light')
    const button = document.createElement('div')
    button.classList.add('header-button')
    button.setAttribute('id', tabNames[i])
    button.innerText = tabNames[i]

    container.appendChild(button)
    container.appendChild(lightBar)
    tabsContainer.appendChild(container)
  }

}

const tabsSelection = () =>{
  document.querySelectorAll('.header-tab').forEach((el) => {
    el.addEventListener('mouseenter', ()=>{
      let swap1 = el.querySelector('.header-light')
      swap1.classList.replace('header-light','header-bar')
    })
    el.addEventListener('mouseleave', ()=>{
      let swap2 = el.querySelector('.header-bar')
      swap2.classList.replace('header-bar','header-light')
    })
  });
}


export { createHeader, createHeaderTitle, createHeaderTabs, tabsSelection}
