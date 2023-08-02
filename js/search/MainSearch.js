//classe abstraite (sert d' heritage pour les objets)
class Search {

    constructor(Movies) {
        this.Movies = Movies
    }

    search(query) {
        //appel de la methode filterMovies()
        return this.filterMovies(query)
    }
}




class MovieNameSearch extends Search {

    constructor(Movies) {
        //on realise l'heritage
        super(Movies)
    }

    filterMovies(query) {
        
        return this.Movies.filter(
            Movie => Movie.title.toLowerCase().includes(query.toLowerCase()))
    }


}


class ActorNameSearch extends Search {

    constructor(Movies) {
         //on realise l'heritage
        super(Movies)
    }

    filterMovies(query) {
        return this.Movies.filter(
            Movie => Movie.actor.toLowerCase().includes(query.toLowerCase()))

    }
}