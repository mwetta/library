
// Defines modal with W3 defaults
let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];

let cancel = document.querySelector('.cancel');

cancel.onclick = function() {
    modal.style.display = "none";
}

btn.onclick = function() {
  modal.style.display = "block";
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

const library = document.querySelector('.library')
const cards = document.querySelectorAll('.card');

function writeLibrary(myLibrary) {
    for (let i = 0; i < myLibrary.length; i++) {
        let card = document.createElement('div');
        classList.add('card')
        library.appendChild(card);
    }
}

let myLibrary = [ 
    { title: 'The Hobbit', author: 'J.R.R Tolkein', pages: '295', read: false, readDate: undefined, media: 'print'},
    { title: 'Book of Night', author: 'Holly Black', pages: '435', read: true, readDate: 'April 16, 2022', media: 'print'},
    { title: 'Wake the Bones', author: 'Elizabeth Kilcoyne', pages: '314', read: true, readDate: 'August 9, 2022', media: 'electronic'},
    { title: 'Chouette', author: 'Claire Oshetsky', length: '6 hours and 42 minutes', read: true, readDate: 'January 16, 2022'},
];

// Constructor
function Book() {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.readDate = readDate
    this.media = media
}

function addBookToLibrary() {

    // create new book object
        // fields taken from form values
        // add to myLibrary
}

// If you haven’t already, set up your project with skeleton HTML/CSS and JS files.
// All of your book objects are going to be stored in a simple array, so add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array. Your code should look something like this:
// Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”. It might help for now to manually add a few books to your array so you can see the display.
// Add a “NEW BOOK” button that brings up a form allowing users to input the details for the new book: author, title, number of pages, whether it’s been read and anything else you might want.
// Add a button on each book’s display to remove the book from the library.
// You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.
// Add a button on each book’s display to change its read status.
// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.