import { Link } from "react-router-dom";
import styles from "../styles/tela_inicial.module.css";

function TelaInicial() {
  return (
    <div className={styles.tela_inicial}>
      <img
        src="src/assets/imagens/Tela inicial (2).png"
        alt="imagem_de_fundo"
        className={styles.background_tela_inicial}
      />

      <nav>
        <div className={styles.menu}>
          <img src="src/assets/imagens/Logo.png" alt="logo_ecotech" />
          <ul className={styles.lista_inicial}>
            <li>
              <Link className={styles.link} to="/login">
                Login
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/cadastro">
                Criar conta
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/sobre/nos">Sobre nós</Link>
            </li>
          </ul>
        </div>
      </nav>

      <main>
        <div className={styles.conteudo_inicial}>
          <div className={styles.conteudos_textuais}>
            <h1 className={styles.titulo_inicial}>Plataforma de doações</h1>
            <p className={styles.descricao_inicial}>
              Dê um destino correto aos seus eletrônicos e contribua para um
              futuro mais <span className={styles.descricao_verde}> verde!</span>
            </p>
          </div>

          <div className={styles.botao}>
            <Link to="/">
            <button className={styles.botao_inicial}> Faça sua doação!</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TelaInicial;
