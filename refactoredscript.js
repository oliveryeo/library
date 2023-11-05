class Library {
  constructor() {
    this.library = [];
  }

  addBook(title, author, pages, read) {
    // Create a book object
    let book = {
      title: title,
      author: author,
      pages: pages,
      read: read
    };
    // Push the book object into the library array
    this.library.push(book);
  }

  removeBook(bookIndex) {
    this.library.splice(bookIndex, 1);
  }
}

myLibrary = new Library();
myLibrary.addBook("Harry Potter", "J. K. Rowling", 1523, false);

class ScreenController {
  static {
    const showButton = document.getElementById("showDialog");
    const addBookDialog = document.getElementById("add-book-dialog");
    const addBookForm = document.getElementById("add-book-form");
    const bookTitle = document.getElementById("title");
    const bookAuthor = document.getElementById("author");
    const bookPages = document.getElementById("pages");
    const bookReadCheck = document.getElementById("read-check");
    const cancelBtn = addBookDialog.querySelector("#cancelBtn");
    const confirmBtn = addBookDialog.querySelector("#confirmBtn");
  
    // Show the dialogue
    showButton.addEventListener("click", () => {
      addBookDialog.showModal();
    });

    // Close the dialogue if cancelled, prevent form submission when cancelled
    cancelBtn.addEventListener("click", (e) => {
      e.preventDefault();
      addBookDialog.close();
    });
    
    // Add a book
    addBookForm.addEventListener("submit", (e) => {
      // Stop the form from submitting and close dialog
      e.preventDefault();
      addBookDialog.close();
    
      // Create a new book and add to array
      myLibrary.addBook(bookTitle.value, bookAuthor.value, bookPages.value, bookReadCheck.checked);
    
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
    
    function initiateDisplay() {
      // Remove all cards
      const allCards = document.querySelectorAll(".card");
      allCards.forEach((card) => {
        card.remove();
      });
    
      // Create new cards based on array
      for (let i = 0; i < myLibrary.library.length; i++) {
        addBookToLibrary(myLibrary.library[i], i);
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
    
      // If book is read, change background to green, if not read, change to red
      // Book read must be able to be clickable
      if (Book.read === true) {
        bookRead.textContent = "Read";
        bookRead.classList.add("read");
      } else {
        bookRead.textContent = "Not read";
        bookRead.classList.add("not-read");
      }
    
      // Add removecard function to removeCard button
      removeCard.addEventListener("mouseup", () => {
        myLibrary.library.splice(index, 1);
        initiateDisplay(); // refresh the display to accurately display the books in the database
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
  }
}