//Step 1
class LibraryItem {

    constructor(title, id, isAvailable = true){

        this.title = title;
        this.id = id;
        this.isAvailable = isAvailable;
    }
    checkout(){
        this.isAvailable = false;
    }
    returnItem(){
        this.isAvailable = true;
    }
//Step 2
}
class Book extends LibraryItem {
    constructor(title, id, author, genre, isAvailable){
        super(title, id, isAvailable);
        this.author = author;
        this.genre = genre;
    }
}
class DVD extends LibraryItem {
    constructor(title, id, director, duration, isAvailable){
        super(title, id, isAvailable);
        this.director = director;
        this.duration = duration;
    }
}
class Magazine extends LibraryItem {
    
    constructor(title, id, issueNumber, publisher, isAvailable){
        super(title, id, isAvailable);
        this.issueNumber = issueNumber;
        this.publisher = publisher;
    }
}
//step 3

const book1 = new Book('You', 517, 'Caroline Kepnes', 'Thriller');
console.log(book1);

const dvd1 = new DVD('Sinners', 213123, 'Ryan Coogler', 'Horror');
console.log(dvd1);

const magazine1 = new Magazine('Game Informer', 2737, 2024, 'GameStop');
console.log(magazine1); 

//step 4
book1.checkout()
dvd1.checkout()
magazine1.checkout()

console.log(book1);
console.log(dvd1);
console.log(magazine1);

book1.returnItem();

console.log(book1);

console.log(dvd1.duration);
console.log(magazine1.issueNumber);
console.log(book1.author);
