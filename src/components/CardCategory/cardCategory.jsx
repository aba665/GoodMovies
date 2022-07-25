import Carrosel from '../Carrosel/carrosel';

function CardCategory(props){

    return (
        <div className='subCategory'>
            <section className='cardActionMovies'>
                <h2 className="titleTopMovie">{props.title}</h2>    
                <div className="container">
                    <div className="gallery-wrapper">
                        <button className={`arrow-left ${props.control}`}><img src={props.arrowBack} alt="seta voltando" /></button>
                        <div className="gallery">
                        {props.Films && props.Films.map((item, index) => {
                            if(index < props.time){
                                return <Carrosel key={index} nameItem={props.item} item={item} index={index} handleFavorite={props.handleFavorite} handleMovie={props.handleMovie} star={props.star} />
                            }})}
                        </div>
                        <button className={`arrow-right ${props.control}`}><img src={props.arrowForward} alt="seta para frente" /></button>
                    </div>
                </div>           
            </section>
        </div>
    )
}

export default CardCategory;