import styles from "../styles/tela_doacao_pendente.module.css";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import icon_user from "../assets/imagens/woman (1).png";
import televisao from "../assets/imagens/tv_tubo.png";
import PopUpSucesso from "../components/popUpSucesso";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetMinhasDoacoes from "../hooks/doacoes/useGetMinhasDoacoes";
import apiMedia from "../services/api_media.ts";

function TelaDoacaoPendente() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const [doacao, setDoacao] = useState({});
  const { doacoes: doacoesAPI } = useGetMinhasDoacoes();

  const [isEditarModalOpen, setIsEditarModalOpen] = useState(false);
  const [especificacao, setEspecificacao] = useState("");
  const [nome_doacao, setNomeDoacao] = useState("");
  const [descricao_geral, setDescricao] = useState("");
  const [condicao, setCondicao] = useState("");
  const [observacao, setObservacao] = useState("");
  const [endereco, setEndereco] = useState("");
  const [fotos_eletronico, setFotoEletronico] = useState(null);
  const [doacaoSelecionada, setDoacaoSelecionada] = useState({});

  const [novoArquivoEletronico, setNovoArquivoEletronico] = useState(null);

  function abrirModalEditar() {
    setEspecificacao(doacao.especificacao);
    setNomeDoacao(doacao.nome_doacao);
    setDescricao(doacao.descricao_geral);
    setCondicao(doacao.condicao);
    setObservacao(doacao.observacao);
    setEndereco(doacao.endereco);
    setFotoEletronico(doacao.fotos_eletronico);
    setNovoArquivoEletronico(null);
    setIsEditarModalOpen(true);
  }

  function fecharModalEditar() {
    setIsEditarModalOpen(false);
  }

  const [mensagemSucesso, setMensagemSucesso] = useState(null);

  async function editarBlocoAPI(formDataPayload, idDoacao) {
    try {
      const response = await apiMedia.patch(
        `minhas_doacoes/${idDoacao}/`,
        formDataPayload,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("Doação editada com sucesso", response.data);
        return { success: true, data: response.data };
      }
    } catch (erro) {
      console.error("Erro ao editar doação.", erro);
      return { success: false, error: erro };
    }
  }

  async function editar(evento) {
    evento.preventDefault();

    if (!doacaoSelecionada || !doacaoSelecionada.id) {
      console.error("Nenhuma doação selecionada para edição.");
      return;
    }
    const formData = new FormData();

    formData.append("nome_doacao", nome_doacao);
    formData.append("especificacao", especificacao);
    formData.append("descricao_geral", descricao_geral);
    formData.append("condicao", condicao);
    formData.append("observacao", observacao);
    formData.append("endereco", endereco);
    if (novoArquivoEletronico) {
      formData.append("fotos_eletronico", novoArquivoEletronico);
    }
    const resultado = await editarBlocoAPI(formData, doacaoSelecionada.id);

    if (resultado && resultado.success) {
      setMensagemSucesso("Doação editada com sucesso!");
      const dadosParaAtualizarLocalmente = {
        nome_doacao,
        especificacao,
        descricao_geral,
        condicao,
        observacao,
        endereco,
        fotos_eletronico: novoArquivoEletronico
          ? URL.createObjectURL(novoArquivoEletronico)
          : fotos_eletronico,
      };

      setDoacao((prevDoacao) => ({
        ...prevDoacao,
        ...dadosParaAtualizarLocalmente,
      }));

      setNovoArquivoEletronico(null);

      fecharModalEditar();
      setTimeout(() => {
        setMensagemSucesso(null);
      }, 3000);
    } else {
      alert(
        "Falha ao editar a doação. Por favor, verifique sua conexão ou tente novamente."
      );
    }
  }

  useEffect(() => {
    const doacaoEncontrada = doacoesAPI?.find(
      (doacao) => String(doacao.id) === id
    );
    if (doacaoEncontrada) {
      const urlFoto = doacaoEncontrada.fotos_eletronico;

      setDoacao({
        id: doacaoEncontrada.id,
        nomeDoador: "Você",
        nome_doacao: doacaoEncontrada.nome_doacao,
        especificacao: doacaoEncontrada.especificacao,
        descricao_geral: doacaoEncontrada.descricao_geral,
        condicao: doacaoEncontrada.condicao,
        observacao: doacaoEncontrada.observacao,
        endereco: doacaoEncontrada.endereco,
        fotos_eletronico: urlFoto,
        dataCriacao: doacaoEncontrada.criado_em,
      });

      setDoacaoSelecionada(doacaoEncontrada);
      setFotoEletronico(urlFoto);
    } else if (location.state && location.state.nome) {
      const imagemCriacao =
        location.state.imagens && location.state.imagens.length > 0
          ? URL.createObjectURL(location.state.imagens[0])
          : televisao;

      setDoacao({
        nomeDoador: "Você",
        nome_doacao: location.state.nome_doacao,
        especificacao: location.state.especificacao,
        descricao_geral: location.state.descricao_geral,
        condicao: location.state.condicao,
        observacao: location.state.observacao,
        endereco: location.state.endereco,
        fotos_eletronico: imagemCriacao,
        dataCriacao: new Date().toISOString(),
      });
      setFotoEletronico(imagemCriacao);
    }
  }, [doacoesAPI, id, location.state]);

  function formatarDataHora(isoString) {
    const data = new Date(isoString);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();
    const hora = String(data.getHours()).padStart(2, "0");
    const minuto = String(data.getMinutes()).padStart(2, "0");
    return `${dia}/${mes}/${ano} às ${hora}:${minuto}`;
  }

  return (
    <div className={styles.tela_doacao_pendente}>
      {mensagemSucesso && <PopUpSucesso mensagem={mensagemSucesso} />}
      <img
        src={fundo_login_cadastro}
        alt="imagem_de_fundo"
        className={styles.background_info_doacao}
      />
      <button onClick={() => navigate(-1)} className={styles.voltar} to="/">
        <img className={styles.icone_voltar} src={icon_voltar} alt="Voltar" />
        <p className={styles.nav_doacao_p}>VOLTAR</p>
      </button>

      <main className={styles.info_doacao_main}>
        <div className={styles.info_doacao_container}>
          <div className={styles.info_doacao_conteudos}>
            <div className={styles.info_doacao_lado_esquerdo}>
              <img
                className={styles.doacao_main_img}
                src={
                  fotos_eletronico
                    ? typeof fotos_eletronico === "string"
                      ? fotos_eletronico
                      : URL.createObjectURL(fotos_eletronico)
                    : televisao
                }
                alt={
                  fotos_eletronico ? "Imagem do eletrônico" : "Imagem padrão"
                }
              />
              <div className={styles.informacoes_esquerda}>
                <div className={styles.doador_info_esquerda}>
                  <h3 className={styles.info_esquerda_h3}>Doado por:</h3>
                  <div className={styles.info_doador}>
                    <img className={styles.img_doador} src={icon_user} alt="" />
                    <div className={styles.doador_contato}>
                      <p className={styles.nome_doador}>{doacao.nomeDoador}</p>
                      <p className={styles.dataHoraPublicacao}>
                        Publicado {formatarDataHora(doacao.dataCriacao)}
                      </p>
                      <p className={styles.dataHoraPublicacao}>
                        {doacao.endereco}
                      </p>
                      <div className={styles.botoes_acoes}>
                        <button
                          onClick={abrirModalEditar}
                          className={styles.botoes_doacao}
                        >
                          <i
                            className={`${styles.pincel} fa-solid fa-pencil`}
                          ></i>
                          Editar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.info_doacao_lado_direito}>
              <h1>{doacao.nome_doacao}</h1>

              <div className={styles.secao_info_direito}>
                <h3 className={styles.lado_direito_h3}>
                  Informações sobre o produto:
                </h3>
                <p>{doacao.descricao_geral}</p>
              </div>

              <div className={styles.secao_info_direito}>
                <h3 className={styles.lado_direito_h3}>Condição:</h3>
                <p>{doacao.condicao}</p>
              </div>

              <div className={styles.secao_info_direito}>
                <h3 className={styles.lado_direito_h3}>Observação:</h3>
                <p>{doacao.observacao}</p>
              </div>

              <div className={styles.especificacoes_conteudo}>
                <h3 className={styles.lado_direito_h3}>Especificações:</h3>
                <p className={styles.especificacoes_p}>
                  {doacao.especificacao}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
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
                    value={nome_doacao}
                    placeholder="Insira o novo nome do eletrônico"
                    onChange={(e) => setNomeDoacao(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.campo}>
                  <label className={styles.label_modal}>Especificação</label>
                  <input
                    className={styles.input}
                    type="text"
                    value={especificacao}
                    placeholder="Insira a nova especificação"
                    onChange={(e) => setEspecificacao(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.campo}>
                  <label className={styles.label_modal}>Endereco</label>
                  <input
                    className={styles.input}
                    type="text"
                    value={endereco}
                    placeholder="Insira o novo endereco"
                    onChange={(e) => setEndereco(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.campo}>
                  <label className={styles.label_modal}>
                    Informação do produto
                  </label>
                  <input
                    className={styles.input}
                    type="text"
                    value={descricao_geral}
                    placeholder="Insira a nova informação do produto"
                    onChange={(e) => setDescricao(e.target.value)}
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
                    value={condicao}
                    placeholder="Insira a nova condição do produto"
                    onChange={(e) => setCondicao(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.campo}>
                  <label className={styles.label_modal}>Observação</label>
                  <input
                    className={styles.input}
                    type="text"
                    value={observacao}
                    placeholder="Insira a nova observação"
                    onChange={(e) => setObservacao(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.campo}>
                  <label className={styles.label_modal}>
                    Insira a foto do eletrônico
                  </label>
                  <input
                    type="file"
                    accept="image/*"
                    multiple={false}
                    className={styles.input}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file) {
                        setNovoArquivoEletronico(file);
                        setFotoEletronico(URL.createObjectURL(file));
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
    </div>
  );
}

export default TelaDoacaoPendente;
