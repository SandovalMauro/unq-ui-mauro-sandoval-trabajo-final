import './Player.css'

const Player = ({jugadores, playerTurn, score}) =>{

    return (
        <div className="player-container">
            {jugadores === 1 ?
                <div>
                    <div className={`player ${playerTurn === 1 ? 'player-turn' : ''}`}> Jugador 1: {score.player1} pts</div>
                </div>
                :
                <>
                    <div className={`player ${playerTurn === 1 ? 'player-turn' : ''}`}> Jugador 1: {score.player1} pts</div>
                    <div className={`player ${playerTurn === 2 ? 'player-turn' : ''}`}> Jugador 2: {score.player2} pts</div>
                </>
            }
        </div>
    );
}

export default Player;