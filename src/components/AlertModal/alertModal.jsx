import { Link } from 'react-router-dom';
import { BOXBUTTON, CONTAINER } from './alertModalStyled';

function returnLogin(props){
    return (
        <CONTAINER className={props.display}>
            <h2>{props.title}</h2>
            <BOXBUTTON>
                <button className={props.showHide}><Link to='/login'><p>{props.firstButton}</p></Link></button>
                <button className={props.showHide}><Link to='/'><p>{props.secondButton}</p></Link></button>
            </BOXBUTTON>
        </CONTAINER>
    )   
}

export default returnLogin;