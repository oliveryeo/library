const myLibrary = [];

// Create example books
let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);

myLibrary.push(theHobbit);

// for (let i = 0; i < myLibrary.length; i++) {
//     console.log(myLibrary[i]);
// }

// Testing if the code works
addBookToLibrary(theHobbit);


function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(Book) {
    const table = document.querySelector(".table");
    const card = document.createElement("div");
    const cardContent = document.createElement("div");
    const bookTitle = document.createElement("div");
    const bookAuthor = document.createElement("div");
    const bookPages = document.createElement("div");
    const bookRead = document.createElement("div");
    const removeCard = document.createElement("div");

    card.classList.add("card");
    cardContent.classList.add("card-content");
    bookTitle.classList.add("title");
    bookAuthor.classList.add("author");
    bookPages.classList.add("pages");
    bookRead.classList.add("read");
    removeCard.classList.add("remove");

    bookTitle.textContent = Book.title;
    bookAuthor.textContent = Book.author;
    bookPages.textContent = Book.pages + " Pages";
    removeCard.textContent = "Remove";

    if (Book.read === true) {
        bookRead.textContent = "Read";
    } else {
        bookRead.textContent = "Not read";
    }

    let cardContents = [bookTitle, bookAuthor, bookPages, bookRead, removeCard];

    table.appendChild(card);
    card.appendChild(cardContent);
    
    for (let i = 0; i < cardContents.length; i++) {
        cardContent.appendChild(cardContents[i]);
    }
}