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
  const [endereco, setEndereco] = useState("");
  const [imagens, setImagens] = useState([]);
  const [erroNome, setErroNome] = useState("");
  const [erroEspecificacao, setErroEspecificacao] = useState("");
  const [erroDescricao, setErroDescricao] = useState("");
  const [erroObservacao, setErroObservacao] = useState("");
  const [erroCondicao, setErroCondicao] = useState("");
  const [erroEndereco, setErroEndereco] = useState("");
  const [erroImagens, setErroImagens] = useState("");

  function enviarDoacao(evento) {
    evento.preventDefault();
    if (
      !nome.trim() ||
      !especificacao.trim() ||
      !descricao.trim() ||
      !observacao.trim() ||
      !condicao.trim() ||
      !endereco.trim() ||
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
      setErroEndereco(!condicao.trim() ? "Preencha o seu endereço!" : "");
      setErroImagens(imagens.length === 0 ? "Adicione uma imagem!" : "");
      return;
    }
    setErroNome("");
    setErroEspecificacao("");
    setErroDescricao("");
    setErroObservacao("");
    setErroCondicao("");
    setErroEndereco("");
    setErroImagens("");

    navigate("/doacao/pendente", {
      state: {
        nome,
        especificacao,
        descricao,
        observacao,
        condicao,
        endereco,
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
    setEndereco("");
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

        <form onSubmit={enviarDoacao}>
          <div className={styles.form_campos}>
            <div className={styles.coluna_esquerda}>
              <div className={styles.campo}>
                <label className={styles.label_formulario}>Nome</label>
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
                <label className={styles.label_formulario}>Especificação</label>
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
                <label className={styles.label_formulario}>Endereço</label>
                <input
                  className={`${styles.input} ${
                    erroEndereco ? styles.erro_input : ""
                  }`}
                  value={endereco}
                  onChange={(e) => setEndereco(e.target.value)}
                  type="text"
                  placeholder="Ex: Rua João Dantas."
                />
                {erroEndereco && <p className={styles.erro}>{erroEndereco}</p>}
              </div>

              <div className={styles.campo}>
                <label className={styles.label_formulario}>
                  Descrição geral do eletrônico
                </label>
                <textarea
                  className={`${styles.input} ${
                    erroDescricao ? styles.erro_input : ""
                  }`}
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  placeholder="Ex: Ideal para empresas que desejam reciclar eletrônicos."
                />
                {erroDescricao && (
                  <p className={styles.erro}>{erroDescricao}</p>
                )}
              </div>
            </div>

            <div className={styles.divisoria}></div>

            <div className={styles.coluna_direita}>
              <div className={styles.campo}>
                <label className={styles.label_formulario}>Observação</label>
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
                <label className={styles.label_formulario}>
                  Insira as fotos do eletrônico
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className={`${styles.input} ${
                    erroImagens ? styles.erro_input : ""
                  }`}
                  onChange={(e) => setImagens(Array.from(e.target.files))}
                  ref={inputImagemRef}
                />
                {erroImagens && <p className={styles.erro}>{erroImagens}</p>}
              </div>
                <div className={styles.campo}>
                  <label className={styles.label_formulario}>
                    Condição do eletrônico
                  </label>
                  <select
                    className={`${styles.input_select} ${
                      erroCondicao ? styles.erro_input : ""
                    }`}
                    value={condicao}
                    onChange={(e) => setCondicao(e.target.value)}
                  >
                    <option value="">Selecione uma opção</option>
                    <option value="Novo">Novo</option>
                    <option value="Usado">Usado</option>
                    <option value="Peças">Para peças</option>
                  </select>
                  {erroCondicao && (
                    <p className={styles.erro}>{erroCondicao}</p>
                  )}
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
