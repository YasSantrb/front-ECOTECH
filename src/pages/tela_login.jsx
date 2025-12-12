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
import axios from "axios";
import api from "../services/api";

function TelaLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [erroEmail, setErroEmail] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const navigate = useNavigate();

  const redirectUserTo = (userType) => {
    const tipoUsuario = userType ? userType.trim().toUpperCase() : null;
    if (tipoUsuario === "DOADOR"){
      return "/";
    } else if (tipoUsuario === "EMPRESA"){
      return "/"
    } else {
      return "/";
    }
  };

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim() || !senha.trim()) {
      setErroEmail(!email.trim() ? "Por favor, insira o seu email!" : "");
      setErroSenha(!senha.trim() ? "Por favor, insira a sua senha!" : "");
      return;
    }

    setErroEmail("");
    setErroSenha("");

    const body = {
      email: email,
      password: senha,
    };

    try {
      const response = await api.post("login/", body);
      const { token, profile, usuario_id, username, email  } = response.data;
      const tipo_usuario = profile?.tipo_usuario;
      const informacoes_usuario = { usuario_id, username, email, profile };

      if (token) {
        localStorage.setItem("authToken", token);
        localStorage.setItem("logado", "true");

        if (tipo_usuario) {
          localStorage.setItem("userType", tipo_usuario);
        }
        if (informacoes_usuario) {
          localStorage.setItem("userData", JSON.stringify(informacoes_usuario));
        }

        const route = redirectUserTo(tipo_usuario?.trim());
        navigate(route);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const statusResponse = error.response?.status;
        const errorMessage =
          error.response?.data?.erro || "Erro inesperado de servidor.";

        setErroSenha("");

        if (statusResponse === 400) {
          setErroSenha("Preencha os campos corretamente!");
        } else if (statusResponse === 401) {
          setErroSenha("E-mail ou senha incorretos!");
        } else if (statusResponse === 403) {
          setErroSenha("Usuário não autorizado no sistema!");
        } else if (statusResponse === 500) {
          setErroSenha("Erro interno do servidor! Contate o suporte.");
        } else {
          setErroSenha(errorMessage);
        }
      } else {
        setErroSenha("Erro de conexão. Verifique sua rede.");
      }
    }
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
              "ENTRAR"
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
