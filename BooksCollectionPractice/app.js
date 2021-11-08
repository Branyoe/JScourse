//esquema de libro
class Book {
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//interfás
class ListUI {
  static show (){
    const books = Data.getBooks();
    books.forEach((book) => ListUI.add(book));
  }

  static add (book){
    const lista = document.querySelector('#bookList');
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `

    lista.appendChild(fila);
  }

  static delete (el){
    if(el.classList.contains('delete')){
      el.parentElement.parentElement.remove();
      ListUI.showAlert('Delete Successfuly', 'success');
    }
    
  }

  static showAlert (msg, className){
    const div = document.createElement('div');
    div.className= `alert alert-${className}`;
    div.appendChild(document.createTextNode(msg));

    const container = document.querySelector('.container');
    const form = document.querySelector('.siu');
    container.insertBefore(div, form);

    setTimeout( 
      () => document.querySelector('.alert').remove(), 3000
    );
  }

  static clear (){
    document.querySelector('#author').value = '';
    document.querySelector('#title').value = '';
    document.querySelector('#isbn').value = '';
  }
}

//DATOS   a tratar
class Data {
  static getBooks (){
    let books;
    if(localStorage.getItem('books') === null) {
      books = [];
    }else{
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook (book){
    const books = Data.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
    ListUI.add(book)
  }

  static deleteBook (el ,isbn){
    const books = Data.getBooks();
    books.forEach((book, index) => {
      if(book.isbn == isbn){
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

//carga de la pagina
document.addEventListener('DOMContentLoader', ListUI.show());

//controller submit event
document.querySelector('#bookForm').addEventListener('submit', (e) => {
  e.preventDefault();
  
  //get values of inpts
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  if(title === '' || author === '' || isbn === ''){
    ListUI.showAlert('Incomplet input', 'danger');
  }else{
    const libro = {
      title: title,
      author: author,
      isbn: isbn
    };
    Data.addBook(libro);
    ListUI.clear();
    ListUI.showAlert('Successfuly Saved', 'success');
  }
});

document.querySelector('#bookList').addEventListener('click', (e) => {
  ListUI.delete(e.target);
  Data.deleteBook(e.target, e.target.parentElement.previousElementSibling.textContent);
  console.log(e.target);
})