function creationCarrosel(props){   
    return (
        <div  className="contetTopMovie selectionMovie" key={props.item.popularity}>
            <img className={`itemFirst ${props.nameItem} ${props.centralization}`} src={`https://image.tmdb.org/t/p/w500${props.item.poster_path}`} id={props.item.id} onClick={props.handleMovie} alt="Imagem do filme"/>
            <h3>{props.item.title}</h3>
            <div className="rateItem">
                <img src={props.star} alt="Imagem de uma estrela" />
                <p>{props.item.vote_average}</p>
            </div>
            <p>{props.item.overview}</p>
            <button onClick={props.handleFavorite} id={props.item.id} className="btnFavorite">Favoritar</button>
        </div>
    )   
}

export default creationCarrosel;