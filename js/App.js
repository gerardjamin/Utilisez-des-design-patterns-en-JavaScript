class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.ApiState = new Context()
        //on demarre avec initial state
        // console.table(this.ApiState)

        this.moviesApi = new MovieApi(
            '/data/movie-data.json', this.ApiState
        )
    }

    async main() {
        //on recupere les films et on passe le statut de state à success
        const movies = await this.moviesApi.getMovies()
        // console.table(this.ApiState)
//destructuration de l'objet this.ApiState: ici on recupere la valeur de la propriété state de this.ApiState
        const { state } = this.ApiState
        

        if (state === 'success') {
            movies.forEach(movie => {
                const Template = new MovieCard(movie)
                this.$moviesWrapper.appendChild(Template.createMovieCard())
            })
        } else if (state === 'error') {
            window.alert('Something went wrong')
        }


    }
}

const app = new App()
app.main()
