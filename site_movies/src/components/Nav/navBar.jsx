import { Link } from 'react-router-dom';
//Utilização do styled-components
import { Container, LITTLE_DETAIL } from "./navStyle";

function navBar(){
   
    return (
            <Container>
                <h2>M°°vies</h2>
                <ul>
                    <LITTLE_DETAIL><Link to='/'>Home</Link></LITTLE_DETAIL>
                    <LITTLE_DETAIL><Link to='/login'>Login</Link></LITTLE_DETAIL>
                    <LITTLE_DETAIL><Link to='/cadastro'>Cadastro</Link></LITTLE_DETAIL>
                </ul>            
            </Container>
    )
}

export default navBar;
