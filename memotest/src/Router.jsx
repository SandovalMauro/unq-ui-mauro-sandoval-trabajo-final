import {Routes, Route} from 'react-router-dom';
import Menu from './components/Menu/Menu';
import GameOver from './components/GameOver/GameOver.jsx';
import Game from './components/Game/Game.jsx';

const RouterApp = () => {
    return(
        <Routes>
            <Route path="/" element={<Menu/>}></Route>
            <Route path="/gameOver" element={<GameOver/>}></Route>
            <Route path="/game" element={<Game/>}></Route>
        </Routes>
    );
}

export default RouterApp;