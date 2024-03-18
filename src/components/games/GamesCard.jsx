function GamesCard({game}){
    return(
        <div className="game-card">
            <img src={game.imageUrl } alt={game.name} width="200" height="200"/>
            <h3>{game.name}</h3>
            <p>Цена: {game.price} ₸</p>
            <button>Добавить в корзину</button>
    </div>
    )
}

export default GamesCard;