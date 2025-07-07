import { Link } from "react-router-dom";
import styles from "../styles/tela_info_doacao.module.css";
import PopUpSucesso from "./popUpSucesso";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function InformacoesDoacaoComponente({
  nomeDoador,
  especificacoes,
  nomeEletronico,
  infoProduto,
  condicao,
  observacao,
  endereco,
  imagem_user,
  imagem,
  modo = "visualizacao",
  status,
  onEditarDoacao,
}) {
  const navigate = useNavigate();
  const logado = localStorage.getItem("logado") === "true";
  const mostrarContato = logado && modo === "visualizacao";
  const mostrarAgendar = logado && modo === "visualizacao";
  const mostrarEditar = modo === "gerenciar";

  const [isEditarModalOpen, setIsEditarModalOpen] = useState(false);
  const [especificacaoE, setEspecificacao] = useState(especificacoes);
  const [nomeEletronicoE, setNomeEletronico] = useState(nomeEletronico);
  const [infoProdutoE, setInfoProduto] = useState(infoProduto);
  const [condicaoE, setCondicao] = useState(condicao);
  const [observacaoE, setObservacao] = useState(observacao);
  const [enderecoE, setEndereco] = useState(endereco);
  const [imagemE, setImagem] = useState(imagem);

  function abrirModalEditar() {
    setEspecificacao(especificacoes);
    setNomeEletronico(nomeEletronico);
    setInfoProduto(infoProduto);
    setCondicao(condicao);
    setObservacao(observacao);
    setEndereco(endereco);
    setImagem(imagem);
    setIsEditarModalOpen(true);
  }

  function fecharModalEditar() {
    setIsEditarModalOpen(false);
  }

  const [mensagemSucesso, setMensagemSucesso] = useState(null);

  function editarPerfil(event) {
    event.preventDefault();

    const doacaoAtualizada = {
      nomeDoador,
      nomeEletronico: nomeEletronicoE,
      especificacoes: especificacaoE,
      infoProduto: infoProdutoE,
      condicao: condicaoE,
      observacao: observacaoE,
      endereco: enderecoE,
      imagem: imagemE,
      imagem_user: imagem_user,
    };

    if (onEditarDoacao) {
      onEditarDoacao(doacaoAtualizada);
    }

    console.log("Atualizado:", doacaoAtualizada);
    setMensagemSucesso("Informações editadas com sucesso!");

    setTimeout(() => {
      setMensagemSucesso(null);
      fecharModalEditar();
    }, 2000);
  }

  const tipoUsuario = localStorage.getItem("tipoUsuario");

  return (
    <>
      {mensagemSucesso && <PopUpSucesso mensagem={mensagemSucesso} />}
      <div className={styles.info_doacao_container}>
        <div className={styles.info_doacao_conteudos}>
          <div className={styles.info_doacao_lado_esquerdo}>
            <img
              className={styles.doacao_main_img}
              src={imagem}
              alt={nomeEletronico}
            />
            <div className={styles.informacoes_esquerda}>
              <div className={styles.doador_info_esquerda}>
                <h3>Doado por:</h3>
                <div className={styles.info_doador}>
                  <img className={styles.img_doador} src={imagem_user} alt="" />
                  <div className={styles.doador_contato}>
                    <p className={styles.nome_doador}>{nomeDoador}</p>
                    <p className={styles.dataHoraPublicacao}>
                      Publicado 19/05/2025 às 18:02
                    </p>
                    <p className={styles.dataHoraPublicacao}>{endereco}</p>
                    <div className={styles.botao_entrar_em_contato}>
                      {logado &&
                        mostrarContato &&
                        tipoUsuario === "empresa" && (
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
            <h1>{nomeEletronico}</h1>

            <div className={styles.secao_info_direito}>
              <h3>Informações sobre o produto:</h3>
              <p>{infoProduto}</p>
            </div>

            <div className={styles.secao_info_direito}>
              <h3>Condição:</h3>
              <p>{condicao}</p>
            </div>

            <div className={styles.secao_info_direito}>
              <h3>Observação:</h3>
              <p>{observacao}</p>
            </div>

            <div className={styles.especificacoes_conteudo}>
              <h3>Especificações:</h3>
              <p className={styles.especificacoes_p}>{especificacoes}</p>
            </div>

            <div className={styles.botao_agendar_div}>
              {logado && mostrarAgendar && tipoUsuario === "empresa" && (
                <button
                  className={styles.botao_agendar_coleta}
                  onClick={() =>
                    navigate("/agendamento", {
                      state: {
                        produto: nomeEletronico,
                        doador: nomeDoador,
                        endereco: endereco,
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
                    placeholder="Insira o novo nome do eletrônico"
                    onChange={(e) => setNomeEletronico(e.target.value)}
                    required
                  />
                </div>
                <div className={styles.campo}>
                  <label className={styles.label_modal}>Especificação</label>
                  <input
                    className={styles.input}
                    type="text"
                    value={especificacaoE}
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
                    value={enderecoE}
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
                    value={infoProdutoE}
                    placeholder="Insira a nova informação do produto"
                    onChange={(e) => setInfoProduto(e.target.value)}
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
                    value={observacaoE}
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
                        setImagem(file);
                        setImagem(URL.createObjectURL(file));
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
                  onClick={editarPerfil}
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
