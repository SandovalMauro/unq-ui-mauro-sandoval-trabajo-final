import {useNavigate} from "react-router-dom";


const Menu = () =>{
    const navigate = useNavigate();
    const handlerRutaJ = () => {
        navigate("/jugadores");
    }
    const handlerRutaT = () => {
        navigate("/Tablero");
    }
    return(
        <>
            Menu
            <p onClick={handlerRutaJ}>jugadores</p>
            <p onClick={handlerRutaT}>tablero</p>
        </>
    )
}

export default Menu;