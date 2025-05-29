import styles from "../styles/tela_cadastro.module.css";
import Logo from "../assets/imagens/Logo.png";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";

function TelaCadastro() {
  return (
    <div className={styles.conteiner}>
      <img
        src={fundo_login_cadastro}
        alt="imagem_de_fundo"
        className={styles.background}
      />

      <form className={styles.formulario_cadastro}>
        <img src={Logo} />
        <h1 className={styles.titulo_cadastro}>Insira os seus dados</h1>
        <div className={styles.divmae}>
          <div className={styles.item}>
            <p className={styles.cadastro_p}>Nome do Usuário</p>
            <input
              className={styles.input_cadastro}
              placeholder="Insira seu nome de usuário*"
              name="Nome"
              type="text"
            />
            <p className={styles.cadastro_p}>Email</p>
            <input
              className={styles.input_cadastro}
              placeholder="Insira o seu email*"
              name="Email"
              type="email"
            />
            <p className={styles.cadastro_p}>Senha</p>
            <input
              className={styles.input_cadastro}
              placeholder="Insira a sua senha*"
              name="Senha"
              type="password"
            />
          </div>
          <div className={styles.item}>
            <p className={styles.cadastro_p}>Confirmar senha</p>
            <input
              className={styles.input_cadastro}
              placeholder="Confirme a sua senha*"
              name="Confirmar-senha"
              type="password"
            />
            <p className={styles.cadastro_p}>CPF/CNPJ</p>
            <input
              className={styles.input_cadastro}
              type="text"
              name="CPF/CNPJ"
              placeholder="Insira seu CPF ou CNPJ"
            />
            <p className={styles.cadastro_p}>Tipo de usuário</p>
            <div className={styles.form_group}>
              <select name="tipoUsuario">
                <option value="doador">Doador</option>
                <option value="empresa">Empresa</option>
              </select>
            </div>
          </div>
        </div>
        <button className={styles.botao_cadastro} type="button">
          Cadastrar
        </button>
        <p className={styles.cadastro_p}>Já é cadastrado? Faça Login</p>
      </form>
    </div>
  );
}

export default TelaCadastro;
