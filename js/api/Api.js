//super classe
class Api {
    /**
     * 
     * @param {string} url 
     */

    //partie statique de l'objet
    constructor(url) {
        this._url = url
    }

    //partie dynamique de l'objet
    async get() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => res.data)
            .catch(err => console.log('an error occurs', err))
    }
}

//sous classe
class MovieApi extends Api {
    /**
     * 
     * @param {string} url 
     */

    //partie statique de l'objet
    constructor(url) {
        //fonction qui appelle le constructeur de la super classe
        super(url)
    }

    //partie dynamique de l'objet
    async getMovies() {
        return await this.get()
    }
}
