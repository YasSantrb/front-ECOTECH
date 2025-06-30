import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/tela_login.module.css";
import logo from "../assets/imagens/Logo.png";
import planeta from "../assets/imagens/planeta-login.png";
import iconSenha from "../assets/imagens/icon-senha.png";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";

function TelaEsqueciMinhaSenha() {
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const [erroNovaSenha, setErroNovaSenha] = useState("");
  const [erroConfirmarSenha, setErroConfirmarSenha] = useState("");

  const navigate = useNavigate();


  function handleSubmit(e) {
    e.preventDefault();

    let valido = true;

    setErroNovaSenha("");
    setErroConfirmarSenha("");

    if (!novaSenha.trim()) {
      setErroNovaSenha("Preencha o campo de nova senha.");
      valido = false;
    } else if (novaSenha.length < 6) { 
        setErroNovaSenha("A nova senha deve ter no mínimo 6 caracteres.");
        valido = false;
    }

    if (!confirmarSenha.trim()) {
      setErroConfirmarSenha("Preencha o campo de confirmar senha.");
      valido = false;
    }

    if (novaSenha.trim() && confirmarSenha.trim() && novaSenha !== confirmarSenha) {
      setErroConfirmarSenha("As senhas não coincidem.");
      valido = false;
    }

    if (!valido) {
      return; 
    }

    console.log("Nova senha definida:", novaSenha);

    setNovaSenha("");
    setConfirmarSenha("");

    navigate("/login");
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
              <label htmlFor="novaSenhaInput">Nova senha</label>
              <input
                id="novaSenhaInput"
                type={mostrarSenha ? "text" : "password"}
                placeholder="Insira a nova senha*"
                value={novaSenha}
                onChange={(e) => setNovaSenha(e.target.value)}
                className={erroNovaSenha ? styles.erroBorda : ""}
              />
              <img
                src={iconSenha}
                alt="Mostrar senha"
                className={styles.input_icon}
                onClick={() => setMostrarSenha(!mostrarSenha)}
                style={{ cursor: "pointer" }}
              />
              {erroNovaSenha && <span className={styles.erro}>{erroNovaSenha}</span>}
            </div>

            <div className={styles.input_container}>
              <label htmlFor="confirmarSenhaInput">Confirmar senha</label>
              <input
                id="confirmarSenhaInput"
                type={mostrarSenha ? "text" : "password"}
                placeholder="Confirme a nova senha*"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
                className={erroConfirmarSenha ? styles.erroBorda : ""}
              />
              <img
                src={iconSenha}
                alt="Mostrar senha"
                className={styles.input_icon}
                onClick={() => setMostrarSenha(!mostrarSenha)}
                style={{ cursor: "pointer" }}
              />
              {erroConfirmarSenha && <span className={styles.erro}>{erroConfirmarSenha}</span>}
            </div>

            <button className={styles.botao_login} type="submit">
              Redefinir Senha
            </button>
          </form>
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

export default TelaEsqueciMinhaSenha;