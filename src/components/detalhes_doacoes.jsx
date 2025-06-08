import { Link } from "react-router-dom";
import styles from "../styles/tela_info_doacao.module.css";

function InformacoesDoacaoComponente({
  nomeDoador,
  especificacoes,
  nomeEletronico,
  infoProduto,
  condicao,
  observacao,
  imagem,
}) {
  return (
    <div className={styles.info_doacao_container}>
      <div className={styles.info_doacao_content_wrapper}>
        <div className={styles.info_doacao_left_side}>
          <img
            className={styles.doacao_main_img}
            src={imagem}
            alt={nomeEletronico}
          />
          <div className={styles.botao_entrar_em_contato}>
            <Link className={styles.link_entrar_em_contato} to="/chat">
              <span className={styles.tag_disponibilidade}>
                Entrar em contato!
              </span>
            </Link>
          </div>
          <div className={styles.informacoes_esquerda}>
            <div className={styles.doador_info_block}>
              <i className="fa-solid fa-user doador_icon"></i>
              <h3>Doador:</h3>
              <p>{nomeDoador}</p>
            </div>
            <div className={styles.especificacoes_block}>
              <i className="fa-solid fa-file-lines especificacoes_icon"></i>
              <div className={styles.especificacoes_content}>
                <h3>Especificações:</h3>
                <p className={styles.especificacoes_p}>{especificacoes}</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.info_doacao_right_side}>
          <h1>{nomeEletronico}</h1>

          <div className={styles.info_section}>
            <h3>Informações sobre o produto:</h3>
            <p>{infoProduto}</p>
          </div>

          <div className={styles.info_section}>
            <h3>Condição:</h3>
            <p>{condicao}</p>
          </div>

          <div className={styles.info_section}>
            <h3>Observação:</h3>
            <p>{observacao}</p>
          </div>

          <div className={styles.botao_agendar_div}>
            <button className={styles.botao_agendar_coleta}>
              {" "}
              <Link className={styles.agendar_coleta_link} to="/agendamento">
                {" "}
                Agendar coleta!
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformacoesDoacaoComponente;
