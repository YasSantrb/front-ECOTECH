import styles from "../styles/tela_criar_doacao.module.css";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function TelaCriarDoacao() {
  const navigate = useNavigate();
  const inputImagemRef = useRef(null);

  const [nome, setNome] = useState("");
  const [especificacao, setEspecificacao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [observacao, setObservacao] = useState("");
  const [condicao, setCondicao] = useState("");
  const [imagens, setImagens] = useState([]);
  const [erroNome, setErroNome] = useState("");
  const [erroEspecificacao, setErroEspecificacao] = useState("");
  const [erroDescricao, setErroDescricao] = useState("");
  const [erroObservacao, setErroObservacao] = useState("");
  const [erroCondicao, setErroCondicao] = useState("");
  const [erroImagens, setErroImagens] = useState("");

  function enviarDoacao(evento) {
    evento.preventDefault();
    if (
      !nome.trim() ||
      !especificacao.trim() ||
      !descricao.trim() ||
      !observacao.trim() ||
      !condicao.trim() ||
      imagens.length === 0
    ) {
      setErroNome(!nome.trim() ? "Preencha o nome do eletrônico!" : "");
      setErroEspecificacao(
        !especificacao.trim() ? "Preencha a especificação!" : ""
      );
      setErroDescricao(!descricao.trim() ? "Preencha a descrição!" : "");
      setErroObservacao(!observacao.trim() ? "Preencha a observação!" : "");
      setErroCondicao(
        !condicao.trim() ? "Preencha a condição do eletrônico!" : ""
      );
      setErroImagens(
        imagens.length === 0 ? "Adicione pelo menos uma imagem!" : ""
      );
      return;
    }
    setErroNome("");
    setErroEspecificacao("");
    setErroDescricao("");
    setErroObservacao("");
    setErroCondicao("");
    setErroImagens("");

    navigate("/doacao/pendente", {
      state: {
        nome,
        especificacao,
        descricao,
        observacao,
        condicao,
        imagens,
      },
    });
    setTimeout(() => {
      navigate;
    }, 2000);
    setNome("");
    setEspecificacao("");
    setDescricao("");
    setObservacao("");
    setCondicao("");
    setImagens([]);
    if (inputImagemRef.current) {
      inputImagemRef.current.value = "";
    }
  }

  return (
    <div className={styles.tela_criar_doacao}>
      <img
        src={fundo_login_cadastro}
        alt="imagem_de_fundo"
        className={styles.background_tela}
      />

      <div className={styles.top_bar_doacao}>
        <Link to="/" className={styles.voltar}>
          <img src={icon_voltar} alt="voltar" className={styles.icone_voltar} />
          <p className={styles.nav_chat_p}>VOLTAR</p>
        </Link>
      </div>

      <div className={styles.form_doacao}>
        <h2>Criar doação</h2>
        <p className={styles.subtitulo}>
          Preencha os campos abaixo para criar a sua doação!
        </p>

        <form onSubmit={enviarDoacao}>
          <div className={styles.form_campos}>
            <div className={styles.coluna_esquerda}>
              <div className={styles.campo}>
                <label>Nome</label>
                <input
                  className={`${styles.input} ${
                    erroNome ? styles.erro_input : ""
                  }`}
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  type="text"
                  placeholder="Insira o nome do eletrônico*"
                />
                {erroNome && <p className={styles.erro}>{erroNome}</p>}
              </div>

              <div className={styles.campo}>
                <label>Especificação</label>
                <input
                  className={`${styles.input} ${
                    erroEspecificacao ? styles.erro_input : ""
                  }`}
                  value={especificacao}
                  onChange={(e) => setEspecificacao(e.target.value)}
                  type="text"
                  placeholder="Ex: Modelo com entradas AV tradicionais."
                />
                {erroEspecificacao && (
                  <p className={styles.erro}>{erroEspecificacao}</p>
                )}
              </div>

              <div className={styles.campo}>
                <label>Descrição geral do eletrônico</label>
                <textarea
                  className={`${styles.input} ${
                    erroDescricao ? styles.erro_input : ""
                  }`}
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  placeholder="Ex: Ideal para empresas que desejam reciclar eletrônicos ou entusiastas que queiram reaproveitar peças."
                />
                {erroDescricao && (
                  <p className={styles.erro}>{erroDescricao}</p>
                )}
              </div>
            </div>

            <div className={styles.divisoria}></div>

            <div className={styles.coluna_direita}>
              <div className={styles.campo}>
                <label>Condição do eletrônico</label>
                <input
                  className={`${styles.input} ${
                    erroCondicao ? styles.erro_input : ""
                  }`}
                  value={condicao}
                  onChange={(e) => setCondicao(e.target.value)}
                  type="text"
                  placeholder="Insira a condição do eletrônico*"
                />
                {erroCondicao && <p className={styles.erro}>{erroCondicao}</p>}
              </div>

              <div className={styles.campo}>
                <label>Observação</label>
                <input
                  className={`${styles.input} ${
                    erroObservacao ? styles.erro_input : ""
                  }`}
                  value={observacao}
                  onChange={(e) => setObservacao(e.target.value)}
                  type="text"
                  placeholder="Ex: Ideal para reciclagem."
                />
                {erroObservacao && (
                  <p className={styles.erro}>{erroObservacao}</p>
                )}
              </div>

              <div className={styles.campo}>
                <label>Insira as fotos do eletrônico</label>
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className={`${styles.input} ${
                    erroImagens ? styles.inputErro : ""
                  }`}
                  onChange={(e) => setImagens(Array.from(e.target.files))}
                  ref={inputImagemRef}
                />
                {erroImagens && <p className={styles.erro}>{erroImagens}</p>}
              </div>
            </div>
          </div>

          <button type="submit" className={styles.botao_enviar}>
            Enviar doação!
          </button>
        </form>
      </div>
    </div>
  );
}

export default TelaCriarDoacao;
