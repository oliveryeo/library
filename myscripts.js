const myLibrary = [];

// Create example books
let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
let harryPotter = new Book("Harry Potter", "J. K. Rowling", 989, false);
let fantasticBeasts = new Book("Fantastic Beasts", "J. K. Rowling", 563, false);

myLibrary.push(theHobbit, harryPotter, fantasticBeasts);

for (let i = 0; i < myLibrary.length; i++) {
    console.log(myLibrary[i]);
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {

}