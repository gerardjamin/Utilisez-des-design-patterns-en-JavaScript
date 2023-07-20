// constructor pattern
class OldMovie {
    constructor(data) {
        //_valeur est une propriétée privée, on a donc besoin d'accesseur pour les recuperer
        //la recuperation à l'exterieur de la classe des propriéte se fait par les accesseurs 
        this._duration = data.duration;
        this._title = data.title;
        this._synopsis = data.synopsis;
        this._released_in = data.released_in;
        this._picture = data.picture;
}

// getter qui nous permet d'acceder aux proprietes de l'objet (assesseurs)
get duration(){
    return this._duration;
}

get title(){
    return this._title;
}

get synopsis(){
    return this._synopsis;
}

get released_in(){
    return this._released_in;
}

// retourne le chemin complet de l'image
get picture(){
    const image = `/assets/${this._picture}`
    // console.log(image)
    return image;
}

get thumnail(){
    return `/assets/thumbnails/${this._picture}`;
}

}

// reste a instantier l'objet

