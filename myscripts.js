const myLibrary = [];

// Create example books
let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 1020, false);
let percyJackson = new Book("Percy Jackson", "Rick Riordan", 871, false);

myLibrary.push(theHobbit, percyJackson);

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
    bookRead.classList.add("read");
    removeCard.classList.add("remove");

    // Add necessary content to each element
    bookTitle.textContent = Book.title;
    bookAuthor.textContent = Book.author;
    bookPages.textContent = Book.pages + " Pages";
    removeCard.textContent = "Remove";
    if (Book.read === true) {
        bookRead.textContent = "Read";
    } else {
        bookRead.textContent = "Not read";
    }

    // Add removecard function to removeCard button
    removeCard.addEventListener("mouseup", () => {
        delete myLibrary[index];
        card.remove();
    });

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