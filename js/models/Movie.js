//constructor pattern
class Movie {
    constructor(data) {
        this._duration = data.duration;
        this._title = data.title;
        this._synopsis = data.synopsis;
        this._released_in = data.released_in;
        this._picture = data.picture;
}

// getter qui nous permet d'acceder aux propriete de l'objet
get duration(){
    const tempsEnMinutes = this._duration;
    const heuresRestantes = Math.floor(tempsEnMinutes / 60);
    const minutesRestantes = tempsEnMinutes % 60;
    
    return `${heuresRestantes} h ${minutesRestantes}`
}

// get title(){
// const titles = this._title;
//   if("fr" in titles){
//    return titles.fr;
//   }else{
//     return titles.en;
//   }
// }

get title(){
  // return this._title.hasOwnProperty('fr') ? this._title['fr']:this._title['en'];
  return this._title.hasOwnProperty('fr') ? this._title.fr : this._title.en;
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

// ${this._picture} qui correspond au nom de l'image
get thumnail(){
    return `/assets/thumbnails/${this._picture}`;
}

}

//reste a instantire l'objet

