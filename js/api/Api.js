/*
fetch(this._url): Effectue une requête HTTP GET à l'URL spécifiée par la propriété _url. Cette requête renvoie une Promise qui résout en une Response.

.then(res => res.json()): Une fois que la requête est résolue, cette ligne transforme la Response en JSON. La méthode json() lit le corps de la réponse comme du JSON et renvoie une Promise qui résout en un objet JavaScript contenant les données JSON.

.then(res => res.data): Cette ligne extrait la propriété data de l'objet JavaScript obtenu à partir du JSON. Cela suppose que la réponse JSON contient une propriété data qui est utile pour l'application. Notez que cela dépend de la structure spécifique de la réponse JSON que vous attendez.

.catch(err => console.log('an error occurs', err)): Si une erreur se produit lors de l'exécution de la requête HTTP ou de la conversion en JSON, cette ligne affiche un message d'erreur dans la console.

La méthode get() renvoie également une Promise en raison de l'utilisation du mot-clé async. Cela signifie que si vous appelez cette méthode, vous pouvez utiliser .then() pour gérer la réponse réussie ou .catch() pour gérer les erreurs.
*/
class Api {
    /**
     * adresse complete de la localisation de la ressource
     * @param {string} url 
     */
    constructor(url) {
        this._url = url
    }

    // async get() {
    //     return fetch(this._url)

    //         .then(res => res.json())
    //         .then(res => res.data)
    //         .catch(err => console.log('an error occurs', err))
    // } 
    
    async get() {
        try {
          const response = await fetch(this._url);
          const res = await response.json();
          return res.data;

        } catch (err) {
          console.log('an error occurs', err);
        }
      }
}


class MovieApi extends Api {
    /**
     * 
     * @param {string} url 
     */
    constructor(url) {
        super(url)
    }

    async getMovies() {
        return await this.get()
    }
}
