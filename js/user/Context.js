class UserContext {
    constructor() {
        //etats initiaux possibles de l'utilisateur
        this.states = [new AnonymousUserState(), new UserConnectedState()]
        this.currentState = this.getInitialState()
    }

    getInitialState() {
        const user = new User()
        //recuperation des elements du tableau
        const [ AnonymousUserState, UserConnectedState ] = this.states

        if (!user.user) {
            return AnonymousUserState
        } else {
            return UserConnectedState
        }
    }

    change(firstName, lastName) {
        const user = new User({
            firstName,
            lastName
        })

        this.currentState = this.states.filter(state => state !== this.currentState)[0]
    }
}