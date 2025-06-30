import styles from "../styles/tela_criar_doacao.module.css";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import PopUpSucesso from "../components/popUpSucesso";
import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

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

  const [mostrarModal, setMostrarModal] = useState(false);
  const [mensagemSucesso, setMensagemSucesso] = useState(null);

  function abrirModalRevisao(evento) {
    evento.preventDefault();
    let erro = false;

    if (!nome.trim()) {
      setErroNome("Preencha o nome do eletrônico!");
      erro = true;
    } else setErroNome("");

    if (!especificacao.trim()) {
      setErroEspecificacao("Preencha a especificação!");
      erro = true;
    } else setErroEspecificacao("");

    if (!descricao.trim()) {
      setErroDescricao("Preencha a descrição!");
      erro = true;
    } else setErroDescricao("");

    if (!observacao.trim()) {
      setErroObservacao("Preencha a observação!");
      erro = true;
    } else setErroObservacao("");

    if (!condicao.trim()) {
      setErroCondicao("Preencha a condição do eletrônico!");
      erro = true;
    } else setErroCondicao("");

    if (!endereco.trim()) {
      setErroEndereco("Preencha o seu endereço!");
      erro = true;
    } else setErroEndereco("");

    if (imagens.length === 0) {
      setErroImagens("Adicione uma imagem!");
      erro = true;
    } else setErroImagens("");

    if (!erro) setMostrarModal(true);
  }

  function confirmarEnvio() {
    setMensagemSucesso("Doação criada com sucesso!");

    setTimeout(() => {
      setMensagemSucesso(null);
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
    }, 2000); 

    setNome("");
    setEspecificacao("");
    setDescricao("");
    setObservacao("");
    setCondicao("");
    setEndereco("");
    setImagens([]);
    setMostrarModal(false);

    if (inputImagemRef.current) {
      inputImagemRef.current.value = "";
    }
  }

  return (
    <div className={styles.tela_criar_doacao}>
      {mensagemSucesso && <PopUpSucesso mensagem={mensagemSucesso} />}
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

        <form onSubmit={abrirModalRevisao}>
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
                {erroCondicao && <p className={styles.erro}>{erroCondicao}</p>}
              </div>
            </div>
          </div>

          <button type="submit" className={styles.botao_enviar}>
            Enviar doação!
          </button>
        </form>
      </div>
      {mostrarModal && (
        <div className={styles.popUpOverlay}>
          <div className={styles.popUpCard}>
            <div className={styles.popUpHeader}>
              <h3 className={styles.popUpTitulo}>Revisar Doação</h3>
              <button
                onClick={() => setMostrarModal(false)}
                className={styles.popUpBotaoFechar}
              >
                &times;
              </button>
            </div>
            <div className={styles.popUpContent}>
              <p>
                <strong>Nome:</strong> {nome}
              </p>
              <p>
                <strong>Especificação:</strong> {especificacao}
              </p>
              <p>
                <strong>Descrição:</strong> {descricao}
              </p>
              <p>
                <strong>Observação:</strong> {observacao}
              </p>
              <p>
                <strong>Condição:</strong> {condicao}
              </p>
              <p>
                <strong>Endereço:</strong> {endereco}
              </p>
              <p>
                <strong>Imagens:</strong> {imagens.length} adicionada(s)
              </p>
              <div className={styles.popUp_botoes}>
                <button
                  className={styles.botao_cancelar_agendamento}
                  onClick={() => setMostrarModal(false)}
                >
                  Cancelar
                </button>
                <button
                  className={styles.botao_confirmar_agendamento}
                  onClick={confirmarEnvio}
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

export default TelaCriarDoacao;
