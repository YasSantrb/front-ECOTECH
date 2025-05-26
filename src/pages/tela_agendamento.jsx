import "../styles/tela_agendamento.css";
import point from "../assets/imagens/icon_localizacao.png";
import fundo from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";


function TelaAgendamento() {
  return (
    <div className="background">
      <img src={fundo} alt="imagem_de_fundo" className="background" />
      <div className="top-bar">
                <a href="/usuario/empresa" className="voltar">
                  <img src={icon_voltar} alt="voltar" className="icone-voltar" />
                  VOLTAR
                </a>
              </div>
      <div id="conteiner">
        <div id="conteiner_01">
          <div id="conteiner_1">
            <h1>Agendar Coleta</h1>
            <p>Preencha os campos abaixo para agendar ou retirar sua coleta!</p>
          </div>
          <div id="data">
            <div id="leftdiv">
              <p>Data da coleta</p>
              <input type="date" />
              <p>Observação sobre a coleta</p>
              <textarea
                type="text"
                placeholder="Insira uma observação sobre o agendamento/retirada da sua coleta!"
                rows="30"
              />
            </div>
            <div id="rightdiv">
              <p>Horario da coleta</p>
              <input type="time" />
              <p>
                Quer levar sua doação a um ponto de coleta? Clique no botão
                abaixo.
              </p>
              <div id="buttons">
                <button>
                  {" "}
                  <img src={point} height="80px" />
                  Pontos de coleta
                </button>
                <button>
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
