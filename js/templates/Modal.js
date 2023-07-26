class Form {
    constructor() {
        this.$wrapper = document.createElement('div')
        this.$modalWrapper = document.querySelector('.modal')
    }

    onSubmitForm() {
        this.$wrapper
            .querySelector('form')
            .addEventListener('submit', e => {
                e.preventDefault()

                const firstNameInputValue = this
                    .$wrapper
                    .querySelector('#firstname')
                    .value

                const lastNameInputValue = this
                    .$wrapper
                    .querySelector('#lastname')
                    .value

                //creation de l'objet user(dataUser)
                const user = new User({
                    firstName: firstNameInputValue,
                    lastName: lastNameInputValue
                })
                //disparition de la modale en cas de creation de l'objet user
                if (user.user) {
                    this.$modalWrapper.classList.remove('modal-on')
                    this.$modalWrapper.innerHTML = ""
                }

            })
    }

    shouldDisplayForm() {
        //creation de l'objet user (!! singleton)
        const user = new User()
        console.log(user.user)
        //retourne true si l'objet n'existe pas (soit null)
        return !user.user
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
        //remplace le contenu par le formulaire
        this.$wrapper.innerHTML = form
        //ajout de la classe modal-on à l'element div
        this.$modalWrapper.classList.add('modal-on')
        //ajout du formulaire a la div
        this.$modalWrapper.appendChild(this.$wrapper)
    }

    render() {
        if (this.shouldDisplayForm()) {
            //creation de la modale
            this.createForm()
            this.onSubmitForm()
        }
    }
}
