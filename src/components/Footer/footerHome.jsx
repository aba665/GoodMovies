//Utilização do styled-components
import { ContentImg,Box, Container } from './footerStyled';
//Importação das imagens do logo do rodapé
import logoFb from '../../pages/HomePage/img/fb.png';
import logoIst from '../../pages/HomePage/img/Instagram.png';
import logoWz from '../../pages/HomePage/img/whatsapp.png';
import logoEm from '../../pages/HomePage/img/email.png';

function footerCreation(){
    return (
        <Container>
        <h2>Contatos</h2>
        <Box> 
            <table>
                <thead>

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
                </thead>
                <tfoot>
                    <tr>
                        <td><ContentImg src={logoEm} alt="Email" /></td>
                        <td><ContentImg src={logoWz} alt="Whatsapp" /></td>
                        <td> <ContentImg src={logoIst} alt="Instagram" /></td>
                        <td><ContentImg src={logoFb} alt="Facebook" /></td>
                    </tr>

                </tfoot>
            </table>
        </Box>
    </Container>  
    )
}

export default footerCreation;