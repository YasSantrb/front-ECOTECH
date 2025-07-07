import styles from "../styles/tela_historico_doacoes.module.css";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import icon_cancelar from "../assets/imagens/icon_cancelar.png";
import icon_pendente from "../assets/imagens/icon_pendente.png";
import icon_concluido from "../assets/imagens/icon_concluido.png";
import PopUpSucesso from "../components/popUpSucesso";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function TelaHistoricoDoacoes() {
  const navigate = useNavigate();
  const [doacoes, setDoacoes] = useState([
    {
      id: "1",
      item: "Televisão de tubo",
      data: "20/06/2025",
      local: "Rua João Dantas, 677",
      status: "Pendente",
      receptor: "-",
      icone: icon_pendente,
      classeStatus: "pendente",
    },
    {
      id: "2",
      item: "Placa-mãe ASUS",
      data: "19/05/2025",
      receptor: "Positivo LTDA",
      local: "Floriano - PI",
      endereco: "Rua João Dantas, 677",
      dataAgendamento: "22/06/2020",
      horaAgendamento: "09:00",
      observacao: "Esteja em casa na hora marcada!",
      status: "Concluída",
      classeStatus: "concluida",
      icone: icon_concluido,
    },
    {
      id: "3",
      item: "Tablet Samsung",
      data: "13/05/2025",
      local: "Floriano - PI",
      endereco: "Rua João Dantas, 677",
      dataAgendamento: "22/06/2020",
      horaAgendamento: "09:00",
      observacao: "Esteja em casa na hora marcada!",
      receptor: "Amazon",
      status: "Concluída",
      classeStatus: "concluida",
      icone: icon_concluido,
    },
    {
      id: "4",
      item: "Computador antigo",
      data: "02/05/2025",
      local: "Floriano - PI",
      endereco: "Rua João Dantas, 677",
      dataAgendamento: "22/06/2020",
      horaAgendamento: "09:00",
      observacao: "Esteja em casa na hora marcada!",
      receptor: "Amazon",
      status: "Concluída",
      classeStatus: "concluida",
      icone: icon_concluido,
    },
  ]);

  const [isModalDetalhesOpen, setIsModalDetalhesOpen] = useState(false);
  const [doacaoSelecionada, setDoacaoSelecionada] = useState(null);
  const [mensagemSucesso, setMensagemSucesso] = useState(null);

  const abrirDetalhes = (doacao) => {
    setDoacaoSelecionada(doacao);
    setIsModalDetalhesOpen(true);
  };

  const fecharDetalhes = () => {
    setIsModalDetalhesOpen(false);
    setDoacaoSelecionada(null);
  };

  const cancelarAgendamento = () => {
    if (!doacaoSelecionada) return;

    const atualizado = {
      ...doacaoSelecionada,
      status: "Cancelado",
      classeStatus: "cancelada",
      icone: icon_cancelar,
    };

    setDoacoes((prevDoacoes) =>
      prevDoacoes.map((doacao) =>
        doacao.id === atualizado.id ? atualizado : doacao
      )
    );

    setDoacaoSelecionada(atualizado);
    fecharModalExcluir();
    setMensagemSucesso("Doação cancelada com sucesso!");
    setTimeout(() => {
      setMensagemSucesso(null);
    }, 2000);
  };

  const [isExcluirModalOpen, setIsExcluirModalOpen] = useState(false);

  function abrirModalExcluir() {
    setIsExcluirModalOpen(true);
  }

  function fecharModalExcluir() {
    setIsExcluirModalOpen(false);
  }

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
          <h2 className={styles.titulo}>Histórico de Doações</h2>
          <p className={styles.subtitulo}>
            Veja o registro das suas doações realizadas e em andamento
          </p>
        </div>

        <div className={styles.tabela_container}>
          <table className={styles.tabela_doacoes}>
            <thead>
              <tr>
                <th>Item</th>
                <th>Data</th>
                <th>Endereço</th>
                <th>Receptor</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {doacoes.map((d) => (
                <tr key={d.id}>
                  <td>{d.item}</td>
                  <td>{d.data}</td>
                  <td>{d.endereco ?? d.local}</td>
                  <td>{d.receptor}</td>
                  <td>
                    <span
                      className={`${styles.status_badge} ${
                        styles[d.classeStatus]
                      }`}
                    >
                      <img
                        src={d.icone}
                        alt="Status_bagde"
                        className={styles.status_icon}
                      />
                      {d.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className={styles.botao_detalhes}
                      onClick={() => abrirDetalhes(d)}
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
                <h3 className={styles.popUpTitulo}>Detalhes da Doação</h3>
                <button
                  className={styles.popUpBotaoFechar}
                  onClick={fecharDetalhes}
                >
                  &times;
                </button>
              </div>
              <div className={styles.popUpContent}>
                <div className={styles.info_modal}>
                  {doacaoSelecionada?.receptor !== "-" && (
                    <p>
                      <strong>Receptor:</strong> {doacaoSelecionada.receptor}
                    </p>
                  )}

                  <p>
                    <strong>Status:</strong> {doacaoSelecionada.status}
                  </p>

                  {(doacaoSelecionada.status === "Aguardando coleta" ||
                    doacaoSelecionada.status === "Concluída") && (
                    <>
                      <p>
                        <strong>Data da Coleta:</strong>{" "}
                        {doacaoSelecionada.dataAgendamento}
                      </p>
                      <p>
                        <strong>Hora da Coleta:</strong>{" "}
                        {doacaoSelecionada.horaAgendamento}
                      </p>
                      <p>
                        <strong>Endereço do Doador:</strong>{" "}
                        {doacaoSelecionada.endereco}
                      </p>
                      {doacaoSelecionada.observacao && (
                        <p>
                          <strong>Observação:</strong>{" "}
                          {doacaoSelecionada.observacao}
                        </p>
                      )}
                    </>
                  )}

                  {doacaoSelecionada.status === "Pendente" && (
                    <p>
                      <strong>Situação:</strong> Aguardando confirmação de
                      empresa
                    </p>
                  )}
                </div>

                <div className={styles.popUp_botoes}>
                  {doacaoSelecionada?.status !== "Concluída" &&
                    doacaoSelecionada?.status !== "Cancelado" && (
                      <button
                        className={styles.botao_cancelar_agendamento}
                        onClick={abrirModalExcluir}
                      >
                        Cancelar doação
                      </button>
                    )}

                  <button
                    className={styles.botao_confirmar_agendamento}
                    onClick={() => {
                      navigate(`/info/doacao/${doacaoSelecionada.id}`, {
                        state: { modo: "gerenciar" },
                      });
                    }}
                  >
                    Ver doação
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {isExcluirModalOpen && (
          <div className={styles.popUpOverlay}>
            <div className={styles.popUpCard}>
              <div className={styles.popUpHeader}>
                <h3 className={styles.popUpTitulo}>Cancelar doação</h3>
                <button
                  className={styles.popUpBotaoFechar}
                  onClick={fecharModalExcluir}
                >
                  &times;
                </button>
              </div>
              <div className={styles.popUpContent}>
                <p className={styles.modal_informacoes_p}>
                  Você tem certeza que deseja cancelar essa doação?
                </p>
                <div className={styles.popUp_botoes}>
                  <button
                    className={styles.botao_cancelar_agendamento}
                    onClick={fecharModalExcluir}
                  >
                    Cancelar
                  </button>
                  {doacaoSelecionada?.status !== "Concluída" &&
                    doacaoSelecionada?.status !== "Cancelada" && (
                      <button
                        className={styles.botao_confirmar_agendamento}
                        onClick={cancelarAgendamento}
                        disabled={doacaoSelecionada?.status === "Cancelada"}
                      >
                        Confirmar
                      </button>
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

export default TelaHistoricoDoacoes;
