import {useLocation, useNavigate} from "react-router-dom";4
import './GameOver.css';
import confetti from 'canvas-confetti';
import {useEffect} from "react";


const GameOver = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const {score, jugadores} = location.state || {};

    const handlerMenu = () => {
        navigate("/");
    }

    const ConfettiEffect = () => {
        useEffect(() => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
            });
        }, []);

        return null; // No renderiza nada, solo ejecuta el efecto
    };

    return (
        <div className="container-game-over">
            <div className="message-player">
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
                <p>¡¡Gracias por jugar!!</p>
            </div>
            <button className="button-play-again" onClick={handlerMenu}>Volver a jugar</button>
            <ConfettiEffect />
        </div>
    );
}

export default GameOver