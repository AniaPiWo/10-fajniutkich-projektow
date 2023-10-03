class Book {
  #title;
  #author;
  #publishYear;
  //wartosc prywatna, nie mozna sie do niej odwolac z zewnatrz, musza byc najpierw zdeklarowane

  constructor(title = 'brak', author = 'brak', publishYear = 'brak') {
    this.#title = title;
    this.#author = author;
    this.#publishYear = publishYear;
  }

  showBook() {
    return `Tytuł: ${this.#title}, Autor: ${this.#author}, Data wydania: ${
      this.#publishYear
    }`;
  }
}

class Library {
  #bookCollection;

  constructor() {
    this.#bookCollection = new Map();
  }

  init() {
    const addBookBtn = document.querySelector('#addBookBtn');
    addBookBtn.addEventListener('click', () => this.#addBook());

    const searchBookBtn = document.querySelector('#searchBookBtn');
    searchBookBtn.addEventListener('click', () => this.#searchBook());
  }

  #addBook() {
    const infobox = document.querySelector('#infobox');
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const publishYear = document.querySelector('#publishYear').value;
    const book = new Book(title, author, publishYear);
    this.#bookCollection.set(title, book);
    console.log(this.#bookCollection);
    infobox.textContent = 'Dodano książkę!';
    setTimeout(() => {
      infobox.textContent = '';
    }, 2000);
  }

  #searchBook() {
    const title = document.querySelector('#searchTitle').value;
    const book = this.#bookCollection.get(title);
    const searchResult = document.querySelector('#searchResult');
    if (book) {
      searchResult.textContent = book.showBook();
    } else {
      searchResult.textContent = 'Nie znaleziono książki!';
    }
  }
}

const library = new Library();
library.init();
