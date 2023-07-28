//Objet qui retourne la longitude et la latitude d'une ville 
class GeoCoder {
    static ADDRESSES = [
        {
            name: "Amsterdam",
            latLng: "52.3700° N, 4.8900° E"
        },
        {
            name: "London",
            latLng: "51.5171° N, 0.1062° W"
        },
        {
            name: "Paris",
            latLng: "48.8742° N, 2.3470° E"
        },
        {
            name: "Berlin",
            latLng: "52.5233° N, 13.4127° E"
        }
    ]

    //generation d'un nouveau tableau filtré issue du tableau  ADDRESSES
    getLatLng(ville) {
        console.log("Get from server")
        //la methode filter() implique une condition:  
        //verification dans l'objet
        const result = GeoCoder.ADDRESSES.filter(add => add.name === ville)
        //retourne le premier element du nouveau tablau
        return result[0]
    }
}

class ProxyGeoCoder {
    constructor() {
        this.cache = []
        this.GeoCoder = new GeoCoder()
    }

    getLatLng(ville) {
        //verification dans le cache
        const cachedData = this.cache.filter(cachedAddress => cachedAddress.name === ville)[0]

        if (cachedData) {
            console.log("Get from cache")
            return cachedData
        }

        //appel de la methode getLatLng depuis l'objet
        const data = this.GeoCoder.getLatLng(ville)
        this.cache.push(data)

        return data
    }
}

const ville = 'London'
const GEO = new GeoCoder()

const result = GEO.getLatLng(ville)
console.table(result)

const Proxy = new ProxyGeoCoder()

const firstProxy = Proxy.getLatLng(ville)
console.table(firstProxy)

const secondProxy = Proxy.getLatLng(ville)
console.table(secondProxy)

