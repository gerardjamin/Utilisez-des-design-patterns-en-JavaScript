//factorie pattern
class MoviesFactory {

    constructor(data, type) {
        if (type === "Movie") {
            return new Movie(data)
        } else if (type === "OldMovie") {
            return new OldMovie(data)
        } else {
            throw ("Unknow format type")
        }
    }

}