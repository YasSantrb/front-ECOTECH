import styles from "../styles/tela_registro_pontos_coleta.module.css";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import PopUpSucesso from "../components/popUpSucesso";
import { useState } from "react";
import { Link } from "react-router-dom";

function TelaRegistroPontosColeta() {
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const [telefone, setTelefone] = useState("");
  const [horario, setHorario] = useState("");
  const [numero, setNumero] = useState("");
  const [erroRua, setErroRua] = useState("");
  const [erroBairro, setErroBairro] = useState("");
  const [erroCep, setErroCep] = useState("");
  const [erroTelefone, setErroTelefone] = useState("");
  const [erroHorario, setErroHorario] = useState("");
  const [erroNumero, setErroNumero] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);


  function abrirModalRevisao() {
  const regexCep = /^[0-9]{5}-?[0-9]{3}$/;

  let erro = false;

  if (!rua.trim()) {
    setErroRua("Preencha o nome da rua!");
    erro = true;
  } else setErroRua("");

  if (!bairro.trim()) {
    setErroBairro("Preencha o nome do bairro!");
    erro = true;
  } else setErroBairro("");

  if (!cep.trim()) {
    setErroCep("Preencha com o CEP!");
    erro = true;
  } else if (!regexCep.test(cep)) {
    setErroCep("CEP inválido! Use o formato 00000-000.");
    erro = true;
  } else setErroCep("");

  if (!numero.trim()) {
    setErroNumero("Preencha com o número do local!");
    erro = true;
  } else setErroNumero("");

  if (!telefone.trim()) {
    setErroTelefone("Preencha com o número de telefone!");
    erro = true;
  } else setErroTelefone("");

  if (!horario.trim()) {
    setErroHorario("Preencha com o horário de funcionamento!");
    erro = true;
  } else setErroHorario("");

  if (!erro) setMostrarModal(true);
    

    
  }

  function confirmarRegistro() {
  setMensagemSucesso("Ponto de coleta registrado com sucesso!");
  setTimeout(() => {
    setMensagemSucesso(null);
  }, 2000);


  setRua("");
  setBairro("");
  setCep("");
  setTelefone("");
  setNumero("");
  setHorario("");
  setMostrarModal(false);
}

  return (
    <div className={styles.tela_registro_pontos_coleta}>
      {mensagemSucesso && <PopUpSucesso mensagem={mensagemSucesso} />}
      <img
        src={fundo_login_cadastro}
        alt="fundo"
        className={styles.background_tela}
      />

      <div className={styles.top_bar_doacao}>
        <Link to="/" className={styles.voltar}>
          <img src={icon_voltar} alt="voltar" className={styles.icone_voltar} />
          <p className={styles.nav_p}>VOLTAR</p>
        </Link>
      </div>

      <div className={styles.form_registro}>
        <h2>Registrar ponto de coleta</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className={styles.form_campos}>
            <div className={styles.coluna}>
              <div className={styles.campo}>
                <label className={styles.label_formulario}>Rua</label>
                <input
                  className={`${styles.input} ${
                    erroRua ? styles.erro_input : ""
                  }`}
                  value={rua}
                  onChange={(e) => setRua(e.target.value)}
                  placeholder="Ex: Rua das Flores"
                />
                {erroRua && <p className={styles.erro}>{erroRua}</p>}
              </div>

              <div className={styles.campo}>
                <label className={styles.label_formulario}>Bairro</label>
                <input
                  className={`${styles.input} ${
                    erroBairro ? styles.erro_input : ""
                  }`}
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  placeholder="Ex: Centro"
                />
                {erroBairro && <p className={styles.erro}>{erroBairro}</p>}
              </div>

              <div className={styles.campo}>
                <label className={styles.label_formulario}>CEP</label>
                <input
                  className={`${styles.input} ${
                    erroCep ? styles.erro_input : ""
                  }`}
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  placeholder="00000-000"
                />
                {erroCep && <p className={styles.erro}>{erroCep}</p>}
              </div>
            </div>

            <div className={styles.coluna}>
              <div className={styles.campo}>
                <label className={styles.label_formulario}>Número</label>
                <input
                  className={`${styles.input} ${
                    erroNumero ? styles.erro_input : ""
                  }`}
                  value={numero}
                  onChange={(e) => setNumero(e.target.value)}
                  placeholder="Ex: 123"
                />
                {erroNumero && <p className={styles.erro}>{erroNumero}</p>}
              </div>

              <div className={styles.campo}>
                <label className={styles.label_formulario}>Telefone</label>
                <input
                  className={`${styles.input} ${
                    erroTelefone ? styles.erro_input : ""
                  }`}
                  value={telefone}
                  onChange={(e) => setTelefone(e.target.value)}
                  placeholder="Ex: Telefone para contato"
                />
                {erroTelefone && <p className={styles.erro}>{erroTelefone}</p>}
              </div>

              <div className={styles.campo}>
                <label className={styles.label_formulario}>
                  Horário de funcionamento
                </label>
                <input
                  className={`${styles.input} ${
                    erroHorario ? styles.erro_input : ""
                  }`}
                  value={horario}
                  onChange={(e) => setHorario(e.target.value)}
                  placeholder="Ex: Segunda a sexta: 8:00 às 18:00"
                />
                {erroHorario && <p className={styles.erro}>{erroHorario}</p>}
              </div>
            </div>
          </div>

          <button className={styles.botao_enviar} type="button" onClick={abrirModalRevisao}>
            Registrar Ponto
          </button>
        </form>
      </div>

      {mostrarModal && (
        <div className={styles.popUpOverlay}>
          <div className={styles.popUpCard}>
            <div className={styles.popUpHeader}>
              <h3 className={styles.popUpTitulo}>Revisar Ponto de Coleta</h3>
              <button
                className={styles.popUpBotaoFechar}
                onClick={() => setMostrarModal(false)}
              >
                &times;
              </button>
            </div>
            <div className={styles.popUpContent}>
              <div className={styles.info_modal}>
                <p>
                  <strong>Rua:</strong> {rua}
                </p>
                <p>
                  <strong>Número:</strong> {numero}
                </p>
                <p>
                  <strong>Bairro:</strong> {bairro}
                </p>
                <p>
                  <strong>CEP:</strong> {cep}
                </p>
                <p>
                  <strong>Telefone:</strong> {telefone}
                </p>
                <p>
                  <strong>Horário:</strong> {horario}
                </p>
              </div>
              <div className={styles.popUp_botoes}>
                <button
                  className={styles.botao_cancelar_agendamento}
                  onClick={() => setMostrarModal(false)}
                >
                  Cancelar
                </button>
                <button
                  className={styles.botao_confirmar_agendamento}
                  onClick={confirmarRegistro}
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

export default TelaRegistroPontosColeta;
