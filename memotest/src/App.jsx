import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, useNavigate} from "react-router-dom";
import RouterApp from "./Router.jsx";


function App() {

    return (
        <div>
            <Router>
                <RouterApp/>
            </Router>
        </div>
    )
}

export default App;
