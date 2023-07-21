class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.newMoviesApi = new MovieApi('/data/new-movie-data.json')
        this.oldMoviesApi = new MovieApi('/data/old-movie-data.json')
    }

    async main() {
        // Ici je récupère le tableau data[] de mes films
        const newMoviesData = await this.newMoviesApi.getMovies()
        const oldMoviesData = await this.oldMoviesApi.getMovies()

        //j'instancie tous les objets
        // Ici, je transforme mon tableau de données en un tableau de classe Movie
        const newMovie = newMoviesData.map(movie => new MoviesFactory(movie, "Movie"))
        const oldMovie = oldMoviesData.map(movie => new MoviesFactory(movie, "OldMovie"))

        //concatenation des 2 tableaux
        const FullMovies = oldMovie.concat(newMovie)

    //templete
        FullMovies
            .forEach(movie => {
                const Template = new MovieCard(movie)
                this.$moviesWrapper.appendChild(
                    Template.createMovieCard()
                )
            })
    }
}

const app = new App()
app.main()
