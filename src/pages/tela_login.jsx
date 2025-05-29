import styles from "../styles/tela_login.module.css";
import logo from "../assets/imagens/Logo.png";
import planeta from "../assets/imagens/planeta-login.png";
import iconEmail from "../assets/imagens/icon-email.png";
import iconSenha from "../assets/imagens/icon-senha.png";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";

function TelaLogin() {
  return (
    <div className={styles.tela_login}>
      <img
        src={fundo_login_cadastro}
        alt="imagem_de_fundo"
        className={styles.background_tela}
      />
      
      <div className={styles.login_box}>
        <div className={styles.formulario}>
          <div className={styles.logo_container}>
            <img src={logo} alt="logo_ecotech" className={styles.logo} />
          </div>
          <form className={styles.form_login}>
            <label>Email</label>
            <div className={styles.input_container}>
              <input type="email" placeholder="Insira seu email*" required />
              <img src={iconEmail} alt="ícone email" className={styles.input_icon} />
            </div>

            <label>CPF</label>
            <div className={styles.input_container}>
              <input
                type="text"
                placeholder="Insira seu CPF ou CNPJ*"
                required
              />
            </div>

            <label>Senha</label>
            <div className={styles.input_container}>
              <input type="password" placeholder="Insira sua senha*" required />
              <img src={iconSenha} alt="ícone senha" className={styles.input_icon} />
            </div>

            <button className={styles.botao_login} type="submit">
              Enviar
            </button>
          </form>

          <p className={styles.Cadastro}>
            Ainda não é cadastrado? <a href="/cadastro">Cadastre-se</a>
          </p>
        </div>

        <div className={styles.linha_vertical}></div>

        <div className={styles.texto_direita}>
          <p className={styles.frase}>
            Doe seu lixo eletrônico
            <br />e cuide do planeta!
          </p>
          <img src={planeta} alt="planeta" className={styles.img_planeta} />
        </div>
      </div>
    </div>
  );
}

export default TelaLogin;
