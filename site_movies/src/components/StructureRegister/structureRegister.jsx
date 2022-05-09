import { CONTAINER, CONTENT } from "../StructureLogin/structureStyled";


function structureRegister(){
    return (
        <CONTAINER>
            <CONTENT>
                <h1>Registro</h1>
                <label htmlFor="FullName">Nome:</label>
                <input type="text" name="FullName" id="FullName" placeholder="Nome Completo..."/>
                <label htmlFor="NickName">Apelido:</label>
                <input type="text" name="NickName" id="NickName" placeholder="Ex: Bia"/>
                <label htmlFor="Age">Idade:</label>
                <input type="number" name="Age" id="Age" placeholder="Ex: 25"/>
                <label htmlFor="Email">Email:</label>
                <input type="email" name="Email" id="Email" placeholder="Digite seu email"/>
                <label htmlFor="Password">Senha:</label>
                <input type="password" name="Password" id="Password" placeholder="Digite sua senha"/>
                <button>Registrar</button>
            </CONTENT>
        </CONTAINER>
    )
}

export default structureRegister;