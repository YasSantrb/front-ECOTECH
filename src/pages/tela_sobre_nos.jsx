import styles from "../styles/tela_sobre_nos.module.css";
import fundo from "../assets/imagens/Tela inicial (2).png";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import { Link } from "react-router-dom";

function TelaSobreNos() {
  return (
    <div className={styles.container}>
      <img src={fundo} className={styles.background} alt="fundo" />

      <div className={styles.top_bar_doacao}>
        <Link to="/" className={styles.voltar}>
          <img src={icon_voltar} alt="voltar" className={styles.icone_voltar} />
          <p className={styles.nav_chat_p}>VOLTAR</p>
        </Link>
      </div>

      <div>
        <h2 className={styles.titulo}>Sobre Nós</h2>
        <p className={styles.paragrafo}>
          Somos uma plataforma dedicada a facilitar o descarte consciente de
          lixo eletrônico. Nosso objetivo é conectar pessoas a empresas
          especializadas na reciclagem e reaproveitamento de e-lixo, promovendo
          um futuro mais sustentável.
        </p>
      </div>

      <div>
        <h2 className={styles.titulo}>Nossa Missão</h2>
        <p className={styles.paragrafo}>
          Combater o descarte inadequado de resíduos eletrônicos, preservando o
          meio ambiente e incentivando práticas sustentáveis através de conexões
          simples e acessíveis.
        </p>
      </div>

      <div>
        <h2 className={styles.titulo}>Nossos Valores</h2>
        <p className={styles.paragrafo}>
          <strong>Sustentabilidade:</strong> Promover práticas que respeitem o
          meio ambiente.
          <br />
          <strong>Conexão:</strong> Aproximar pessoas e empresas para soluções
          ecológicas.
          <br />
          <strong>Inovação:</strong> Aplicar tecnologia para um mundo melhor.
        </p>
      </div>
    </div>
  );
}

export default TelaSobreNos;
