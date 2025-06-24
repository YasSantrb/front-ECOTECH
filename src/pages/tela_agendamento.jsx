import styles from "../styles/tela_agendamento.module.css";
import fundo from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import PopUpSucesso from "../components/popUpSucesso.jsx";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function TelaAgendamento() {
  const navigate = useNavigate();
  const location = useLocation();
  const { produto, doador, endereco } = location.state || {};

  const [dataColeta, setDataColeta] = useState("");
  const [horaColeta, setHoraColeta] = useState("");
  const [observacao, setObservacao] = useState("");
  const [erroDataColeta, setErroDataColeta] = useState("");
  const [erroHoraColeta, setErroHoraColeta] = useState("");
  const [erroObservacao, setErroObservacao] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState(null);
  const [isEditarModalOpen, setIsEditarModalOpen] = useState(false);

  const [dadosAgendamentoParaRevisao, setDadosAgendamentoParaRevisao] =
    useState({
      data: "",
      hora: "",
      observacao: "",
      produto: produto || "Não informado",
      doador: doador || "Não informado",
      endereco: endereco || "Não informado",
    });

  useEffect(() => {
    setDadosAgendamentoParaRevisao((prev) => ({
      ...prev,
      data: dataColeta,
      hora: horaColeta,
      observacao: observacao,
    }));
  }, [dataColeta, horaColeta, observacao]);

  function validarCampos() {
    let isValid = true;

    setErroDataColeta("");
    setErroHoraColeta("");
    setErroObservacao("");

    if (!dataColeta.trim()) {
      setErroDataColeta("Por favor, selecione a data da coleta.");
      isValid = false;
    } else {
      const hoje = new Date();
      hoje.setHours(0, 0, 0, 0);
      const dataSelecionada = new Date(dataColeta);

      if (dataSelecionada < hoje) {
        setErroDataColeta("A data da coleta não pode ser no passado.");
        isValid = false;
      }
    }

    if (!horaColeta.trim()) {
      setErroHoraColeta("Por favor, selecione a hora da coleta.");
      isValid = false;
    } else {
      const [horaStr, minutoStr] = horaColeta.split(":");
      const horaNum = parseInt(horaStr);
      const minutoNum = parseInt(minutoStr);

      if (
        isNaN(horaNum) ||
        isNaN(minutoNum) ||
        horaNum < 8 ||
        horaNum > 18 ||
        (horaNum === 18 && minutoNum > 0)
      ) {
        setErroHoraColeta("O horário deve ser entre 08:00 e 18:00.");
        isValid = false;
      }
    }

    if (!observacao.trim()) {
      setErroObservacao("Por favor, preencha a observação.");
      isValid = false;
    }

    return isValid;
  }

  function abrirModalRevisao() {
    if (validarCampos()) {
      setIsEditarModalOpen(true);
    }
  }

  function fecharModalRevisao() {
    setIsEditarModalOpen(false);
  }

  function confirmarAgendamento(evento) {
    evento.preventDefault();

    console.log("Agendamento realizado com sucesso!", {
      data: dataColeta,
      hora: horaColeta,
      observacao: observacao,
    });
    setMensagemSucesso("Agendamento realizado com sucesso!");

    setDataColeta("");
    setHoraColeta("");
    setObservacao("");
    fecharModalRevisao();

    setDadosAgendamentoParaRevisao({
      data: "",
      hora: "",
      observacao: "",
      produto: produto || "Não informado",
      doador: doador || "Não informado",
      endereco: endereco || "Não informado",
    });

    setTimeout(() => {
      setMensagemSucesso(null);
    }, 2000);
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
        <h2 className={styles.titulo_principal}>Agendar Coleta</h2>
        <div className={styles.info_agendamento}>
          <p>
            <strong>Produto:</strong> {produto || "Não informado"}
          </p>
          <p>
            <strong>Doador:</strong> {doador || "Não informado"}
          </p>
          <p>
            <strong>Endereço:</strong> {endereco || "Não informado"}
          </p>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.formulario_grid}>
            <div className={styles.campo}>
              <label htmlFor="dataColeta" className={styles.label_campo}>
                Data da Coleta
              </label>
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
              <label htmlFor="horaColeta" className={styles.label_campo}>
                Horário da Coleta
              </label>
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
            <div className={styles.campo}>
              <label htmlFor="observacao" className={styles.label_campo}>
                Observação sobre a Coleta
              </label>
              <textarea
                className={`${styles.input_agendamento} ${
                  erroObservacao ? styles.erro_input : ""
                }`}
                value={observacao}
                onChange={(e) => setObservacao(e.target.value)}
                placeholder="Insira uma observação sobre o agendamento/retirada da sua coleta!"
                rows="5"
                type="text"
              />
              {erroObservacao && (
                <p className={styles.erro}>{erroObservacao}</p>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={abrirModalRevisao}
            className={styles.botao_principal_agendar}
          >
            <p>Enviar</p>
          </button>
        </form>
      </div>
      {isEditarModalOpen && (
        <div className={styles.popUpOverlay}>
          <div className={styles.popUpCard}>
            <div className={styles.popUpHeader}>
              <h3 className={styles.popUpTitulo}>Revisar Agendamento</h3>
              <button
                className={styles.popUpBotaoFechar}
                onClick={fecharModalRevisao}
              >
                &times;
              </button>
            </div>
            <div className={styles.popUpContent}>
              <div className={styles.info_modal}>
                <p>
                  <strong>Produto:</strong>{" "}
                  {dadosAgendamentoParaRevisao.produto}
                </p>
                <p>
                  <strong>Doador:</strong> {dadosAgendamentoParaRevisao.doador}
                </p>
                <p>
                  <strong>Endereço:</strong>{" "}
                  {dadosAgendamentoParaRevisao.endereco}
                </p>
                <p>
                  <strong>Data da Coleta:</strong>{" "}
                  {dadosAgendamentoParaRevisao.data}
                </p>
                <p>
                  <strong>Hora da Coleta:</strong>{" "}
                  {dadosAgendamentoParaRevisao.hora}
                </p>
                <p>
                  <strong>Observação:</strong>{" "}
                  {dadosAgendamentoParaRevisao.observacao}
                </p>
              </div>
              <div className={styles.popUp_botoes}>
                <button
                  className={styles.botao_cancelar_agendamento}
                  onClick={fecharModalRevisao}
                >
                  Cancelar
                </button>
                <button
                  className={styles.botao_confirmar_agendamento}
                  onClick={confirmarAgendamento}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TelaAgendamento;
