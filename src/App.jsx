import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TelaInicial from "./pages/tela_inicial";
import TelaLogin from "./pages/tela_login";
import TelaCadastro from "./pages/tela_cadastro";
import TelaFeed from "./pages/tela_feed";

function App(){
    return(
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<TelaInicial/>}/>
                    <Route path="/login" element={<TelaLogin/>}/>
                    <Route path="/cadastro" element={<TelaCadastro/>}/>
                    <Route path="/feed" element={<TelaFeed/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App;