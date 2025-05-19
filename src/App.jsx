import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TelaInicial from "./pages/tela_inicial";
import TelaLogin from "./pages/tela_login";
import TelaCadastro from "./pages/tela_cadastro";
import TelaFeed from "./pages/tela_feed";
import TelaUsuarioDoador from "./pages/tela_usuario_doador";
import TelaUsuarioEmpresa from "./pages/tela_usuario_empresa";

function App(){
    return(
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<TelaFeed/>}/>
                    <Route path="/login" element={<TelaLogin/>}/>
                    <Route path="/cadastro" element={<TelaCadastro/>}/>
                    <Route path="/inicial" element={<TelaInicial/>}/>
                    <Route path="/usuario/doador" element={<TelaUsuarioDoador/>}/>
                    <Route path="/usuario/empresa" element={<TelaUsuarioEmpresa/>}/>
                </Routes>
            </div>
        </Router>
    )
}

export default App;