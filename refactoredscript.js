const MyLibrary = class {
  constructor() {
    this.library = [];
  }

  get library() {
    return this.library;
  }

  addBook(book) {
    this.library.push(book);
  }

  removeBook(bookIndex) {
    
  }
}