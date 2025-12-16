import styles from "../styles/tela_historico_doacoes.module.css";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import icon_pendente from "../assets/imagens/icon_pendente.png";
import icon_concluido from "../assets/imagens/icon_concluido.png";
import icon_cancelar from "../assets/imagens/icon_cancelar.png"; 
import PopUpSucesso from "../components/popUpSucesso";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGetMinhasDoacoes from "../hooks/doacoes/useGetMinhasDoacoes";
import api from "../services/api.ts"; 

function TelaHistoricoDoacoes() {
  const navigate = useNavigate();
  const [doacoes, setDoacoes] = useState([]);
  const { doacoes: doacoesAPI } = useGetMinhasDoacoes();

  const [isModalDetalhesOpen, setIsModalDetalhesOpen] = useState(false);
  const [isExcluirModalOpen, setIsExcluirModalOpen] = useState(false);
  const [doacaoSelecionada, setDoacaoSelecionada] = useState(null);
  const [mensagemSucesso, setMensagemSucesso] = useState(null);

  useEffect(() => {
    if (doacoesAPI && doacoesAPI.length > 0) {
      const doacoesFormatadas = doacoesAPI.map((doacao) => {
        const statusDaDoacao = doacao.status || "Pendente";
        
        let classeStatus = "pendente";
        let iconeStatus = icon_pendente;

        if (statusDaDoacao === "Concluída") {
          classeStatus = "concluida";
          iconeStatus = icon_concluido;
        } else if (statusDaDoacao === "Cancelado") {
          classeStatus = "cancelada";
          iconeStatus = icon_cancelar;
        }

        return {
          ...doacao,
          data: new Date(doacao.criado_em).toLocaleDateString("pt-BR"),
          receptor: doacao.receptor || "-",
          status: statusDaDoacao,
          classeStatus: classeStatus,
          icone: iconeStatus,
        };
      });
      setDoacoes(doacoesFormatadas);
    }
  }, [doacoesAPI]);

  const abrirDetalhes = (doacao) => {
    setDoacaoSelecionada(doacao);
    setIsModalDetalhesOpen(true);
  };

  const fecharDetalhes = () => {
    setIsModalDetalhesOpen(false);
    setDoacaoSelecionada(null);
  };

  const abrirModalExcluir = () => setIsExcluirModalOpen(true);
  const fecharModalExcluir = () => setIsExcluirModalOpen(false);

  const excluirDoacaoPermanente = async () => {
    if (!doacaoSelecionada) return;

    try {
      const response = await api.delete(`minhas_doacoes/${doacaoSelecionada.id}/`);
      if (response.status === 204 || response.status === 200) {
        setDoacoes((prev) => prev.filter((d) => d.id !== doacaoSelecionada.id));
        setMensagemSucesso("Doação excluída com sucesso!");
        fecharModalExcluir();
        fecharDetalhes();

        setTimeout(() => {
          setMensagemSucesso(null);
        }, 2000);
      }
    } catch (err) {
      console.error("Erro ao excluir doação:", err);
      alert("Erro ao excluir doação do servidor.");
    }
  };

  return (
    <div className={styles.tela_historico_doacoes}>
      {mensagemSucesso && <PopUpSucesso mensagem={mensagemSucesso} />}
      
      <img src={fundo_login_cadastro} alt="fundo" className={styles.background_tela} />

      <div className={styles.barra_voltar}>
        <Link className={styles.link_voltar} to="/">
          <img className={styles.icon_voltar} src={icon_voltar} alt="voltar" />
          <p className={styles.nav_p}>VOLTAR</p>
        </Link>
      </div>

      <div className={styles.container_verde}>
        <div className={styles.header_container}>
          <h2 className={styles.titulo}>Histórico de Doações</h2>
          <p className={styles.subtitulo}>Gerencie suas doações registradas</p>
        </div>

        <div className={styles.tabela_container}>
          <table className={styles.tabela_doacoes}>
            <thead>
              <tr>
                <th>Nome</th>
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
                  <td>{d.nome_doacao}</td>
                  <td>{d.data}</td>
                  <td>{d.endereco}</td>
                  <td>{d.receptor}</td>
                  <td>
                    <span className={`${styles.status_badge} ${styles[d.classeStatus]}`}>
                      <img src={d.icone} alt="icon" className={styles.status_icon} />
                      {d.status}
                    </span>
                  </td>
                  <td>
                    <button className={styles.botao_detalhes} onClick={() => abrirDetalhes(d)}>
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
                <button className={styles.popUpBotaoFechar} onClick={fecharDetalhes}>&times;</button>
              </div>
              <div className={styles.popUpContent}>
                <div className={styles.info_modal}>
                  <p><strong>Nome:</strong> {doacaoSelecionada?.nome_doacao}</p>
                  <p><strong>Status:</strong> {doacaoSelecionada?.status}</p>
                  <p><strong>Endereço:</strong> {doacaoSelecionada?.endereco}</p>
                </div>

                <div className={styles.popUp_botoes}>
                  <button className={styles.botao_cancelar_agendamento} onClick={abrirModalExcluir}>
                    Excluir Doação
                  </button>
                  <button 
                    className={styles.botao_confirmar_agendamento}
                    onClick={() => navigate(`/info/doacao/${doacaoSelecionada.id}`, { state: { modo: "gerenciar" } })}
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
                <h3 className={styles.popUpTitulo}>Excluir permanentemente</h3>
                <button className={styles.popUpBotaoFechar} onClick={fecharModalExcluir}>&times;</button>
              </div>
              <div className={styles.popUpContent}>
                <p className={styles.modal_informacoes_p}>
                  Esta ação não pode ser desfeita. Deseja mesmo excluir esta doação?
                </p>
                <div className={styles.popUp_botoes}>
                  <button className={styles.botao_cancelar_agendamento} onClick={fecharModalExcluir}>
                    Voltar
                  </button>
                  <button className={styles.botao_confirmar_agendamento} onClick={excluirDoacaoPermanente}>
                    Confirmar Exclusão
                  </button>
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