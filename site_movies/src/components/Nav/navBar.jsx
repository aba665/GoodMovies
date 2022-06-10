import { Link } from 'react-router-dom';
//Utilização do styled-components
import { Container } from "./navStyle";

function navBar(){
   
    return (
            <Container>
                <h2>M°°vies</h2>
                <ul>
                    <li><a href="#"><Link to='/'>Home</Link></a></li>
                    <li><a href="#"><Link to='/login'>Login</Link></a></li>
                    <li><a href="#"><Link to='/cadastro'>Cadastro</Link></a></li>
                </ul>            
            </Container>
    )
}

export default navBar;
