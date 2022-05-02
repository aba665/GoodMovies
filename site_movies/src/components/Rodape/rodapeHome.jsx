//Utilização do styled-components
import { ContentImg,Box, Container } from './rodapestyled';
//Importação das imagens do logo do rodapé
import logoFb from '../../pages/HomePage/img/fb.png';
import logoIst from '../../pages/HomePage/img/Instagram.png';
import logoWz from '../../pages/HomePage/img/whatsapp.png';
import logoEm from '../../pages/HomePage/img/email.png';

function rodapeCreation(){
    return (
        <Container>
        <h2>Contatos</h2>
        <Box> 
            <table>
                <tr>
                    <td>
                        Email:
                    </td>
                    <td>
                        Instagram:
                    </td>
                    <td>
                        Whatsapp:
                    </td>
                    <td>
                        Facebook:
                    </td>
                </tr>
                <tr>
                    <td>Moviessuporte@gmail.com</td>
                    <td>@M°°vies</td>
                    <td>(99) 9 9999-9999</td>
                    <td>M°°vies</td>
                </tr>
                <tr>
                    <td><ContentImg src={logoEm} alt="Email" /></td>
                    <td><ContentImg src={logoWz} alt="Whatsapp" /></td>
                    <td> <ContentImg src={logoIst} alt="Instagram" /></td>
                    <td><ContentImg src={logoFb} alt="Facebook" /></td>
                </tr>
            </table>
        </Box>
    </Container>  
    )
}

export default  rodapeCreation;