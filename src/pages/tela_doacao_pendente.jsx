import styles from "../styles/tela_doacao_pendente.module.css";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import icon_lixeira from "../assets/imagens/icon_lixeira.png";
import icon_user from "../assets/imagens/woman (1).png";
import icon_sucesso from "../assets/imagens/checked 2.png";
import televisao from "../assets/imagens/tv_tubo.png";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TelaDoacaoPendente() {
  const location = useLocation();
  const navigate = useNavigate();

  const [doacao, setDoacao] = useState({
    nomeDoador: "Ana Clara Lima",
    especificacao: "Tela de 29 polegadas, som estéreo, entrada AV.",
    nomeEletronico: "Televisão de tubo",
    infoProduto:
      "TV de tubo clássica em bom estado. Ideal para quem busca um toque vintage ou para uso em projetos de reaproveitamento de peças.",
    condicao: "Usado",
    observacao: "Pode ser reutilizado ou ter partes aproveitadas.",
    endereco: "Rua das flores, Floriano - PI",
    imagem: televisao,
  });

  const [isEditarModalOpen, setIsEditarModalOpen] = useState(false);
  const [especificacao, setEspecificacao] = useState("");
  const [nomeEletronico, setNomeEletronico] = useState("");
  const [infoProduto, setInfoProduto] = useState("");
  const [condicao, setCondicao] = useState("");
  const [observacao, setObservacao] = useState("");
  const [endereco, setEndereco] = useState("");
  const [imagem, setImagem] = useState(null);

  function abrirModalEditar() {
    setEspecificacao(doacao.especificacao);
    setNomeEletronico(doacao.nomeEletronico);
    setInfoProduto(doacao.infoProduto);
    setCondicao(doacao.condicao);
    setObservacao(doacao.observacao);
    setEndereco(doacao.endereco);
    setImagem(doacao.imagem);
    setIsEditarModalOpen(true);
  }

  function fecharModalEditar() {
    setIsEditarModalOpen(false);
  }

  function editarPerfil(evento) {
    evento.preventDefault();

    const perfilAtualizado = {
      ...doacao,
      nomeEletronico: nomeEletronico,
      especificacao,
      infoProduto,
      condicao,
      observacao,
      endereco,
      imagem,
    };

    setDoacao(perfilAtualizado);
    fecharModalEditar();
  }

  useEffect(() => {
    if (location.state) {
      const imagemCriacao =
        location.state.imagens && location.state.imagens.length > 0
          ? URL.createObjectURL(location.state.imagens[0])
          : televisao;

      setDoacao({
        nomeDoador: "Você",
        nomeEletronico: location.state.nome,
        especificacao: location.state.especificacao,
        infoProduto: location.state.descricao,
        condicao: location.state.condicao,
        observacao: location.state.observacao,
        endereco: location.state.endereco,
        imagem: imagemCriacao,
      });
      setImagem(imagemCriacao);
    }
  }, [location.state]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  function abrirModal() {
    setIsModalOpen(true);
  }

  function fecharModal() {
    setIsModalOpen(false);
  }

  return (
    <div className={styles.tela_doacao_pendente}>
      <img
        src={fundo_login_cadastro}
        alt="imagem_de_fundo"
        className={styles.background_tela}
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
                  imagem
                    ? typeof imagem === "string"
                      ? imagem
                      : URL.createObjectURL(imagem)
                    : doacao.imagem
                }
                alt={nomeEletronico}
              />
              <div className={styles.informacoes_esquerda}>
                <div className={styles.doador_info_esquerda}>
                  <h3 className={styles.info_esquerda_h3}>Status:</h3>
                  <div className={styles.info_status}>
                    <img
                      className={styles.img_sucesso}
                      src={icon_sucesso}
                      alt=""
                    />
                    <p className={styles.nome_doador}>Disponível</p>
                  </div>
                </div>

                <div className={styles.doador_info_esquerda}>
                  <h3 className={styles.info_esquerda_h3}>Doado por:</h3>
                  <div className={styles.info_doador}>
                    <img className={styles.img_doador} src={icon_user} alt="" />
                    <div className={styles.doador_contato}>
                      <p className={styles.nome_doador}>{doacao.nomeDoador}</p>
                      <p className={styles.dataHoraPublicacao}>
                        Publicado 19/05/2025 às 18:02
                      </p>
                      <p className={styles.dataHoraPublicacao}>
                        {doacao.endereco}
                      </p>
                      <div className={styles.botao_entrar_em_contato}>
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

                          {isEditarModalOpen && (
                            <div className={styles.popUp_overlay}>
                              <div className={styles.popUp}>
                                <div className={styles.popUp_inicio}>
                                  <h3 className={styles.titulo_popUp}>
                                    Editar informações
                                  </h3>
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
                                      <label className={styles.label_modal}>
                                        Nome
                                      </label>
                                      <input
                                        className={styles.input}
                                        type="text"
                                        value={nomeEletronico}
                                        placeholder="Insira o novo nome do eletrônico"
                                        onChange={(e) =>
                                          setNomeEletronico(e.target.value)
                                        }
                                        required
                                      />
                                    </div>
                                    <div className={styles.campo}>
                                      <label className={styles.label_modal}>
                                        Especificação
                                      </label>
                                      <input
                                        className={styles.input}
                                        type="text"
                                        value={especificacao}
                                        placeholder="Insira a nova especificação"
                                        onChange={(e) =>
                                          setEspecificacao(e.target.value)
                                        }
                                        required
                                      />
                                    </div>
                                    <div className={styles.campo}>
                                      <label className={styles.label_modal}>
                                        Endereco
                                      </label>
                                      <input
                                        className={styles.input}
                                        type="text"
                                        value={endereco}
                                        placeholder="Insira o novo endereco"
                                        onChange={(e) =>
                                          setEndereco(e.target.value)
                                        }
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
                                        value={infoProduto}
                                        placeholder="Insira a nova informação do produto"
                                        onChange={(e) =>
                                          setInfoProduto(e.target.value)
                                        }
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
                                        onChange={(e) =>
                                          setCondicao(e.target.value)
                                        }
                                        required
                                      />
                                    </div>
                                    <div className={styles.campo}>
                                      <label className={styles.label_modal}>
                                        Observação
                                      </label>
                                      <input
                                        className={styles.input}
                                        type="text"
                                        value={observacao}
                                        placeholder="Insira a nova observação"
                                        onChange={(e) =>
                                          setObservacao(e.target.value)
                                        }
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
                                            setImagem(file);
                                            setImagem(
                                              URL.createObjectURL(file)
                                            );
                                          }
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div className={styles.popUp_botoes}>
                                    <button
                                      className={
                                        styles.botao_cancelar_agendamento
                                      }
                                      onClick={fecharModalEditar}
                                    >
                                      Cancelar
                                    </button>
                                    <button
                                      className={
                                        styles.botao_confirmar_agendamento
                                      }
                                      onClick={editarPerfil}
                                    >
                                      Confirmar
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          <button
                            onClick={() => abrirModal()}
                            className={styles.botoes_doacao}
                          >
                            <img
                              className={styles.icon_lixeira}
                              src={icon_lixeira}
                              alt="excluir"
                            />
                            Excluir
                          </button>

                          {isModalOpen && (
                            <div className={styles.popUpSair}>
                              <div className={styles.popUp}>
                                <i
                                  className={`${styles.botao_sair} fa-solid fa-x`}
                                  onClick={fecharModal}
                                ></i>
                                <p className={styles.popUp_p}>
                                  Tem certeza de que deseja excluir essa doação?
                                </p>
                                <div className={styles.botaoPopUp}>
                                  <button
                                    onClick={fecharModal}
                                    className={styles.botoes}
                                  >
                                    Cancelar
                                    <i
                                      className={`${styles.icone_cancelar} fa-solid fa-circle-xmark`}
                                    ></i>
                                  </button>

                                  <button
                                    onClick={() => navigate(-1)}
                                    className={styles.botoes}
                                  >
                                    Confirmo!
                                    <img
                                      className={styles.icone_sucesso}
                                      src={icon_sucesso}
                                      alt=""
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.info_doacao_lado_direito}>
              <h1>{doacao.nomeEletronico}</h1>

              <div className={styles.secao_info_direito}>
                <h3 className={styles.lado_direito_h3}>
                  Informações sobre o produto:
                </h3>
                <p>{doacao.infoProduto}</p>
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
    </div>
  );
}

export default TelaDoacaoPendente;
