// Global variables
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];
const cancel = document.querySelector('.cancel');
const library = document.querySelector('.library');
const addBookBtn = document.getElementById('addBook');

// Define library intialization
let myLibrary = [ 
    { title: 'The Hobbit', author: 'J.R.R Tolkein', pages: '295', read: false, readDate: undefined, media: 'print'},
    { title: 'Book of Night', author: 'Holly Black', pages: '435', read: true, readDate: 'April 16, 2022', media: 'print'},
    { title: 'Wake the Bones', author: 'Elizabeth Kilcoyne', pages: '314', read: true, readDate: 'August 9, 2022', media: 'electronic'},
    { title: 'Chouette', author: 'Claire Oshetsky', length: '6 hours and 42 minutes', read: true, readDate: 'January 16, 2022'},
];

document.querySelector('#addBook').addEventListener('click', function() {
    modal.style.display= "none";
    addBookToLibrary();
});

writeLibrary(myLibrary);

//Modal and form visibility controls
cancel.onclick = function() {
    modal.style.display = "none";
}

btn.onclick = function() {
  modal.style.display = "block";
  let types = document.querySelectorAll('input[name=media]');
  types.forEach((type) => {
    type.addEventListener('click', function() {
        let bookInfo = document.getElementById('book-info');
        let pagesLi = document.getElementById('pages-li');
        let lengthLi = document.getElementById('length-li');
        let media = document.querySelector('input[name=media]:checked');
        if ( media.id === 'print' || media.id === 'electronic') {
            bookInfo.style.display = "block";
            pagesLi.style.display = "block";
            lengthLi.style.display = "none";
        } else {
            bookInfo.style.display = "block";
            lengthLi.style.display = "block";
            pagesLi.style.display = "none";
        }
    });
  })
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//Begin defining library
const cards = document.querySelectorAll('.card');

function writeLibrary(myLibrary) {
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div');
        card.setAttribute('data-index-number', `book-${i}`); // use this later to reference the element
        card.classList.add('card');
        library.appendChild(card);
        writeBookInfo(i);
    }
}

function writeBookInfo(bookIndex) {
    let book = document.querySelector(`.card[data-index-number=book-${bookIndex}]`);
    let title = myLibrary[bookIndex].title
    let author = myLibrary[bookIndex].author
    let read = myLibrary[bookIndex].read
    let readDate = myLibrary[bookIndex].readDate
    let media = myLibrary[bookIndex].media
    if (media === 'print' || media === 'electronic') {
        let pages = myLibrary[bookIndex].pages
        book.textContent = `${title}, ${author}, ${pages}, ${read}, ${readDate}, ${media}`;
    } else {
        let length = myLibrary[bookIndex].length
        book.textContent = `${title}, ${author}, ${length}, ${read}, ${readDate}, ${media}`;
    }
    
}

// Constructor
function Book() {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.readDate = readDate
    this.media = media
}

eBook.prototype = Object.create(Book.prototype)
audioBook.prototype = Object.create(Book.prototype)
physical.prototype = Object.create(Book.prototype)

function physical(title, author, pages, read, readDate) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.readDate = readDate
    this.media = 'print'
}

function eBook(title, author, pages, read, readDate) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.readDate = readDate
    this.media = 'electronic'
}

function audioBook(title, author, length, read, readDate) {
    this.title = title
    this.author = author
    this.length = length
    this.read = read
    this.readDate = readDate
    this.media = 'audio'
}

Book.prototype.markRead = function () {

}

Book.prototype.removeBook = function () {

}

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let read = document.getElementById('read').checked;
    let readDate;
        if (read === true) {
            readDate = document.getElementById('readDate').value;
        } 
    let media = document.querySelector('input[name=media]:checked').id;
    if (media === 'print' || media === 'electronic') {
        let pages = document.getElementById('pages').value;
        let book = new physical(title,author,pages,read,readDate);
        myLibrary.push(book);
        console.log(myLibrary.length)
        writeNewBook(myLibrary.length)
    } else {
        let length = document.getElementById('length').value;
        let book = new audioBook(title,author,length,read,readDate);
        myLibrary.push(book);
        writeNewBook(myLibrary.length)
    }
}

function writeNewBook(length) {
    let card = document.createElement('div');
    let i = length - 1;
    card.setAttribute('data-index-number', `book-${i}`); // use this later to reference the element
    card.classList.add('card');
    library.appendChild(card);
    console.log(i);
    writeBookInfo(i);
}

// If you haven’t already, set up your project with skeleton HTML/CSS and JS files.
// All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:
// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.
// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.
// Add a button on each book’s display to remove the book from the library.
// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
// Add a button on each book’s display to change its read status.
// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.