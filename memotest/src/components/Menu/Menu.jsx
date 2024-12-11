import {useNavigate} from "react-router-dom";
import './Menu.css';
import {useState} from "react";


const Menu = () =>{
    const tableros = ['4x4', '5x4', '6x5', '6x6', '7x6', '8x6', '8x7', '8x8'];
    const [tableroSize, setTableroSize] = useState("4x4");
    const [numberPlayers, setNumberPlayers] = useState(1);
    const navigate = useNavigate();

    const handleSelectTablero = (tablero) => {
        setTableroSize(tablero);
    }

    const handlerJugar = () => {
        navigate("/game", {state : {tableroSize:tableroSize, jugadores:numberPlayers}});
    }
    return(
        <div className="container-menu">
            <h1 className="title">Memotest</h1>
            <p className="text">Menu</p>
            <div className="selection-player-container">
                <p className="text">Seleccione cantidad de jugadores</p>
                <div className="buttons-player-container">
                    <button className={`button-player ${numberPlayers === 1 ? 'selected' : ''}`} onClick={() => setNumberPlayers(1)}>1</button>
                    <button className={`button-player ${numberPlayers === 2 ? 'selected' : ''}`} onClick={() => setNumberPlayers(2)}>2</button>
                </div>

            </div>
            <div className="selection-tablero-container">
                <p className="text">Selecciona el tamaño del tablero</p>
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

            <button className="button-play" onClick={handlerJugar}>Jugar</button>
        </div>
    )
}

export default Menu;