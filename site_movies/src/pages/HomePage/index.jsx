
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
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, rerum non! Qui ipsam debitis, deleniti itaque architecto dolores eos dignissimos. Commodi enim voluptatum aspernatur natus praesentium! Perspiciatis nisi doloremque beatae.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam consequatur, explicabo adipisci porro, blanditiis nemo, vero illo est dignissimos mollitia fuga animi nisi eos esse modi nam error minima reiciendis.
                    
                </p>
            </Container>
            <RodapeCreation />
        </div>
    )
}

export default homePage;