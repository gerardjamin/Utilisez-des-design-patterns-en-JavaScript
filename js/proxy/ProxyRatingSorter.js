class ProxyRatingSorter {
    constructor() {
        this.cache = []

    }

    async sorter(movies, orderBy) {
        const cacheResult = this.cache.find(elt => elt.key === orderBy)

        if (cacheResult) {
            console.log('get from cache')
            return cacheResult
        }

        const data = await RatingSorterApi.sorter(movies, orderBy)
        this.cache.push(data)
        return data
    }
}
