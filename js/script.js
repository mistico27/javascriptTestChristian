//Book class constructor of a book
class Book{
    constructor(title,author,isbn){
        this.title=title;
        this.author=author;
        this.isbn=isbn;
    }
}



//User Interface
class UI{
    static displayBooks(){
        
        const books =Store.getBooks();
        books.forEach((Book) => UI.addBookToList(Book));

    }

    static addBookToList(Book){
        const list = document.querySelector('#book-list');
        const row=document.createElement('tr');
        row.innerHTML= `
            <td>${Book.title}</td>
            <td>${Book.author}</td>
            <td>${Book.isbn}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>

        `;

        list.appendChild(row);
    }

    static clearFields(){
        document.querySelector('#title').value='';
        document.querySelector('#author').value='';
        document.querySelector('#isbn').value='';

    }

    static DeleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    static showAlert(message,className){
        const div=document.createElement('div');
        div.className=`alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');
        container.insertBefore(div,form);

        //vanish in 2 seconds
        setTimeout(() =>document.querySelector('.alert').remove(),2500);
    }

}



///store class
class Store{
     static getBooks(){
        let books;
        if(localStorage.getItem('books')===null){
            books=[];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

     static addBook(Book){
        const books = Store.getBooks();
        books.push(Book);
        localStorage.setItem('books',JSON.stringify(books));

    }

    static removeBook(isbn){
        const books = Store.getBooks();
        books.forEach((book,index) =>{
            if(book.isbn === isbn){
               books.splice(index,1);     
            }
        });

        localStorage.setItem('books',JSON.stringify(books));
    }
}




//Storage class
document.addEventListener('DOMContentLoaded', UI.displayBooks);

///Events display books
document.querySelector('#book-form').addEventListener('submit',(e) =>{

///prevent default
e.preventDefault();

    //get form values

const title= document.querySelector('#title').value;
const author= document.querySelector('#author').value;
const isbn= document.querySelector('#isbn').value;


///Validation
if(title === '' || author ==='' || isbn==='' || isbn=='0'){
    UI.showAlert('please fill all the form','danger');    

}else{

    const book = new Book(title,author,isbn);
    //add book to user
    UI.addBookToList(book);
    
    //add book to Store
    Store.addBook(book);

    //show success Message
    UI.showAlert("Book added successFully", 'success');

    ///clear fields;
    UI.clearFields();

}

});






//remove
document.querySelector('#book-list').addEventListener('click', (e) =>{

    if(confirm("are you sure you wanna delete the Book...") == true){
        UI.DeleteBook(e.target);

        Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
    
    
        UI.showAlert("Book Deleted successfully", "info");
    }else{
        UI.showAlert("Book Still in library", "info");

    }

    

});
