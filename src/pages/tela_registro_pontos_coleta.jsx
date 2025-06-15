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
  const [observacao, setObservacao] = useState("");
  const [numero, setNumero] = useState("");
  const [erroRua, setErroRua] = useState("");
  const [erroBairro, setErroBairro] = useState("");
  const [erroCep, setErroCep] = useState("");
  const [erroObservacao, setErroObservacao] = useState("");
  const [erroNumero, setErroNumero] = useState("");
  const [mensagemSucesso, setMensagemSucesso] = useState(null);

  function registrarPonto(evento) {
    evento.preventDefault();
    if (
      !rua.trim() ||
      !bairro.trim() ||
      !cep.trim() ||
      !observacao.trim() ||
      !numero.trim()
    ) {
      setErroRua(!rua.trim() ? "Preencha o nome da rua!" : "");
      setErroBairro(!bairro.trim() ? "Preencha o nome do bairro!" : "");
      setErroCep(!cep.trim() ? "Preencha com o CEP!" : "");
      setErroObservacao(!observacao.trim() ? "Preencha a observação!" : "");
      setErroNumero(!numero.trim() ? "Preencha com o número do local!" : "");
      return;
    }
    setErroRua("");
    setErroBairro("");
    setErroCep("");
    setErroObservacao("");
    setErroNumero("");

    console.log("Ponto de coleta registrado com sucesso!", {
      rua,
      bairro,
      cep,
      observacao,
      numero,
    });
    setMensagemSucesso("Ponto de coleta registrado com sucesso!");
    setTimeout(() => {
      setMensagemSucesso(null);
    }, 2000);
    setRua("");
    setBairro("");
    setCep("");
    setObservacao("");
    setNumero("");
  }
  return (
    <div className={styles.tela_registro_pontos_coleta}>
      {mensagemSucesso && <PopUpSucesso mensagem={mensagemSucesso} />}
      <img
        src={fundo_login_cadastro}
        alt="imagem_de_fundo"
        className={styles.background_tela}
      />
      <div className={styles.top_bar_doacao}>
        <Link to="/usuario/empresa" className={styles.voltar}>
          <img src={icon_voltar} alt="voltar" className={styles.icone_voltar} />
          VOLTAR
        </Link>
      </div>
      <div className={styles.conteiner}>
        <div className={styles.Coletas}>
          <h2>Meus Pontos de Coleta</h2>
        </div>
        <div className={styles.registrar}>
          <h2>Registrar Ponto de coleta</h2>
          <div className={styles.divmae}>
            <form onSubmit={registrarPonto}>
              <div className={styles.divCh}>
                <div className={styles.campo}>
                  <p>Rua</p>
                  <input
                    className={`${styles.input} ${
                      erroRua ? styles.erro_input : ""
                    }`}
                    value={rua}
                    type="text"
                    onChange={(e) => setRua(e.target.value)}
                    placeholder="Insira a Rua"
                  ></input>
                  {erroRua && <p className={styles.erro}>{erroRua}</p>}
                </div>
                <div className={styles.campo}>
                  <p>Bairro</p>
                  <input
                    className={`${styles.input} ${
                      erroBairro ? styles.erro_input : ""
                    }`}
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                    type="text"
                    placeholder="Insira o Bairro"
                  ></input>
                  {erroBairro && <p className={styles.erro}>{erroBairro}</p>}
                </div>
                <div className={styles.campo}>
                  <p>CEP</p>
                  <input
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    className={`${styles.input} ${
                      erroCep ? styles.erro_input : ""
                    }`}
                    type="text"
                    placeholder="Insira o CEP "
                  ></input>
                  {erroCep && <p className={styles.erro}>{erroCep}</p>}
                </div>
              </div>
              <div className={styles.divCh}>
                <div className={styles.campo}>
                  <p>Número do local</p>
                  <input
                    className={`${styles.input} ${
                      erroNumero ? styles.erro_input : ""
                    }`}
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                    type="text"
                    placeholder="Insira o número do local de doação"
                  ></input>
                  {erroNumero && <p className={styles.erro}>{erroNumero}</p>}
                </div>
                <div className={styles.campo}>
                  <p>Observação</p>
                  <textarea
                    className={`${styles.input} ${
                      erroObservacao ? styles.erro_input : ""
                    }`}
                    value={observacao}
                    onChange={(e) => setObservacao(e.target.value)}
                    placeholder="Informe ao doador mais detalhes do local"
                  ></textarea>
                  {erroObservacao && (
                    <p className={styles.erro}>{erroObservacao}</p>
                  )}
                </div>
                <button type="submit">Registrar Ponto</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TelaRegistroPontosColeta;
