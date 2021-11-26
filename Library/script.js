
const addBookBtn = document.querySelector("#addBookBtn");
const addBookBtnPopUp = document.querySelector("#addBookBtnPopUp");
const close = document.querySelector('.close');
const popup= document.querySelector('.popup');

const bookTitle = document.querySelector("#bookTitle")
const bookAuthor = document.querySelector("#bookAuthor")
const bookPages = document.querySelector("#bookPages")
const isRead = document.querySelector("#isRead")

const myLibrary=[]





addBookBtn.addEventListener('click', ()=>{
  popup.style.display = 'flex';
})
close.addEventListener('click', ()=>{
  popup.style.display = 'none';
})

addBookBtnPopUp.addEventListener('click', ()=>{
  removeBooks()
  addBookToLibrary ()
  displayBooks ()
  removeBookFromList ()
  isBookRead()
})

function Book(title,author,pages,read){
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = () =>{
      return `${this.title} by ${this.author}, ${this.pages} pages.`
  }
}

function addBookToLibrary () {
  let title = bookTitle.value
  let author = bookAuthor.value
  let pages = bookPages.value
  let read = isRead.checked

  myLibrary.push(new Book(title,author,pages,read))
}

function displayBooks (){
  for(let book of myLibrary){
    let bookDisplay = document.createElement('div');
    let removeBtn = document.createElement('button');
    let readBtn = document.createElement('button');
    if (book.read){
      readBtn.innerText = "Read"
    }else{
      readBtn.innerText = "Not read"
    }
    removeBtn.innerText = "Remove Book"
    removeBtn.classList.add('removeBtn')
    readBtn.classList.add('readBtn')
    bookDisplay.classList.add('bookDisplay');
    bookDisplay.innerText = book.info();
    removeBtn.dataset.number = myLibrary.indexOf(book)
    bookDisplay.dataset.number = removeBtn.dataset.number
    bookDisplay.append(removeBtn)
    bookDisplay.append(readBtn)
    document.querySelector('.row-cols-4').append(bookDisplay)

  }

}

function removeBooks(){
  document.querySelectorAll('.bookDisplay').forEach(function(book){
    book.remove()
  })
}

function removeBookFromList (){
  document.querySelectorAll('.removeBtn').forEach(function(btn){
    btn.addEventListener('click',(e)=>{
      let removeIndex=e.target.dataset.number
      document.querySelectorAll('.bookDisplay').forEach(function(book){
        if(book.dataset.number === removeIndex){
          book.remove()
          myLibrary.splice(removeIndex,1)
        }
      })
    })
})
}

function isBookRead(){
  document.querySelectorAll('.readBtn').forEach(function(btn){
    btn.addEventListener('click',(e)=>{
      let readStatus = e.target.innerText
      if(readStatus==='Not read'){
        btn.innerText = "Read"

      }else if (readStatus==='Read'){
        btn.innerText = "Not read"
      }
    })
  })
}
