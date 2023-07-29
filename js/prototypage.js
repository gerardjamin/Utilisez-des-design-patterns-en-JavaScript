class Me {
    constructor(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
 }
}

//ajouté une methode grace au prototypage
 Me.prototype.greetings = function() {
    console.log(`Bonjour, je m'appelle ${this.firstName} ${this.lastName}. Et toi ?`)
 }
 
  
 let me = new Me("Thomas", "Dimnet")
 
 // J'affiche mon objet
 console.log(me)
 
 // J'appelle la fonction greetings
 me.greetings()