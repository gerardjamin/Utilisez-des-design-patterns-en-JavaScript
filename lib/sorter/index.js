//methode sorter() => static pas besoin d'intantiation de l'objet pour l'utiliser
class RatingSorterApi {
    static async sorter(data, orderBy) {
        console.log("Get from compute")

        //croissante
        if (orderBy === 'ASC') {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = {
                        key: orderBy,
                        data: Array.from(data).sort((a, b) => a.released_in - b.released_in)
                    }

                    resolve(result)

                }, 1000)
            })

            //decroissante
        } else if (orderBy === 'DESC') {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const result = {
                        key: orderBy,
                        data: Array.from(data).sort((a, b) => b.released_in - a.released_in)
                    }

                    resolve(result)
                }, 1000)
            })
        } else {
            throw 'unknow orderBy type'
        }
    }
}
