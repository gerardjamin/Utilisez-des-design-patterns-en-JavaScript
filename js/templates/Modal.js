class Form {
    constructor() {
        this.$wrapper = document.createElement('div')
        this.$modalWrapper = document.querySelector('.modal')
    }

    onSubmitForm() {
        this.$wrapper
            .querySelector('form')
            .addEventListener('submit', e => {
                //evite le rechargement de la page
                e.preventDefault()

                const firstNameInputValue = this
                    .$wrapper
                    .querySelector('#firstname')
                    .value

                const lastNameInputValue = this
                    .$wrapper
                    .querySelector('#lastname')
                    .value
                //creation de l'objet user = {firstName:firstNameInputValue ,lastName: lastNameInputValue}
                const userData = {firstName:firstNameInputValue , lastName: lastNameInputValue}
                const user = new User(userData)
                // const user = new User({
                //     firstName: firstNameInputValue,
                //     lastName: lastNameInputValue
                // })

                if (user.user) {
                    this.$modalWrapper.classList.remove('modal-on')
                    this.$modalWrapper.innerHTML = ""
                }

            })
    }



    createForm() {
        const form = `
            <form action="#" method="POST">
                <div class="form-group">
                    <label class="form-label" for="firstname">Votre prénom : </label>
                    <input id="firstname" name="firstname" type="text">
                </div>
                <div class="form-group">
                    <label class="form-label" for="lastname">Votre nom : </label>
                    <input id="lastname" name="lastname" type="text">
                </div>
                <button class="submit-btn" type="submit">Valider</button>
            </form>
        `
        this.$wrapper.innerHTML = form

        this.$modalWrapper.classList.add('modal-on')
        this.$modalWrapper.appendChild(this.$wrapper)
    }

    //affichage de la modale si l'user n'est pas enregistré
    render() {
        if (this.shouldDisplayForm()) {
            this.createForm()
            this.onSubmitForm()
        }
    }

    shouldDisplayForm() {
        const user = new User()
        const boolean = user.user
        //si user n'existe pas cad !boolean = vrai alors on affiche la modale
        return !boolean
    }
}
