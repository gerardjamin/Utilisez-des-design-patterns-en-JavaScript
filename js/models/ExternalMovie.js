class ExternalMovie {
    constructor(data) {
        this._title_fr = data.title_fr
        this._title_en = data.title_en
        this._synopsis = data.synopsis
        this._medias = data.medias  //objet
        this._infos = data.infos   //objet

    }

    // get title() {
    //     if(this._title_fr != ""){
    //         return this._title_fr
    //     }else{
    //         return this._title_en
    //     }     
    // }

    get title() {
        return this.title_fr ? this._title_fr:this._title_en
    }

    get synopsis() {
        return this._synopsis
    }

    get medias() {
        return this._medias
    }

    get released_in() {
        return this._infos["released_in"]
    }

    get duration() {
        return this._infos["duration"]
    }

    get thumbnail() {
        return `/assets/thumbnails/${this._medias["thumbnail"]}`
    }

    get picture() {
        return `/assets/${this._medias.picture}`
    }

}