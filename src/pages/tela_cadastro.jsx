import styles from "../styles/tela_cadastro.module.css";
import Logo from "../assets/imagens/Logo.png";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function TelaCadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("");

  const [erroNome, setErroNome] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroCpf, setErroCpf] = useState("");
  const [erroTelefone, setErroTelefone] = useState("");
  const [erroCep, setErroCep] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [erroConfirmarSenha, setErroConfirmarSenha] = useState("");
  const [erroTipo, setErroTipo] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    let valido = true;

    if (!nome.trim()) {
      setErroNome("Preencha o nome do usuário.");
      valido = false;
    } else {
      setErroNome("");
    }

    if (!email.trim()) {
      setErroEmail("Preencha o email.");
      valido = false;
    } else {
      setErroEmail("");
    }

    if (!cpf.trim()) {
      setErroCpf("Preencha o CPF ou CNPJ.");
      valido = false;
    } else {
      setErroCpf("");
    }

    if (!telefone.trim()) {
      setErroTelefone("Preencha o telefone.");
      valido = false;
    } else {
      setErroTelefone("");
    }

    if (!cep.trim()) {
      setErroCep("Preencha o CEP.");
      valido = false;
    } else {
      setErroCep("");
    }

    if (!senha.trim()) {
      setErroSenha("Preencha a senha.");
      valido = false;
    } else {
      setErroSenha("");
    }

    if (!confirmarSenha.trim()) {
      setErroConfirmarSenha("Confirme a sua senha.");
      valido = false;
    } else if (senha !== confirmarSenha) {
      setErroConfirmarSenha("As senhas não coincidem.");
      valido = false;
    } else {
      setErroConfirmarSenha("");
    }

    if (!tipoUsuario) {
      setErroTipo("Selecione o tipo de usuário.");
      valido = false;
    } else {
      setErroTipo("");
    }

    if (!valido) return;

    const cpfNumeros = cpf.replace(/\D/g, "");

    if (
      (tipoUsuario === "doador" && cpfNumeros.length !== 11) ||
      (tipoUsuario === "empresa" && cpfNumeros.length !== 14)
    ) {
      setErroCpf("CPF ou CNPJ inválido para o tipo selecionado.");
      return;
    }

    localStorage.setItem("logado", "true");
    localStorage.setItem("tipoUsuario", tipoUsuario);

    setNome("");
    setEmail("");
    setCpf("");
    setTelefone("");
    setCep("");
    setSenha("");
    setTipoUsuario("");

    navigate("/");
  }

  return (
    <div className={styles.tela_cadastro}>
      <img
        src={fundo_login_cadastro}
        alt="imagem_de_fundo"
        className={styles.background_tela}
      />

      <div className={styles.top_bar_doacao}>
        <nav className={styles.nav_chat}>
          <button
            className={styles.link_chat_voltar}
            onClick={() => navigate(-1)}
          >
            <img className={styles.icon_voltar_chat} src={icon_voltar} alt="" />
            <p className={styles.nav_chat_p}>VOLTAR</p>
          </button>
        </nav>
      </div>

      <form onSubmit={handleSubmit} className={styles.form_cadastro}>
        <img src={Logo} alt="Logo" className={styles.logo} />

        <div className={styles.form_campos}>
          <div className={styles.coluna}>
            <div className={styles.campo}>
              <label className={styles.label_formulario}>Nome do Usuário</label>
              <input
                type="text"
                placeholder="Digite seu nome*"
                className={`${styles.input} ${
                  erroNome ? styles.erro_input : ""
                }`}
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
              {erroNome && <p className={styles.erro}>{erroNome}</p>}
            </div>
            <div className={styles.campo}>
              <label className={styles.label_formulario}>Email</label>
              <input
                type="email"
                placeholder="Digite seu email*"
                className={`${styles.input} ${
                  erroNome ? styles.erro_input : ""
                }`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {erroEmail && <p className={styles.erro}>{erroEmail}</p>}
            </div>
            <div className={styles.campo}>
              <label className={styles.label_formulario}>CEP</label>
              <input
                type="text"
                placeholder="Digite seu CEP"
                className={`${styles.input} ${
                  erroCep ? styles.erro_input : ""
                }`}
                value={cep}
                onChange={(e) => setCep(e.target.value)}
              />
              {erroCep && <p className={styles.erro}>{erroCep}</p>}
            </div>
            <div className={styles.campo}>
              <label className={styles.label_formulario}>Telefone</label>
              <input
                type="text"
                placeholder="Digite seu telefone"
                className={`${styles.input} ${
                  erroTelefone ? styles.erro_input : ""
                }`}
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
              />
              {erroTelefone && <p className={styles.erro}>{erroTelefone}</p>}
            </div>
          </div>

          <div className={styles.coluna}>
            <div className={styles.campo}>
              <label className={styles.label_formulario}>Tipo de usuário</label>
              <select
                className={`${styles.input} ${
                  erroTipo ? styles.erro_input : ""
                }`}
                onChange={(e) => setTipoUsuario(e.target.value)}
              >
                <option value="">Selecione o tipo de usuário</option>
                <option value="doador">Doador</option>
                <option value="empresa">Empresa</option>
              </select>
              {erroTipo && <p className={styles.erro}>{erroTipo}</p>}
            </div>
            <div className={styles.campo}>
              <label className={styles.label_formulario}>CPF/CNPJ</label>
              <input
                type="text"
                placeholder="Digite seu CPF ou CNPJ"
                className={`${styles.input} ${
                  erroCpf ? styles.erro_input : ""
                }`}
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
              {erroCpf && <p className={styles.erro}>{erroCpf}</p>}
            </div>
            <div className={styles.campo}>
              <label className={styles.label_formulario}>Senha</label>
              <input
                type="password"
                placeholder="Digite sua senha*"
                className={`${styles.input} ${
                  erroSenha ? styles.erro_input : ""
                }`}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
              {erroSenha && <p className={styles.erro}>{erroSenha}</p>}
            </div>
            <div className={styles.campo}>
              <label className={styles.label_formulario}>Confirmar senha</label>
              <input
                type="password"
                placeholder="Confirme sua senha*"
                className={`${styles.input} ${
                  erroSenha ? styles.erro_input : ""
                }`}
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
              {erroConfirmarSenha && (
                <p className={styles.erro}>{erroConfirmarSenha}</p>
              )}
            </div>
          </div>
        </div>

        <button type="submit" className={styles.botao_enviar}>
          Cadastrar
        </button>
        <p className={styles.login_p}>
          Já é cadastrado?{" "}
          <Link className={styles.link} to="/login">
            Faça Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default TelaCadastro;
