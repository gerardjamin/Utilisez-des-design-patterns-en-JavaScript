class OldMovie {
// constructor pattern
class OldMovie {
    constructor(data) {
        this._duration = data.duration;
        this._title = data.title;
        this._synopsis = data.synopsis;
        this._released_in = data.released_in;
        this._picture = data.picture;
}

// getter qui nous permet d'acceder aux propriete de l'objet
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
    return `/assets/${this._picture}`;
}

get thumnail(){
    return `/assets/thumbnails/${this._picture}`;
}

}

// reste a instantier l'objet
}
