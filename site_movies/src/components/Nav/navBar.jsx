//Utilização do styled-components
import { Container } from "./navStyle";

function navBar(){
    return (
            <Container>
                <h2>M°°vies</h2>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">login</a></li>
                    <li><a href="#">Cadastro</a></li>
                </ul>            
            </Container>
    )
}

export default navBar;
