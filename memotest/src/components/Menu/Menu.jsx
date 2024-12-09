import {useNavigate} from "react-router-dom";
import './Menu.css';


const Menu = () =>{
    const navigate = useNavigate();
    const handlerRutaJ = () => {
        navigate("/jugadores");
    }
    const handlerRutaT = () => {
        navigate("/Tablero");
    }
    return(
        <div className="container">
            <p>Menu</p>

            <p onClick={handlerRutaJ}>jugadores</p>
            <p onClick={handlerRutaT}>tablero</p>

            <button onClick={handlerRutaT}>Jugar</button>
        </div>
    )
}

export default Menu;