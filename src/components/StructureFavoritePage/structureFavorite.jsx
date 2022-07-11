import { useEffect, useState } from 'react';
import { AllFavoriteMovie } from '../../service/api';
import { BTNFAVORITE, CONTAINER, GALLERYITEM, GALLERYITEMINFO, SUBCATEGORY } from './favoriteStyled';

function StructureFavorite(){
    const [ userFavorite, setUserFavorite ] = useState([]);
    let allData;
    let arrayData = [];
    
    
    async function handleData(){
        allData = await AllFavoriteMovie();
        arrayData = allData[0].movie;
        setUserFavorite(arrayData);
    }
    
    useEffect(()=>{
        handleData();
    }, []);
    
    return (
        
    <SUBCATEGORY>
        <section>
                <h2>Filmes Favoritos</h2>
                <CONTAINER>
                    <div>
                        <div>
                            {userFavorite && userFavorite.map((item, index) => {
                                return <GALLERYITEM key={index}>
                                    <img src={item.urlImg} alt="Imagem do filme" />
                                    <GALLERYITEMINFO>
                                        <h3 className="item-title">{item.name}</h3>
                                        <p>{item.description}</p>
                                        <BTNFAVORITE>REMOVER</BTNFAVORITE>
                                    </GALLERYITEMINFO> 
                                </GALLERYITEM>
                                
                            })}
                        </div>
                    </div>
                </CONTAINER>            
            </section>
        </SUBCATEGORY>
              
    )
}

export default StructureFavorite;