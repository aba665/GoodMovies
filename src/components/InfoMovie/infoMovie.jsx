import { useContext } from 'react';
import { useEffect, useState } from 'react';
import { AuthContext, AuthProvider } from '../../context/validateTokenContext';
import { AboutMovie } from '../../controllers/userPageRequest';
import './infoStyle.css';

function InfoMovie(){
    const [ info, setInfo ] = useState([]);
    const { idMovies } = useContext(AuthContext);
    

    useEffect(()=>{
        AboutMovie(setInfo, idMovies)
    }, [])
    return (
        <main>
            <section className="information">
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500${info.poster_path}`} alt="Imagem do Filme"/>
                    <p>Nome Do filme: {info.title}</p>
                    <p>Data de lançamento: {info.release_date}</p>
                    <p>Classificação: {info.vote_average}</p>
                    <p>Sinopse: {info.overview}</p>
                </div>
            </section>

            <section className="comments">
                <div className="allComments">
                    nenhum comentário
                </div>
                <div className="newComments">
                    <textarea name="newComment" id="newComment" cols="30" rows="10"></textarea>   
                    <button>Comentar</button>
                </div>
            </section>
    </main>
    )
}

export default InfoMovie;