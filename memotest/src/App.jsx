import './App.css'
import {BrowserRouter as Router} from "react-router-dom";
import RouterApp from "./Router.jsx";


function App() {

    return (
        <div className="App">
            <Router>
                <RouterApp/>
            </Router>
        </div>
    )
}

export default App;
