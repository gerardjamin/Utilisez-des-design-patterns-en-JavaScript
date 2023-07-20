class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.moviesApi = new MovieApi('/data/old-movie-data.json')
        //this.moviesApi = new MovieApi('/data/new-movie-data.json')
    }

    async main() {
        /*enregistre le tableau data des donnees de films*/
        const moviesData = await this.moviesApi.getMovies()
        console.log(moviesData)

        moviesData
        .map(movie => new OldMovie(movie))
        // .map(movie => new Movie(movie))
        .forEach(movie => {
            
            // console.log("===")
            // console.log(movie)
            // console.log("===")

            const Template = new MovieCard(movie)
            console.log(Template)
            this.$moviesWrapper.appendChild(Template.createMovieCard())        
        })    
    }
}

const app = new App()
app.main()
