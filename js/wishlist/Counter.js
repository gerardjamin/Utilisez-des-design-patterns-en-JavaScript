class WhishListCounter {

    constructor() {
        this._count = 0
        this._$whishCount = document.querySelectorAll(".wish-count")
    }

    update(action) {

        if (action === 'INC') {
            this._count += 1
        }
        else if(action === 'DEC'){
            this._count -= 1
        }
        else{
            throw ('Unknow action')
        }
        
        // this._$whishCount.innerHTML  = this._count
        // this._$whishCount.innerHTML  = 'gerard'
        let essai = document.querySelectorAll(".wish-count")
        essai.innerHTML = 'gerard'
        console.log(this._count)
        console.log(essai)
    }
}