import imgUser from './img/round-account-button-with-user-inside_icon-icons.com_72596.png'
import { useEffect, useState } from "react";
import { LogOut, NewFilms, PopularFilms, Recomendations, TopFilms } from "../../controllers/userPageRequest";
import { useNavigate } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';


import { BOXUSER,
        BOX_MENU,
        CARD_SUGEST, 
        CARD_TOP_MOVIES, 
        CATEGORY_OPTIONS, 
        CONFIG_OPTIONS,  
        HEADER, 
        MAIN, 
        NAME_USER, 
        SUB_CATEGORY } from "./structureUserStyled";

function StructureUserPage(){
    
    const user  = JSON.parse(localStorage.getItem('Usuario'));
    const userName = user.nickname.split('"');
    const [ topFilms, setTopFilms ] = useState([]);
    const [ popularFilms, setPopularFilms ] = useState([]);
    const [ newFilms, setNewFilms ] = useState([]);
    const [ recomendation, setRecomendation ] = useState([]);
    const PATH = useNavigate();    

    const options = {
        responsive: {
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            },
        },
        responsiveTwo: {
            0:{
                items:1
            },
            600:{
                items:3
        }
    }
    };

    function handleLog(){
        LogOut();

        PATH('/')
        
    }
    
    useEffect(() => {
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
                                <p>{userName}</p>
                            </NAME_USER>
                        </ul>
                        
                    </BOXUSER>
                    <BOX_MENU>
                        <ul>
                            <li>
                                <a href="#">Favoritos</a>
                            </li>
                            <CATEGORY_OPTIONS>Categorias
                                <ul>
                                    <li>Ação</li>
                                    <li>Terror</li>
                                </ul>
                            </CATEGORY_OPTIONS>
                            <CONFIG_OPTIONS>Configurações
                                <ul>
                                    <li>Editar Usuário</li>
                                    <li>Excluir Usuário</li>
                                </ul>
                            </CONFIG_OPTIONS>
                            <li onClick={handleLog}>Sair</li>
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
                        {topFilms && (

                            <OwlCarousel
                            className='owl-theme'
                            responsive={options.responsiveTwo}
                            margin={2}
                            nav
                            dots
                            loop
                            >
                             {topFilms.map((item, index) => {
                                if(index < 3){
                                   return <div key={item.popularity}>
                                            <div className='item'>
                                                <img className="box-film" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                                                <h3>{item.title}</h3>
                                                <p>Popularidade: {item.popularity}</p>
                                                <p>{item.overview}</p>
                                                <button onClick={()=>{}}>Favoritar</button>

                                            </div>
                                        </div>   

                                }
                            })}
                        </OwlCarousel>
    )}
                    </CARD_TOP_MOVIES>
                </MAIN>
    
                <SUB_CATEGORY>
                    <section>
                    <h2>Filmes de Ação</h2>
                    {popularFilms && (
                        <OwlCarousel
                            className='owl-theme'
                            responsive={options.responsive}
                            margin={2}
                            autoplay
                            nav
                            dots
                            loop
                            >
                             {popularFilms.map((item, index) => {
                                    if(index < 5){
                                    return <div key={item.popularity}>
                                            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                                            <h3>{item.title}</h3>
                                            <p>Popularidade: {item.popularity}</p>
                                            <p>{item.overview}</p>
                                            <button onClick={()=>{}}>Favoritar</button>
                                        </div>
                                    }
                                })}
                            </OwlCarousel>
                    )}
                    </section>

                    <section>
                        <h2>Lançamentos</h2>
                        {newFilms && (
                            
                            <OwlCarousel
                            className='owl-theme'
                            responsive={options.responsive}
                            margin={2}
                            nav
                            dots
                            loop
                            >
                                    
                                    {newFilms.map((item, index) => {
                                            if(index < 5){
                                            return <div key={item.popularity}>
                                                        <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                                                        <h3>{item.title}</h3>
                                                        <p>Popularidade: {item.popularity}</p>
                                                        <p>{item.overview}</p>
                                                        <button onClick={()=>{}}>Favoritar</button>
                                                    </div>
                                            }
                                        })}
                            </OwlCarousel>
                        )}
                    </section>
                </SUB_CATEGORY>
            </div>
        )    
}

export default StructureUserPage;