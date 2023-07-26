// Structural Design Pattern 
class FilterMoviesAdapter {
    
    constructor(Movies, actor) {
        this._Movies = Movies
        this._actor = actor
    }

    async filterByActor(){
        //FilterV2 => methode statique
     return await FilterV2.filterByActor(this._actor, this._Movies)
    }
  
}
