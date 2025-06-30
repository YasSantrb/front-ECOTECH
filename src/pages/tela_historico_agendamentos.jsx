import styles from "../styles/tela_historico_doacoes.module.css";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import icon_aguardando from "../assets/imagens/icon_aguardando.png";
import icon_cancelar from "../assets/imagens/icon_cancelar.png";
import icon_concluido from "../assets/imagens/icon_concluido.png";
import PopUpSucesso from "../components/popUpSucesso";
import { useState } from "react";
import { Link } from "react-router-dom";

function TelaHistoricoAgendamentos() {
  const [agendamentos, setAgendamentos] = useState([
    {
      id: "A1",
      item: "Notebook Positivo",
      dataSolicitacao: "20/06/2020",
      status: "Concluído",
      local: "Rua das Flores, 456",
      dataAgendamento: "22/06/2020",
      horaAgendamento: "09:00",
      observacao: "Recebido pelo porteiro",
      icone: icon_concluido,
      classeStatus: "concluida",
    },
    {
      id: "A2",
      item: "TV Samsung",
      dataSolicitacao: "04/12/2024",
      local: "Teresina - PI",
      status: "Aguardando coleta",
      classeStatus: "aguardando",
      icone: icon_aguardando,
      observacao: "Aguardando confirmação",
    },
    {
      id: "A3",
      item: "Relógio Ben10",
      dataSolicitacao: "21/01/2022",
      local: "-",
      status: "Cancelado",
      classeStatus: "cancelada",
      icone: icon_cancelar,
      observacao: "Agendamento cancelado pelo usuário",
    },
    {
      id: "A4",
      item: "Caixa de Som",
      dataSolicitacao: "15/12/2024",
      status: "Aguardando coleta",
      local: "Rua João Dantas, 123",
      dataAgendamento: "20/12/2024",
      horaAgendamento: "14:00",
      observacao: "Tocar a campainha ao chegar",
      classeStatus: "aguardando",
      icone: icon_aguardando,
    },
  ]);

  const [isModalDetalhesOpen, setIsModalDetalhesOpen] = useState(false);
  const [agendamentoSelecionado, setAgendamentoSelecionado] = useState(null);
  const [mensagemSucesso, setMensagemSucesso] = useState(null);

  const abrirDetalhes = (agendamento) => {
    setAgendamentoSelecionado(agendamento);
    setIsModalDetalhesOpen(true);
  };

  const fecharDetalhes = () => {
    setIsModalDetalhesOpen(false);
    setAgendamentoSelecionado(null);
  };

  const [isExcluirModalOpen, setIsExcluirModalOpen] = useState(false);

  function abrirModalExcluir() {
    setIsExcluirModalOpen(true);
  }

  function fecharModalExcluir() {
    setIsExcluirModalOpen(false);
  }

  const cancelarAgendamento = () => {
    if (!agendamentoSelecionado) return;

    const atualizado = {
      ...agendamentoSelecionado,
      status: "Cancelado",
      classeStatus: "cancelada",
      icone: icon_cancelar,
    };

    setAgendamentos((prev) =>
      prev.map((a) => (a.id === atualizado.id ? atualizado : a))
    );

    setAgendamentoSelecionado(atualizado);
    fecharModalExcluir();
    setMensagemSucesso("Agendamento cancelado com sucesso!");
    setTimeout(() => {
      setMensagemSucesso(null);
    }, 2000);
  };

  const confirmarColeta = () => {
    if (!agendamentoSelecionado) return;

    const atualizado = {
      ...agendamentoSelecionado,
      status: "Concluído",
      classeStatus: "concluida",
      icone: icon_concluido,
    };

    setAgendamentos((prev) =>
      prev.map((a) => (a.id === atualizado.id ? atualizado : a))
    );

    setAgendamentoSelecionado(atualizado);
    setMensagemSucesso("Coleta confirmada com sucesso!");

    setTimeout(() => {
      setMensagemSucesso(null);
      setIsModalDetalhesOpen(false);
    }, 2000);
  };

  return (
    <div className={styles.tela_historico_doacoes}>
      {mensagemSucesso && <PopUpSucesso mensagem={mensagemSucesso} />}
      <img
        src={fundo_login_cadastro}
        alt="imagem_de_fundo"
        className={styles.background_tela}
      />
      <div className={styles.barra_voltar}>
        <Link className={styles.link_voltar} to="/">
          <img className={styles.icon_voltar} src={icon_voltar} alt="voltar" />
          <p className={styles.nav_p}>VOLTAR</p>
        </Link>
      </div>
      <div className={styles.container_verde}>
        <div className={styles.header_container}>
          <h2 className={styles.titulo}>Histórico de Agendamentos</h2>
          <p className={styles.subtitulo}>
            Veja o registro dos seus agendamentos realizados e em andamento
          </p>
        </div>

        <div className={styles.tabela_container}>
          <table className={styles.tabela_doacoes}>
            <thead>
              <tr>
                <th>ID Agendamento</th>
                <th>Item</th>
                <th>Data Solicitação</th>
                <th>Local</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {agendamentos.map((a) => (
                <tr key={a.id}>
                  <td>{a.id}</td>
                  <td>{a.item}</td>
                  <td>{a.dataSolicitacao}</td>
                  <td>{a.local}</td>
                  <td>
                    <span
                      className={`${styles.status_badge} ${
                        styles[a.classeStatus]
                      }`}
                    >
                      <img
                        src={a.icone}
                        alt="Status_bagde"
                        className={styles.status_icon}
                      />
                      {a.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className={styles.botao_detalhes}
                      onClick={() => abrirDetalhes(a)}
                    >
                      Ver detalhes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {isModalDetalhesOpen && (
          <div className={styles.popUpOverlay}>
            <div className={styles.popUpCard}>
              <div className={styles.popUpHeader}>
                <h3 className={styles.popUpTitulo}>Detalhes do Agendamento</h3>
                <button
                  className={styles.popUpBotaoFechar}
                  onClick={fecharDetalhes}
                >
                  &times;
                </button>
              </div>
              <div className={styles.popUpContent}>
                <div className={styles.info_modal}>
                  <p>
                    <strong>Item:</strong> {agendamentoSelecionado?.item}
                  </p>
                  <p>
                    <strong>Status:</strong> {agendamentoSelecionado?.status}
                  </p>
                  <p>
                    <strong>Data da Solicitação:</strong>{" "}
                    {agendamentoSelecionado?.dataSolicitacao}
                  </p>
                  {agendamentoSelecionado?.dataAgendamento && (
                    <p>
                      <strong>Data da Coleta:</strong>{" "}
                      {agendamentoSelecionado.dataAgendamento}
                    </p>
                  )}
                  {agendamentoSelecionado?.horaAgendamento && (
                    <p>
                      <strong>Hora da Coleta:</strong>{" "}
                      {agendamentoSelecionado.horaAgendamento}
                    </p>
                  )}
                  <p>
                    <strong>Local:</strong> {agendamentoSelecionado?.local}
                  </p>
                  {agendamentoSelecionado?.observacao && (
                    <p>
                      <strong>Observação:</strong>{" "}
                      {agendamentoSelecionado.observacao}
                    </p>
                  )}
                </div>

                <div className={styles.popUp_botoes}>
                  {agendamentoSelecionado?.status === "Aguardando coleta" && (
                    <>
                      <button
                        className={styles.botao_cancelar_agendamento}
                        onClick={() => abrirModalExcluir()}
                      >
                        Cancelar coleta
                      </button>
                      <button
                        className={styles.botao_confirmar_agendamento}
                        onClick={confirmarColeta}
                      >
                        Confirmar coleta
                      </button>
                    </>
                  )}
                  {isExcluirModalOpen && (
                    <div className={styles.popUpOverlay}>
                      <div className={styles.popUpCard}>
                        <div className={styles.popUpHeader}>
                          <h3 className={styles.popUpTitulo}>
                            Cancelar agendamento
                          </h3>
                          <button
                            className={styles.popUpBotaoFechar}
                            onClick={fecharModalExcluir}
                          >
                            &times;
                          </button>
                        </div>
                        <div className={styles.popUpContent}>
                          <p className={styles.modal_informacoes_p}>
                            Você tem certeza que deseja cancelar esse
                            agendamento?
                          </p>
                          <div className={styles.popUp_botoes}>
                            <button
                              className={styles.botao_cancelar_agendamento}
                              onClick={fecharModalExcluir}
                            >
                              Cancelar
                            </button>
                            <button
                              className={styles.botao_confirmar_agendamento}
                              onClick={cancelarAgendamento}
                            >
                              Confirmar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TelaHistoricoAgendamentos;
