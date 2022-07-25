import { useContext } from 'react';
import { useState, useEffect } from 'react';
import { AuthContext } from '../../context/validateTokenContext';
import userRequest from '../../controllers/userPageRequest';
import { SUBCATEGORY, CONTAINER, GALLERYITEM, GALLERYITEMINFO, BTNFAVORITE } from '../StructureFavoritePage/favoriteStyled';

function ListMovie(){
    const { idCategory } = useContext(AuthContext);
    const [ movieList, setMovieList ] = useState([]);
    let allData;
    let arrayData = [];

    async function handleData(){
        allData = await userRequest.listMovies(setMovieList, idCategory);
        arrayData = allData.results;
        setMovieList(arrayData);
    }
    
    useEffect(()=>{
        handleData();
    }, []);

    return (
        <SUBCATEGORY>
        <section>
                <h2>Lista de Filmes</h2>
                <CONTAINER>
                    <div>
                        <div>
                            {movieList && movieList.map((item, index) => {
                                return <GALLERYITEM key={index}>
                                    <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="Imagem do filme" />
                                    <GALLERYITEMINFO>
                                        <h3 className="item-title">{item.title}</h3>
                                        <p>{item.overview}</p>
                                        <BTNFAVORITE>REMOVER</BTNFAVORITE>
                                    </GALLERYITEMINFO> 
                                </GALLERYITEM>
                                
                            })}
                        </div>
                    </div>
                </CONTAINER>            
            </section>
        </SUBCATEGORY>
    )
}

export default ListMovie;