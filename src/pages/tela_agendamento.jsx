import "../styles/tela_agendamento.css";
import point from "../assets/imagens/icon_localizacao.png";
import fundo from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import { useNavigate } from "react-router-dom";

function TelaAgendamento() {
  const navigate = useNavigate();
  return (
    <div className="background_agendamento">
      <img src={fundo} alt="imagem_de_fundo" className="background_tela_agendamento" />
      <div className="top-bar">
        <button className="botao_voltar_agendamento" onClick={() => navigate(-1)}>
          <img src={icon_voltar} alt="voltar" className="icone_voltar_agendamento" />
          <p className="botao_voltar_agendamento_p">VOLTAR</p>
        </button>
      </div>
      <div id="conteiner">
        <div id="conteiner_01">
          <div id="conteiner_1">
            <h1>Agendar Coleta</h1>
            <p className="tela_agendamento_p">Preencha os campos abaixo para agendar ou retirar sua coleta!</p>
          </div>
          <div id="data">
            <div id="leftdiv">
              <p className="tela_agendamento_p">Data da coleta</p>
              <input className="input_agendamento" type="date" />
              <p className="tela_agendamento_p">Observação sobre a coleta</p>
              <textarea
                type="text"
                placeholder="Insira uma observação sobre o agendamento/retirada da sua coleta!"
                rows="30"
                className="textarea_observacao"
              />
            </div>
            <div id="rightdiv">
              <p className="tela_agendamento_p">Horario da coleta</p>
              <input className="input_agendamento" type="time" />
              <p>
                Quer levar sua doação a um ponto de coleta? Clique no botão
                abaixo.
              </p>
              <div id="buttons_agendamento">
                <button className="botao_agendamento">
                  {" "}
                  <img src={point} height="80px" />
                  Pontos de coleta
                </button>
                <button className="botao_agendamento">
                  <h2>Enviar</h2>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaAgendamento;
