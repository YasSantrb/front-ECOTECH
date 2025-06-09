import { Link } from "react-router-dom";
import styles from "../styles/tela_info_doacao.module.css";
import icon_user from "../assets/imagens/ceo.png";
import icon_sucesso from "../assets/imagens/checked 2.png";

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
      <div className={styles.info_doacao_conteudos}>
        <div className={styles.info_doacao_lado_esquerdo}>
          <img
            className={styles.doacao_main_img}
            src={imagem}
            alt={nomeEletronico}
          />
          <div className={styles.informacoes_esquerda}>
            <div className={styles.doador_info_esquerda}>
              <h3>Status:</h3>
              <div className={styles.info_status}>
                <img className={styles.img_sucesso} src={icon_sucesso} alt="" />
                <p className={styles.nome_doador}>Disponível</p>
              </div>
            </div>

            <div className={styles.doador_info_esquerda}>
              <h3>Doado por:</h3>
              <div className={styles.info_doador}>
                <img className={styles.img_doador} src={icon_user} alt="" />
                <div className={styles.doador_contato}>
                  <p className={styles.nome_doador}>{nomeDoador}</p>
                  <p className={styles.dataHoraPublicacao}>
                    Publicado 19/05/2025 às 18:02
                  </p>
                  <p className={styles.dataHoraPublicacao}>
                    Localizacao: Floriano - PI
                  </p>
                  <div className={styles.botao_entrar_em_contato}>
                    <Link className={styles.link_entrar_em_contato} to="/chat">
                      <span className={styles.tag_disponibilidade}>
                        Entrar em contato!
                      </span>
                    </Link>
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
