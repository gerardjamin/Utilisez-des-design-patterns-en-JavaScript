class User {
    constructor(firstName,lastName){
        this._firstName = firstName
        this._lastName = lastName
    }

    sayHello() {
        console.log(`${this._firstName} vous souhaite la bienvenus`)
    }
}

//on rajoute un username a notre objet User
const UserWithUserName = (User,username) => {
    User._userName = username
    User.sayHello = () => {
        console.log(`${User._userName} vous dit bonjour`)
    }

    return User
}

const objetUser = new User('gerard','jamin')
objetUser.sayHello()

const decoredObjetUser = UserWithUserName(new User('gerard','jamin'), 'ninou')

decoredObjetUser.sayHello()
