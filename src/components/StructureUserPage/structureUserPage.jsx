import { useContext, useEffect, useState } from "react";
import userRequest from "../../controllers/userPageRequest";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/validateTokenContext';
import { FavoriteMovie } from "../../service/api";
import Carrosel from '../Carrosel/carrosel';
import ModalAlert from '../AlertModal/alertModal';

import './styleUser.css';
import './index.js';
import {BOXUSER,BOX_MENU,CARD_SUGEST,CATEGORY_OPTIONS,CONFIG_OPTIONS,HEADER,MAIN,NAME_USER} from "./structureUserStyled";

import imgUser from './img/round-account-button-with-user-inside_icon-icons.com_72596.png';
import arrowBack from './img/setaVolta.png';
import arrowForward from './img/setaFrente.png';
import star from './img/starflat_105977.png';
import CardCategory from "../CardCategory/cardCategory";

function StructureUserPage(){
    const user  = JSON.parse(localStorage.getItem('Usuario'));
    const userName = user.nickname.split('"');
    const { setIdMovies } = useContext(AuthContext);
    const { setIdCategory } = useContext(AuthContext);
    const [ topFilms, setTopFilms ] = useState([]);
    const [ popularFilms, setPopularFilms ] = useState([]);
    const [ newFilms, setNewFilms ] = useState([]);
    const [ recomendation, setRecomendation ] = useState([]);
    const [ show, setShowHide ] = useState('hide');
    const [ teste, setTeste ] = useState(false);
    const [ title, setTitle ] = useState('');
    const PATH = useNavigate();    

    function handleLog(){
        userRequest.LogOut();
        PATH('/')
        setTimeout(() => {
            window.location.reload(false);
        }, 1000);
    }
    
    async function handleFavorite(event){
        let idMovie = event.target.id;
        let allData = await userRequest.LikeMovie(idMovie);
        let name = allData.title;
        let description = allData.overview;
        let urlImg = `https://image.tmdb.org/t/p/w500${allData.poster_path}`

        if(name && description && urlImg){
            let result = await FavoriteMovie(name, description, urlImg);
            console.log(result)
            if(result === null){
                setShowHide('show');
                setTeste(true);
                setTitle('Filme não adicionado aos favoritos!');
                
                setTimeout(() => {
                    setShowHide('hide')
                    setTeste(false);
                }, 5000);
            }else if(result === undefined){
                setShowHide('show');
                setTeste(true);
                setTitle('Filme adicionado aos favoritos!');
                
                setTimeout(() => {
                    setShowHide('hide');
                    setTeste(false);
                }, 5000);
            }
        }else{
            setShowHide('show');
            setTeste(true);
            setTitle('Filme não adicionado, tente novamente!');
            setTimeout(() => {
                setShowHide('hide');
                setTeste(false);
            }, 5000);  
        }
    }

    async function handleMovie(movie){
        let idMovie = await movie.target.id;
        console.log('cliquei');
        console.log(idMovie);
        setIdMovies(idMovie);
        PATH('/infoMovie');
    }

    async function handleCategory(event){
        let idMovie = event.target.id;
        await setIdCategory(idMovie);
        PATH('/listMovie');
    }

    function handleFavoritePage(){
        PATH('/favoriteMovie');
    }

    useEffect(() => {
        userRequest.TopFilms(setTopFilms);
        userRequest.PopularFilms(setPopularFilms);
        userRequest.NewFilms(setNewFilms);
        userRequest.Recomendations(setRecomendation);
    }, []);

    return (
            <div>
                <HEADER>
                    <BOXUSER>               
                        <ul>
                            <li>
                                <img  src={imgUser} alt="Logo de Usuário" />   
                            </li>
                            <NAME_USER>
                                <p>{userName}</p>
                            </NAME_USER>
                        </ul>
                    </BOXUSER>
                    <BOX_MENU>
                        <ul>
                            <li onClick={handleFavoritePage}>Favoritos</li>
                            <CATEGORY_OPTIONS>Categorias
                                <ul>
                                    <li id="616037" onClick={handleCategory}>Ação</li>
                                    <li id="14564" onClick={handleCategory}>Terror</li>
                                    <li id="11845" onClick={handleCategory}>Romance</li>
                                    <li id="668640" onClick={handleCategory}>Comédia</li>
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
                                            <li id={item.id} onClick={handleMovie}><h3 id={item.id}>{item.title}</h3></li>
                                       </div>   
                        }})}
                        </ul>
                    </CARD_SUGEST>    
                    <section className='cardTopMovies'>
                       {topFilms && topFilms.map((item, index) => {
                                if(index < 3){
                                    return <Carrosel key={index} centralization='centralization' item={item} index={index} handleFavorite={handleFavorite} star={star} handleMovie={handleMovie}/>
                        }})}
                    </section>    
                </MAIN>
                <CardCategory time={20} title="Filmes de Ação" item='item' control="controlTwo" arrowBack={arrowBack} 
                arrowForward={arrowForward} Films={popularFilms} star={star} handleFavorite={handleFavorite} handleMovie={handleMovie}/>
                <CardCategory time={20} title="Lançamentos" item='itemTwo' control='control' arrowBack={arrowBack} 
                arrowForward={arrowForward} Films={newFilms} star={star} handleFavorite={handleFavorite} handleMovie={handleMovie}/>      
                {teste && <ModalAlert title={title} display={show} showHide='hide'/>}
            </div>
        )    
}

export default StructureUserPage;