class OldApi {
    constructor (name){
        this._bonjour = name
    }

    politesse() {
        return console.log('bonjour',this._bonjour)
    }
}

//avant
const objet = new OldApi('gerard')
const result = objet.politesse()


//apres
class NewApi {
static politesse(name){
    return 'bonjour' + name
}

}

const salutation  = NewApi.politesse('gerard')
console.log(salutation)

class AdapterAPI {
constructor(name){
    this._name = name
}

politesse(){
    return NewApi.politesse(this._name)
}

}

const newObjet = new AdapterAPI('gerard')
const newResult = newObjet.politesse()
console.log(newResult)