import images from '../../assets/images.js';
import './Game.css';
import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import pares from '../../helper/pares.js';
import Player from "../Player/Player.jsx";
import Tablero from "../Tablero/Tablero.jsx";

const Game = () =>{
    const navigate = useNavigate();
    const location = useLocation();
    const {tableroSize, jugadores } = location.state || {};
    const [pairsFound, setPairsFound] = useState(0);
    const [pairImages, setPairImages] = useState([]);
    const [flipped, setFlipped] = useState([]);
    const [playerTurn, setPlayerTurn] = useState(1);
    const [score, setScore] = useState({ player1: 0, player2: 0 });

    useEffect( () => {
        const shuffledImages = images.sort(() => Math.random() - 0.5).slice(0, pares[tableroSize]);
        setPairImages([...shuffledImages, ...shuffledImages]
            .sort(() => Math.random() - 0.5)
            .map((image, index) => ({...image, id: index, flipped: false, matched: false})))
        setPairsFound(0);
        setFlipped([]);
        setPlayerTurn(1);
        setScore({ player1: 0, player2: 0 });
    }, [tableroSize, jugadores])


    useEffect(() => {
        if (pairsFound && pairsFound === pairImages.length / 2) {
            navigate("/gameOver", {state: {score: score, jugadores : jugadores}});
        }
    }, [pairsFound]);

    const handlerCard = (index) => {
        if (flipped.length === 2 || pairImages[index].flipped || pairImages[index].matched) return;

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
                setPairsFound(pairsFound + 1);

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
                handlerTurn();
            }, 1000);
        }
    }

    const handlerTurn = () => {
        if(jugadores === 1) return;
        setPlayerTurn(playerTurn === 1 ? 2 : 1);
    }

    return(
        <div className="container">
            <Player jugadores={jugadores} playerTurn={playerTurn} score={score}/>
            <Tablero pairImages={pairImages} handlerCard={handlerCard} tableroSize={tableroSize}/>
        </div>
    )
}

export default Game;