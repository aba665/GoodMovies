import { useEffect, useState } from 'react';
import { AllFavoriteMovie } from '../../service/api';
import { BTNFAVORITE, CONTAINER, GALLERYITEM, GALLERYITEMINFO, PARAGRAPH, SUBCATEGORY } from './favoriteStyled';

function StructureFavorite(){
    const [ userFavorite, setUserFavorite ] = useState([]);
    let allData;
    let arrayData = [];
    
    
    async function handleData(){
        allData = await AllFavoriteMovie();
        
        if(allData.length > 0){
            arrayData = allData[0].movie;
            setUserFavorite(arrayData);
        }
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

                                    {userFavorite.length === 0 && (
                                        <PARAGRAPH>Você ainda não tem filmes favoritos</PARAGRAPH>
                                    )}
                        </div>
                    </div>
                </CONTAINER>            
            </section>
        </SUBCATEGORY>
              
    )
}

export default StructureFavorite;