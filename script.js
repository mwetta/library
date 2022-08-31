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
    { title: 'Chouette', author: 'Claire Oshetsky', length: '6 hours and 42 minutes', read: true, readDate: 'January 16, 2022', media: 'audio'},
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

    let cardTitle = document.createElement('h2');
    cardTitle.textContent = `${title}`;
    let cardAuthor = document.createElement('p');
    cardAuthor.textContent = `by ${author}`;
    let cardInfo = document.createElement('ul');
    let cardRead = document.createElement('li');
    cardRead.textContent = `${read}`;

    let cardMedia = document.createElement('li');
    cardMedia.textContent = `${media}`;
    let cardRemoveButton = document.createElement('button');
    cardRemoveButton.textContent = 'Remove book from library';
    cardRemoveButton.addEventListener('click', () => {
        let index = book.getAttribute('data-index-number');
        index = index.slice(-1);
        console.log(index);
        removeBook(index);
    });

    book.appendChild(cardTitle);
    book.appendChild(cardAuthor);
    book.appendChild(cardInfo);
    cardInfo.appendChild(cardMedia);
    book.appendChild(cardRemoveButton);

    if (read === true) {
        let cardReadDate = document.createElement('li');
        cardReadDate.textContent = `Finished reading ${readDate}`;
        cardInfo.appendChild(cardReadDate);

    } else {
        let cardMarkReadButton = document.createElement('Button');
        cardMarkReadButton.textContent = 'Mark read';
        book.appendChild(cardMarkReadButton);
        book.classList.add('plum');
        // add event listener that calls mark read
    }

    if (media === 'print' || media === 'electronic') {
        let pages = myLibrary[bookIndex].pages
        let cardPages = document.createElement('li');
        cardInfo.appendChild(cardPages);
        cardPages.textContent = `${pages} pages`;
    } else {
        let length = myLibrary[bookIndex].length
        let cardLength = document.createElement('li');
        cardInfo.appendChild(cardLength);
        cardLength.textContent = `${length} long`
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
    //remove mark read button
    //remove class list
    //update property in object
}


removeBook = function (index) {
    myLibrary.splice(index, 1);
    let book = document.querySelector(`.card[data-index-number=book-${index}]`);
    console.log(book.parentNode);
    book.parentNode.removeChild(book);
    for (let i = index; i < myLibrary.length; ++i) {
        let next = document.querySelector(`.card[data-index-number=book-${i + 1}]`); 
        console.log(next);
        next.setAttribute('data-index-number', `book-${i}`); 
    }
}

function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let read = document.getElementById('read').checked;
    let readDate;
        if (read === true) {
            readDate = document.getElementById('date').value;
        } 
    let media = document.querySelector('input[name=media]:checked').id;
    if (media === 'print' || media === 'electronic') {
        let pages = document.getElementById('pages').value;
        let book = new physical(title,author,pages,read,readDate);
        myLibrary.push(book);
        console.log(myLibrary.length)
        writeNewBook(myLibrary.length)
        console.log(myLibrary);
    } else {
        let length = document.getElementById('length').value;
        let book = new audioBook(title,author,length,read,readDate);
        myLibrary.push(book);
        writeNewBook(myLibrary.length)
        console.log(myLibrary);
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

function removeAllBooks(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Add a button on each book’s display to change its read status.
// To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.
