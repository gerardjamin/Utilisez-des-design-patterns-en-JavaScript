function movieCardWithPlayer(movieCard) {

    if(movieCard.movie.actor === 'sylvester') {
        movieCard.$wrapper.addlistener('click',() => {
            const Player = new PlayerModal(movieCard.movie)
            Player.render()
        })
    }
}
