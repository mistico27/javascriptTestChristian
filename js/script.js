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
        const StoredBooks=[
            {
                title:"muñequita viviente",
                author:"jhon Doe",
                isbn:'23123331'
            },
            {
                title:"Sobre las Olas",
                author:"Juan Osorio",
                isbn:'098097787'
            },

        ];

        const books=StoredBooks;

        books.forEach((Book) => UI.addBookToList(Book));

    }

    static addBookToList(Book){
        const list = document.querySelector('#book-list');
        const row=document.createElement('tr');
        row.innerHTML= `
            <td>${Book.title}</td>
            <td>${Book.author}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>

        `;

        list.appendChild(row);
    }

}



//Storage class

document.addEventListener('DOMContentLoaded', UI.displayBooks);




///Events display books

//add


//remove

