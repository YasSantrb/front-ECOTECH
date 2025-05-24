import "../styles/tela_chat.css";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import Logo from "../assets/imagens/Logo.png";
import { Link } from "react-router-dom";

function TelaChat() {
  return (
    <div className="tela_chat">
      <main>
        <div className="container_chat">
          <div className="chat_contatos">
            <nav className="nav_chat">
              <Link className="link_chat_voltar" to="/usuario/empresa">
                <img className="icon_voltar_chat" src={icon_voltar} alt="" />
                <p className="nav_chat_p">VOLTAR</p>
              </Link>
            </nav>
            <div className="info_contatos">
              <div className="logo_chat_div">
                <img className="logo_chat" src={Logo} alt="" />
              </div>
              <div className="filtros_chat">
                <div className="pesquisar_contato">
                  <i className="icone_pesquisar_chat fa-solid fa-magnifying-glass"></i>
                  <input
                    className="filtro_input_chat"
                    type="text"
                    placeholder="Buscar por contato..."
                  />
                </div>
                <div className="botoes_filtros_chat">
                  <button className="botao_chat botao_todas_chat">Todas</button>
                  <button className="botao_chat botao_nao_lidas_chat">
                    Não lidas
                  </button>
                </div>
              </div>

              <div className="contatos_chat">
                <div className="contato_1">
                  <div className="contatos_info">
                    <h3 className="nome_contato">Yasmim Santana</h3>
                    <p className="mensagem_contato">-Somente amanhã</p>
                  </div>
                </div>

                <div className="contato_1">
                  <div className="contatos_info">
                    <h3 className="nome_contato">Yasmim Santana</h3>
                    <p className="mensagem_contato">-Somente amanhã</p>
                  </div>
                </div>
                <div className="contato_1">
                  <div className="contatos_info">
                    <h3 className="nome_contato">Yasmim Santana</h3>
                    <p className="mensagem_contato">-Somente amanhã</p>
                  </div>
                </div>

                <div className="contato_1">
                  <div className="contatos_info">
                    <h3 className="nome_contato">Yasmim Santana</h3>
                    <p className="mensagem_contato">-Somente amanhã</p>
                  </div>
                </div>

                <div className="contato_1">
                  <div className="contatos_info">
                    <h3 className="nome_contato">Yasmim Santana</h3>
                    <p className="mensagem_contato">-Somente amanhã</p>
                  </div>
                </div>

                <div className="contato_1">
                  <div className="contatos_info">
                    <h3 className="nome_contato">Yasmim Santana Ribeiro</h3>
                    <p className="mensagem_contato">-Somente amanhã</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="divisao_chat"></div>

          <div className="chat_mensagens">
            <img
              className="fundo_chat_mensagens"
              src={fundo_login_cadastro}
              alt=""
            />
            <div className="nav_chat_mensagens">
              <div className="informacoes_contato">
                <span className="foto_contato material-symbols-outlined">
                  face_4
                </span>
                <div className="texto_contato">
                  <p className="nome_contato">Maria Silva</p>
                  <span className="status_contato">Online</span>
                </div>
              </div>
              <div className="icones_contato">
                <i className="fas fa-search"></i>
                <i className="fas fa-phone"></i>
                <i className="fas fa-ellipsis-v"></i>
              </div>
            </div>

            <div className="mensagens_chat">
              <div className="mensagem recebida">
                <p>Olá! Tudo bem?</p>{" "}
                <span className="hora_mensagem">09:05</span>
              </div>
              <div className="mensagem enviada">
                <p>Oii! Tudo sim, e você?</p>{" "}
                <span className="hora_mensagem">09:06</span>
              </div>
              <div className="mensagem recebida">
                {" "}
                <p>Já conseguiu resolver o problema da coleta?</p>
                <span className="hora_mensagem">10:37</span>
              </div>
              <div className="mensagem enviada">
                {" "}
                <p>Consegui sim! Muito obrigado</p>
                <span className="hora_mensagem">10:38</span>
              </div>
              <div className="mensagem recebida">
                {" "}
                <p>Já conseguiu resolver o problema da coleta?</p>
                <span className="hora_mensagem">10:37</span>
              </div>
              <div className="mensagem enviada">
                {" "}
                <p>Consegui sim! Muito obrigado</p>
                <span className="hora_mensagem">10:38</span>
              </div>
              <div className="mensagem recebida">
                {" "}
                <p>Já conseguiu resolver o problema da coleta?</p>
                <span className="hora_mensagem">10:37</span>
              </div>
              <div className="mensagem enviada">
                {" "}
                <p>Consegui sim! Muito obrigado</p>
                <span className="hora_mensagem">10:38</span>
              </div>
              <div className="mensagem recebida">
                {" "}
                <p>Já conseguiu resolver o problema da coleta?</p>
                <span className="hora_mensagem">10:37</span>
              </div>
              <div className="mensagem enviada">
                {" "}
                <p>Consegui sim! Muito obrigado</p>
                <span className="hora_mensagem">10:38</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TelaChat;
