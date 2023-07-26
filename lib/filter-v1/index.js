class FilterV1 {
    /**
     * 
     * @param {array} Movies 
     * @param {string} actor 
     */
    constructor(Movies, actor) {
        this._Movies = Movies
        this._actor = actor
    }

    async filterByActor() {
        //promesse qui permet d'attendre 1 sd
        await new Promise(resolve => setTimeout(resolve, 1000))
        //actor: vide ou null
        if (!this._actor) {
            return this._Movies
        }

        const FilteredMovies = []

        for (let i = 0; i < this._Movies.length; i++) {
            if (this._Movies[i].actor === this._actor) {
                FilteredMovies.push(this._Movies[i])
            }
        }

        return FilteredMovies
    }
}
