import {Routes, Route} from 'react-router-dom';
import Menu from './components/Menu/Menu';
import GameOver from './components/GameOver/GameOver.jsx';
import Tablero from './components/Tablero/Tablero';

const RouterApp = () => {
    return(
        <Routes>
            <Route path="/" element={<Menu/>}></Route>
            <Route path="/gameOver" element={<GameOver/>}></Route>
            <Route path="/tablero" element={<Tablero/>}></Route>
        </Routes>
    );
}

export default RouterApp;