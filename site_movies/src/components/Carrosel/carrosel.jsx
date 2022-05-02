import { BoxFilm, Container, Film } from './carroselStyle';

//importação de imagem temporária
import imagem1 from './harry.jpg';
import imagem2 from './Bad.jpg';
import imagem3 from './Friends.jpg';

function creationCarrosel(){
   
    return (     
        <Container>
                <BoxFilm >
                    <Film src={imagem2} alt="" />
                    <p>Nome: Breaking Bad</p>
                    <p>Descrição: Breaking Bad é uma série de televisão americana criada e produzida por Vince Gilligan. Ela retrata a vida do químico Walter White, um homem brilhante frustrado em dar aulas para adolescentes do ensino médio enquanto lida com um filho sofrendo de paralisia cerebral, uma esposa grávida e dívidas intermináveis.</p>
                </BoxFilm>

                <BoxFilm>
                    <Film src={imagem1} alt="" />
                    <p>Nome: Harry Potter e as reliquias da morte II</p>
                    <p>Descrição: “Harry Potter e as relíquias da morte – parte 2” é sem dúvida o filme com mais ação de toda a série, revelando-se uma verdadeira catarse para os fãs. Todo o intimismo da primeira parte é deixado de lado aqui, e são raros os momentos em que não há correria.</p>
                </BoxFilm>
                
                <BoxFilm>
                    <Film src={imagem3} alt="" />
                    <p>Nome: Friends</p>
                    <p>Descrição: uma série sobre seis amigos vivendo a juventude em Nova Iorque. Com 10 temporadas e mais de 200 episódios.</p>
                </BoxFilm> 
        </Container>
    )
}

export default creationCarrosel;