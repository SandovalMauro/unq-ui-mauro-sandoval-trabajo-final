import {useNavigate} from "react-router-dom";
import './Menu.css';
import {useState} from "react";


const Menu = () =>{
    const tableros = ['4x4', '4x5', '4x6', '4x7', '5x6', '6x6', '6x7', '6x8', '8x7', '8x8'];
    const [tableroSize, setTableroSize] = useState("4x4");
    const [numberPlayers, setNumberPlayers] = useState(1);
    const navigate = useNavigate();

    const handleSelectTablero = (tablero) => {
        setTableroSize(tablero);
    }

    const handlerJugar = () => {
        navigate("/Tablero", {state : {tableroSize:tableroSize, jugadores:numberPlayers}});
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
            <div className="selection-tablero-container">
                <p>Selecciona el tamaño del tablero</p>
                <div className="tablero-options">
                    {tableros.map((tablero, index) => (
                        <button
                            key={index}
                            className={`size-button ${tableroSize === tablero ? 'selected' : ''}`}
                            onClick={() => handleSelectTablero(tablero)}
                        >
                            {tablero}
                        </button>
                    ))}

                </div>
            </div>

            <button onClick={handlerJugar}>Jugar</button>
        </div>
    )
}

export default Menu;