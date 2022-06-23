import { Link } from 'react-router-dom';
import { BOXBUTTON, CONTAINER } from './returnLoginStyled';

function returnLogin(){
    return (
        
        <CONTAINER>
            <h2>Usúario criado com sucesso!</h2>
            <BOXBUTTON>
                <button><Link to='/login'><p>Login</p></Link></button>
                <button><Link to='/'><p>Home</p></Link></button>
            </BOXBUTTON>
        </CONTAINER>

    )   
}

export default returnLogin;