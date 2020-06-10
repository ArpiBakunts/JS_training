class Author {

    constructor(name, email, genre) {
        this._name = name;
        this._email = email;
        this._genre = genre;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get genre() {
        return this._genre;
    }

    set genre(value) {
        this._genre = value;
    }

    toString () {
        console.log("Author method");
    }
}

class Book {

    constructor(title, author, price, quantity) {
        this._title = title;
        this._author = author;
        this._price = price;
        this._quantity = quantity;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        this._author = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        this._price = value;
    }

    get quantity() {
        return this._quantity;
    }

    set quantity(value) {
        this._quantity = value;
    }

    getProfit() {
        return "The profit is " + (this._quantity * this._price);
    }

    toString() {
        console.log("Book method");
    }
}

let auth = new Author("Joanne Rowling", "jrowling@gmail.com", "fiction");
let book = new Book("Harry Potter", auth.name, "100", 7);

//Let's get values with getters

console.log("The author name is " + auth.name);
console.log("The author email is " + auth.email);
console.log("The author's genre is " + auth.genre);
auth.toString();

console.log("************************");

console.log("The book title is " + book.title);
console.log("The book author is " + book.author);
console.log("The book's price is " + book.price);
console.log("The book's quantity is " + book.quantity);
console.log(book.getProfit());
book.toString();

console.log("************************");

//Let's change Class values with setters

console.log("The author new name is " + (auth.name = "Aksel Bakunts"));
console.log("The author new email is " + (auth.email = "abakunts@gmail.com"));
console.log("The author's new genre is " + (auth.genre = "Drama"));

console.log("************************");

console.log("The book's new title is " + (book.title = "Alpiakan manushak"));
console.log("The book's new author is " + (book.author = auth.name));
console.log("The book's new price is " + (book.price = 200));
console.log("The book's new quantity is " + (book.quantity = 10));
console.log(book.getProfit());
