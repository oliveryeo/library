const myLibrary = [];

// Create example books
let harryPotter = new Book("Harry Potter", "J. K. Rowling", 1523, false);
let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 1020, false);
let percyJackson = new Book("Percy Jackson", "Rick Riordan", 871, false);

myLibrary.push(harryPotter, theHobbit, percyJackson);

// TODO -- Add event listener for add book submission, then add the book, and reset the book display

initiateDisplay();

// FUNCTIONS ------------------------------------------------------------
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(Book, index) {
    const table = document.querySelector(".table");
    const card = document.createElement("div");
    const cardContent = document.createElement("div");
    const bookTitle = document.createElement("div");
    const bookAuthor = document.createElement("div");
    const bookPages = document.createElement("div");
    const bookRead = document.createElement("div");
    const removeCard = document.createElement("div");

    // Set necessary classes and data-attributes to the elements
    card.classList.add("card");
    cardContent.classList.add("card-content");
    bookTitle.classList.add("title");
    bookAuthor.classList.add("author");
    bookPages.classList.add("pages");
    removeCard.classList.add("remove");

    // Add necessary content to each element
    bookTitle.textContent = Book.title;
    bookAuthor.textContent = Book.author;
    bookPages.textContent = Book.pages + " Pages";
    removeCard.textContent = "Remove";

    // TODO -- If book is read, change background to green, if not read, change to red
    // TODO -- Book read must be able to be clickable
    if (Book.read === true) {
        bookRead.textContent = "Read";
        bookRead.classList.add("read");
    } else {
        bookRead.textContent = "Not read";
        bookRead.classList.add("not-read");
    }

    // Add removecard function to removeCard button
    removeCard.addEventListener("mouseup", () => {
        delete myLibrary[index];
        card.remove(); // somehow this is unique to the card created in this instance!
    });

    bookRead.addEventListener("mouseup", () => {
        if (bookRead.classList.contains("read")) {
            bookRead.classList.add("not-read");
            bookRead.classList.remove("read");
            bookRead.textContent = "Not read";
        } else {
            bookRead.classList.add("read");
            bookRead.classList.remove("not-read");
            bookRead.textContent = "Read";
        }
    })

    // Append the elements as children in the correct order
    let cardContents = [bookTitle, bookAuthor, bookPages, bookRead, removeCard];
    table.appendChild(card);
    card.appendChild(cardContent);
    for (let i = 0; i < cardContents.length; i++) {
        cardContent.appendChild(cardContents[i]);
    }
}

function initiateDisplay() {
    for (let i = 0; i < myLibrary.length; i++) {
        addBookToLibrary(myLibrary[i], i);
    }
}