import _ from 'lodash';
import {pageLoad, changePicture, surprizeText} from './page-load'
import {createHeader, createHeaderTitle, createHeaderTabs, tabsSelection} from './header'
import {menuLoad, makeCell, picInsert, titleInsert, contentInsert} from './menu'
import {contactLoad, makeDetails, addLocation} from './contact'

// Header generator
createHeader()
createHeaderTitle()
createHeaderTabs()
tabsSelection()

// Menu content generator




content.appendChild(pageLoad())

document.querySelector('#Contact').addEventListener('click',()=>{
  content.removeChild(content.lastChild)
  content.appendChild(contactLoad())

  makeDetails('&#128222 000-111-222-333')
  makeDetails('&#128205 Str. Nowere, Nr. ?, El Dunno')
  addLocation()
})

document.querySelector('#Menu').addEventListener('click',()=>{
  content.removeChild(content.lastChild)
  content.appendChild(menuLoad())
  makeCell(8)
  picInsert()
  titleInsert("Cross Bones", 0)
  titleInsert("Paw Green", 1)
  titleInsert("Paw Red", 2)
  titleInsert("Tuna Chunks", 3)
  titleInsert("Cross Bones in Can", 4)
  titleInsert("Paw Bites", 5)
  titleInsert("Normal Bone", 6)
  titleInsert("Dog Flakes", 7)
  contentInsert("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 0)
  contentInsert("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 1)
  contentInsert("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 2)
  contentInsert("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 3)
  contentInsert("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 4)
  contentInsert("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 5)
  contentInsert("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 6)
  contentInsert("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", 7)
})


document.querySelector('#Home').addEventListener('click',()=>{
  content.removeChild(content.lastChild)
  content.appendChild(pageLoad())
})

document.querySelector('.homepage-picture').addEventListener('click',() =>{
  changePicture();
  surprizeText();
})
