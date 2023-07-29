class Book {
    constructor(title, author, genre) {
        this._title = title
        this._author = author
        this._genre = genre
    }
}

//Book décoré
const bookWithPrice = (Book, price) => {
    //grace au prototypage on peut rajouter des propriétés et des méthodes
    Book._price = price

    Book.WithPrice = () => {
        console.log(`${Book._title} coute actuellement ${Book._price} Euros`)

    }

    return Book
}

// J'instancie l'objet Book sans décorateur
 const LesMiserables = new Book('Les Misérables', 'Victor Hugo', 'Drame')

// J'instancie l'objet Book décoré
const LesTroisMousquetaires = bookWithPrice(new Book('Les Trois Mousquetaires', 'Alexandre Dumas', 'Roman historique'), 17)
LesTroisMousquetaires.WithPrice()