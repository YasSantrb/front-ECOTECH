import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "../styles/tela_login.module.css";
import logo from "../assets/imagens/Logo.png";
import planeta from "../assets/imagens/planeta-login.png";
import iconEmail from "../assets/imagens/icon-email.png";
import iconSenha from "../assets/imagens/icon-senha.png";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";

function TelaLogin() {
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const [erroEmail, setErroEmail] = useState("");
  const [erroCpf, setErroCpf] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    let valido = true;

    if (!email.trim()) {
      setErroEmail("Preencha o campo de email.");
      valido = false;
    } else {
      setErroEmail("");
    }

    if (!cpf.trim()) {
      setErroCpf("Preencha o campo de CPF.");
      valido = false;
    } else {
      setErroCpf("");
    }

    if (!senha.trim()) {
      setErroSenha("Preencha o campo de senha.");
      valido = false;
    } else {
      setErroSenha("");
    }

    if (!valido) return;
    setEmail("");
    setCpf("");
    setSenha("");

    navigate("/");
  }

  return (
    <div className={styles.tela_login}>
      <img
        src={fundo_login_cadastro}
        alt="imagem_de_fundo"
        className={styles.background_tela}
      />

      <div className={styles.barra_voltar}>
        <Link className={styles.link_voltar} to="/">
          <img className={styles.icon_voltar} src={icon_voltar} alt="voltar" />
          <p className={styles.nav_p}>VOLTAR</p>
        </Link>
      </div>

      <div className={styles.login_box}>
        <div className={styles.formulario}>
          <div className={styles.logo_container}>
            <img src={logo} alt="logo_ecotech" className={styles.logo} />
          </div>

          <form className={styles.form_login} onSubmit={handleSubmit}>
            <label>Email</label>
            <div className={styles.input_container}>
              <input
                type="email"
                placeholder="Insira seu email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={erroEmail ? styles.erroBorda : ""}
              />
              <img src={iconEmail} alt="" className={styles.input_icon} />
            </div>
            {erroEmail && <span className={styles.erro}>{erroEmail}</span>}
            <label>CPF</label>
            <div className={styles.input_container}>
              <input
                type="text"
                placeholder="Insira seu CPF ou CNPJ*"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                className={erroCpf ? styles.erroBorda : ""}
              />
            </div>
            {erroCpf && <span className={styles.erro}>{erroCpf}</span>}

            <label>Senha</label>
            <div className={styles.input_container}>
              <input
                type="password"
                placeholder="Insira sua senha*"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className={erroSenha ? styles.erroBorda : ""}
              />
              <img src={iconSenha} alt="" className={styles.input_icon} />
            </div>
            {erroSenha && <span className={styles.erro}>{erroSenha}</span>}
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
