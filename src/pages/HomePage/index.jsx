import { useState, useEffect } from 'react';
import userRequest from '../../controllers/userPageRequest';
//Utilização do styled-components
import { Container } from './indexStyled';
import '../../components/StructureUserPage/styleUser.css';
//Importações de componentes
import NavBar from '../../components/Nav/navBar';
import CardCategory from '../../components/CardCategory/cardCategory';
import RodapeCreation from '../../components/Footer/footerHome';
import '../../components/StructureUserPage/index';
//Importações de imagens
import arrowBack from '../../components/StructureUserPage/img/setaVolta.png';
import arrowForward from '../../components/StructureUserPage/img/setaFrente.png';
import star from '../../components/StructureUserPage/img/starflat_105977.png';

function HomePage(){
    const [ newFilms, setNewFilms ] = useState([]);
    useEffect(() => {
        userRequest.NewFilms(setNewFilms);
    }, []);
    
    return (
        <div>
            <NavBar />
            <CardCategory 
                time={5}
                title="Filmes de Ação" 
                item='item' 
                control="controlTwo" 
                arrowBack={arrowBack} 
                arrowForward={arrowForward} 
                Films={newFilms} 
                star={star} 
                handleFavorite={()=>{alert('Precisa fazer login para fovoritar um filme')}} />
            <Container>
                <h2>Sobre:</h2>
                <p>
                    O site Good Movies tem por objetivo a criação de uma página onde o usuário possa ver detalhes sobre algum filme, ver recomendações de filmes, filmes que estão prestes a lançar e muito mais.
                    Além de favoritar seus filmes preferidos, o usuário pode fazer busca por determinado filme e dar aquela conferida na sinopse e mais outros detalhes. 
                    Observação: Essa é uma página de fins educativos para o criador. 
                </p>
            </Container>
            <RodapeCreation />
        </div>
    )
}

export default HomePage;