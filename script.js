let myLibrary = [];
const bookList = document.querySelector('#bookList');


function Book(title, author, pages, readstatus) {
  this.title = title;
  this.author = author;
  this.pages = pages + ' pages';
  if (readstatus) {
    this.readstatus = "Already read";
  }
  else this.readstatus = "Not read yet";

  this.info = function() {
    console.log (this.title + " by " + this.author + ", " + this.pages + ", " + this.readstatus);
  }

};

/*Deafult books*/
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkein', '295', false)
const greatGatsby = new Book('The Great Gatsby', 'F Scott Fitzgerlad', '208', true)
const slaughterhouseFive = new Book('Slaughterhouse-Five', 'Kurt Vonnegut', '288', true)
myLibrary.push(theHobbit, greatGatsby, slaughterhouseFive);



function displayBooks () {

  /*Replace with check to see if index exists */

  while (bookList.lastElementChild) {
    bookList.removeChild(bookList.lastElementChild);
     }

  for (const book of myLibrary) {
  
  let bookCard = document.createElement('div');
  bookCard.classList.add('bookCard'); 
  bookCard.setAttribute('data-array-index', myLibrary.indexOf(book));                              
  bookList.appendChild(bookCard);
  
  let bookHeading = document.createElement('h1');
  bookHeading.textContent = book.title;
  bookCard.appendChild(bookHeading);

  let bookInfoList = document.createElement('ul');
  bookCard.appendChild(bookInfoList);

  let bookListItem1 = document.createElement('li');
  bookListItem1.textContent = "Author: " + book.author;
  bookInfoList.appendChild(bookListItem1);

  let bookListItem2 = document.createElement('li');
  bookListItem2.textContent = "Pages: " + book.pages;
  bookInfoList.appendChild(bookListItem2);

  let bookListItem3 = document.createElement('li');
  bookListItem3.textContent = book.readstatus;
  bookInfoList.appendChild(bookListItem3);

  let deleteButton =  document.createElement('button');
  deleteButton.setAttribute("class", "deleteButton");                              
  deleteButton.textContent = "Delete Book";
  bookCard.appendChild(deleteButton);


  let readstatusButton =  document.createElement('button');
  readstatusButton.setAttribute("class", "readstatusButton"); 
  if (book.readstatus === "Already read"){                         
  readstatusButton.textContent = "Book Not Read";
} 
else {
  readstatusButton.textContent = "Book Read";
}
  bookCard.appendChild(readstatusButton);

  }

}

displayBooks()

/*Revise so you don't have to define as many variables?*/

const newBookFormBtn = document.querySelector('#newBook');
newBookFormBtn.addEventListener('click', () => {
  document.getElementById("popupForm").style.display = "block";
});

const cancelBtn = document.querySelector('button.cancel');
cancelBtn.addEventListener('click', () => {
  document.getElementById("popupForm").style.display = "none";
});

const submitBtn = document.querySelector('button.submit');
submitBtn.addEventListener('click', () => {
let title = document.getElementById("title").value;
let author = document.getElementById("author").value;
let pages = document.getElementById("pages").value;
let readstatus = document.getElementById("alreadyRead").checked;
myLibrary.push(new Book(title, author, pages, readstatus));
displayBooks()
});


const libraryContainer = document.getElementById('bookList');

libraryContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('deleteButton')) {
    const deleteBtn = event.target;
    const parentElement = deleteBtn.parentElement;
    const index = parentElement.getAttribute('data-array-index');
    
    myLibrary.splice(index, 1);
    displayBooks();
  }

  if (event.target.classList.contains('readstatusButton')) {
    const readstatusBtn = event.target;
    const parentElement = readstatusBtn.parentElement;
    const index = parentElement.getAttribute('data-array-index');
    const currentBook = myLibrary[index];
    console.log(currentBook);
    const oldReadStatus = currentBook.readstatus;
    if (oldReadStatus === "Already read") {
      currentBook.readstatus = "Not read yet";
      displayBooks();
    }
    else {
      currentBook.readstatus = "Already read";
      displayBooks();
    }
  }
  
});






