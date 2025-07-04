import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/tela_login.module.css";
import logo from "../assets/imagens/Logo.png";
import planeta from "../assets/imagens/planeta-login.png";
import iconEmail from "../assets/imagens/icon-email.png";
import iconSenha from "../assets/imagens/icon-senha.png";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import { Link } from "react-router-dom";

function TelaLogin() {
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const [erroEmail, setErroEmail] = useState("");
  const [erroCpf, setErroCpf] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validarSenha(senha) {
    return senha.length >= 6;
  }

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    let valido = true;

    setErroEmail("");
    setErroCpf("");
    setErroSenha("");

    if (!email.trim()) {
      setErroEmail("Preencha o email.");
      valido = false;
    } else if (!validarEmail(email)) {
      setErroEmail("Email inválido.");
      valido = false;
    } else {
      setErroEmail("");
    }

    if (!cpf.trim()) {
      setErroCpf("Preencha o campo de CPF ou CNPJ.");
      valido = false;
    }

    if (!senha.trim()) {
      setErroSenha("Preencha a senha.");
      valido = false;
    } else if (!validarSenha(senha)) {
      setErroSenha("Senha deve ter pelo menos 6 caracteres.");
      valido = false;
    } else {
      setErroSenha("");
    }

    if (!valido) return;

    const cpfNumeros = cpf.replace(/\D/g, "");

    if (cpfNumeros.length === 11) {
      localStorage.setItem("tipoUsuario", "doador");
    } else if (cpfNumeros.length === 14) {
      localStorage.setItem("tipoUsuario", "empresa");
    } else {
      setErroCpf("CPF ou CNPJ inválido.");
      return;
    }

    localStorage.setItem("logado", "true");

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
        <button
          className={styles.link_chat_voltar}
          onClick={() => navigate(-1)}
        >
          <img className={styles.icon_voltar_chat} src={icon_voltar} alt="" />
          <p className={styles.nav_chat_p}>VOLTAR</p>
        </button>
      </div>

      <div className={styles.login_box}>
        <div className={styles.formulario}>
          <form className={styles.form_login} onSubmit={handleSubmit}>
            <div className={styles.logo_cent}>
              <img src={logo} alt="logo_ecotech" className={styles.logo} />
            </div>

            <div className={styles.input_container}>
              <label htmlFor="emailInput">Email</label>
              <input
                id="emailInput"
                type="email"
                placeholder="Insira seu email*"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={erroEmail ? styles.erroBorda : ""}
              />
              <img src={iconEmail} alt="" className={styles.input_icon} />
              {erroEmail && <span className={styles.erro}>{erroEmail}</span>}
            </div>

            <div className={styles.input_container}>
              <label htmlFor="cpfCnpjInput">CPF ou CNPJ</label>
              <input
                id="cpfCnpjInput"
                type="text"
                placeholder="Insira seu CPF ou CNPJ"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                className={erroCpf ? styles.erroBorda : ""}
              />
              {erroCpf && <span className={styles.erro}>{erroCpf}</span>}
            </div>

            <div className={styles.input_container}>
              <label htmlFor="senhaInput">Senha</label>
              <input
                id="senhaInput"
                type={mostrarSenha ? "text" : "password"}
                placeholder="Insira sua senha*"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className={erroSenha ? styles.erroBorda : ""}
              />
              <img
                src={iconSenha}
                alt="Mostrar senha"
                className={styles.input_icon}
                onClick={() => setMostrarSenha(!mostrarSenha)}
                style={{ cursor: "pointer" }}
              />
              {erroSenha && <span className={styles.erro}>{erroSenha}</span>}
            </div>

            <div className={styles.esqueci_a_senha}>
              <Link className={styles.link} to="/esqueci/minha/senha">
                Esqueceu a senha?
              </Link>
            </div>

            <button className={styles.botao_login} type="submit">
              Entrar
            </button>
          </form>
          <p className={styles.Cadastro}>
            Ainda não é cadastrado?{" "}
            <Link className={styles.link} to="/cadastro">
              Cadastre-se
            </Link>
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
