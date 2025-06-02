import styles from "../styles/tela_sobre_nos.module.css";
import fundo from "../assets/imagens/Tela inicial (2).png";
import logo from "../assets/imagens/Logo.png";
import { Link } from "react-router-dom";

function TelaSobreNos() {
  return (
    <>
      <div>
        <img src={fundo} className={styles.background} />
        <nav>
          <div className={styles.menu}>
            <img alt="logo_ecotech" src={logo}  id="logo" />
            <ul className={styles.lista_inicial}>
              <li>
                <Link className={styles.link} to="/login">
                  Home
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/cadastro">
                  Login
                </Link>
              </li>
              <li>
                <Link className={styles.link} to="/sobre/nos">
                  Criar Conta
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div>
          <h2>Sobre Nós</h2>
          <p>
            Somos uma plataforma dedicada a facilitar o descarte consciente de
            lixo eletrônico. Nosso objetivo é conectar pessoas a empresas
            especializadas na reciclagem e reaproveitamento de e-lixo,
            promovendo um futuro mais sustentável.
          </p>
        </div>
        <div>
          <h2>Nossa Missão </h2>
          <p>
            Combater o descarte inadequado de resíduos eletrônicos, preservando
            o meio ambiente e incentivando práticas sustentáveis através de
            conexões simples e acessíveis.{" "}
          </p>
        </div>
        <div>
          <h2>Nossos Valores</h2>
          <p>
            <strong>Sustentabilidade:</strong> Promover práticas que respeitem o
            meio ambiente.
            <br />
            <strong>Conexão:</strong> Aproximar pessoas e empresas para soluções
            ecológicas.
            <br />
            <strong>Inovação:</strong> Aplicar tecnologia para um mundo melhor.
            <br />
          </p>
        </div>
      </div>
    </>
  );
}

export default TelaSobreNos;
