//singeton   objet unique
class User {
    constructor(firstName, lastName) {
        if (User.exists) {
            return User.instance
        } else {
            this._firsName = firstName
            this._lastName = lastName
        }

        User.exists = true
        User.instance = this
    }

    get firstname() {
        return this._firsName
    }

    get lastName() {
        return this._lastName
    }

    get user() {
        return {
            firsName: this.firstname,
            lastName: this.lastName
        }
    }
}


