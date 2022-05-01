import { useState } from 'react';

function MyTest(){

    let [ initialValue, setInitialValue ] = useState(0);
    
    return (
        <div>
            <h1>Olá seja bem vindo ao meu teste!</h1>
            <button className="allButton" onClick={()=> setInitialValue(initialValue + 1)}>+</button><span>{initialValue}</span><button className="allButton" onClick={()=> setInitialValue(initialValue - 1)}>-</button>
        </div>
    )

}

export default MyTest;