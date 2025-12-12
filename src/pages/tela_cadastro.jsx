import styles from "../styles/tela_cadastro.module.css";
import Logo from "../assets/imagens/Logo.png";
import fundo_login_cadastro from "../assets/imagens/fundo_login_cadastro.jpg";
import icon_voltar from "../assets/imagens/icon_voltar.png";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import api from "../services/api";

function TelaCadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  const [erroNome, setErroNome] = useState("");
  const [erroEmail, setErroEmail] = useState("");
  const [erroCpf, setErroCpf] = useState("");
  const [erroTelefone, setErroTelefone] = useState("");
  const [erroCep, setErroCep] = useState("");
  const [erroSenha, setErroSenha] = useState("");
  const [erroConfirmarSenha, setErroConfirmarSenha] = useState("");

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email.trim() ||
        !senha.trim() ||
        !nome.trim() ||
        !confirmarSenha.trim() ||
        !cpf.trim() || 
        !telefone.trim() ||
        !cep.trim() ||
        senha !== confirmarSenha) {
      setErroEmail(!email.trim() ? "Por favor, insira o seu email!" : "");
      setErroSenha(!senha.trim() ? "Por favor, insira a sua senha!" : "");
      setErroNome(!nome.trim() ? "Por favor, insira o seu nome!" : "");
      setErroCpf(!cpf.trim() ? "Por favor, insira o seu CPF/CNPJ!" : "");
      setErroTelefone(!telefone.trim() ? "Por favor, insira o seu telefone!" : "");
      setErroCep(!cep.trim() ? "Por favor, insira o seu CEP!" : "");

      if (!confirmarSenha.trim()) {
            setErroConfirmarSenha("Por favor, confirme a sua senha!");
        } else if (senha !== confirmarSenha) {
             setErroConfirmarSenha("As senhas não coincidem!");
        } else {
             setErroConfirmarSenha("");
        }
        return;
    }

    setErroEmail("");
    setErroSenha("");
    setErroNome("");
    setErroCpf("");
    setErroTelefone("");
    setErroCep("");
    setErroConfirmarSenha("");

    const body = {
      email: email,
      password: senha,
      username: nome,
      confirmar_senha: confirmarSenha, 
      profile : {
        cpf_cnpj: cpf,
        telefone: telefone,
        cep: cep,
      }
    };

    try {
      const response = await api.post("registro/", body);
      console.log("Usuário cadastrado com sucesso:", response.data);
      navigate("/login");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const statusResponse = error.response?.status;
        const errorMessage =
        error.response?.data?.erro || "Erro inesperado de servidor.";
        
        setErroSenha(""); 
        
        if (statusResponse === 400) {
          setErroSenha("Dados inválidos ou faltando. Verifique todos os campos!");
        } else if (statusResponse === 409 || statusResponse === 403) { 
          setErroSenha("E-mail ou CPF/CNPJ já cadastrado no sistema.");
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
