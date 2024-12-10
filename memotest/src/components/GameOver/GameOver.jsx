import {useLocation, useNavigate} from "react-router-dom";


const GameOver = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const {score, jugadores} = location.state || {};

    const handlerMenu = () => {
        navigate("/");
    }

    return (
        <div>
            <div>
                {jugadores === 1 ?
                    <p>Felicidades terminaste el juego con {score.player1} puntos!!</p>
                    :
                    <>
                        {score.player1 > score.player2 ? (
                            <p>¡Jugador 1 gana con {score.player1} puntos!</p>
                        ) : score.player2 > score.player1 ? (
                            <p>¡Jugador 2 gana con {score.player2} puntos!</p>
                        ) : (
                            <p>¡Es un empate con {score.player1} puntos cada uno!</p>
                        )}
                    </>
                }
            </div>
            <button onClick={handlerMenu}>Volver a jugar</button>

        </div>
    );
}

export default GameOver