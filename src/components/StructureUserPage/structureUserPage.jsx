import imgUser from './img/round-account-button-with-user-inside_icon-icons.com_72596.png'
import { useEffect, useState } from "react";
import { LogOut, NewFilms, PopularFilms, Recomendations, TopFilms } from "../../controllers/userPageRequest";
import { useNavigate } from 'react-router-dom';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
// import 'owl.carousel/dist/assets/owl.theme.default.min.css';
import './styleUser.css';
import './index.js';
import arrowBack from './img/setaVolta.png';
import arrowForward from './img/setaFrente.png';



import {
        BOXUSER,
        BOX_MENU,
        CARD_SUGEST,  
        CATEGORY_OPTIONS, 
        CONFIG_OPTIONS,    
        HEADER, 
        MAIN, 
        NAME_USER, 
        } from "./structureUserStyled";

function StructureUserPage(){
    
    // const user  = JSON.parse(localStorage.getItem('Usuario'));
    // const userName = user.nickname.split('"');
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
                                joão
                                {/* <p>{userName}</p> */}
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
                    <section className='cardTopMovies'>
                       {topFilms && topFilms.map((item, index) => {
                                if(index < 3){
                                   return <div  className="contetTopMovie" key={item.popularity}>
                                            
                                                <img className="itemFirst" src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                                                <h3>{item.title}</h3>
                                                <p>Popularidade: {item.popularity}</p>
                                                <p>{item.overview}</p>
                                                <button onClick={()=>{}}>Favoritar</button>

                                            
                                        </div>   

                                }
                            })} 
                           
                    </section>    
                </MAIN>
                 
                <div className='subCategory'>
                    <section className='cardActionMovies'>
                    <h2 className="titleTopMovie">Filmes de ação</h2>
                    
                    
                    <div className="container">
                        <div className="gallery-wrapper">
                            <button className="arrow-left controlTwo"><img src={arrowBack} alt="seta voltando" /></button>
                            <div className="gallery">
                                {popularFilms && popularFilms.map((item, index) => {
                                    if(index < 20){
                                    return <div key={item.popularity}>
                                            <img className='itemTwo' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                                            <h3>{item.title}</h3>
                                            <p>Popularidade: {item.popularity}</p>
                                            <p>{item.overview}</p>
                                            <button onClick={()=>{}}>Favoritar</button>
                                        </div>
                                    }
                                        })
                                    }
                            </div>
                            <button className="arrow-right controlTwo"><img src={arrowForward} alt="seta para frente" /></button>
                        </div>
                    </div>
                    
                        </section>
                    </div>

                <div className='subCategory'>
                            <section className='cardActionMovies'>
                            <h2 className="titleTopMovie">Lançamentos</h2>
                            <div className='container'>
                                <div className='gallery-wrapper'>
                                    <button className='arrow-left control'>
                                        <img src={arrowBack} alt="seta voltando" />
                                    </button>
                                    <div className='gallery'>
                                        {newFilms && newFilms.map((item, index) => {
                                            if(index < 20){
                                            return <div className='selectionMovie' key={item.popularity}>
                                                        <img className='item' src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />
                                                        <h3>{item.title}</h3>
                                                        <p>Popularidade: {item.popularity}</ p>
                                                        <p>{item.overview}</p>
                                                        <button onClick={()=>{}}>Favoritar</    button>
                                                    </div>
                                            }
                                        })}
                                    </div>
                                    <button className='arrow-right control'> 
                                         <img src={arrowForward} alt="seta para frente" /> 
                                    </button>
                                </div>
                            </div>  
                        </section>
                </div>
                   
            </div>
        )    
}

export default StructureUserPage;