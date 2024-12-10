import images from '../../assets/images.js';
import dorso from '../../assets/dorso.jpg';
import './Tablero.css';
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import pares from '../../helper/pares.js';

const Tablero = () =>{
    const location = useLocation();
    const {tableroSize, jugadores } = location.state || {};
    const [pairImages, setPairImages] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [playerTurn, setPlayerTurn] = useState(1);
    const [score, setScore] = useState({ player1: 0, player2: 0 });

    useEffect( () => {
        const shuffledImages = images.sort(() => Math.random() - 0.5).slice(0, pares[tableroSize]);
        setPairImages([...shuffledImages, ...shuffledImages]
            .sort(() => Math.random() - 0.5)
            .map((image, index) => ({...image, id: index, flipped: false, matched: false})))
    }, [])

    const handlerCard = (index) => {
        if (flipped.length === 2 || pairImages[index].flipped) return;

        const newPairImages = [...pairImages];
        newPairImages[index].flipped = true;
        setPairImages(newPairImages);


        const newFlipped = [...flipped, index];
        setFlipped(newFlipped);

        if(newFlipped.length === 2){
            const [firstFlipped, secondFlipped] = newFlipped;

            if(pairImages[firstFlipped].src === pairImages[secondFlipped].src){
                const updatePairImages = [...pairImages];
                updatePairImages[firstFlipped].matched = true;
                updatePairImages[secondFlipped].matched = true;
                setPairImages(updatePairImages);

                if (playerTurn === 1) {
                    setScore(prevScore => ({ ...prevScore, player1: prevScore.player1 + 1 }));
                } else {
                    setScore(prevScore => ({ ...prevScore, player2: prevScore.player2 + 1 }));
                }
            }

            setTimeout(() => {
                const resetTablero = [...pairImages];
                resetTablero[firstFlipped].flipped = false;
                resetTablero[secondFlipped].flipped = false;
                setPairImages(resetTablero);
                setFlipped([]);
                setPlayerTurn(playerTurn === 1 ? 2 : 1);
            }, 1000);
        }
    }

    const getColumns = () => {
        return parseInt(tableroSize.charAt(0));
    };

    const columns = getColumns();

    return(
        <div className="container">
            <div className="player-container">
                <div className={`player ${playerTurn === 1 ? 'player-turn' : ''}`}> Jugador 1: {score.player1} pts</div>
                <div className={`player ${playerTurn === 2 ? 'player-turn' : ''}`}> Jugador 2: {score.player2} pts</div>
            </div>
            <div className={`tablero-container-column-${columns}`}>
                {pairImages.map((image, index) => (
                    <div
                        key ={image.id}
                        className={`card ${image.flipped ? 'flipped' : ''} ${image.matched ? 'matched' : ''}`}
                        onClick={() => handlerCard(index)}>
                        {image.flipped || image.matched ? (
                            <img className="image" src={image.src} alt="imagen" />
                        ) : (
                            <img className="dorso" src={dorso} alt="dorso" />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Tablero;