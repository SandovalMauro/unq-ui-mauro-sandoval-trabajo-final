import {useNavigate} from "react-router-dom";
import './Menu.css';
import {useState} from "react";


const Menu = () =>{
    const [quantity, setQuantity] = useState(1);
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
            <div className="selection-player-container">
                <p>Seleccione cantidad de jugadores</p>
                <div className="buttons-player-container">
                    <button className="button-player">1</button>
                    <button className="button-player">2</button>
                </div>

            </div>
            <div className="selection-cards-container">
                <p>Seleccione la cantidad de pares</p>
                <div>
                    <select className="select-cant" value={quantity}
                            onChange={(e) => setQuantity(Number(e.target.value))}>
                        {[...Array(32).keys()].map(i => (
                            <option key={i + 1}
                                    value={i + 1}> {i + 1} {i + 1 > 1 ? " unidades" : " unidad"}</option>
                        ))}
                    </select>

                </div>
            </div>

            <button onClick={handlerRutaT}>Jugar</button>
        </div>
    )
}

export default Menu;