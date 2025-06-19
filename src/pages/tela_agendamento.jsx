import styles from "../styles/tela_agendamento.module.css";
import point from "../assets/imagens/icon_localizacao.png";
import fundo from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function TelaAgendamento() {
  const navigate = useNavigate();
  const [dataColeta, setDataColeta] = useState("");
  const [horaColeta, setHoraColeta] = useState("");
  const [observacao, setObservacao] = useState("");
  const [erroDataColeta, setErroDataColeta] = useState("");
  const [erroHoraColeta, setErroHoraColeta] = useState("");
  const [erroObservacao, setErroObservacao] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState(null);

  function enviarAgendamento(evento) {
    evento.preventDefault();

    if (!dataColeta.trim() || !horaColeta.trim() || !observacao.trim()) {
      setErroDataColeta(!dataColeta.trim() ? "Preencha a data da coleta!" : "");
      setErroHoraColeta(!horaColeta.trim() ? "Preencha a hora da coleta!" : "");
      setErroObservacao(!observacao.trim() ? "Preencha a observação" : "");
      return;
    }
    setErroDataColeta("");
    setErroHoraColeta("");
    setErroObservacao("");

    console.log("Agendamento realizado com sucesso!", {
      dataColeta,
      horaColeta,
      observacao,
    });

    setTimeout(() => {
      setMensagemSucesso(null);
    }, 2000);
    setDataColeta("");
    setHoraColeta("");
    setObservacao("");
  }
  return (
    <div className={styles.background_agendamento}>
      {mensagemSucesso && <PopUpSucesso mensagem={mensagemSucesso} />}
      <img
        src={fundo}
        alt="imagem_de_fundo"
        className={styles.background_tela_agendamento}
      />
      <div className={styles.top_bar}>
        <button
          className={styles.botao_voltar_agendamento}
          onClick={() => navigate(-1)}
        >
          <img
            src={icon_voltar}
            alt="voltar"
            className={styles.icone_voltar_agendamento}
          />
          <p className={styles.botao_voltar_agendamento_p}>VOLTAR</p>
        </button>
      </div>
      <div className={styles.conteiner}>
        <div className={styles.conteiner_01}>
          <div className={styles.conteiner_1}>
            <h1>Agendar Coleta</h1>
            <p className={styles.tela_agendamento_p}>
              Preencha os campos abaixo para agendar ou retirar sua coleta!
            </p>
          </div>
          <form onSubmit={enviarAgendamento}>
            <div className={styles.data}>
              <div className={styles.leftdiv}>
                <div className={styles.campo}>
                  <p className={styles.tela_agendamento_p}>Data da coleta</p>
                  <input
                    className={`${styles.input_agendamento} ${
                      erroDataColeta ? styles.erro_input : ""
                    }`}
                    value={dataColeta}
                    onChange={(e) => setDataColeta(e.target.value)}
                    type="date"
                  />
                  {erroDataColeta && (
                    <p className={styles.erro}>{erroDataColeta}</p>
                  )}
                </div>
                <div className={styles.campo}>
                  <p className={styles.tela_agendamento_p}>
                    Observação sobre a coleta
                  </p>
                  <textarea
                    className={`${styles.textarea_observacao} ${
                      erroObservacao ? styles.erro_input : ""
                    }`}
                    value={observacao}
                    onChange={(e) => setObservacao(e.target.value)}
                    placeholder="Insira uma observação sobre o agendamento/retirada da sua coleta!"
                    rows="30"
                    type="text"
                  />
                  {erroObservacao && (
                    <p className={styles.erro}>{erroObservacao}</p>
                  )}
                </div>
              </div>
              <div class={styles.rightdiv}>
                <div className={styles.campo}>
                  <p className={styles.tela_agendamento_p}>Horario da coleta</p>
                  <input
                    className={`${styles.input_agendamento} ${
                      erroHoraColeta ? styles.erro_input : ""
                    }`}
                    value={horaColeta}
                    onChange={(e) => setHoraColeta(e.target.value)}
                    type="time"
                  />
                  {erroHoraColeta && (
                    <p className={styles.erro}>{erroHoraColeta}</p>
                  )}
                </div>
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
                  <button type="submit" className={styles.botao_agendamento}>
                    <h2>Enviar</h2>
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TelaAgendamento;
