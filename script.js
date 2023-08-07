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

//const theHobbit = new Book('The Hobbit', 'J.R.R Tolkein', '295', false)
//theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"

//const greatGatsby = new Book('The Great Gatsby', 'F Scott Fitzgerlad', '208', true)
//greatGatsby.info() 

//const slaughterhouseFive = new Book('Slaughterhouse-Five', 'Kurt Vonnegut', '288', true)
//slaughterhouseFive.info() 


let myLibrary = [];



function displayBooks () {

  for (const book of myLibrary) {
  const bookList = document.querySelector('.bookList')

  let bookCard = document.createElement('div');
  bookCard.classList.add('bookCard'); 
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
  bookListItem3.textContent = book.readstatus
  bookInfoList.appendChild(bookListItem3);

  }

}

//displayBooks()

const newBookFormBtn = document.querySelector('#newBook');
newBookFormBtn.addEventListener('click', () => {
  document.getElementById("popupForm").style.display = "block";
});

const cancelBtn = document.querySelector('button.cancel');
cancelBtn.addEventListener('click', () => {
  document.getElementById("popupForm").style.display = "none";
});

const submitBtn = document.querySelector('button.submit');
cancelBtn.addEventListener('click', () => {
let title = document.getElementById("title").value;
let author = document.getElementById("author").value;
let pages = document.getElementById("pages").value;
myLibrary.push(new Book(title, author, pages, readstatus));
displayBooks()
 
});




// const btn = document.querySelector('#newBook');
// btn.addEventListener('click', () => {
//  let title = prompt("Book title", "");
//  let author = prompt("Book author", "");
//  let pages = prompt("Number of pages in book", "");
//  let readstatus = confirm("Press OK if you have read the book, or cancel if you have not read the book.");
//  myLibrary.push(new Book(title, author, pages, readstatus));
//  displayBooks()
// });
