/*
Scenario:
You are tasked with designing a library management system. The library
lends out various types of items such as books, DVDs, and magazines. While
all items share some common properties (e.g., title, id, isAvailable), each
type has unique properties and behaviors. For example:

● Books have an author and a genre.
● DVDs have a director and duration.
● Magazines have an issueNumber and publisher.

Tasks
1. Step 1: Create a Base Class
○ Define a class LibraryItem to represent shared properties
(title, id, isAvailable) and methods (e.g., checkOut() and
returnItem()).

2. Step 2: Extend the Base Class
○ Create child classes Book, DVD, and Magazine that inherit from
LibraryItem.
○ Add unique properties and methods for each child class:
■ Book: Add properties like author and genre.
■ DVD: Add properties like director and duration.
■ Magazine: Add properties like issueNumber and publisher.

3. Step 3: Instantiate Objects
○ Create instances of each class and test the shared and unique
methods.

4. Step 4: Test the Inheritance
○ Use inherited methods like checkOut() and returnItem() to
manage the availability of items.
○ Test accessing and displaying unique properties of each child
class.
  */

class LibraryItems {

    constructor(title, id){
        this.title = title;
        this.id = id;
        this.isAvailable = true;
    }

    checkout(){
        if (this.isAvailable){
            this.isAvailable = false;
            console.log(`${this.title} has been checked out.`)
        }
        else if (!this.isAvailable){
            console.log(`${this.title} has already been checked out.`)
        }
    }

    returnItem(){
        if (!this.isAvailable){
            this.isAvailable = true;
            console.log(`${this.title} has been checked in.`)
        }
        else if (this.isAvailable){
            console.log(`${this.title} is already in the library`)
    
}
}
}

class Book extends LibraryItems{

    constructor(title, id, author, genre, numberOfPages){
        super(title, id)
        this.author = author;
        this.genre = genre;
        this.numberOfPages = numberOfPages;
    }

    displayBookInfo(){
        console.log(`${this.title} is a ${genre} book written by ${this.author} and has ${this.numberOfPages} of pages.`);
    }
}

class Magazine extends LibraryItems{

    constructor(title, id, issueNumber, publisher){
        super(title, id)
        this.issueNumber = issueNumber;
        this.publisher = publisher;

    }
    displayMagazineInfo(){
        console.log(`${this.title} is issue number ${this.issueNumber} and is published by ${this.publisher}.`);
}
}
class DVD extends LibraryItems{

    constructor(title, id, duration, director){
        super(title, id)
        this.duration = duration;
        this.director = director;
    }
    displayDvdInfo(){
        console.log(`${this.title} is directed by ${this.director} and is ${this.duration} minutes.`);
}
}

const You = new Book('You', 2313, 'Stephanie Kepnes', 'Thriller', 422);
const GameInformer = new Magazine('GameInformer', 123123, 23, 'GameStop');
const Norbit = new DVD('Norbit', 213, 140, 'Eddie Murphy');

You.checkout()
Norbit.returnItem()
