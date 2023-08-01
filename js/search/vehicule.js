// Vehicule sera notre classe abstraite. On s'en servira uniquement pour l'héritage
class Vehicule {
    constructor(name, type) {
        this._name = name
        this._type = type
    }

    description() {
        console.log(`${this._name} - ${this._type}`)
        //appel de la methode getGas()
        console.log(this.getGas() )
    }
}

// Par contre, on pourra instancier un objet Car
class Car extends Vehicule {
    constructor(name, type) {
        super(name, type)
    }

    getGas() {
        return "Pour faire le plein, je dois arrêter le moteur, sortir de la voiture et ouvrir le réservoir d'essence"
    }
}

// Et un objet Motorcycle
class Motorcycle extends Vehicule {
    constructor(name, type) {
        super(name, type)
    }

    getGas() {
        return "Pour faire le plein, je peux rester sur la moto et ouvrir le réservoir d'essence"
    }
}


const Punto = new Car('Fiat Punto', 'Car')
Punto.description()

const Cbr = new Motorcycle('CBR 650RR', 'Motocycle')
Cbr.description()



