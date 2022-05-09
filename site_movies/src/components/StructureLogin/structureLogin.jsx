import { CONTAINER, CONTENT } from './structureStyled';

function structerLogin(){
    return (
        <CONTAINER>
        
            <CONTENT>
                <h1>Login</h1>
                <label htmlFor="Email">Email:</label>
                <input type="email" name="Email" id="Email" />
                <label htmlFor="Password">Senha:</label>
                <input type="password" name="Password" id="Password" />
                <button>Entrar</button>
            </CONTENT>

        </CONTAINER>
    )
}

export default structerLogin;