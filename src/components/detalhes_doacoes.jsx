import { Link } from "react-router-dom";
import styles from "../styles/tela_info_doacao.module.css";
import PopUpSucesso from "./popUpSucesso";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import apiMedia from "../services/api_media.ts";

function InformacoesDoacaoComponente({
  username,
  especificacao,
  nome_doacao,
  descricao_geral,
  condicao,
  observacao,
  endereco,
  imagem_user,
  fotos_eletronico,
  modo = "visualizacao",
  status,
  dataCriacao,
  onEditarDoacao,
}) {
  const navigate = useNavigate();
  const { id } = useParams();
  const logado = localStorage.getItem("logado") === "true";
  const mostrarContato = logado && modo === "visualizacao";
  const mostrarAgendar = logado && modo === "visualizacao";
  const mostrarEditar = modo === "gerenciar";

  const [isEditarModalOpen, setIsEditarModalOpen] = useState(false);
  const [especificacaoE, setEspecificacaoE] = useState(especificacao);
  const [nomeEletronicoE, setNomeEletronicoE] = useState(nome_doacao);
  const [infoProdutoE, setInfoProdutoE] = useState(descricao_geral);
  const [condicaoE, setCondicaoE] = useState(condicao);
  const [observacaoE, setObservacaoE] = useState(observacao);
  const [enderecoE, setEnderecoE] = useState(endereco);
  const [imagemE, setImagemE] = useState(fotos_eletronico);
  const [novoArquivoEletronico, setNovoArquivoEletronico] = useState(null);

  const [mensagemSucesso, setMensagemSucesso] = useState(null);

  function formatarDataHora(isoString) {
    if (!isoString) return "Data Indisponível";
    const data = new Date(isoString);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  function abrirModalEditar() {
    setEspecificacaoE(especificacao);
    setNomeEletronicoE(nome_doacao);
    setInfoProdutoE(descricao_geral);
    setCondicaoE(condicao);
    setObservacaoE(observacao);
    setEnderecoE(endereco);
    setImagemE(fotos_eletronico);
    setNovoArquivoEletronico(null);
    setIsEditarModalOpen(true);
  }

  function fecharModalEditar() {
    setIsEditarModalOpen(false);
  }

  async function editarBlocoAPI(formularioEdicao, idDoacao) {
    try {
      const response = await apiMedia.patch(
        `minhas_doacoes/${idDoacao}/`,
        formularioEdicao,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        return { success: true, data: response.data };
      }
    } catch (erro) {
      console.error("Erro ao editar doação.", erro);
      return { success: false, error: erro };
    }
  }

  async function editar(evento) {
    evento.preventDefault();

    if (!id) {
      console.error("ID da doação não encontrado na URL.");
      return;
    }

    const formulario = new FormData();
    formulario.append("nome_doacao", nomeEletronicoE);
    formulario.append("especificacao", especificacaoE);
    formulario.append("descricao_geral", infoProdutoE);
    formulario.append("condicao", condicaoE);
    formulario.append("observacao", observacaoE);
    formulario.append("endereco", enderecoE);

    if (novoArquivoEletronico) {
      formulario.append("fotos_eletronico", novoArquivoEletronico);
    }

    const resultado = await editarBlocoAPI(formulario, id);

    if (resultado && resultado.success) {
      setMensagemSucesso("Doação editada com sucesso!");

      const dadosAtualizados = {
        id: id,
        username: username,
        nome_doacao: nomeEletronicoE,
        especificacao: especificacaoE,
        descricao_geral: infoProdutoE,
        condicao: condicaoE,
        observacao: observacaoE,
        endereco: enderecoE,
        imagem_user: imagem_user,
        fotos_eletronico: novoArquivoEletronico
          ? URL.createObjectURL(novoArquivoEletronico)
          : fotos_eletronico,
        status: status,
        dataCriacao: dataCriacao,
      };

      if (onEditarDoacao) {
        onEditarDoacao(dadosAtualizados);
      }

      setNovoArquivoEletronico(null);
      fecharModalEditar();

      setTimeout(() => {
        setMensagemSucesso(null);
      }, 3000);
    } else {
      alert("Falha ao editar a doação. Tente novamente.");
    }
  }

  const tipoUsuario = localStorage.getItem("userType");
  const VITE_API_URL = "https://yassant2.pythonanywhere.com";

  return (
    <>
      {mensagemSucesso && <PopUpSucesso mensagem={mensagemSucesso} />}
      <div className={styles.info_doacao_container}>
        <div className={styles.info_doacao_conteudos}>
          <div className={styles.info_doacao_lado_esquerdo}>
            <img
              className={styles.doacao_main_img}
              src={
                fotos_eletronico
                  ? fotos_eletronico.startsWith("http") ||
                    fotos_eletronico.startsWith("blob")
                    ? fotos_eletronico
                    : `${VITE_API_URL}${fotos_eletronico}`
                  : "src/assets/imagens/download 1 (1).png"
              }
              alt={nomeEletronicoE}
            />
            <div className={styles.informacoes_esquerda}>
              <div className={styles.doador_info_esquerda}>
                <h3>Doado por:</h3>
                <div className={styles.info_doador}>
                  <img
                    className={styles.img_doador}
                    src={imagem_user}
                    alt="Ícone do usuário"
                  />
                  <div className={styles.doador_contato}>
                    <p className={styles.nome_doador}>{username}</p>
                    <p className={styles.dataHoraPublicacao}>
                      Publicado em {formatarDataHora(dataCriacao)}
                    </p>
                    <p className={styles.dataHoraPublicacao}>{endereco}</p>
                    <div className={styles.botao_entrar_em_contato}>
                      {logado &&
                        mostrarContato &&
                        tipoUsuario === "EMPRESA" && (
                          <Link
                            to="/chat"
                            className={styles.link_entrar_em_contato}
                          >
                            <span className={styles.tag_disponibilidade}>
                              Entrar em contato!
                            </span>
                          </Link>
                        )}

                      <div className={styles.botoes_acoes}>
                        {mostrarEditar && status !== "Concluída" && (
                          <button
                            onClick={abrirModalEditar}
                            className={styles.botoes_doacao}
                          >
                            <i
                              className={`${styles.pincel} fa-solid fa-pencil`}
                            ></i>
                            Editar
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.info_doacao_lado_direito}>
            <h1>{nomeEletronicoE}</h1>

            <div className={styles.secao_info_direito}>
              <h3>Informações sobre o produto:</h3>
              <p>{infoProdutoE}</p>
            </div>

            <div className={styles.secao_info_direito}>
              <h3>Condição:</h3>
              <p>{condicaoE}</p>
            </div>

            <div className={styles.secao_info_direito}>
              <h3>Observação:</h3>
              <p>{observacaoE}</p>
            </div>

            <div className={styles.especificacoes_conteudo}>
              <h3>Especificações:</h3>
              <p className={styles.especificacoes_p}>{especificacaoE}</p>
            </div>

            <div className={styles.botao_agendar_div}>
              {logado && mostrarAgendar && tipoUsuario === "EMPRESA" && (
                <button
                  className={styles.botao_agendar_coleta}
                  onClick={() =>
                    navigate("/agendamento", {
                      state: {
                        produto: nomeEletronicoE,
                        doador: username,
                        endereco: endereco,
                        idDoacao: id,
                      },
                    })
                  }
                >
                  Agendar coleta!
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {isEditarModalOpen && (
        <div className={styles.popUp_overlay}>
          <div className={styles.popUp}>
            <div className={styles.popUp_inicio}>
              <h3 className={styles.titulo_popUp}>Editar informações</h3>
              <button
                className={styles.popUpBotaoFechar}
                onClick={fecharModalEditar}
              >
                &times;
              </button>
            </div>
            <div className={styles.popUp_conteudo}>
              <div className={styles.inputs}>
                <div className={styles.campo}>
                  <label className={styles.label_modal}>Nome</label>
                  <input
                    className={styles.input}
                    type="text"
                    value={nomeEletronicoE}
                    onChange={(e) => setNomeEletronicoE(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.campo}>
                  <label className={styles.label_modal}>Especificação</label>
                  <input
                    className={styles.input}
                    type="text"
                    value={especificacaoE}
                    onChange={(e) => setEspecificacaoE(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.campo}>
                  <label className={styles.label_modal}>Endereco</label>
                  <input
                    className={styles.input}
                    type="text"
                    value={enderecoE}
                    onChange={(e) => setEnderecoE(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.campo}>
                  <label className={styles.label_modal}>
                    Detalhes do eletrônico
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    value={infoProdutoE}
                    onChange={(e) => setInfoProdutoE(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.campo}>
                  <label className={styles.label_modal}>
                    Condição do produto
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    value={condicaoE}
                    onChange={(e) => setCondicaoE(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.campo}>
                  <label className={styles.label_modal}>Observação</label>
                  <input
                    className={styles.input}
                    type="text"
                    value={observacaoE}
                    onChange={(e) => setObservacaoE(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.campo}>
                  <label className={styles.label_modal}>
                    Foto do eletrônico
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    className={styles.input}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setNovoArquivoEletronico(file);
                        setImagemE(URL.createObjectURL(file));
                      }
                    }}
                  />
                </div>
              </div>
              <div className={styles.popUp_botoes}>
                <button
                  className={styles.botao_cancelar_agendamento}
                  onClick={fecharModalEditar}
                >
                  Cancelar
                </button>
                <button
                  className={styles.botao_confirmar_agendamento}
                  onClick={editar}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InformacoesDoacaoComponente;
