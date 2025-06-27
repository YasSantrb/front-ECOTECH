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
import TelaSistemaPontos from "./pages/tela_sistema_de_pontos";
import TelaDoacaoPendente from "./pages/tela_doacao_pendente";
import TelaRegistroPontosColeta from "./pages/tela_registro_pontos_coleta";
import TelaHistoricoAgendamentos from "./pages/tela_historico_agendamentos";
import TelaPontosColeta from "./pages/tela_pontos_coleta";
import TelaEsqueciMinhaSenha from "./pages/tela_esqueci_minha_senha";

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
                    <Route path="/meus/pontos/coleta" element={<TelaPontosColeta/>}/>
                    <Route path="/historico/doacoes" element={<TelaHistoricoDoacoes/>}/>
                    <Route path="/historico/agendamentos" element={<TelaHistoricoAgendamentos/>}/>
                    <Route path="/sobre/nos" element={<TelaSobreNos/>}/>
                    <Route path="/sistema/pontos" element={<TelaSistemaPontos/>}/>
                    <Route path="/doacao/pendente" element={<TelaDoacaoPendente/>}/>
                    <Route path="/registro/pontos/coleta" element={<TelaRegistroPontosColeta/>}/>
                    <Route path="/esqueci/minha/senha" element={<TelaEsqueciMinhaSenha/>}/>
                </Routes>
            </div>
        </Router>
    
    )
}

export default App;