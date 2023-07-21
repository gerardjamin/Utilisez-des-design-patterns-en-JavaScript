class Api {
    constructor(url) {
        this._url = url;
    }

    get = async () => {
        try {
            const response = await fetch(this._url);
            const data = await response.json();
            return data.data;
        } catch (error) {
            console.log('An error occurs', error);
        }
    };
}

class MovieApi extends Api {
    constructor(url) {
        super(url);
    }

    getMovies = async () => {
        return await this.get();
    };
}
