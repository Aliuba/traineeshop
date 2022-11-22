import logo from './logo.svg';
import './App.css';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import {
    BrowserRouter as Router,

    Route,
    Routes,

} from "react-router-dom";
import {CardInfo} from "./components/Cardinfo/CardInfo";
import {Basket} from "./components/Basket/Basket";

function App() {
    return (
        <Router>
            <Header/>
            <Routes>
                <Route path="/card" element={<Home/>}/>
                <Route path="/basket" element={<Basket/>}/>

                <Route path="/card/:id" element={<CardInfo/>}/>
            </Routes>

        </Router>
    );
}

export default App;
