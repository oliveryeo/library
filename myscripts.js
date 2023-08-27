const myLibrary = [];

//// TODO -- Working on showing the form to add books
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
const showButton = document.getElementById("showDialog");
const addBookDialog = document.getElementById("add-book-dialog");
const addBookForm = document.getElementById("add-book-form");
const bookTitle = document.getElementById("title");
const bookAuthor = document.getElementById("author");
const bookPages = document.getElementById("pages");
const bookReadCheck = document.getElementById("read-check");
const outputBox = document.querySelector("output");
const cancelBtn = addBookDialog.querySelector("#cancelBtn");;
const confirmBtn = addBookDialog.querySelector("#confirmBtn");

// Show the dialogue
showButton.addEventListener("click", () => {
  addBookDialog.showModal();
});

// Close the dialogue if cancelled
cancelBtn.addEventListener("click", () => {
  addBookDialog.close();
})

// Prevent the form from actually submitting something, and close the dialog instead. Then create a new book -> add into myLibrary array -> refresh display
addBookForm.addEventListener("submit", (e) => {
  // Stop the form from submitting and close dialog
  e.preventDefault();
  addBookDialog.close();

  // Create a new book and add to array
  let newBook = new Book(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookReadCheck.checked
  );
  myLibrary.push(newBook);
  
  // Reset the form
  resetForm();
  function resetForm() {
    bookTitle.value = "";
    bookAuthor.value = "";
    bookPages.value = "";
    bookReadCheck.checked = false;
  }

  // Refresh book cards display
  initiateDisplay();
});

//// Create example books
let harryPotter = new Book("Harry Potter", "J. K. Rowling", 1523, false);
let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 1020, false);
let percyJackson = new Book("Percy Jackson", "Rick Riordan", 871, false);

myLibrary.push(harryPotter, theHobbit, percyJackson);

//// Initiate display for example books
initiateDisplay();

//// FUNCTIONS -------------------------------------------------------------------
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function initiateDisplay() {
  // Remove all cards
  allCards = document.querySelectorAll(".card");
  allCards.forEach(card => {
    card.remove();
  })

  // Create new cards based on array
  for (let i = 0; i < myLibrary.length; i++) {
    addBookToLibrary(myLibrary[i], i);
  }
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
  bookPages.textContent = "Pages: " + Book.pages;
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
  });

  // Append the elements as children in the correct order
  let cardContents = [bookTitle, bookAuthor, bookPages, bookRead, removeCard];
  table.appendChild(card);
  card.appendChild(cardContent);
  for (let i = 0; i < cardContents.length; i++) {
    cardContent.appendChild(cardContents[i]);
  }
}
