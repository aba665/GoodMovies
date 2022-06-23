
//Utilização do styled-components
import { Container } from './indexStyled';
//Importações de componentes
import NavBar from '../../components/Nav/navBar';
import CarroselComponent from '../../components/Carrosel/carrosel';
import RodapeCreation from '../../components/Rodape/rodapeHome';

function homePage(){

    
    return (
        <div>
            <NavBar />
            <CarroselComponent />
            <Container>
                <h2>Sobre:</h2>
                <p>
                    O site Good Movies tem por objetivo a criação de uma página onde o usuário possa ver detalhes sobre algum filme, ver recomendações de filmes, filmes que estão prestes a lançar e muito mais.
                    Além de favoritar seu filmes preferidos, pode fazer busca por determinado filme. 
                    Observação: Essa é uma página de fins educativos para o criador. 
                </p>
            </Container>
            <RodapeCreation />
        </div>
    )
}

export default homePage;