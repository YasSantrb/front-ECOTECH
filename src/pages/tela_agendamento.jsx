import styles from "../styles/tela_agendamento.module.css";
import point from "../assets/imagens/icon_localizacao.png";
import fundo from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import { useNavigate } from "react-router-dom";

function TelaAgendamento() {
  const navigate = useNavigate();
  return (
    <div className={styles.background_agendamento}>
      <img src={fundo} alt="imagem_de_fundo" className={styles.background_tela_agendamento} />
      <div className={styles.top_bar}>
        <button className={styles.botao_voltar_agendamento} onClick={() => navigate(-1)}>
          <img src={icon_voltar} alt="voltar" className={styles.icone_voltar_agendamento} />
          <p className={styles.botao_voltar_agendamento_p}>VOLTAR</p>
        </button>
      </div>
      <div className={styles.conteiner}>
        <div className={styles.conteiner_01}>
          <div className={styles.conteiner_1}>
            <h1>Agendar Coleta</h1>
            <p className={styles.tela_agendamento_p}>Preencha os campos abaixo para agendar ou retirar sua coleta!</p>
          </div>
          <div className={styles.data}>
            <div className={styles.leftdiv}>
              <p className={styles.tela_agendamento_p}>Data da coleta</p>
              <input className={styles.input_agendamento} type="date" />
              <p className={styles.tela_agendamento_p}>Observação sobre a coleta</p>
              <textarea
                type="text"
                placeholder="Insira uma observação sobre o agendamento/retirada da sua coleta!"
                rows="30"
                className={styles.textarea_observacao}
              />
            </div>
            <div class={styles.rightdiv}>
              <p className={styles.tela_agendamento_p}>Horario da coleta</p>
              <input className={styles.input_agendamento} type="time" />
              <p>
                Quer levar sua doação a um ponto de coleta? Clique no botão
                abaixo.
              </p>
              <div className={styles.buttons_agendamento}>
                <button className={styles.botao_agendamento}>
                  {" "}
                  <img src={point} height="80px" />
                  Pontos de coleta
                </button>
                <button className={styles.botao_agendamento}>
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
