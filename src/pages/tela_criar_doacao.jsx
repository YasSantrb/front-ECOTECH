import styles from "../styles/tela_criar_doacao.module.css";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import PopUpSucesso from "../components/popUpSucesso";
import { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import apiMedia from "../services/api_media";

function TelaCriarDoacao() {
  const navigate = useNavigate();
  const inputImagemRef = useRef(null);

  const [nome_doacao, setNome] = useState("");
  const [especificacao, setEspecificacao] = useState("");
  const [descricao_geral, setDescricao] = useState("");
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

  async function adicionarDoacao(event) {
    event.preventDefault();

    const formulario = new FormData();
    formulario.append("nome_doacao", nome_doacao);
    formulario.append("especificacao", especificacao);
    formulario.append("descricao_geral", descricao_geral);
    formulario.append("observacao", observacao);
    formulario.append("condicao", condicao);
    formulario.append("endereco", endereco);

    if (imagens.length > 0) {
      formulario.append("fotos_eletronico", imagens[0]);
    }

    if (
      !nome_doacao ||
      !especificacao ||
      !descricao_geral ||
      !condicao ||
      !endereco
    ) {
      setErroCondicao("Por favor, preencha a condição.");
      setErroDescricao("Por favor, preencha a descrição.");
      setErroEspecificacao("Por favor, preencha a especificação.");
      setErroNome("Por favor, preencha o nome da doação.");
      setErroEndereco("Por favor, preencha o endereço.");
      setErroObservacao("Por favor, preencha a observação.");
      setErroImagens("Por favor, insira uma imagem.");
      return;
    }

    try {
      const response = await apiMedia.post("minhas_doacoes/", formulario);

      if (response.status === 201 || response.status === 200) {
        setMensagemSucesso("Doação adicionada com sucesso!");
        const novaDoacao = response.data;
        setTimeout(() => {
          if (novaDoacao && novaDoacao.id) {
            navigate(`/info/doacao/${novaDoacao.id}`, {
              state: { doacao: novaDoacao },
            });
          } else {
            console.error("Erro: O backend não retornou o ID da nova doação.");
            navigate("/");
          }
          setMensagemSucesso(null);
        }, 2000);
      } else {
        console.error(
          "Criação de doação falhou com status inesperado:",
          response.status
        );
      }
    } catch (error) {
      const mensagem =
        error.response?.data?.message ||
        "Erro ao criar doação. Verifique os logs do backend.";
      console.error(
        "Erro ao criar doação:",
        error.response?.data || error.message
      );
      alert(mensagem);
    } finally {
      console.log("Requisição de criação de doação finalizada.");
    }
  }

  function confirmarEnvio() {
    setMensagemSucesso("Doação criada com sucesso!");

    setTimeout(() => {
      setMensagemSucesso(null);
      navigate("/doacao/pendente", {
        state: {
          nome_doacao,
          especificacao,
          descricao_geral,
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

        <form onSubmit={adicionarDoacao}>
          <div className={styles.form_campos}>
            <div className={styles.coluna_esquerda}>
              <div className={styles.campo}>
                <label className={styles.label_formulario}>Nome</label>
                <input
                  className={`${styles.input} ${
                    erroNome ? styles.erro_input : ""
                  }`}
                  value={nome_doacao}
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
                  value={descricao_geral}
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
                  <option value="NOVO">Novo</option>
                  <option value="USADO">Usado</option>
                  <option value="PEÇAS">Para peças</option>
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
                <strong>Nome:</strong> {nome_doacao}
              </p>
              <p>
                <strong>Especificação:</strong> {especificacao}
              </p>
              <p>
                <strong>Descrição:</strong> {descricao_geral}
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
