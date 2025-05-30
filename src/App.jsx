import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TelaInicial from "./pages/tela_inicial";
import TelaLogin from "./pages/tela_login";
import TelaCadastro from "./pages/tela_cadastro";
import TelaFeed from "./pages/tela_feed";
import TelaUsuarioDoador from "./pages/tela_usuario_doador";
import TelaUsuarioEmpresa from "./pages/tela_usuario_empresa";
import TelaAgendamento from "./pages/tela_agendamento";
import TelaChat from "./pages/tela_chat";
import TelaInfoDoacao from "./pages/tela_info_doacao";
import TelaCriarDoacao from "./pages/tela_criar_doacao";
import TelaLocalizacaoPontosColeta from "./pages/tela_localizacao_pontos_coleta";
import TelaSobreNos from "./pages/tela_sobre_nos";
import TelaHistoricoDoacoes from "./pages/tela_historico_doacoes";

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
                    <Route path="/agendamento" element={<TelaAgendamento/>}/>
                    <Route path="/chat" element={<TelaChat/>}/>
                    <Route path="/info/doacao/:id" element={<TelaInfoDoacao/>}/>
                    <Route path="/criar/doacao" element={<TelaCriarDoacao/>}/>
                    <Route path="/localizacao/pontos/coleta" element={<TelaLocalizacaoPontosColeta/>}/>
                    <Route path="/historico/doacoes" element={<TelaHistoricoDoacoes/>}/>
                    <Route path="/sobre/nos" element={<TelaSobreNos/>}/>
                </Routes>
            </div>
        </Router>
    
    )
}

export default App;