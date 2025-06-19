import styles from "../styles/tela_historico_doacoes.module.css";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import icon_aguardando from "../assets/imagens/icon_aguardando.png";
import icon_cancelar from "../assets/imagens/icon_cancelar.png";
import icon_pendente from "../assets/imagens/icon_pendente.png";
import icon_concluido from "../assets/imagens/icon_concluido.png";
import icon_verificar from "../assets/imagens/icon_verificar.png";
import { Link } from "react-router-dom";

function TelaHistoricoDoacoes() {
  return (
    <div className={styles.tela_historico_doacoes}>
      <img
        src={fundo_login_cadastro}
        alt="imagem_de_fundo"
        className={styles.background_tela}
      />
      <Link to="/" className={styles.voltar}>
        <img src={icon_voltar} alt="voltar" className={styles.icone_voltar} />
        VOLTAR
      </Link>

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
                <th>ID Doação</th>
                <th>Item</th>
                <th>Data</th>
                <th>Local</th>
                <th>Receptor</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>D001</td>
                <td>Notebook Positivo</td>
                <td>20/06/2020</td>
                <td>Floriano - PI</td>
                <td>Positivo LTDA</td>
                <td>
                  <span
                    className={`${styles.status_badge} ${styles.concluida}`}
                  >
                    <img
                      src={icon_concluido}
                      alt="Concluída"
                      className={styles.status_icon}
                    />
                    Doação Concluída
                  </span>
                </td>
              </tr>
              <tr>
                <td>D002</td>
                <td>TV Samsung</td>
                <td>04/12/2024</td>
                <td>Teresina - PI</td>
                <td>-</td>
                <td>
                  <span className={`${styles.status_badge} ${styles.pendente}`}>
                    <img
                      src={icon_pendente}
                      alt="Pendente"
                      className={styles.status_icon}
                    />
                    Pendente
                  </span>
                </td>
              </tr>
              <tr>
                <td>D003</td>
                <td>Relógio Ben10</td>
                <td>22/01/2022</td>
                <td>Floriano - PI</td>
                <td>-</td>
                <td>
                  <span
                    className={`${styles.status_badge} ${styles.cancelada}`}
                  >
                    <img
                      src={icon_cancelar}
                      alt="Cancelada"
                      className={styles.status_icon}
                    />
                    Cancelada
                  </span>
                </td>
              </tr>
              <tr>
                <td>D004</td>
                <td>Caixa de Som</td>
                <td>15/12/2024</td>
                <td>Floriano - PI</td>
                <td>Adreiltom Lima</td>
                <td>
                  <span
                    className={`${styles.status_badge} ${styles.aguardando}`}
                  >
                    <img
                      src={icon_aguardando}
                      alt="Aguardando"
                      className={styles.status_icon}
                    />
                    Aguardando Coleta
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Link to="/doacao/pendente">
          <button className={styles.botao_pendentes}>
            <img
              src={icon_verificar}
              alt="verificar"
              className={styles.icon_verificar}
            />
            Visualizar doações pendentes
          </button>
        </Link>
      </div>
    </div>
  );
}

export default TelaHistoricoDoacoes;
