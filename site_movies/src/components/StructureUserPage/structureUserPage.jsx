import { BOXUSER, BOX_MENU, CARD_SUGEST, CARD_TOP_MOVIES, CONTAINER_MOVIES, HEADER, MAIN, NAME_USER, SUB_CATEGORY } from "./structureUserStyled";

import imgUser from './img/round-account-button-with-user-inside_icon-icons.com_72596.png'
import imgPoster from './img/O exorcista.jpg'

function structureUserPage(){
    return (
            <div>
                <HEADER>
                    <BOXUSER>
                        
                        <ul>
                            <li>
                                <img  src={imgUser} alt="" />
                                
                            </li>
                            <NAME_USER>
                                João Pé de Feijão 
                            </NAME_USER>
                        </ul>
                        
                    </BOXUSER>
                    <BOX_MENU>
                        <ul>
                            <li>
                                <a href="#">Favoritos</a>
                            </li>
                            <li>Categorias</li>
                            <li>Configurações</li>
                            <li>Sair</li>
                        </ul>
                    </BOX_MENU>
                    <h1>M°°vies</h1>
                </HEADER>
                <MAIN>
                    <CARD_SUGEST>
                        <h2>Sugestões</h2>
                        <ol>
                            <li>De volta ao Jogo</li>
                            <li>Matrix</li>
                            <li>America Pie</li>
                            <li>O Exorcista</li>
                        </ol>
                    </CARD_SUGEST>
                    <CARD_TOP_MOVIES>
                        <h2>Top 3</h2>

                        <CONTAINER_MOVIES>
                            <div>
                                <img src={imgPoster} />
                                <p>Nome do filme</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid eaque nostrum repudiandae laborum nam molestiae ipsa a, aperiam maxime consectetur, vel debitis, dignissimos consequuntur saepe in qui laboriosam ratione.</p>
                            </div>
                            <div>
                                <img src={imgPoster} />
                                <p>Nome do filme</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid eaque nostrum repudiandae laborum nam molestiae ipsa a, aperiam maxime consectetur, vel debitis, dignissimos consequuntur saepe in qui laboriosam ratione.</p>
                            </div>
                            
                            <div>
                                <img  src={imgPoster} />
                                <p>Nome do filme</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid eaque nostrum repudiandae laborum nam molestiae ipsa a, aperiam maxime consectetur, vel debitis, dignissimos consequuntur saepe in qui laboriosam ratione.</p>
                            </div>
                        </CONTAINER_MOVIES>
                    </CARD_TOP_MOVIES>
                </MAIN>
    
                <SUB_CATEGORY>
                    <section>
                        <h2>Filmes de ação e aventura</h2>
                        <CONTAINER_MOVIES>
                            <div>
                                <img src={imgPoster} alt="" />
                                <p>Nome do filme</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid eaque nostrum repudiandae laborum nam molestiae ipsa a, aperiam maxime consectetur, vel debitis, dignissimos consequuntur saepe in qui laboriosam ratione.</p>
                            </div>
                            <div>
                                <img src={imgPoster} alt="" />
                                <p>Nome do filme</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid eaque nostrum repudiandae laborum nam molestiae ipsa a, aperiam maxime consectetur, vel debitis, dignissimos consequuntur saepe in qui laboriosam ratione.</p>
                            </div>
                            
                            <div>
                                <img src={imgPoster} alt="" />
                                <p>Nome do filme</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid eaque nostrum repudiandae laborum nam molestiae ipsa a, aperiam maxime consectetur, vel debitis, dignissimos consequuntur saepe in qui laboriosam ratione.</p>
                            </div>
                            <div>
                                <img src={imgPoster} alt="" />
                                <p>Nome do filme</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid eaque nostrum repudiandae laborum nam molestiae ipsa a, aperiam maxime consectetur, vel debitis, dignissimos consequuntur saepe in qui laboriosam ratione.</p>
                            </div>
                            <div>
                                <img src={imgPoster} alt="" />
                                <p>Nome do filme</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid eaque nostrum repudiandae laborum nam molestiae ipsa a, aperiam maxime consectetur, vel debitis, dignissimos consequuntur saepe in qui laboriosam ratione.</p>
                            </div>
                        </CONTAINER_MOVIES>
                    </section>

                    <section>
                        <h2>Filmes de terror</h2>
                        <CONTAINER_MOVIES>
                            <div>
                                <img src={imgPoster} alt="" />
                                <p>Nome do filme</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid eaque nostrum repudiandae laborum nam molestiae ipsa a, aperiam maxime consectetur, vel debitis, dignissimos consequuntur saepe in qui laboriosam ratione.</p>
                            </div>
                            <div>
                                <img src={imgPoster} />
                                <p>Nome do filme</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid eaque nostrum repudiandae laborum nam molestiae ipsa a, aperiam maxime consectetur, vel debitis, dignissimos consequuntur saepe in qui laboriosam ratione.</p>
                            </div>
                            
                            <div>
                                <img src={imgPoster} alt="" />
                                <p>Nome do filme</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid eaque nostrum repudiandae laborum nam molestiae ipsa a, aperiam maxime consectetur, vel debitis, dignissimos consequuntur saepe in qui laboriosam ratione.</p>
                            </div>
                            <div>
                                <img src={imgPoster} alt="" />
                                <p>Nome do filme</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid eaque nostrum repudiandae laborum nam molestiae ipsa a, aperiam maxime consectetur, vel debitis, dignissimos consequuntur saepe in qui laboriosam ratione.</p>
                            </div>
                            <div>
                                <img  src={imgPoster} alt="" />
                                <p>Nome do filme</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam aliquid eaque nostrum repudiandae laborum nam molestiae ipsa a, aperiam maxime consectetur, vel debitis, dignissimos consequuntur saepe in qui laboriosam ratione.</p>
                            </div>
                        </CONTAINER_MOVIES>
                    </section>
                </SUB_CATEGORY>
            </div>
        )
        
}

export default structureUserPage;