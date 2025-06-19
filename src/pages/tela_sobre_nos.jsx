import styles from "../styles/tela_sobre_nos.module.css";
import fundo from "../assets/imagens/Tela inicial (2).png";
import logo from "../assets/imagens/Logo.png";
import { Link } from "react-router-dom";

function TelaSobreNos() {
  return (
    <div className={styles.container}>
      <img src={fundo} className={styles.background} alt="fundo" />

      <nav className={styles.nav}>
        <div className={styles.menu}>
          <img alt="logo_ecotech" src={logo} className={styles.logo} />
          <ul className={styles.lista_inicial}>
            <li>
              <Link className={styles.link} to="/">
                Feed
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/cadastro">
                Criar Conta
              </Link>
            </li>
          </ul>
        </div>
      </nav>

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
