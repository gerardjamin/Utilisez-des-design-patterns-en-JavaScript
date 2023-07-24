class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.$modalWrapper = document.querySelector('.modal')

        this.moviesApi = new MovieApi('/data/new-movie-data.json')
        this.externalMoviesApi = new MovieApi('/data/external-movie-data.json')
    }

    async main() {

        //recuperation des donnees des films
        const moviesData = await this.moviesApi.get()
        const externalMoviesData = await this.externalMoviesApi.get()

        //stockage du nom et du prenom de l'utilisateur dans le local storage
        const ModalForm = new Form()
        ModalForm.render()

        const Movies = moviesData.map(movie => new MoviesFactory(movie, 'newApi'))
        const ExternalMovies = externalMoviesData.map(movie => new MoviesFactory(movie, 'externalApi'))

        const FullMovies = Movies.concat(ExternalMovies)

        FullMovies.forEach(movie => {
            const Template = new MovieCard(movie)
            this.$moviesWrapper.appendChild(
                Template.createMovieCard()
            )
        })
    }
}

const app = new App()
app.main()
