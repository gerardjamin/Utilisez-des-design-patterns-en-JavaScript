
//state pattern (gèrer les etats de l'application)
class Context {
    constructor() {
        //objet d'etats possibles de l'application
        this._states = [
            new InitialState(),
            new ErrorState(),
            new SuccessState()
        ]
        this.currentState = this._states[0]
    }

    change(status) {

        const [
            InitialState,
            ErrorState,
            SuccessState
        ] = this._states

        if (status === 'error') {
            this.currentState = ErrorState
        } else if (status === 'success') {
            this.currentState = SuccessState
        }

    }

    get state() {
        return this.currentState.state
    }
}

class InitialState {
    constructor() {
        this.state = 'initial'
    }
}

class ErrorState {
    constructor() {
        this.state = 'error'
    }
}

class SuccessState {
    constructor() {
        this.state = 'success'
    }
}
