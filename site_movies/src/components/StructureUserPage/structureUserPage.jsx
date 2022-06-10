import { BOXUSER, BOX_MENU, BOX_TEXT, CARD_SUGEST, CARD_TOP_MOVIES, CONTAINER_MOVIES, HEADER, MAIN, NAME_USER, SUB_CATEGORY } from "./structureUserStyled";

import imgUser from './img/round-account-button-with-user-inside_icon-icons.com_72596.png'
import { useEffect, useState } from "react";
import { getData } from "../../service/api";
import { NewFilms, PopularFilms, Recomendations, TopFilms } from "../../controllers/userPageRequest";
import { Link } from 'react-router-dom';
// import config from '../../config/apiConfig';

function StructureUserPage(){
    
    const [ user, setUser ] = useState('');
    const [ topFilms, setTopFilms ] = useState([]);
    const [ popularFilms, setPopularFilms ] = useState([]);
    const [ newFilms, setNewFilms ] = useState([]);
    const [ recomendation, setRecomendation ] = useState([]);
    

    function handleData(){
        let dataUser = getData()
        if(dataUser){
            setUser(dataUser);
            
        }
    }
    useEffect(() => {
        handleData();
        TopFilms(setTopFilms);
        PopularFilms(setPopularFilms);
        NewFilms(setNewFilms);
        Recomendations(setRecomendation);
    }, []);

    return (
            <div>
                <HEADER>
                    <BOXUSER>
                        
                        <ul>
                            <li>
                                <img  src={imgUser} alt="" />
                                
                            </li>
                            <NAME_USER>
                                 {user}
                            </NAME_USER>
                        </ul>
                        
                    </BOXUSER>
                    <BOX_MENU>
                        <ul>
                            <li>
                                <a href="#">Favoritos</a>
                            </li>
                            <li>Categorias</li>
                            <li>Configurações</li>
                            <li>Sair</li>
                        </ul>
                    </BOX_MENU>
                    <h1>M°°vies</h1>
                </HEADER>
                <MAIN>
                    <CARD_SUGEST>
                        <h2>Sugestões</h2>
                        <ul>
                        {recomendation && recomendation.map((item, index) => {
                                if(index < 10){
                                   return <div key={item.id}>
                                        <li id={item.id}><h3>{item.title}</h3></li>
                                    </div>   

                                }})}
                        </ul>
                    </CARD_SUGEST>
                    <CARD_TOP_MOVIES>
                        <h2>Top 3</h2>

                        <CONTAINER_MOVIES>
                            {topFilms && topFilms.map((item, index) => {
                                if(index < 3){
                                   return <BOX_TEXT key={item.popularity}>
                                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>Popularidade: {item.popularity}</p>
                                            <p>{item.overview}</p>
                                            <button onClick={()=>{}}>Favoritar</button>
                                        </div>
                                    </BOX_TEXT>   

                                }
                            })}
                        </CONTAINER_MOVIES>
                    </CARD_TOP_MOVIES>
                </MAIN>
    
                <SUB_CATEGORY>
                    <section>
                        <h2>Filmes Populares</h2>
                        <CONTAINER_MOVIES>
                        {popularFilms && popularFilms.map((item, index) => {
                                if(index < 5){
                                   return <BOX_TEXT key={item.popularity}>
                                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                                       
                                       <div>
                                            <h3>{item.title}</h3>
                                            <p>Popularidade: {item.popularity}</p>
                                            <p>{item.overview}</p>
                                            <button onClick={()=>{}}>Favoritar</button>
                                       </div>
                                    </BOX_TEXT>   

                                }
                            })}
                        </CONTAINER_MOVIES>
                    </section>

                    <section>
                        <h2>Lançamentos</h2>
                        <CONTAINER_MOVIES>
                        {newFilms && newFilms.map((item, index) => {
                                if(index < 5){
                                   return <BOX_TEXT key={item.popularity}>
                                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                                        
                                        <div>
                                            <h3>{item.title}</h3>
                                            <p>Popularidade: {item.popularity}</p>
                                            <p>{item.overview}</p>
                                            <button onClick={()=>{}}>Favoritar</button>
                                        </div>
                                    </BOX_TEXT>   

                                }
                            })}
                           
                        </CONTAINER_MOVIES>
                    </section>
                </SUB_CATEGORY>
            </div>
        )    
}

export default StructureUserPage;