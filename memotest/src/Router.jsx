import {Routes, Route} from 'react-router-dom';
import Menu from './components/Menu/Menu';
import Jugadores from './components/Jugadores/Jugadores';
import Tablero from './components/Tablero/Tablero';

const RouterApp = () => {
    return(
        <Routes>
            <Route path="/" element={<Menu/>}></Route>
            <Route path="/jugadores" element={<Jugadores/>}></Route>
            <Route path="/Tablero" element={<Tablero/>}></Route>
        </Routes>
    );
}

export default RouterApp;