class FilterV2 {
    /**
     * 
     * @param {string} actor 
     * @param {array} Movies 
     * @returns 
     */

    //methode statique asynchrone => pas besoin d'instantier
    static async filterByActor(actor, Movies) {
        //promise d'attente pour simuler l'asynchrone
        await new Promise(resolve => setTimeout(resolve, 100))
        if (!actor) {
            return Movies
        }

        // Returns the elements of an array Movies that meet the condition specified in a callback function
        return Movies.filter(Movie => Movie.actor === actor)
    }
}
