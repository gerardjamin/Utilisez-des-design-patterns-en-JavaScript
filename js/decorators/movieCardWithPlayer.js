function movieCardWithPlayer(movieCard) {
    if (movieCard.movie.actor === 'sylvester') {
        movieCard.$wrapper.addEventListener('click', () => {
            const Player = new PlayerModal(movieCard.movie)
            console.log(Player)
            //lancement du player
            Player.render()
        })
    }

    return movieCard
}
