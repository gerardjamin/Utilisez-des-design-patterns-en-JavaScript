class MovieCard {
    constructor(movie) {
        console.log("===")
        console.log(movie)
        console.log("===")
        this._movie = movie
        console.log(this.movie)
    }

    
    createMovieCard() {
        

        const $wrapper = document.createElement('div')
        $wrapper.classList.add('movie-card-wrapper')

        const movieCard = `
            <div class="movie-thumbnail center">
                <img
                    alt="${this._movie._title}"
                    src="${this._movie.picture}"
                    
                />
            </div>
            <h3 class="fs-16 center">${this._movie._title}</h3>
            <p class="fs-14 center">
                <span>${this._movie._released_in}</span>
                -
                <span>${this._movie._duration}</span>
            </p>
        `
        
        $wrapper.innerHTML = movieCard
        return $wrapper
    }
}
