function Book(title, author, pages, readstatus) {
  this.title = title;
  this.author = author;
  this.pages = pages + ' pages';
  if (readstatus) {
    this.readstatus = "already read";
  }
  else this.readstatus = "not read yet";

  this.info = function() {
    console.log (this.title + " by " + this.author + ", " + this.pages + ", " + this.readstatus);
  }
};

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkein', '295', false)
theHobbit.info() // "The Hobbit by J.R.R. Tolkien, 295 pages, not read yet"